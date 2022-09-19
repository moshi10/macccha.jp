import {
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Container,
    useBreakpointValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from "next/link"

const SwitchMobile: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Stack direction={'row'} spacing={3}>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Stack>
    )
}

const Header: React.FC = () => {
    return (
        <>
            <Center w='100%' h="20" bg={useColorModeValue('gray.100', 'gray.900')}>
                <Container maxW="4xl" px={4} >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'} border={''}>
                        <NextLink href="/" passHref>
                            <Button as="a">Matchaのサイト</Button>
                        </NextLink>

                        <Stack direction={'row'} spacing={7}>
                            <SwitchMobile />
                        </Stack>
                    </Flex>
                </Container>
            </Center>
        </>
    )
}

export default Header
