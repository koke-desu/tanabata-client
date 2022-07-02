import { Box, ScaleFade } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useGetStrips } from "../database/getStrips";
type Props = {};

const StripList: React.FC<Props> = () => {
  const strips = useGetStrips();
  if (strips === undefined) return <p>loading...</p>;

  return (
    <div className="todo_container" style={{ paddingBottom: 100 }}>
      {strips.map((strip, index) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
          style={{ width: 500, alignSelf: "center" }}
        >
          <Box p="6" boxShadow="md" rounded="lg" m="2" bg="white">
            <Box fontWeight="semibold" as="h4" noOfLines={1}>
              {strip.name}
            </Box>
            <Box>{strip.text}</Box>
          </Box>
        </motion.div>
      ))}
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
