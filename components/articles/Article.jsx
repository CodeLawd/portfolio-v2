"use client";

import { useState, useEffect } from "react";
import { SectionTitle } from "..";
import { motion } from "framer-motion";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [more, setMore] = useState(2);

  const formatDate = (dte) => {
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let theDay = new Date(dte);
    return theDay.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    let cancel = false;
    const gql = async (query, variables = {}) => {
      const data = await fetch("https://gql.hashnode.com/", {
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
      setArticles(result.data.publication.posts.edges);
    });

    return () => {
      cancel = true;
    };
  }, []);

  return (
    <div
      className="px-6 md:px-12 pb-10 md:max-w-[80%] mx-auto pt-20 flex flex-col items-center justify-center w-full"
      id="blog"
    >
      <SectionTitle id="03" title="I do a little bit of writing" />

      {articles?.length ? (
        <div className="mt-10 text-center">
          {articles
            ?.slice(0, more)
            .map(
              (
                { node: { brief, coverImage, publishedAt, title, url } },
                idx
              ) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 cursor-pointer group"
                  key={idx}
                >
                  <div className="flex items-center justify-center gap-10">
                    <motion.div
                      whileInView={{ y: [20, 0] }}
                      transition={{ duration: 0.5 }}
                      className="text-left mb-14"
                    >
                      <span className="text-xs text-secondary">
                        {formatDate(publishedAt)}
                      </span>
                      <span className="block mt-2 text-2xl font-bold cursor-pointer text-gray group-hover:text-secondary">
                        {title}
                      </span>
                      <p className="max-w-2xl mt-4 leading-6 text-gray group-hover:text-secondary">
                        {brief.slice(0, 150)}...
                      </p>
                    </motion.div>

                    <img
                      src={coverImage.url}
                      alt="cover image"
                      className="hidden object-cover h-32 w-60 md:block"
                    />
                  </div>
                </a>
              )
            )}
          <button
            className="px-6 py-3 mx-auto text-sm text-center border rounded-md border-secondary text-gray hover:bg-secondary hover:bg-opacity-10"
            onClick={() =>
              more >= articles.length ? setMore(more - 2) : setMore(more + 2)
            }
          >
            {more >= articles.length ? "Show Less" : "Show More"}
          </button>
        </div>
      ) : (
        <div className="my-20">
          <h1 className="italic text-gray">No articles at this time</h1>
        </div>
      )}
    </div>
  );
};

export default Article;
