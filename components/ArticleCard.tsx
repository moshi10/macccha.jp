import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { Blog } from "../types/types";

type Props = {
    blogs: Blog[]
}


const ArticleCard: React.FC<Props> = ({ blogs }) => {


    return (
        <Stack display={"column"} spacing="5">

            {blogs.map((blog) => (
                <Box key={blog.id}>
                    <Button>
                        <Link href={`/blogs/${blog.id}`}>
                            <a>{blog.title}</a>
                        </Link>
                    </Button>
                </Box>
            ))}

        </Stack>
    )
}

export default ArticleCard
