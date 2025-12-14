import { Repository } from "@/types/github";

// 言語ごとの色定義
export const getLanguageColor = (language: string | null): string => {
  switch (language) {
    case "TypeScript":
      return "bg-blue-500";
    case "JavaScript":
      return "bg-yellow-400";
    case "HTML":
      return "bg-orange-600";
    case "CSS":
      return "bg-blue-600";
    case "PHP":
      return "bg-indigo-600";
    case "Vue":
      return "bg-green-500";
    case "Python":
      return "bg-yellow-600";
    default:
      return "bg-gray-400";
  }
};

// リポジトリ一覧取得ロジック
export async function getRepos(): Promise<Repository[]> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  // 表示から除外したいリポジトリ名
  const ignoreList = process.env.GITHUB_IGNORE_REPOS
    ? process.env.GITHUB_IGNORE_REPOS.split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  if (!username || !token) {
    console.warn("GitHub credentials are not set.");
    return [];
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error(`GitHub API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const repos: Repository[] = await res.json();

    const filteredRepos = repos.filter((repo) => {
      // アーカイブ済み、または除外リストに含まれるものは表示しない
      if (repo.archived) return false;
      if (ignoreList.includes(repo.name)) return false;
      return true;
    });

    // 最新の6件を返す
    return filteredRepos.slice(0, 6);
  } catch (error) {
    console.error("Failed to fetch repos:", error);
    return [];
  }
}
