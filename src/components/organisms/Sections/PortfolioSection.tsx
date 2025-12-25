import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RepoCard } from "@/components/molecules/RepoCard";
import { getRepos, getLanguageColor } from "@/lib/github";

export const PortfolioSection = async () => {
  const repos = await getRepos();
  const owner = process.env.GITHUB_USERNAME || "";
  const currentSiteRepoName = process.env.GITHUB_CURRENT_REPO_NAME || "";

  return (
    <section id="portfolio" className="py-24 bg-[#faf7f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[#4a3f35] sm:text-4xl relative inline-block">
            Portfolio
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#b17a5c] rounded-full" />
          </h2>
        </div>

        {repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <RepoCard
                key={repo.id}
                repo={repo}
                owner={owner}
                languageColor={getLanguageColor(repo.language)}
                currentSiteRepoName={currentSiteRepoName}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-[#5c534a] py-12">
            No repositories available to display.
          </div>
        )}

        {/* GitHubリンクボタン */}
        <div className="mt-16 text-center">
          <Link
            href={`https://github.com/${owner}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#b17a5c] text-white font-medium hover:bg-[#96634a] transition-all duration-300 shadow-md"
          >
            <FaGithub size={20} />
            View More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};
