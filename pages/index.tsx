import { Box, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import { client } from "../libs/client";
import { Blog } from "../types/types";
import type { NextPageWithLayout } from './_app'
import ArticleCard from '../components/ArticleCard';

type Props = {
  blogs: Blog[]
}

const Home: NextPageWithLayout<Props> = ({ blogs }) => {
  return (
    <Layout>
      <ArticleCard blogs={blogs} />

    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blogs: data.contents,
    },
  };
};

// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default Home;
