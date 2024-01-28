import { Box, useDisclosure } from "@chakra-ui/react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AlertModal from "./components/modal/alert";
import MessageForm from "./components/form/messageForm";
import OshiForm from "./components/form/oshiForm";
import { useState } from "react";
import Question from "./components/contents/question";

function App() {
  const [oshi, setOshi] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={4} w={"100%"} h={"100vh"}>
      <Header />
      <OshiForm oshi={oshi} setOshi={setOshi} />

      <Box w={"100%"}>
        <Question />
        <span style={{ width: "100%", height: "5vh" }}></span>
        <MessageForm oshi={oshi} onOpen={onOpen} />
      </Box>
      <Footer />
      <AlertModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default App;
