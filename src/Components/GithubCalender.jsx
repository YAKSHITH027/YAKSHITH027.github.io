import { Box, Center, Flex, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalenderC = () => {
  return (
    <div>
      <Heading mb="2rem" textAlign={"center"}>
        Github Stats
      </Heading>
      <Box overflowX={"scroll"}>
        <Box width="1000px" margin={"auto"}>
          <GitHubCalendar
            username="YAKSHITH027"
            className="react-activity-calendar"
          />
        </Box>
      </Box>
      {/* <Flex justify={"center"}></Flex> */}
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        margin={"1rem"}
        align={"center"}
        justify={"center"}
        gap="7"
      >
        <Box>
          <Link href="https://github.com/YAKSHITH027" />
          <Image
            id="github-streak-stats"
            width="500px"
            src="https://github-readme-streak-stats.herokuapp.com?user=YAKSHITH027&theme=dark"
          />
        </Box>
        <Box>
          <Link href="https://github.com/YAKSHITH027" />
          <Image
            id="github-top-langs"
            width="500px"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=YAKSHITH027&layout=compact&theme=dark"
          />
        </Box>
        <Box>
          <Link href="https://github.com/YAKSHITH027" />
          <Image
            width="500px"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=YAKSHITH027&count_private=true&show_icons=true&theme=dark"
          />
        </Box>
      </Flex>
    </div>
  );
};

export default GithubCalenderC;
