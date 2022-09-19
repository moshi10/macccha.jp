import { VStack } from "@chakra-ui/react";
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
      <VStack spacing={0} align="center" minH="100vh" m="0 auto">
        <Header />
        <VStack w="100%" minH="calc(100vh - 64px)">
          <Hero />
          <Works />
          <About />
        </VStack>
        <Footer />
      </VStack>
    </>

  );
}

export default Home;
