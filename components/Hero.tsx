import React, { useCallback } from 'react';
import NextLink from "next/link"
import {
    Center,
    Box,
    Image,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa';

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
                        <Image
                            src="matcha.jpg"
                            h={'16em'}
                            borderRadius='full'
                            border="8px"
                            borderColor="red.600"
                            alt="Matchaの画像" />
                    </Center>
                    <VStack justify='center' pt="6">
                    </VStack>
                    <Heading >
                        ﾏｯﾁｬ
                    </Heading>
                    <NextLink href="https://github.com/moshi10" passHref target="_blank" >
                        <Icon
                            _hover={{ boxShadow: "md" }}
                            borderRadius="full"
                            as={GoMarkGithub}
                            w={6}
                            h={6}
                            cursor="pointer"
                        />
                    </NextLink>
                    <Text>
                        「環境構築から運用まで」
                    </Text>
                </VStack>
                <VStack h={16} pt="calc(25vh - 10vh)" >
                    <Text>Read more!</Text>
                    <Box _hover={{ boxShadow: "md" }} borderRadius="full">
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
