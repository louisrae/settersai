import ChatList from "../../components/ChatPage/ChatList";
import Sidebar from "../../components/Sidebar";

import ChatArea from "../../components/ChatPage/ChatArea";

export default function ChatUi(props) {
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
                  <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6 ">
                    <ChatList />
                  </div>
                  <div class="chat-area flex-1 flex flex-col">
                    <>
                      <div class="flex-3 py-5 mb-8 border-b-2 border-gray-200">
                        <h1>Conversation</h1>
                      </div>
                      <div class="overflow-y-scroll h-96">
                        {props.data.map((message) => (
                          <div
                            className={
                              message.prospect !== "0"
                                ? "message me mb-2 flex"
                                : "message me mb-2 flex text-right"
                            }
                          >
                            <div class="flex-1 px-2">
                              <div
                                className={
                                  message.prospect !== "0"
                                    ? "inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700"
                                    : "inline-block bg-blue-500 rounded-full p-2 px-6 text-white"
                                }
                              >
                                {message.body}
                              </div>
                              <div
                                className={
                                  message.prospect !== "0"
                                    ? "pl-4"
                                    : "pr-4 text-gray-500"
                                }
                              >
                                <small class="text-gray-500">
                                  {message.date}
                                </small>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "http://127.0.0.1:8000/message_list?number=+18303510104"
  );
  const data1 = await res.json();
  const data = JSON.parse(data1);

  // Pass data to the page via props
  return { props: { data } };
}
