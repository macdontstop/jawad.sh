const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USER = 'macdontstop';
const CACHE_REVALIDATE_TIME = 3600;

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  full_name: string;
}

/**
 * @throws {Error} When the API request fails
 * @returns {Promise<GitHubRepo[]>} Filtered list of repositories
 */
export async function getGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    const url = new URL(`/users/${GITHUB_USER}/repos`, GITHUB_API_BASE);
    url.searchParams.set('per_page', '100');

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

    return repos.filter((repo): repo is GitHubRepo => {
      return Array.isArray(repo.topics) && repo.topics.includes('sideproject');
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch GitHub projects';

    console.error('GitHub API Error:', errorMessage);
    throw new Error(errorMessage);
  }
}
