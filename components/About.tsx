import { Box, Button, Center, Container, Heading, HStack, VStack, Stack, Text, SimpleGrid, Image } from "@chakra-ui/react";
import NextLink from "next/link"

const About: React.FC = () => {

    return (
        <>
            <Center w="100%">
                <VStack w="100%" minH="calc(100vh - 64px)">

                    <Container pt="20">
                        <Heading>About Me</Heading>
                        <Text pt="5">高校卒業後、フリーターをしながら独学でプログラミングを学びました。環境構築からデプロイまで走り切ることを目標に日々努力しています。</Text>
                        <Text>以下のリンクは私が制作したものたちです。</Text>
                    </Container>

                    <SimpleGrid columns={[1, 1, 2, 3]} gap={12} pt="20">
                        <NextLink href="/blogs/vtofpc_9_ly" passHref>
                            <Center py={6} border="1px" cursor="pointer">
                                <Box w={'full'}>
                                    <Box bg={'gray.100'}>
                                        {/* <Image
                                        src="matcha.jpg"
                                    /> */}
                                    </Box>
                                    <Stack>
                                        <Text>
                                            旧ブログ
                                        </Text>
                                    </Stack>
                                </Box>
                            </Center>
                        </NextLink>
                        <NextLink href="/blogs/aplet3d7d" passHref>
                            <Center py={6} border="1px" cursor="pointer">
                                <Box w={'full'}>
                                    <Box bg={'gray.100'}>
                                        {/* <Image
                                        src="matcha.jpg"
                                    /> */}
                                    </Box>
                                    <Stack>
                                        <Text>
                                            ToDoアプリ
                                        </Text>
                                    </Stack>
                                </Box>
                            </Center>
                        </NextLink>
                        <NextLink href="blogs/3_2-ah8y4_y" passHref>
                            <Center py={6} border="1px" cursor="pointer">
                                <Box w={'full'}>
                                    <Box bg={'gray.100'}>
                                        {/* <Image
                                        src="matcha.jpg"
                                    /> */}
                                    </Box>
                                    <Stack>
                                        <Text>
                                            当サイト
                                        </Text>
                                    </Stack>
                                </Box>
                            </Center>
                        </NextLink>





                    </SimpleGrid>






                </VStack>
            </Center>




        </>
    )
}

export default About
