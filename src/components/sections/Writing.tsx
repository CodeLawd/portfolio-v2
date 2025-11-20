"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Article {
  title: string;
  brief: string;
  url: string;
  slug: string;
  publishedAt: string;
  coverImage: {
    url: string;
  };
}

export default function Writing() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    let cancel = false;
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

    const GET_USER_ARTICLES = `
          query Publication {
            publication(host: "codelawd.hashnode.dev") {
              isTeam
              title
              posts(first: 10) {
                edges {
                  node {
                    title
                    brief
                    slug
                    url
                    publishedAt
                    coverImage {
                      url
                    }
                  }
                }
              }
            }
          }
      `;

    gql(GET_USER_ARTICLES, { page: 0 }).then((result) => {
      if (cancel) return;
      if (result.data?.publication?.posts?.edges) {
        setArticles(result.data.publication.posts.edges);
      }
    });

    return () => {
      cancel = true;
    };
  }, []);

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="mb-24">
      <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-widest mb-8">
        Writing
      </h3>
      <div className="space-y-8">
        {articles.slice(0, 4).map((edge) => {
          const article = edge.node;
          return (
            <Link
              key={article.slug}
              href={`/articles?article=${article.slug}`}
              className="block group"
            >
              <div className="grid md:grid-cols-[120px_1fr] gap-4 items-baseline">
                <div className="text-sm text-zinc-500 font-mono">
                  {formatDate(article.publishedAt)}
                </div>
                <div className="flex-1 group">
                  <h4 className="text-zinc-100 font-medium text-lg mb-2 group-hover:text-[#fac748] transition-colors flex items-center gap-2">
                    {article.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h4>
                  <p className="text-zinc-400 leading-relaxed text-sm line-clamp-2">
                    {article.brief}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {articles.length > 4 && (
        <div className="mt-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#fac748] transition-colors text-sm font-medium group"
          >
            Show All Articles
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      )}
    </section>
  );
}
