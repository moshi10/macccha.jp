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
                </VStack>
            </Center>




        </>
    )
}

export default About
