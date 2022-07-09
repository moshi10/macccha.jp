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
                    <Center
                        key={blog.id}
                        p={5}
                        border="2px"
                        borderColor="red.600"
                        borderRadius="lg"
                        cursor={"pointer"}
                    >
                        <NextLink href={`/blogs/${blog.id}`}>
                            <Box maxW={'445px'} w={'full'}>

                                <Stack>
                                    <Moment format="YYYY/MM/DD">
                                        {blog.publishedAt}
                                    </Moment>
                                    <Text fontWeight="600" fontSize="xl">
                                        {blog.title}
                                    </Text>
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
