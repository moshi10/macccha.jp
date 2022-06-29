import { NextPage } from "next";
import { client } from "../../libs/client";
import { Blog } from "../../types/types";
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { AppContext } from 'next/app'
import { ParsedUrlQuery } from "node:querystring";
import Layout from "../../components/Layout";
import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import Moment from 'react-moment'

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  blogs: Blog
}

const BlogId: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
      <Box flexGrow={1} maxW="md" overflowX="hidden">
        <Heading fontFamily="heading">
          {blogs.title}
        </Heading>
        <Moment format="YYYY/MM/DD">
          {blogs.publishedAt}
        </Moment>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blogs.content}`,
          }}
        />

      </Box>

    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get<MicroCMSListResponse<Blog>>({ endpoint: "blogs" });

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
