import { Box, Center } from "@chakra-ui/react";
import { NextPage } from "next";

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <>
            <Center borderTop="1px" w='70%' h="20" >
                <p>&copy; {date.getFullYear()}, Matcha All rights reserved.</p>
            </Center>
        </>
    )
}

export default Footer
