import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex mt={"0.4rem"} justify={"flex-end"} align="center">
            <Button onClick={toggleColorMode} marginRight="4rem">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <DrawerCloseButton />
          </Flex>
          <Flex
            flexDir={"column"}
            gap="2rem"
            align="center"
            width={"full"}
            justify={"center"}
            height="70vh"
          >
            <Link href="#home">
              <Text
                fontSize={"1.3rem"}
                borderBottomWidth="3px"
                width="11rem"
                textAlign={"center"}
              >
                Home
              </Text>
            </Link>
            <Link href="#about">
              <Text
                fontSize={"1.3rem"}
                borderBottomWidth="3px"
                width="11rem"
                textAlign={"center"}
              >
                About
              </Text>
            </Link>
            <Link href="#skills">
              <Text
                fontSize={"1.3rem"}
                borderBottomWidth="3px"
                width="11rem"
                textAlign={"center"}
              >
                Skills
              </Text>
            </Link>
            <Link href="#projects">
              <Text
                fontSize={"1.3rem"}
                borderBottomWidth="3px"
                width="11rem"
                textAlign={"center"}
              >
                Projects
              </Text>
            </Link>
            <Link href="#contact">
              <Text
                fontSize={"1.3rem"}
                borderBottomWidth="3px"
                width="11rem"
                textAlign={"center"}
              >
                Contact
              </Text>
            </Link>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Sidebar;
