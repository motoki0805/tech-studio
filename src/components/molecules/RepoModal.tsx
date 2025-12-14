"use client";

import { useState, useEffect } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import {
  FaGithub,
  FaTimes,
  FaSpinner,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { fetchReadme } from "@/actions/github";
import { type Repository } from "@/types/github";

type RepoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  repo: Repository;
  owner: string;
  isCurrentSite: boolean;
};

export const RepoModal = ({
  isOpen,
  onClose,
  repo,
  owner,
  isCurrentSite,
}: RepoModalProps) => {
  const [readme, setReadme] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 背景スクロール固定
  useBodyScrollLock(isOpen);

  // モーダルが開いた時にREADMEを取得
  useEffect(() => {
    const loadReadme = async () => {
      if (isOpen && !readme) {
        setIsLoading(true);
        try {
          const content = await fetchReadme(repo.name);
          setReadme(content || "README not found.");
        } catch {
          setReadme("Failed to load README.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadReadme();
  }, [isOpen, readme, repo.name]);

  // マークダウン画像パスの修正ロジック
  const MarkdownComponents: Components = {
    img: (props) => {
      let src = props.src;
      if (typeof src === "string" && !src.startsWith("http")) {
        const cleanSrc = src.replace(/^\.\//, "");
        src = `https://raw.githubusercontent.com/${owner}/${repo.name}/${repo.default_branch}/${cleanSrc}`;
      }
      return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          {...props}
          src={src as string}
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "1rem auto",
          }}
          alt={props.alt || "Repository image"}
        />
      );
    },
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[85vh] rounded-xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="Repository details"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50 shrink-0">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FaGithub /> {repo.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* コンテンツ */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-40 gap-4 text-gray-500">
              <FaSpinner className="animate-spin text-3xl" />
              <p>Loading README...</p>
            </div>
          ) : (
            <article
              className="prose prose-sm sm:prose lg:prose-lg max-w-none prose-img:rounded-lg prose-a:text-blue-600 prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-td:border prose-td:border-gray-300 prose-td:p-2
                [&_:not(pre)>code::before]:content-none
                [&_:not(pre)>code::after]:content-none
                [&_:not(pre)>code]:bg-gray-100
                [&_:not(pre)>code]:text-gray-800
                [&_:not(pre)>code]:px-1.5
                [&_:not(pre)>code]:py-0.5
                [&_:not(pre)>code]:rounded-md
                [&_:not(pre)>code]:font-normal"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={MarkdownComponents}
              >
                {readme}
              </ReactMarkdown>
            </article>
          )}
        </div>

        {/* フッター */}
        <div className="p-4 border-t bg-gray-50 flex justify-end gap-3 shrink-0 flex-wrap">
          {isCurrentSite ? (
            <div className="px-5 py-2.5 bg-teal-100 text-teal-700 border border-teal-200 font-medium rounded-lg flex items-center gap-2 shadow-sm cursor-default">
              <FaMapMarkerAlt size={16} />
              You are here
            </div>
          ) : (
            repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-md"
              >
                <FaExternalLinkAlt size={16} />
                Visit Website
              </a>
            )
          )}

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 transition flex items-center gap-2 shadow-md"
          >
            <FaGithub size={18} />
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};
