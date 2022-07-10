import { Box, Center, UnorderedList, ListItem, Heading, VStack, Text, SimpleGrid, CircularProgress } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AboutCardProps {
    title: string;
    textList: string[];
    icon: ReactNode;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, textList, icon }) => {
    return (
        <VStack
            maxW="300px"
            border="2px"
            borderColor={"red.600"}
            borderRadius="lg"
            overflow="hidden"
        >
            <Text>好き度</Text>
            <Center
                borderTopRadius="md"
                w="100%"
                overflow="hidden"
                p="5"
            >
                <Center
                    w={20}
                    h={20}
                    color={'white'}
                    rounded={'full'}
                    bg={'gray.100'}
                    mb={1}
                >
                    {icon}
                </Center>
            </Center>
            <VStack py="5" px="10">
                <Text fontWeight={600}>{title}</Text>
                <Box maxW="200">
                    <UnorderedList>
                        {textList.map((text) => {
                            return (
                                <ListItem>
                                    {text}
                                </ListItem>
                            )
                        })}
                    </UnorderedList>
                </Box>
            </VStack>
        </VStack>
    )
}

const About: React.FC = () => {
    return (
        <VStack py="20" maxW="1200px" >
            <VStack>
                <Heading>Skill Set</Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} pt="10">
                    <AboutCard
                        title="マークアップ言語"
                        textList={["HTML", "CSS", "SCSS"]}
                        icon={<CircularProgress value={50} size='100px' color='red.600' thickness='8px' />}
                    />
                    <AboutCard
                        title="フロントエンド"
                        textList={["JavaScript", "TypeScript", "React.js", "Next.js", "Gatsby.js", "MUI", "Chakra UI", "CSS-Modules"]}
                        icon={<CircularProgress value={80} size='100px' color='red.600' thickness='8px' />}
                    />
                    <AboutCard
                        title="バックエンド"
                        textList={["Ruby", "Ruby on Rails"]}
                        icon={<CircularProgress value={29} size='100px' color='red.600' thickness='8px' />}
                    />
                    <AboutCard
                        title="開発環境"
                        textList={["WSL2(Ubuntu20.04)", "Git", "VSCode", "Node.js", "Docker", "Prettier", "ESLint"]}
                        icon={<CircularProgress value={5} size='100px' color='red.600' thickness='8px' />}
                    />
                    <AboutCard
                        title="インフラ"
                        textList={["Vercel", "Netlify", "Heroku"]}
                        icon={<CircularProgress value={40} size='100px' color='red.600' thickness='8px' />}
                    />
                    <AboutCard
                        title="その他"
                        textList={["GraphQL"]}
                        icon={<CircularProgress value={30} size='100px' color='red.600' thickness='8px' />}
                    />


                </SimpleGrid>
            </VStack>
        </VStack>
    )
}




export default About
