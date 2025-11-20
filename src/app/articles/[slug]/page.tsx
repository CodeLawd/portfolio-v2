import React from "react";
import ArticleView from "@/components/articles/ArticleView";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MouseFollower from "@/components/ui/MouseFollower";



async function getArticle(slug: string) {
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

  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_ARTICLE,
        variables: { slug },
      }),
      next: { revalidate: 3600 }
    });

    const json = await res.json();
    return json.data?.publication?.post;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-zinc-950 selection:bg-[#fac748]/30">
        <MouseFollower />
        <div className="mx-auto max-w-3xl px-6 py-24">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#fac748] transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>
          <h1 className="text-2xl text-zinc-400">Article not found</h1>
        </div>
      </div>
    );
  }

  return <ArticleView article={article} />;
}
