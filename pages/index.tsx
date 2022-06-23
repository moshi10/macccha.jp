import { Box, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { client } from "../libs/client";
import { Blog } from "../types/types";

type Props = {
  blog: Blog[]
}

const Home:NextPage<Props> =({ blog }) => {
  return (
    <Box>
      <ul>
        {blog.map((blog) => (
          <Button key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </Button>
        ))}
      </ul>
    </Box>
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

export default Home;
