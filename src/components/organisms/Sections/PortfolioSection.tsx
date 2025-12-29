import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RepoCard } from "@/components/molecules/RepoCard";
import { getRepos, getLanguageColor } from "@/lib/github";
import { SectionContainer } from "@/components/atoms/SectionContainer";

export const PortfolioSection = async () => {
  const repos = await getRepos();
  const owner = process.env.GITHUB_USERNAME || "";
  const currentSiteRepoName = process.env.GITHUB_CURRENT_REPO_NAME || "";

  return (
    <SectionContainer id="portfolio" title="Portfolio">
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
    </SectionContainer>
  );
};
