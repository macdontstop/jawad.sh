const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USER = 'macdontstop';
const CACHE_REVALIDATE_TIME = 3600;

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  pushed_at: string;
  full_name: string;
  private: boolean;
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  CSS: '#563D7C',
  HTML: '#E34F26',
  Swift: '#F05138',
  Go: '#00ADD8',
  Rust: '#DEA584',
  Shell: '#89E051',
  Vue: '#41B883',
  React: '#61DAFB',
  'C++': '#F34B7D',
  C: '#555555',
  'C#': '#178600',
  Java: '#007396',
};

export function getLanguageColor(language: string | null): string {
  if (!language) return '#6e7681';
  return LANGUAGE_COLORS[language] || '#6e7681';
}

/**
 * @throws {Error} When the API request fails
 * @returns {Promise<GitHubRepo[]>} Filtered list of repositories sorted by latest commit
 */
export async function getGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    const url = new URL(`/users/${GITHUB_USER}/repos`, GITHUB_API_BASE);
    url.searchParams.set('per_page', '100');
    url.searchParams.set('sort', 'pushed');
    url.searchParams.set('direction', 'desc');

    const response = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: {
        revalidate: CACHE_REVALIDATE_TIME,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.private)
      .sort((a, b) => {
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      })
      .slice(0, 4);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch GitHub projects';
    console.error('GitHub API Error:', errorMessage);
    throw new Error(errorMessage);
  }
}
