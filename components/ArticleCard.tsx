import { Box, Button, Heading, HStack, Stack, Text, VStack, Image } from "@chakra-ui/react";
import { Blog } from "../types/types";
import Moment from "react-moment"
import NextLink from "next/link"

type Props = {
    blogs: Blog[]
}


const ArticleCard: React.FC<Props> = ({ blogs }) => {


    return (
        <Stack display={"column"} spacing="5">

            {blogs.map((blog) => (
                <Box key={blog.id} border="2px" borderRadius="md">
                    <NextLink href={`/blogs/${blog.id}`}>
                        <Box as="a">
                            <HStack>
                                <Image
                                    src={blog.eyecatch?.url}
                                    borderRadius="lg"
                                    h="126"
                                    w="240" />
                                <Box border="1px">
                                    <Text>{blog.title}</Text>
                                    <Moment format="YYYY/MM/DD">
                                        {blog.publishedAt}
                                    </Moment>
                                </Box>

                            </HStack>

                        </Box>
                    </NextLink>
                </Box>
            ))
            }

        </Stack >
    )
}

export default ArticleCard
