import Header from "./Header";
import Footer from "./Footer";
import { VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Head from 'next/head'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {

    return (
        <>
            <Head>
                <title>ﾏｯﾁｬのポートフォリオ</title>
                <meta name="description" content="ﾏｯﾁｬのポートフォリオサイトです。" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <VStack spacing={0} align="center" minH="100vh" m="0 auto">
                <Header />

                <Box maxW="4xl" pt={16} overflowX="hidden" minH="calc(100vh - 64px)">
                    <Box m="0 auto">{children}</Box>
                </Box>

                <Footer />
            </VStack>
        </>
    )
}
