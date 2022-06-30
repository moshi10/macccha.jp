import { Box, Button, Center, Container, Heading, HStack, VStack, Stack, Text, SimpleGrid } from "@chakra-ui/react";

const About: React.FC = () => {

    return (
        <>
            <Center w="100%">
                <VStack w="100%" minH="calc(100vh - 64px)">

                    <Container border="1px" pt="20">
                        <Heading>About Me</Heading>
                        <Text pt="5">高校卒業後、フリーターをしながら独学でプログラミングを学びました。環境構築からデプロイまで走り切ることを目標に日々努力しています。</Text>
                    </Container>

                    <SimpleGrid columns={[1, 1, 2, 3]} gap={12}>

                    </SimpleGrid>






                </VStack>
            </Center>




        </>
    )
}

export default About
