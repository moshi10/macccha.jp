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
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from "next/link"

const SwitchMobile: React.FC = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false })
    const { colorMode, toggleColorMode } = useColorMode();

    if (isMobile) {
        return (
            <Menu>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}>
                    <ChevronDownIcon />
                </MenuButton>

                <MenuList alignItems={'center'}>

                    <NextLink href="/blogs" passHref>
                        <MenuItem>
                            <Box as="a">Blogs</Box>
                        </MenuItem>
                    </NextLink>

                    {/* <NextLink href="/" passHref>
                        <MenuItem>
                            <Box as="a">mada</Box>
                        </MenuItem>
                    </NextLink> */}

                </MenuList>
            </Menu>

        )
    }
    return (
        <Stack direction={'row'} spacing={3}>
            <NextLink href="/blogs" passHref>
                <Button as="a">Blogs</Button>
            </NextLink>
            {/* <NextLink href="/" passHref>
                <Button as="a">mada</Button>
            </NextLink> */}
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
                            <Button as="a">Matcha????????????</Button>
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
