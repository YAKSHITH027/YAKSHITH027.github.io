import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
