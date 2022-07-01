import Header from "./Header";
import Footer from "./Footer";
import { VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {

    return (
        <VStack spacing={0} align="center" minH="100vh" m="0 auto">
            <Header />

            <Box maxW="90%" pt={16} overflowX="hidden" minH="calc(100vh - 64px)">
                <Box m="0 auto">{children}</Box>
            </Box>

            <Footer />
        </VStack>
    )
}
