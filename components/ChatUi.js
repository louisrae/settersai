import ChatArea from "./ChatPage/ChatArea";
import ChatList from "./ChatPage/ChatList";
import MessageList from "./ChatPage/MessageList";
import Sidebar from "./Sidebar";

const tylee_sid = [
  {
    meta_data: {
      full_name: "Tylee Groll",
      date_sent: "2022-11-23 16:01:20+00:00",
      recent_message: "This is working pretty well but does this keep going",
      chat_link: "/chat/tylee",
      active: false,
    },
    data: [
      {
        body: "Hey Tylee main,\n\nAustin here from Dr Maggie's team\n\nI saw you just joined our Transform Autoimmune Diseases group and I'm wondering what made you join\n\nWhat are the biggest health struggles you are working through right now?",
        date: "2022-11-23 16:01:20+00:00",
        prospect: 0,
      },
      {
        body: "Possible thyroid disease ",
        date: "2022-11-23 16:03:46+00:00",
        prospect: 1,
      },
      {
        body: "Celiac, Iron Deficient anemia, malabsorption ",
        date: "2022-11-23 16:03:55+00:00",
        prospect: 1,
      },
      {
        body: "Possible thyroid disease ",
        date: "2022-11-23 16:04:35+00:00",
        prospect: 1,
      },
    ],
  },
];
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
                    <MessageList message_data={tylee_sid[0].data} />
                    <ChatArea />
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
