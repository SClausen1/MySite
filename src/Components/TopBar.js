import { Flex, HStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export const TopBar = (props) => {
  return (
    <Flex p="1em" w="100vw">
      <HStack spacing={2} ml="auto">
        <Link to="/">Home / </Link>
        <Link to="/projects">Projects / </Link>
        <Link to="/contact">Contact Me</Link>
      </HStack>
    </Flex>
  );
};
