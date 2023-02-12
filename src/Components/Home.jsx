import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineDownload } from "react-icons/ai";
import resume from "../P_Yakshith_Resume.pdf";
// import img from "./userPic.png";
const Home = () => {
  return (
    <Flex
      height={{ base: "80vh", lg: "100vh" }}
      maxHeight={"750px"}
      className="background"
      id="home"
      flexDir={{ base: "column-reverse", lg: "row" }}
      align={"center"}
      justify="center"
      gap={{ base: "4", md: "6", lg: "8" }}
      // border="2px solid red"
    >
      <Flex
        maxWidth={{ base: "100%", lg: "40%" }}
        flexDir="column"
        gap="1rem"
        padding={"5px"}
      >
        <Heading id="user-detail-name">Hi I am Yakshith</Heading>
        <Text fontSize={"1.4rem"}>Full stack web develpor</Text>
        <Text>
          An aspiring Full Stack Developer, that enjoys every part of his work,
          from working in the FrontEnd or Backend, to communicating and
          collaborating, with different people, towards a common goal. The very
          idea of CREATING something meaningful, keeps me going.{" "}
        </Text>
        <Flex gap={"8"} align="center">
          <a target="_blank" href={resume} download>
            <Button
              id="resume-button-2"
              width="max-content"
              colorScheme={"teal"}
            >
              Resume
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
          </a>
          <Flex gap="3">
            <Link>
              <ImLinkedin fontSize={"1.6rem"} />
            </Link>
            <Link>
              <FaGithub fontSize={"1.6rem"} />
            </Link>
            <Link>
              <HiOutlineMail fontSize={"1.6rem"} />
            </Link>
          </Flex>
        </Flex>
        <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
          <Flex align={"center"} gap="2">
            <span>
              <BsMouse fontSize={"1.4rem"} />
            </span>
            <Text>scroll down</Text>
            <span>
              <AiOutlineArrowDown />
            </span>
          </Flex>
        </Box>
      </Flex>
      <Box
        height={{ base: "200px", md: "300px", lg: "400px" }}
        overflow="hidden"
        className="profile"
      >
        <Image
          src="https://camo.githubusercontent.com/86a3b6db470f1a0429f7355c08d1edabf3d2c804/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f312a495247486d69477361313673746564517649615a66772e676966"
          borderRadius="1.2rem"
          height="100%"
        />
      </Box>
    </Flex>
  );
};

export default Home;
