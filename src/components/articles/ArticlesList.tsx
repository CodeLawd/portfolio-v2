"use client";

import React from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import MouseFollower from "@/components/ui/MouseFollower";

interface Article {
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  coverImage: {
    url: string;
  };
}

interface ArticlesListProps {
  articles: any[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-[#fac748]/30">
      <MouseFollower />
      
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#fac748] transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white tracking-tight mb-16"
        >
          All Articles
        </motion.h1>

        <div className="space-y-12">
          {articles.map((edge, index) => {
            const article = edge.node;
            return (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block"
              >
                <motion.article
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-3">
                    <time className="text-sm text-zinc-500 font-mono shrink-0">
                      {formatDate(article.publishedAt)}
                    </time>
                    <h2 className="text-xl font-medium text-zinc-100 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      {article.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </h2>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-base md:pl-[calc(8rem+0.5rem)]">
                    {article.brief}
                  </p>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
