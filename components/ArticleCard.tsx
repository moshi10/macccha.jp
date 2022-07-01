import { Box, Button, Heading, HStack, Stack, Text, VStack, Image, Center } from "@chakra-ui/react";
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

                <Box>
                    <Center key={blog.id} py={6} border="1px">
                        <NextLink href={`/blogs/${blog.id}`}>
                            <Box maxW={'445px'} w={'full'}>
                                <Box h={'210px'} bg={'gray.100'}>
                                    <Image
                                        src={blog.eyecatch?.url}
                                        objectFit="fill"
                                        borderRadius="lg"
                                        h="126"
                                        w="240" />
                                </Box>
                                <Stack>
                                    <Moment format="YYYY/MM/DD">
                                        {blog.publishedAt}
                                    </Moment>
                                    <Heading>
                                        {blog.title}
                                    </Heading>
                                </Stack>
                            </Box>
                        </NextLink>

                    </Center>

                </Box>
            ))
            }

        </Stack >
    )
}

export default ArticleCard
