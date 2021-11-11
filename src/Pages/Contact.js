import { Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { Background } from "../Components/Background";
export const Contact = () => {
  return (
    <Background>
      <VStack alignSelf="center">
        <HStack>
          <Heading fontWeight="extrabold" size="3xl" color="black">
            Contact Me
          </Heading>
        </HStack>
      </VStack>
    </Background>
  );
};
