import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import html from "../icons8-html-5-96.png";

const Skills = () => {
  const frontTechs = [
    {
      id: 1,
      name: "HTML",
      image: "https://img.icons8.com/color/1x/html-5.png",
      boxShadow: "0px 4px 3px 0px rgba(214,103,13,1)",
    },
    {
      id: 2,
      name: "CSS",
      image: "https://img.icons8.com/color/1x/css3.png",
      boxShadow: "0px 4px 3px 0px rgba(66,54,194,1)",
    },
    {
      id: 3,
      name: "Javascript",
      image: "https://img.icons8.com/color/1x/javascript.png",
      boxShadow: "0px 4px 3px 0px rgba(242,228,39,1)",
    },
    {
      id: 4,
      name: "React",
      image: "https://img.icons8.com/color/1x/react-native.png",
      boxShadow: "0px 4px 3px 0px rgba(53,184,175,1)",
    },
    {
      id: 5,
      name: "Redux",
      image: "https://img.icons8.com/color/1x/redux.png",
      boxShadow: "0px 4px 3px 0px  rgba(33,51,184,1)",
    },
    {
      id: 6,
      name: "Chakra UI",
      image: "https://img.icons8.com/color/1x/chakra-ui.png",
      boxShadow: "0px 4px 3px 0px rgba(47,177,189,1)",
    },
  ];
  const backendTechs = [
    {
      id: 1,
      name: "Node.js",
      image: "https://img.icons8.com/color/1x/nodejs.png",
      boxShadow: "0px 4px 3px 0px rgba(214,103,13,1)",
    },
    {
      id: 2,
      name: "CSS",
      image: "https://img.icons8.com/color/1x/css3.png",
      boxShadow: "0px 4px 3px 0px rgba(66,54,194,1)",
    },
    {
      id: 3,
      name: "Javascript",
      image: "https://img.icons8.com/color/1x/javascript.png",
      boxShadow: "0px 4px 3px 0px rgba(242,228,39,1)",
    },
    {
      id: 4,
      name: "React",
      image: "https://img.icons8.com/color/1x/react-native.png",
      boxShadow: "0px 4px 3px 0px rgba(53,184,175,1)",
    },
    {
      id: 5,
      name: "Redux",
      image: "https://img.icons8.com/color/1x/redux.png",
      boxShadow: "0px 4px 3px 0px  rgba(33,51,184,1)",
    },
    {
      id: 6,
      name: "Firebase",
      image: "https://img.icons8.com/color/1x/firebase.png",
      boxShadow: "0px 4px 3px 0px rgba(47,177,189,1)",
    },
  ];

  return (
    <Box id="skills">
      <Heading my="2rem" textAlign={"center"}>
        Tech Stacks
      </Heading>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        minH={"50vh"}
        id="skills"
        justify={"space-around"}
      >
        <Box>
          <Text textAlign={"center"}>FrontEnd</Text>
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4,1fr)",
              xl: "repeat(5,1fr)",
            }}
            gap={4}
            p="1rem"
          >
            {frontTechs.map((item) => {
              return (
                <Flex
                  key={item.id}
                  className="icon-shadow skills-card"
                  padding="4px"
                  paddingBottom={"2px"}
                  px="0.5rem"
                  borderRadius={"7px"}
                  flexDir="column"
                  justify={"center"}
                  boxShadow={item.boxShadow}
                  align="center"
                  transition={"all 0.3s "}
                  // _hover={{
                  // }}
                >
                  <Image className="skills-card-img" src={item.image} />
                  <Text className="skills-card-name">{item.name}</Text>
                </Flex>
              );
            })}
          </Grid>
        </Box>
        <Box>
          <Text textAlign={"center"}>Backend</Text>
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4,1fr)",
              xl: "repeat(5,1fr)",
            }}
            gap={4}
            p="1rem"
          >
            {backendTechs.map((item) => {
              return (
                <Flex
                  key={item.id}
                  className="icon-shadow skills-card"
                  padding="4px"
                  paddingBottom={"2px"}
                  px="0.5rem"
                  borderRadius={"7px"}
                  flexDir="column"
                  justify={"center"}
                  boxShadow={item.boxShadow}
                  align="center"
                  transition={"all 0.3s "}
                  // _hover={{
                  // }}
                >
                  <Image className="skills-card-img" src={item.image} />
                  <Text className="skills-card-name">{item.name}</Text>
                </Flex>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
