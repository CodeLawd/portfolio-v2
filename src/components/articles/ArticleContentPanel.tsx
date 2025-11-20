"use client";

import { useRef, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

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

interface ArticleContentPanelProps {
  article: ArticleData;
  isLoading: boolean;
}

export default function ArticleContentPanel({
  article,
  isLoading,
}: ArticleContentPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Reset scroll position when article changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [article.title]);

  // Transform scroll progress to opacity for fade effect
  const topFadeOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="px-6 py-12 lg:px-12 lg:py-24">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-zinc-900 w-3/4 rounded"></div>
          <div className="h-4 bg-zinc-900 w-1/4 rounded"></div>
          <div className="h-64 bg-zinc-900 rounded"></div>
          <div className="space-y-4">
            <div className="h-4 bg-zinc-900 rounded"></div>
            <div className="h-4 bg-zinc-900 rounded"></div>
            <div className="h-4 bg-zinc-900 w-5/6 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-full overflow-y-auto scrollbar-hide">
      {/* Top fade overlay - appears on scroll */}
      <motion.div
        style={{ opacity: topFadeOpacity }}
        className="pointer-events-none fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent z-10"
      />

      <article className="px-6 py-12 lg:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
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
              <p className="text-lg text-zinc-400 leading-relaxed">
                {article.brief}
              </p>
            )}
          </header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose"
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
                <p className="text-zinc-200 font-medium">
                  {article.author.name}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </article>
    </div>
  );
}
