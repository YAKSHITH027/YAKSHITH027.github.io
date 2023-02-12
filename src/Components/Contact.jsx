import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { ImLinkedin, ImMobile } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <Box id="contact" minH={"10rem"} bg="blackAlpha.300" pb={"3rem"}>
      <Box py="1rem">
        <Heading textAlign={"center"}>Contact me</Heading>
      </Box>

      <Flex
        align={"center"}
        justify={"space-around"}
        flexDir={{ base: "column", lg: "row" }}
        width="full"
      >
        <Flex
          width={{ base: "90%", lg: "30%" }}
          align={"center"}
          justify="center"
        >
          <Flex flexDir={"column"} gap="4">
            <Link>
              <Flex gap="2">
                <ImLinkedin fontSize={"1.6rem"} />
                <Text id="contact-linkedin">Linkedin</Text>
              </Flex>
            </Link>
            <Link>
              <Flex gap="2">
                <FaGithub fontSize={"1.6rem"} />
                <Text id="contact-github">Github</Text>
              </Flex>
            </Link>
            <Link>
              <Flex gap="2">
                <HiOutlineMail fontSize={"1.6rem"} />
                <Text id="contact-email">Email</Text>
              </Flex>
            </Link>
            <Link>
              <Flex gap="2">
                <ImMobile fontSize={"1.6rem"} />
                <Text id="contact-phone">+91 8496080939</Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <Box
          width={{ base: "95%", lg: "30%" }}
          margin="auto"
          mt={{ base: "1rem", lg: "0" }}
        >
          <Text>You can also get in touch with me by filling this form</Text>
          <form
            action="https://getform.io/f/111bfca1-e102-465a-9c86-fa88c863b874"
            method="POST"
          >
            <FormControl isRequired py={"0.5rem"}>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your name" name="name" />
            </FormControl>
            <FormControl isRequired py={"0.5rem"}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="email" type={"email"} name="email" />
            </FormControl>
            <FormControl isRequired py={"0.5rem"}>
              <FormLabel>message</FormLabel>
              <Textarea placeholder="message" name="message" />
            </FormControl>
            <Flex justify={"center"}>
              <Button type="submit" colorScheme={"cyan"}>
                Let's talk
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
