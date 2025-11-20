import React, { Suspense } from "react";
import ArticlesSplitView from "@/components/articles/ArticlesSplitView";

async function getArticles() {
  const GET_USER_ARTICLES = `
        query Publication {
          publication(host: "codelawd.hashnode.dev") {
            isTeam
            title
            posts(first: 20) {
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

  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_USER_ARTICLES,
        variables: { page: 0 },
      }),
      next: { revalidate: 3600 } // Revalidate every hour
    });

    const json = await res.json();
    return json.data?.publication?.posts?.edges || [];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticlesSplitView articles={articles} />
    </Suspense>
  );
}
