import React, { useState } from "react";
import Amplify from "aws-amplify";
import "./App.css";
import awsExports from "../aws-exports";
import StripList from "./StripList";
import StripForm from "./StripForm";
import { Box, ChakraProvider } from "@chakra-ui/react";
Amplify.configure(awsExports);

const App = () => {
  const height = window.innerHeight;
  return (
    <ChakraProvider>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <div
          className="wrapper"
          style={{
            backgroundColor: "#61dafb",
            padding: 0,
            height: height + 100,
            overflowY: "hidden",
            flexDirection: "column",
          }}
        >
          <Box
            fontSize={32}
            textAlign="center"
            fontWeight="bold"
            fontFamily="serif"
            p={4}
            bg="white"
            width="100%"
            boxShadow="lg"
            zIndex={1}
          >
            短冊作成フォーム
          </Box>

          <StripList />
          <StripForm />
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
