import React, { useState } from "react";
import Amplify from "aws-amplify";
import "./App.css";
import awsExports from "../aws-exports";
import StripList from "./StripList";
import StripForm from "./StripForm";
import {
  Box,
  Button,
  ChakraProvider,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
Amplify.configure(awsExports);

const App = () => {
  return (
    <ChakraProvider>
      <div className="wrapper">
        <Box
          fontSize={32}
          textAlign="center"
          fontWeight="bold"
          fontFamily="serif"
          p={4}
          bg="white"
          position="fixed"
          top={0}
          width="100%"
          boxShadow="lg"
          zIndex={1}
        >
          短冊作成フォーム
        </Box>
        <StripForm />
        <StripList />
      </div>
    </ChakraProvider>
  );
};

export default App;
