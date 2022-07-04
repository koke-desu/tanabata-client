import {
  Box,
  Button,
  Fade,
  IconButton,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import React, { useState } from "react";
import { addStrip } from "../database/addStrips";
type Props = {};

const StripForm: React.FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [opacitySubmit, setOpacitySubmit] = useState(0);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div
            // className="container"
            style={styles.container}
          >
            <Box
              fontSize={32}
              textAlign="center"
              fontWeight="bold"
              fontFamily="serif"
              p={4}
            >
              短冊を作成する
            </Box>
            <Input
              onChange={(event) => {
                setName(event.target.value);
              }}
              style={styles.input}
              value={name}
              placeholder="企業名"
            />
            <Input
              onChange={(event) => {
                setText(event.target.value);
              }}
              style={styles.input}
              value={text}
              placeholder="内容"
            />
            <motion.div
              style={{
                display: "flex",
                alignSelf: "center",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: name && text ? 1 : 0 }}
            >
              <Button
                disabled={name && text ? false : true}
                style={styles.button}
                bg="lightgreen"
                onClick={() => {
                  addStrip({ name, text, id: "" }).then(() => {
                    onClose();
                    setName("");
                    setText("");
                  });
                }}
              >
                短冊を作成
              </Button>
            </motion.div>
          </div>
        </ModalContent>
      </Modal>
      <IconButton
        bg="lightgreen"
        colorScheme="green"
        onClick={onOpen}
        p={8}
        rounded="full"
        boxShadow="lg"
        position="fixed"
        right={8}
        bottom={8}
        icon={
          <Box
            alignItems="center"
            display="flex"
            fontWeight="semibold"
            fontFamily="serif"
            fontSize={24}
            color="black"
          >
            短冊を作る
          </Box>
        }
        aria-label={""}
      />
    </div>
  );
};
export default StripForm;

const styles: { [key: string]: React.CSSProperties } = {
  header: { marginTop: 0, marginBottom: 0 },
  container: {
    // width: 500,
    // height: 1095,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  button: {
    color: "black",
    outline: "none",
    fontSize: 18,
    fontFamily: "serif",
    padding: "12px",
    borderRadius: 100,
  },
};
