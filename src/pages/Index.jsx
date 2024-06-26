import { Box, VStack, Heading, Text, HStack, Link, keyframes } from "@chakra-ui/react";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Index = () => {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bg="blue.500">
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="4xl" color="white" animation={`${fadeInUp} 1s ease-out`}>
          Blixt
        </Heading>
        <Heading as="h2" size="lg" color="white" opacity={0.8} animation={`${fadeInUp} 1s ease-out 0.2s`} sx={{ animationFillMode: "forwards" }}>
          Making software more fun
        </Heading>
        <Text color="white" opacity={0.8} maxW="500px" animation={`${fadeInUp} 1s ease-out 0.4s`} sx={{ animationFillMode: "forwards" }}>
          I'm currently exploring ways to make interacting with computers more fun, with a little help from AI.
        </Text>
      </VStack>
      <HStack spacing={8} mt={8}>
        <Link href="https://github.com/blixt" target="_blank">
          GitHub
        </Link>
        <Link href="https://twitter.com/blixt" target="_blank">
          Twitter
        </Link>
        <Link href="mailto:me@blixt.nyc" target="_blank">
          Email
        </Link>
      </HStack>
    </Box>
  );
};

export default Index;
