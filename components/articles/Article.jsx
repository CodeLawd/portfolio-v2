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
      const data = await fetch("https://api.hashnode.com/", {
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
          query GetUserArticles($page: Int!) {
              user(username: "codelawd") {
                  name
                  publication {
                      posts(page: $page) {
                          title
                          brief
                          slug
                          dateAdded
                      }
                  }
              }
          }
      `;

    gql(GET_USER_ARTICLES, { page: 0 }).then((result) => {
      if (cancel) return;
      setArticles(result.data.user.publication.posts);
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
      <div className="mt-10 text-center">
        {articles?.slice(0, more).map(({ brief, coverImage, dateAdded, slug, title }, idx) => (
          <motion.div whileInView={{ y: [20, 0] }} transition={{ duration: 0.5 }} key={idx} className="mb-14 text-left">
            <span className="text-xs text-secondary">{formatDate(dateAdded)}</span>
            <a
              href={`https://codelawd.hashnode.dev/${slug}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray text-2xl font-bold mt-2 hover:text-secondary cursor-pointer block"
            >
              {title}
            </a>
            <p className="mt-4 leading-6 text-gray max-w-2xl">{brief.slice(0, 150)}...</p>
          </motion.div>
        ))}
        <button
          className="border rounded-md border-secondary text-sm py-3 px-6 mx-auto text-center text-gray hover:bg-secondary hover:bg-opacity-10"
          onClick={() => (more >= articles.length ? setMore(more - 2) : setMore(more + 2))}
        >
          {more >= articles.length ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Article;
