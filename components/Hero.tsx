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
import { FaArrowCircleDown } from 'react-icons/fa';
import Works from './Works';

const Hero = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };


    return (
        <Box w="100%" minH="calc(100vh - 64px)">
            <VStack w="100%" h="200" bg="red.600">

                <Center pt="30">
                    <Image src="matcha.jpg"
                        h={['8em', '16em', '20em', '25em']}
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
                <Center h={16} pt={16}>

                    <Box>
                        <FaArrowCircleDown
                            fontSize="2em"
                            onClick={scrollToBottom}
                            cursor="pointer"

                        />
                    </Box>


                </Center>



            </VStack>

        </Box>
    );
}

export default Hero
