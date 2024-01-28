import { Box, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box w={"100%"} h={{ base: "5vh", md: "10vh" }}>
      <Heading
        as={"h1"}
        fontSize={{ base: "20px", md: "30px" }}
        display={"flex"}
        justifyContent={"center"}
      >
        Gemini Proに聞いてみよう！
      </Heading>
    </Box>
  );
}

export default Header;
