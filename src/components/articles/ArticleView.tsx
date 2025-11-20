"use client";

import React from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import MouseFollower from "@/components/ui/MouseFollower";

interface ArticleData {
  title: string;
  brief: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage: {
    url: string;
  };
  content: {
    html: string;
  };
  author: {
    name: string;
    profilePicture: string;
  };
  tags: Array<{
    name: string;
    slug: string;
  }>;
}

interface ArticleViewProps {
  article: ArticleData;
}

export default function ArticleView({ article }: ArticleViewProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-[#fac748]/30">
      <MouseFollower />

      <article className="mx-auto max-w-3xl px-6 py-24">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#fac748] transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Articles
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{formatDate(article.publishedAt)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTimeInMinutes} min read</span>
              </div>
            </div>

            {article.brief && (
              <p className="text-xl text-zinc-400 leading-relaxed">
                {article.brief}
              </p>
            )}
          </header>

          {/* Cover Image */}
          {article.coverImage?.url && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12 rounded-lg overflow-hidden"
            >
              <img
                src={article.coverImage.url}
                alt={article.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-zinc-300 prose-p:leading-relaxed
              prose-a:text-[#fac748] prose-a:no-underline hover:prose-a:text-[#fac748]/80
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-[#fac748] prose-code:bg-zinc-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
              prose-img:rounded-lg
              prose-blockquote:border-l-[#fac748] prose-blockquote:text-zinc-400
              prose-ul:text-zinc-300 prose-ol:text-zinc-300
              prose-li:text-zinc-300"
            dangerouslySetInnerHTML={{ __html: article.content.html }}
          />

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-zinc-800"
            >
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag.slug}
                    className="px-3 py-1 text-sm bg-zinc-900 text-zinc-400 rounded-full border border-zinc-800"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Author */}
          {article.author && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-zinc-800"
            >
              <div className="flex items-center gap-4">
                {article.author.profilePicture && (
                  <img
                    src={article.author.profilePicture}
                    alt={article.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                )}
                <div>
                  <p className="text-sm text-zinc-500">Written by</p>
                  <p className="text-zinc-200 font-medium">{article.author.name}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </article>
    </div>
  );
}
