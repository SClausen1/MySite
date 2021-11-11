import { Flex } from "@chakra-ui/layout";

export const ProjectCard = (props) => {
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius="lg"
      bgColor="white"
      h="lg"
      w="md"
      m="2em"
      justify="center"
      alignContent="center"
      {...rest}
    >
      {props.children}
    </Flex>
  );
};
