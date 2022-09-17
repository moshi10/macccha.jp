import { Text } from "@chakra-ui/react"
import { NextPage } from "next"
import ArticleCard from "../components/ArticleCard"
import Layout from "../components/Layout"
import { client } from "../libs/client"
import { Blog } from "../types/types"

type Props = {
    blogs: Blog[]
}


const Blogs: NextPage<Props> = ({ blogs }) => {

    return (
        <Layout>
            <ArticleCard blogs={blogs} />


        </Layout>
    )
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

export default Blogs
