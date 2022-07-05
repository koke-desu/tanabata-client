import { Box, IconButton, ResponsiveValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  onClick: () => void;
  text: string;
  variant?:
    | ResponsiveValue<
        "link" | (string & {}) | "solid" | "outline" | "ghost" | "unstyled"
      >
    | undefined;
};
const AppButton: React.VFC<Props> = ({ onClick, text, variant }) => {
  return (
    <IconButton
      bg={variant == "outline" ? "rgba(0,0,0,0)" : "lightgreen"}
      colorScheme="whatsapp"
      onClick={onClick}
      p={4}
      m={2}
      boxShadow="lg"
      variant={variant}
      icon={
        <Box
          alignItems="center"
          display="flex"
          fontWeight="semibold"
          fontFamily="serif"
          color="black"
        >
          {text}
        </Box>
      }
      aria-label={""}
    />
  );
};
export default AppButton;
