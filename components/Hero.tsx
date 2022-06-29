import React, { useCallback } from 'react';
import {
    Center,
    Flex,
    Box,
    Image,
    Heading,
    Stack,
    Text,
    SlideFade,
    IconButton,
    VStack,
    HStack,
    Button,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'



const Hero = () => (
    <Box w="100%" minH="calc(100vh - 64px)" bg="pink">
        <VStack w="100%" h="200" bg="red.600">

            <Center pt="30">
                <Image src="matcha.jpg"
                    boxSize="300px"
                    borderRadius='full'
                    border="8px"
                    borderColor="red.600"
                    alt="Matchaの画像" />
            </Center>
            <VStack h={200} justify='center' pt="30">
                <Heading >
                    ﾏｯﾁｬ
                </Heading>
                <Button>
                    <Icon as={GoMarkGithub} w={6} h={6} />
                </Button>
                <Text>
                    フロントエンドが好きです。
                </Text>


            </VStack>

        </VStack>
    </Box>
);

export default Hero
