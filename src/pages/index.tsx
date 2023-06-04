import { Box, Button, Card, CardBody, CardFooter, Heading, Stack, VStack, Text, Image, Center, CardHeader, StackDivider, Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from 'next/head'
import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Works from "../components/Works";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ﾏｯﾁｬのポートフォリオ</title>
        <meta name="description" content="ﾏｯﾁｬのポートフォリオサイトです。" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        bg="red.50"
        h="100vh"
      >


        <VStack minW={"md"} p="40px 0 0">
          <Center>
            <Image
              src="matcha.jpg"
              h="75px"
              borderRadius='full'
              alt="Matchaの画像" />
          </Center>
          <Heading size='xl'>
            <Box as="span" textDecoration="underline" textDecorationColor="red.300" textDecorationThickness="10%">
              macccha
            </Box>.jp</Heading>


          <Container maxW='container.sm' pt={10}>
            <Box>
              <Heading size='md' textTransform='uppercase'>
                業務経歴
              </Heading>
              <Text pt='2' fontSize='sm'>

              </Text>
            </Box>
            <Box>
              <Heading size='md' textTransform='uppercase'>
                個人製作
              </Heading>
              <Text pt='2' fontSize='sm'>

              </Text>
            </Box>
            <Box>
              <Heading size='md' textTransform='uppercase'>
                お問い合せ
              </Heading>
              <Text pt='2' fontSize='sm'>

              </Text>
            </Box>
          </Container>

        </VStack>

      </Box>
      {/* <VStack spacing={0} align="center" minH="100vh" m="0 auto">
        <Header />
        <VStack w="100%" minH="calc(100vh - 64px)">
          <Hero />
          <Works />
          <About />
        </VStack>
        <Footer />
      </VStack> */}
    </>

  );
}

export default Home;
