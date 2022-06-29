import { Box, Button, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Layout from "../components/Layout";

import { Blog } from "../types/types";
// Layoutのメリットがまだわからないので一旦コメントアウト
// import type { NextPageWithLayout } from './_app'

import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  blogs: Blog[]
}

// const Home: NextPageWithLayout<Props> = ({ blogs }) => {
const Home: NextPage<Props> = ({ blogs }) => {

  return (
    <>
      <VStack spacing={0} align="center" minH="100vh" m="0 auto">
        <Header />

        <VStack w="100%" minH="calc(100vh - 64px)">
          <Hero />
        </VStack>

        <Footer />
      </VStack>
    </>

  );
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default Home;
