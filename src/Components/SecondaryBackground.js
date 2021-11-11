import { Flex } from "@chakra-ui/layout";

export const SecondaryBackground = (props) => {
  return (
    <Flex
      w="full"
      h="75vh"
      bgGradient="linear(to-tr,  purple.800, teal.400, purple.800)"
      alignSelf="center"
      justifyContent="center"
    >
      {props.children}
    </Flex>
  );
};
