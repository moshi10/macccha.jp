import { Box, Button, Center, Container, Heading, HStack, VStack, Stack, Text, SimpleGrid, Image, Icon, Flex } from "@chakra-ui/react";
import NextLink from "next/link"
import { ReactNode } from "react";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const About: React.FC = () => {

    return (
        <>
            <Center w="100%">
                <VStack w="100%" minH="calc(100vh - 64px)">

                    <Container pt="20">
                        <Heading>About Me</Heading>
                        <Text pt="5">高校卒業後、フリーターをしながら独学でプログラミングを学びました。環境構築からデプロイまで走り切ることを目標に日々努力しています。</Text>
                    </Container>
                    <Box px="5" py="20" maxW="4xl" >
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                            <Production
                                icon={<Icon as={FcAssistant} w={10} h={10} />}
                                title={'旧ブログ'}
                                text={
                                    'ﾏｯﾁｬが初めて作ったwebサイトです。'
                                }
                                url="https://matcha-blog.netlify.app/"
                            />
                            <Production
                                icon={<Icon as={FcDonate} w={10} h={10} />}
                                title={'Vue製todoアプリ'}
                                text={
                                    'vueの勉強会に参加した時に作ったtodoアプリです。'
                                }
                                url="https://matcha-vue-todo-app.vercel.app/"
                            />
                            <Production
                                icon={<Icon as={FcInTransit} w={10} h={10} />}
                                title={'当サイト'}
                                text={
                                    'このサイトについてです。'
                                }
                                url="https://macccha.jp/blogs/3dte6dtuy5r"
                            />
                        </SimpleGrid>
                    </Box>

                </VStack>
            </Center>






        </>
    )
}

interface ProductionProps {
    title: string;
    text: string;
    icon: ReactNode;
    url: string;
}

const Production = ({ title, text, icon, url }: ProductionProps) => {
    return (
        <NextLink href={url}>
            <Stack>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={'gray.100'}
                    mb={1}
                    cursor="pointer"
                >
                    {icon}
                </Flex>
                <Text fontWeight={600}>{title}</Text>
                <Text color={'gray.600'}>{text}</Text>
            </Stack>
        </NextLink>
    );
};

export default About
