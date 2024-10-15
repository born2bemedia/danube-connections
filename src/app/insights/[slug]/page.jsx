import "@/styles/base.scss";
import "@/styles/insights.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { slug, locale } }) {
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: post.thumbnail,
      poster_desc: post.poster_desc,
      poster_mobile: post.poster_mobile,
      back_desc: post.back_desc,
      back_mobile: post.back_mobile,
    },
  };
}

const BlogSingle = async ({ params: { slug, locale } }) => {
  const post = await getPost(slug, locale);

  // console.log(post);

  return (
    <>
      <section className="article-hero">
        <div className="article-hero__container _container">
          <div className="article-hero__body" style={{ backgroundImage: `url(${post.back_desc})`, }}>
            <h1
              className="article-hero__title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <div className="article-hero__circle">
              <img src="/images/services/circle.svg" alt="circle" />
              <img src="/images/services/arrow.svg" alt="arrow" />
            </div>

            <img src={post.poster_desc} alt="image" className="img-01" />
            <img src={post.poster_mobile} alt="image" className="img-02" />
          </div>
        </div>
      </section>

      <section className="article-main">
        <div className="article-main__container _container">
          <div className="article-main__body">
            <div
              className="article-main__text"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        </div>
      </section>

      <section className="article-last">
        <div className="article-last__container _container">
          <div className="article-last__body">
            <Link href="/insights/" className="article-last__link">Other Insights</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;