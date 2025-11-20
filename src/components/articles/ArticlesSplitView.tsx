"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import MouseFollower from "@/components/ui/MouseFollower";
import ArticlesListPanel from "./ArticlesListPanel";
import ArticleContentPanel from "./ArticleContentPanel";

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

interface ArticlesSplitViewProps {
  articles: any[];
}

export default function ArticlesSplitView({ articles }: ArticlesSplitViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("article");

  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileArticleOpen, setIsMobileArticleOpen] = useState(false);

  useEffect(() => {
    if (selectedSlug) {
      setIsLoading(true);
      setIsMobileArticleOpen(true);

      const gql = async (query: string, variables = {}) => {
        const data = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        });
        return data.json();
      };

      const GET_ARTICLE = `
        query Publication($slug: String!) {
          publication(host: "codelawd.hashnode.dev") {
            post(slug: $slug) {
              title
              brief
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
              content {
                html
              }
              author {
                name
                profilePicture
              }
              tags {
                name
                slug
              }
            }
          }
        }
      `;

      gql(GET_ARTICLE, { slug: selectedSlug })
        .then((result) => {
          if (result.data?.publication?.post) {
            setSelectedArticle(result.data.publication.post);
          }
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      setSelectedArticle(null);
      setIsMobileArticleOpen(false);
    }
  }, [selectedSlug]);

  const handleArticleSelect = (slug: string) => {
    router.push(`/articles?article=${slug}`, { scroll: false });
  };

  const handleCloseArticle = () => {
    router.push("/articles", { scroll: false });
    setIsMobileArticleOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-[#fac748]/30">
      <MouseFollower />

      <div className="mx-auto max-w-7xl">
        {/* Mobile Article Overlay */}
        <AnimatePresence>
          {isMobileArticleOpen && selectedArticle && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 z-50 bg-zinc-950 lg:hidden overflow-y-auto scrollbar-hide"
            >
              <div className="sticky top-0 z-10 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 px-6 py-4">
                <button
                  onClick={handleCloseArticle}
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#fac748] transition-colors group"
                >
                  <X className="w-5 h-5" />
                  Close
                </button>
              </div>
              <ArticleContentPanel article={selectedArticle} isLoading={isLoading} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Split View */}
        <div className="relative lg:h-screen overflow-hidden">
          <div className="lg:flex lg:h-full">
            {/* Left Panel - Articles List */}
            <motion.div
              initial={false}
              animate={{
                width: selectedArticle ? "40%" : "100%",
              }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:border-r lg:border-zinc-800 lg:overflow-y-auto lg:h-full scrollbar-hide"
            >
              <div className="px-6 py-12 lg:py-24 max-w-3xl mx-auto">
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
                  className="text-4xl font-bold text-white tracking-tight mb-12"
                >
                  All Articles
                </motion.h1>

                <ArticlesListPanel
                  articles={articles}
                  selectedSlug={selectedSlug}
                  onArticleSelect={handleArticleSelect}
                />
              </div>
            </motion.div>

            {/* Right Panel - Article Content */}
            <AnimatePresence>
              {selectedArticle && (
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="hidden lg:block lg:w-[60%] lg:overflow-y-auto lg:h-full absolute right-0 top-0 bottom-0 bg-zinc-950 scrollbar-hide"
                >
                  <ArticleContentPanel article={selectedArticle} isLoading={isLoading} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
