import { Center } from "@chakra-ui/react";

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <>
            <Center borderTop="2px" borderColor="red.600" maxW='1200px' w="90%" h="20" >
                <p>&copy; {date.getFullYear()}, Matcha All rights reserved.</p>
            </Center>
        </>
    )
}

export default Footer
