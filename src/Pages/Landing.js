import { Heading, ButtonGroup, HStack, Text, Button } from "@chakra-ui/react";
import { Background } from "../Components/Background";
import { Tile } from "../Components/Tile";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Tile alignSelf="center">
        <HStack>
          <Heading fontWeight="extrabold" size="3xl" color="black">
            Hello,{" "}
          </Heading>
          <Heading fontWeight="bold" size="3xl" color="purple.700">
            I'm Steve.
          </Heading>
        </HStack>
        <Text fontWeight="bold" size="xl" color="black" my="1em">
          I'm a software developer located in Westchester, New York.
        </Text>
        <ButtonGroup spacing="2em" justifyContent="center">
          <Button
            colorScheme="purple"
            w="10em"
            onClick={() => {
              navigate("/projects");
            }}
          >
            See More
          </Button>
          <Button
            colorScheme="purple"
            w="10em"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Talk To Me
          </Button>
        </ButtonGroup>
      </Tile>
    </Background>
  );
};
