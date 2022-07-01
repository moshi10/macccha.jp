import { Box, Center, Button, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";


const WorkCard: React.FC = () => {

    return (
        <>
            <VStack >
                <Center py={6} border="1px">
                    <Box maxW={'445px'} w={'full'}>
                        <Box h={'210px'} bg={'gray.100'}>
                            {/* <Image
                                        src="matcha.jpg"
                                    /> */}
                        </Box>
                        <Stack>
                            <Text color={'green.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
                                Blog
                            </Text>
                            <Heading>
                                Boost your conversion rate
                            </Heading>
                            <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text>
                        </Stack>
                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Achim Rolle</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
                <Center py={6} border="1px">
                    <Box maxW={'445px'} w={'full'}>
                        <Box h={'210px'} bg={'gray.100'}>
                            {/* <Image
                                        src="matcha.jpg"
                                    /> */}
                        </Box>
                        <Stack>
                            <Text color={'green.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
                                Blog
                            </Text>
                            <Heading>
                                Boost your conversion rate
                            </Heading>
                            <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text>
                        </Stack>
                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Achim Rolle</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
                <Center py={6} border="1px">
                    <Box maxW={'445px'} w={'full'}>
                        <Box h={'210px'} bg={'gray.100'}>
                            {/* <Image
                                        src="matcha.jpg"
                                    /> */}
                        </Box>
                        <Stack>
                            <Text color={'green.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
                                Blog
                            </Text>
                            <Heading>
                                Boost your conversion rate
                            </Heading>
                            <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text>
                        </Stack>
                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Achim Rolle</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
            </VStack>

        </>
    )
}

export default WorkCard
