import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { Blog } from "../types/types";

type Props = {
    blogs: Blog[]
}


const ArticleCard: React.FC<Props> = ({ blogs }) => {

    return (
        <>
            <ul>
                {blogs.map((blog) => (
                    <Button key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>
                            <a>{blog.title}</a>
                        </Link>
                    </Button>
                ))}
            </ul>
        </>
    )
}

export default ArticleCard
