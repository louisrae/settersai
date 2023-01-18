import ChatArea from "../../components/ChatPage/ChatArea";
import ChatList from "../../components/ChatPage/ChatList";
import MessageList from "../../components/ChatPage/MessageList";
import { amanda_sid } from "../../components/convos_api";
import Sidebar from "../../components/Sidebar";

export default function ChatUi() {
  return (
    <div class="w-full h-screen">
      <div class="flex h-full">
        <div class="hidden xl:block sm:flex-2 w-64 bg-gray-200">
          <Sidebar></Sidebar>
        </div>
        <main className="flex-1">
          <div class="flex-1 bg-gray-100 w-full h-full">
            <div class="main-body container m-auto w-11/12 h-full flex flex-col">
              <div class="main flex-1 flex flex-col">
                <div class="flex-1 flex h-full">
                  <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
                    <ChatList />
                  </div>
                  <div class="chat-area flex-1 flex flex-col">
                    <MessageList message_data={amanda_sid}></MessageList>
                    <ChatArea></ChatArea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
