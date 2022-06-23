import { Box, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import { client } from "../libs/client";
import { Blog } from "../types/types";
import type { NextPageWithLayout } from './_app'

type Props = {
  blog: Blog[]
}

const Home: NextPageWithLayout<Props> = ({ blog }) => {
  return (
    <Layout>
      <ul>
        {blog.map((blog) => (
          <Button key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </Button>
        ))}
      </ul>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
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
