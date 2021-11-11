import { Flex, VStack } from "@chakra-ui/layout";
import { TopBar } from "./TopBar";
import { SecondaryBackground } from "./SecondaryBackground";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Background = (props) => {
  return (
    <Flex h="full" w="full" bg="white">
      <VStack>
        <TopBar />
        <SecondaryBackground>{props.children}</SecondaryBackground>
        <SocialMediaLinks />
      </VStack>
    </Flex>
  );
};
