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

            <Box flexGrow={1} maxW="2xl" pt={16} overflowX="hidden">
                <Box m="0 auto">{children}</Box>
            </Box>

            <Footer />
        </VStack>
    )
}
