"use client";


import { motion } from "motion/react";


interface ArticlesListPanelProps {
  articles: any[];
  selectedSlug: string | null;
  onArticleSelect: (slug: string) => void;
}

export default function ArticlesListPanel({
  articles,
  selectedSlug,
  onArticleSelect,
}: ArticlesListPanelProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {articles.map((edge, index) => {
        const article = edge.node;
        const isSelected = article.slug === selectedSlug;

        return (
          <motion.button
            key={article.slug}
            onClick={() => onArticleSelect(article.slug)}
            className={`w-full text-left group transition-all ${
              isSelected
                ? "bg-zinc-900/50 border border-[#fac748]/30 rounded-lg p-4"
                : "p-4 rounded-lg hover:bg-zinc-900/30"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <article>
              <time className="text-sm text-zinc-500 font-mono block mb-2">
                {formatDate(article.publishedAt)}
              </time>
              <h2
                className={`text-lg font-medium mb-2 transition-colors ${
                  isSelected
                    ? "text-[#fac748]"
                    : "text-zinc-100 group-hover:text-[#fac748]"
                }`}
              >
                {article.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm line-clamp-2">
                {article.brief}
              </p>
            </article>
          </motion.button>
        );
      })}
    </div>
  );
}
