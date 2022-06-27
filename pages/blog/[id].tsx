import { NextPage } from "next";
import { client } from "../../libs/client";
import { Blog } from "../../types/types";
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { AppContext } from 'next/app'
import { ParsedUrlQuery } from "node:querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  blog: Blog
}

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get<MicroCMSListResponse<Blog>>({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};

export default BlogId;
