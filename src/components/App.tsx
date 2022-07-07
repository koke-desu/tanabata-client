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
  const width = window.innerWidth;
  return (
    <ChakraProvider>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <div
          className="wrapper"
          style={{
            padding: 0,
            height: height + 100,
            overflowY: "hidden",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              position: "absolute",
              height: height,
              zIndex: -1,
            }}
            src={
              width > 512
                ? require("../assets/haikei/yoko.png")
                : require("../assets/haikei/tate.png")
            }
          />
          <Box width="100%" boxShadow="lg" zIndex={10}>
            <img
              src={require("../assets/tannzakuList/たなバーチャル.jpg")}
              style={{
                width: "100%",
                maxHeight: 100,
                objectFit: "contain",
                backgroundColor: "#FFF5C0",
              }}
            />
          </Box>
          <StripList />
          <StripForm />
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
