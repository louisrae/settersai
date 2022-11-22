import { useSession } from "next-auth/react";
import React from "react";
import ChatArea from "../components/ChatArea";
import ChatList from "../components/ChatList";
import MessageList from "../components/MessageList";

import Sidebar from "../components/Sidebar";

const our_messages = [
  {
    recent_message:
      "Hey there. We would like to invite you over to our office for a visit. How about it?",
    date_sent: "15 April",
  },
  {
    recent_message:
      "Hey there. We would like to invite you over to our office for a visit. How about it?",
    date_sent: "16 April",
  },
];
const their_messages = [
  {
    recent_message: "It's like a dream come true",
    date_sent: "17 April",
  },
  {
    recent_message: "I accept. Thank you very much.",
    date_sent: "18 April",
  },
  {
    recent_message: "It's like a dream come true",
    date_sent: "19 April",
  },
];

const Chat = () => {
  const { data: session, status } = useSession({ required: true });
  if (status === "authenticated") {
    return (
      <>
        <Sidebar></Sidebar>
        <div className="flex flex-1 flex-col md:pl-64">
          <main className="flex-1">
            <div class="flex-1 bg-gray-100 w-full h-full">
              <div class="main-body container m-auto w-11/12 h-full flex flex-col">
                <div class="main flex-1 flex flex-col">
                  <div class="flex-1 flex h-full">
                    <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6 ">
                      <ChatList />
                    </div>
                    <div class="chat-area flex-1 flex flex-col">
                      <MessageList></MessageList>
                      <ChatArea></ChatArea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
};
export default Chat;
