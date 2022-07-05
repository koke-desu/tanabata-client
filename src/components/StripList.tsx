import { Box, ScaleFade, Spinner, useTimeout } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useGetStrips } from "../database/getStrips";
import Tannzaku from "./Tannzaku";
type Props = {};

const StripList: React.FC<Props> = () => {
  const strips = useGetStrips();
  const height = window.innerHeight;

  if (strips === undefined) {
    return (
      <div
        style={{
          display: "flex",
          height: height,
          paddingTop: 64,
          justifyContent: "center",
        }}
      >
        <Spinner size="xl" thickness="4px" speed="1s" />
      </div>
    );
  }
  return (
    <div
      style={{
        padding: 12,
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
        height: height + 100,
        overflowY: "hidden",
      }}
    >
      {strips.map((strip, index) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
          style={{
            margin: 4,
          }}
        >
          <Box boxShadow="xl" position="relative">
            <Tannzaku name={strip.name} text={strip.text} />
          </Box>
        </motion.div>
      ))}
      {/* </div> */}
    </div>
  );
};
export default StripList;

const styles: { [key: string]: React.CSSProperties } = {
  todo: { width: "100%", marginBottom: 15 },
  todo_container: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "right",
  },
};
