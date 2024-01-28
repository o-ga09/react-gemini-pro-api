import { Box, Text } from "@chakra-ui/react";

type Props = {
  message: string;
};

function Message(props: Props) {
  const message = props.message;
  return (
    <>
      <Box
        w={"100%"}
        height={"30vh"}
        display={"flex"}
        justifyContent={"center"}
        marginBottom={"2rem"}
      >
        <Text
          w={{ base: "80%", md: "50%" }}
          border={"1px solid"}
          textAlign={"center"}
          borderRadius={30}
          p={4}
        >
          {message}
        </Text>
      </Box>
    </>
  );
}

export default Message;
