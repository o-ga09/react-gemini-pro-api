import { Heading } from "@chakra-ui/react";

function Question() {
  return (
    <>
      <Heading
        as={"h2"}
        display={"flex"}
        justifyContent={"center"}
        marginTop={"2.5rem"}
        marginBottom={"1rem"}
        fontSize={{ base: "20px", md: "30px" }}
      >
        質問を教えてね！
      </Heading>
    </>
  );
}

export default Question;
