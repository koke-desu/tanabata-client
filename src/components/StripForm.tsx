import {
  AspectRatio,
  Box,
  Button,
  Fade,
  IconButton,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";
import React, { useState } from "react";
import { addStrip } from "../database/addStrips";
import Tannzaku from "./Tannzaku";
import AppButton from "./Button";
type Props = {};

const StripForm: React.FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          style={{ width: "90%", display: "flex", alignSelf: "center" }}
        >
          <div style={styles.container}>
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
            <Textarea
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
              <AppButton
                text="次へ"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    setIsConfirmOpen(true);
                  }, 200);
                }}
              />
            </motion.div>
          </div>
        </ModalContent>
      </Modal>
      <div
        style={{
          position: "fixed",
          bottom: 4,
          right: 4,
        }}
      >
        <AppButton text="短冊を作る" onClick={onOpen} />
      </div>
      <Modal
        isOpen={isConfirmOpen}
        onClose={() => {
          setIsConfirmOpen(false);
          setTimeout(() => {
            onOpen();
          }, 300);
        }}
      >
        <ModalOverlay />
        <ModalContent
          style={{
            width: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
          }}
        >
          <Box boxShadow="xl" m={2} position="relative">
            <Tannzaku name={name} text={text} />
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AppButton
              onClick={() => {
                setIsConfirmOpen(false);
                setTimeout(() => {
                  onOpen();
                }, 300);
              }}
              text="キャンセル"
              variant="outline"
            />
            <AppButton
              onClick={() => {
                addStrip({ name, text, id: "" }).then(() => {
                  setIsConfirmOpen(false);
                  setName("");
                  setText("");
                });
              }}
              text="短冊を飾る"
            />
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default StripForm;

const styles: { [key: string]: React.CSSProperties } = {
  header: { marginTop: 0, marginBottom: 0 },
  container: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    padding: 20,
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
