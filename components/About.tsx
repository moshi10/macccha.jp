import { Box, Button, Center, UnorderedList, ListItem, Container, Heading, HStack, VStack, Stack, Text, SimpleGrid, Image, Icon, Flex } from "@chakra-ui/react";
import NextLink from "next/link"
import { ReactNode } from "react";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Twemoji from 'react-twemoji';


interface AboutCardProps {
    title: string;
    text: string;
    icon: ReactNode;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, text, icon }) => {
    return (
        <VStack
            maxW="300px"
            border="2px"
            borderColor={"red.600"}
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            _hover={{ boxShadow: "md" }}
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
    )
}

const About: React.FC = () => {
    return (
        <VStack py="20" maxW="1200px" >
            <VStack>
                <Heading>About Me</Heading>
                <Text pt="5">高校卒業後、フリーターをしながら独学でプログラミングを学びました。環境構築からデプロイまで走り切ることを目標に日々努力しています。</Text>
            </VStack>
            <VStack>
                <Heading pt="5">Skill set</Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} pt="10">
                    <AboutCard
                        title="マークアップ言語"
                        text="HTML,CSS(SCSS)"
                        icon=""
                    />
                    <AboutCard
                        title="フロントエンド"
                        text="JavaScript,TypeScript,React.js,Next.js,Gatsby.js,MUI,Chakra UI,CSS-Modules"
                        icon=""
                    />
                    <AboutCard
                        title="バックエンド"
                        text="Ruby,Ruby on Rails"
                        icon=""
                    />
                    <AboutCard
                        title="開発環境"
                        text="WSL2(Ubuntu20.04),Git,VSCode,Node.js,Docker,Prettier,ESLint"
                        icon=""
                    />
                    <AboutCard
                        title="インフラ"
                        text="Vercel,Netlify,Heroku"
                        icon=""
                    />
                    <AboutCard
                        title="その他"
                        text="GraphQL"
                        icon=""
                    />


                </SimpleGrid>
            </VStack>
        </VStack>
    )
}




export default About
