"use client";

import { useState } from "react";
import {
  FaGithub,
  FaStar,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { type Repository } from "@/types/github";
import { RepoModal } from "./RepoModal";

type RepoProps = {
  repo: Repository;
  owner: string;
  languageColor: string;
  currentSiteRepoName: string;
};

export const RepoCard = ({
  repo,
  owner,
  languageColor,
  currentSiteRepoName,
}: RepoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // このリポジトリが現在のサイトか判定
  const isCurrentSite = repo.name === currentSiteRepoName;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={
          "relative flex flex-col h-full backdrop-blur-sm rounded-2xl p-6 shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left w-full group bg-white/50 border-gray-100 hover:bg-white"
        }
        type="button"
        aria-label={`View details for ${repo.name} repository`}
      >
        <div
          className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full ${languageColor}`}
        />

        {/* タイトルエリア */}
        <div className="flex items-center gap-2 text-gray-900 font-semibold text-lg mb-2 pl-3">
          <FaGithub className="text-xl shrink-0" />
          <span className="group-hover:text-blue-600 transition-colors break-words">
            {repo.name}
          </span>
        </div>

        {/* Topics（タグ）エリア */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3 pl-3">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 text-[10px] font-medium bg-blue-50 text-blue-600 rounded-full border border-blue-100"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* 説明文 */}
        <p className="text-gray-600 text-sm mb-6 flex-grow pl-3 line-clamp-3">
          {repo.description || "No description provided."}
        </p>

        {/* フッター情報 */}
        <div className="pl-3 mt-auto space-y-4 w-full">
          <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${languageColor}`} />
                {repo.language}
              </div>
            )}
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" /> {repo.stargazers_count}
            </div>
            <div className="flex items-center gap-1">
              <BiGitRepoForked className="text-gray-400" /> {repo.forks_count}
            </div>
          </div>

          {/* アクションボタンエリア */}
          <div className="flex gap-2">
            <span className="flex-1 py-2 px-3 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg group-hover:bg-gray-200 transition text-center">
              Details
            </span>

            {/* 現在地の場合と、Live Demoの場合で表示を切り替え */}
            {isCurrentSite ? (
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex-1 py-2 px-3 text-xs font-medium bg-teal-100 text-teal-700 border border-teal-200 rounded-lg flex items-center justify-center gap-1.5 shadow-sm cursor-default"
              >
                <FaMapMarkerAlt size={10} />
                You are here
              </div>
            ) : (
              repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 py-2 px-3 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-1.5 shadow-sm z-10"
                >
                  <FaExternalLinkAlt size={10} />
                  Live Demo
                </a>
              )
            )}
          </div>
        </div>
      </button>

      {/* 分離したモーダルコンポーネントを使用 */}
      <RepoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        repo={repo}
        owner={owner}
        isCurrentSite={isCurrentSite}
      />
    </>
  );
};
