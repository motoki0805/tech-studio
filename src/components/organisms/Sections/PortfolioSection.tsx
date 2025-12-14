import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RepoCard } from "@/components/molecules/RepoCard";
import { getRepos, getLanguageColor } from "@/lib/github";

export const PortfolioSection = async () => {
  const repos = await getRepos();
  const owner = process.env.GITHUB_USERNAME || "";

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              owner={owner}
              languageColor={getLanguageColor(repo.language)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`https://github.com/${owner}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-md"
          >
            <FaGithub size={20} />
            View More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};
