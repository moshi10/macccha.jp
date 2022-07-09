import { Box, Button, Center, Container, Heading, HStack, VStack, Stack, Text, SimpleGrid, Image, Icon, Flex } from "@chakra-ui/react";
import NextLink from "next/link"
import { ReactNode } from "react";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Twemoji from 'react-twemoji';

const About: React.FC = () => {

    return (

        <VStack w="100%" minH="calc(100vh - 64px)" px="5" py="20" maxW="4xl">
            <Stack py="20">
                <Heading>About Me</Heading>
                <Text pt="5">高校卒業後、フリーターをしながら独学でプログラミングを学びました。環境構築からデプロイまで走り切ることを目標に日々努力しています。</Text>
            </Stack>
            <Stack py="20">
                <Heading>Works</Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} pt="10">

                    <Works
                        icon={<Image alt="🍒" src="https://twemoji.maxcdn.com/2/svg/1f352.svg" w={10} h={10} />}
                        title={'旧ブログ'}
                        text={
                            'ﾏｯﾁｬが初めて作ったwebサイトです。'
                        }
                        url="https://matcha-blog.netlify.app/"
                    />
                    <Works
                        icon={<Image alt="📝" src="https://twemoji.maxcdn.com/2/svg/1f4dd.svg" w={10} h={10} />}
                        title={'Vue製todoアプリ'}
                        text={
                            'vueの勉強会に参加した時に作ったtodoアプリです。'
                        }
                        url="https://matcha-vue-todo-app.vercel.app/"
                    />
                    <Works
                        icon={<Image alt="✍" src="https://twemoji.maxcdn.com/2/svg/270d.svg" w={10} h={10} />}
                        title={'当サイト'}
                        text={
                            'このサイトについてです。'
                        }
                        url="https://macccha.jp/blogs/3dte6dtuy5r"
                    />
                </SimpleGrid>
            </Stack>

        </VStack>
    )
}



interface WorksProps {
    title: string;
    text: string;
    icon: ReactNode;
    url: string;
}

const Works = ({ title, text, icon, url }: WorksProps) => {
    return (
        <NextLink href={url} >
            <VStack
                border="2px"
                borderColor={"red.600"}
                borderRadius="lg"
                overflow="hidden"
                cursor="pointer"
            >
                <Center
                    border="2px"
                    borderColor={"red.600"}
                    bg="red.600"
                    borderWidth="thin"
                    borderTopRadius="md"
                    w="100%"
                    overflow="hidden"
                    p="5"
                >
                    <Center
                        w={20}
                        h={20}
                        color={'white'}
                        rounded={'full'}
                        bg={'gray.100'}
                        mb={1}
                    >
                        {icon}
                    </Center>
                </Center>
                <VStack py="5" px="10">
                    <Text fontWeight={600}>{title}</Text>
                    <Text >{text}</Text>
                </VStack>

            </VStack>
        </NextLink>
    );
};

export default About
