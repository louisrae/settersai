import { useSession } from "next-auth/react";
import React from "react";
import ChatUi from "../components/ChatUi";

const Chat = () => {
  const { data: session, status } = useSession({ required: true });
  if (status === "authenticated") {
    return (
      <>
        <ChatUi />
      </>
    );
  }
};
export default Chat;
