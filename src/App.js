import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import GithubCalenderC from "./Components/GithubCalender";
import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box maxW={"100vw"}>
      <Navbar />

      <Box maxWidth={{ base: "96vw", lg: "90vw" }} margin="auto">
        <Home />
        <About />
        <Skills />
        <Projects />
        <GithubCalenderC />
      </Box>
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
