import { Heading, Input, Box } from "@chakra-ui/react";

type Props = {
  oshi: string;
  setOshi: (v: string) => void;
};
function OshiForm(props: Props) {
  const oshi = props.oshi;
  const setOshi = props.setOshi;
  return (
    <>
      <Box
        w={"100%"}
        h={{ base: "10vh", md: "20vh" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Heading
          as={"h3"}
          textAlign={"center"}
          fontSize={{ base: "20px", md: "30px" }}
        >
          推しの名前は？
        </Heading>
        <Input
          w={{ base: "80%", md: "30%" }}
          h={"5vh"}
          placeholder="推しの名前を入力してね..."
          value={oshi}
          onChange={(e) => setOshi(e.target.value)}
          borderRadius={10}
          marginX={"auto"}
          marginTop={"1rem"}
        />
      </Box>
    </>
  );
}

export default OshiForm;
