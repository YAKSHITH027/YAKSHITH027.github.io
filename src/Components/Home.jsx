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
import resume from "../utils/Resume/P_Yakshith_Resume.pdf";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import openInNewTab from "../utils/newTabOpener";

const Home = () => {
  return (
    <Flex
      height={{ base: "80vh", lg: "92vh" }}
      maxHeight={"750px"}
      className="background"
      id="home"
      flexDir={{ base: "column-reverse", lg: "row" }}
      align={"center"}
      justify="center"
      gap={{ base: "4", md: "6", lg: "8" }}
    >
      <Flex
        width={{ base: "100%", lg: "40%" }}
        flexDir="column"
        gap="1rem"
        padding={"5px"}
        pl={{ base: "2rem", lg: "4rem" }}
      >
        <Fade left>
          <Heading>Hello There 👋</Heading>
          <Heading id="user-detail-name">I am Yakshith</Heading>
          <Text fontSize={"1.2rem"}>
            A Passionate Full Stack Web Developer who's curious in tech field,
            and now looking to start a career as an Web Developer.
          </Text>
          <Text></Text>
          <Flex gap={"8"} align="center">
            <Link href={resume} download id="resume-link-2">
              <Button
                id="resume-button-2"
                width="max-content"
                onClick={() => openInNewTab(resume)}
                colorScheme={"teal"}
              >
                Resume
                <Text as="span" ml={"2"}>
                  <AiOutlineDownload fontSize={"1.2rem"} />
                </Text>
              </Button>
            </Link>
            <Flex gap="3">
              <Link
                href="https://www.linkedin.com/in/p-yakshith-kulal-490b34227/"
                isExternal
              >
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link href="https://github.com/YAKSHITH027" isExternal>
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link href="mailto:yakshith027@gmail.com" isExternal>
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
        </Fade>
      </Flex>
      <Zoom>
        <Box
          // height={{ base: "200px", md: "300px", lg: "400px" }}
          overflow="hidden"
          className="profile"
        >
          <Image
            src="https://camo.githubusercontent.com/86a3b6db470f1a0429f7355c08d1edabf3d2c804/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f312a495247486d69477361313673746564517649615a66772e676966"
            className="imageShadow"
            height={{ base: "196px", md: "280px", lg: "396px" }}
            width={{ base: "312px", md: "490px", lg: "630px" }}
          />
        </Box>
      </Zoom>
    </Flex>
  );
};

export default Home;
