import { Flex } from "@chakra-ui/layout";

export const Tile = (props) => {
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius="lg"
      bgColor="white"
      h="fit-content"
      w="fit-content"
      flexDir="column"
      p="2em"
      justify="center"
      alignContent="center"
      {...rest}
    >
      {props.children}
    </Flex>
  );
};
