"use server";

export async function fetchReadme(repoName: string): Promise<string> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    console.error("GitHub credentials are missing on server.");
    return "";
  }
  // リポジトリ名の形式をチェック
  // 英数字、ハイフン、アンダースコア、ピリオドのみ許可
  const repoNamePattern = /^[a-zA-Z0-9_.-]+$/;
  if (!repoName || !repoNamePattern.test(repoName)) {
    console.warn(`Invalid repository name format provided: ${repoName}`);
    return "";
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/readme`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3.raw",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.warn(`Failed to fetch README for ${repoName}: ${res.status}`);
      return "";
    }

    return await res.text();
  } catch (error) {
    console.error("Failed to fetch readme:", error);
    return "";
  }
}
