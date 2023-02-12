import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex
      minH={"70vh"}
      id="about"
      className="about section"
      flexDir={"column"}
      justify={"center"}
      align="center"
      paddingTop={"2rem"}
    >
      <Heading mb={"3rem"}>About me</Heading>
      <Flex
        height={"90%"}
        justify="center"
        gap="3rem"
        borderRadius={"1rem"}
        flexDir={{ base: "column", lg: "row" }}
        width={{ base: "100%", lg: "70%" }}
        padding={{ base: "2px", lg: "2rem" }}
        className="about-shadow"
        py={"1rem"}
      >
        <Flex
          // height={{ base: "30%", lg: "100%" }}
          height={{ base: "300px", lg: "100%" }}
          width={{ base: "100%", lg: "30%" }}
          justify={"center"}
          align="center"
          // bg="white"
        >
          <Image
            className="home-img"
            src={
              "https://i.ibb.co/ZHY7H9g/1661791218027-1-1-removebg-preview.png"
            }
            height={{ base: "100%", lg: "100%" }}
            borderRadius={"50%"}
          />
        </Flex>
        <Flex
          flexDir={"column"}
          align="center"
          justify={"center"}
          textTransform="capitalize"
          gap="3"
          height="100%"
          width={{ base: "100%", lg: "70%" }}
        >
          <Flex
            justify={"space-between"}
            flexDir={{ base: "column", md: "row" }}
            gap="2"
            width="80%"
          >
            <Flex
              justify={"center"}
              align="center"
              flexDir={"column"}
              padding={"0.1rem"}
              className="info-shadow"
              borderRadius={"6px"}
              gap="1"
              width={{ base: "full", md: "12rem" }}
            >
              <Text>1200+hours</Text>
              <Text textAlign={"center"}>full stack coding</Text>
            </Flex>
            <Flex
              justify={"center"}
              align="center"
              flexDir={"column"}
              padding={{ base: "1px", lg: "0.5rem" }}
              className="info-shadow"
              borderRadius={"6px"}
              width={{ base: "full", md: "16rem" }}
              gap="1"
            >
              <Text>7+ Major Projects</Text>
              <Text>30+ Mini Projects</Text>
            </Flex>
            <Flex
              justify={"center"}
              align="center"
              flexDir={"column"}
              padding={"0.5rem"}
              className="info-shadow"
              borderRadius={"6px"}
              width={{ base: "full", md: "12rem" }}
              gap="1"
            >
              <Text>100+ hours</Text>
              <Text>Soft skills</Text>
            </Flex>
          </Flex>
          <Box my={"1.6rem"}>
            <Text
              textAlign={"center"}
              width="80%"
              margin={"auto"}
              id="#user-detail-intro"
            >
              An aspiring Full Stack Developer, that enjoys every part of his
              work, from working in the FrontEnd or Backend, to communicating
              and collaborating, with different people
            </Text>
          </Box>
          <Button>Projects</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
