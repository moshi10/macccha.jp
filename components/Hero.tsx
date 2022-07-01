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
        <Box w="100%" minH="calc(100vh - 80px)" >
            <VStack w="100%" h="200" bg="red.600">
                <VStack w="100%">

                    <Center pt="35">
                        <Image src="matcha.jpg"
                            h={['8em', '16em', '20em', '25em']}
                            borderRadius='full'
                            border="8px"
                            borderColor="red.600"
                            alt="Matchaの画像" />
                    </Center>
                    <VStack justify='center' pt="5">
                        <Heading >
                            ﾏｯﾁｬ
                        </Heading>
                        <Icon
                            as={GoMarkGithub}
                            w={6}
                            h={6}
                            cursor="pointer"
                        />
                        <Text>
                            「環境構築から運用まで」
                        </Text>
                    </VStack>
                </VStack>


                <VStack h={16} pt="calc(25vh - 10vh)" >
                    <Text>Read more!</Text>
                    <Box>
                        <FaArrowCircleDown
                            fontSize="2em"
                            onClick={scrollToBottom}
                            cursor="pointer"
                        />
                    </Box>

                </VStack>
            </VStack>
        </Box>

    );
}

export default Hero
