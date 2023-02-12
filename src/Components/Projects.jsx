import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      name: "name",
      liveLink: "s",
      githubLink: "",
      image: "",
    },
    {
      id: 2,
      name: "name",
      liveLink: "s",
      githubLink: "",
      image: "",
    },
    {
      id: 3,
      name: "name",
      liveLink: "s",
      githubLink: "",
      image: "",
    },
    {
      id: 4,
      name: "name",
      liveLink: "s",
      githubLink: "",
      image: "",
    },
  ];
  return (
    <Box minH={"10rem"} id="projects" my="2rem" mb="4rem">
      <Heading mb={"1rem"} textAlign={"center"}>
        My Projects
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="2"
      >
        {projectsList.map((item) => {
          return (
            <Box
              className="project-card"
              borderWidth={"2px"}
              padding="0.5rem"
              borderRadius={"9px"}
              key={item.id}
            >
              <Box height="200px" width="300px">
                <Image src="" />
              </Box>
              <Flex justify="space-between">
                <Text className="project-title">name</Text>
                <Text className="project-description">desc</Text>
                <Text className="project-tech-stack">desc</Text>
                <Button className="project-deployed-link">Demo</Button>
                <Button className="project-github-link">Code</Button>
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
