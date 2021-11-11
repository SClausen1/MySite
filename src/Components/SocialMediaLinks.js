import { IconButton } from "@chakra-ui/button";
import { Flex, HStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialMediaLinks = (props) => {
  return (
    <Flex p="1em" w="100vw">
      <HStack spacing={2} ml="auto">
        <IconButton
          aria-label="github"
          icon={<FaGithub />}
          colorScheme="purple"
          onClick={() => {
            window.location.href = "https://github.com/SClausen1";
          }}
        />
        <IconButton
          aria-label="github"
          icon={<FaLinkedin />}
          colorScheme="purple"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/stevenclausen3/";
          }}
        />
      </HStack>
    </Flex>
  );
};
