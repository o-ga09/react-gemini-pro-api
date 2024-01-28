import { Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { FetchGeminiProAPI } from "../../lib/repository/fetchGeminiPro";
import Message from "../contents/message";

type FormProps = {
  oshi: string;
  onOpen: () => void;
};

function MessageForm(props: FormProps) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const onOpen = props.onOpen;
  const oshi = props.oshi;
  const SendMessage = async () => {
    if (input == "" || oshi == "") {
      onOpen();
      return;
    }
    const res = await FetchGeminiProAPI(oshi, input);
    setMessage(res.data.candidates[0].content.parts[0].text);
  };
  return (
    <>
      <Message message={message} />
      <Box
        w={"100%"}
        display={"flex"}
        flexDirection={{ base: "column" }}
        justifyContent={"center"}
      >
        <Input
          w={{ base: "80%", md: "30%" }}
          h={"5vh"}
          placeholder="質問を入力してね..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          borderRadius={10}
          marginRight={"1.5rem"}
          marginX={"auto"}
        />
        <Button
          colorScheme="blue"
          variant="solid"
          size="lg"
          w={"5rem"}
          h={"5vh"}
          onClick={SendMessage}
          borderRadius={10}
          color={"black"}
          display={"flex"}
          marginX={"auto"}
          marginTop={"2rem"}
        >
          送信
        </Button>
      </Box>
    </>
  );
}

export default MessageForm;
