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
import { backendTechs, frontTechs } from "../utils/Data/Skills";
import Zoom from "react-reveal/Zoom";
const Skills = () => {
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
          <Text textAlign={"center"} fontSize="1.3rem">
            FrontEnd
          </Text>
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
                <Zoom>
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
                  >
                    <Image
                      width="60px"
                      className="skills-card-img"
                      src={item.image}
                    />
                    <Text className="skills-card-name">{item.name}</Text>
                  </Flex>
                </Zoom>
              );
            })}
          </Grid>
        </Box>
        <Box>
          <Text textAlign={"center"} fontSize="1.3rem">
            Backend
          </Text>
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
                <Zoom>
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
                  >
                    <Image
                      width="60px"
                      className="skills-card-img"
                      src={item.image}
                    />
                    <Text className="skills-card-name">{item.name}</Text>
                  </Flex>
                </Zoom>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
