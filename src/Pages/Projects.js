import { Heading, Flex, HStack, Text } from "@chakra-ui/react";
import { Background } from "../Components/Background";
import { ProjectCard } from "../Components/ProjectsCard";
export const Projects = () => {
  return (
    <Background>
      <Flex dir="row" verticalAlign="center">
        <ProjectCard>
          <Heading fontWeight="extrabold" size="3xl" color="black">
            Projects
          </Heading>
        </ProjectCard>
        <ProjectCard>
          <Heading fontWeight="extrabold" size="3xl" color="black">
            Projects
          </Heading>
        </ProjectCard>
        <ProjectCard>
          <Heading fontWeight="extrabold" size="3xl" color="black">
            Projects
          </Heading>
        </ProjectCard>
      </Flex>
    </Background>
  );
};
