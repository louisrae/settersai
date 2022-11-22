import { useSession } from "next-auth/react";
import React from "react";

import ChatList from "../components/ChatList";
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
        <div class="w-full h-screen">
          <div class="flex h-full">
            <div class="hidden xl:block sm:flex-2 w-64 bg-gray-200">
              <Sidebar />
            </div>

            <div class="flex-1 bg-gray-100 w-full h-full">
              <div class="main-body container m-auto w-11/12 h-full flex flex-col">
                <div class="main flex-1 flex flex-col">
                  <div class="hidden lg:block heading flex-2 mb-5"></div>
                  <div class="flex-1 flex h-full">
                    <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6 ">
                      <ChatList />
                    </div>
                    <div class="chat-area flex-1 flex flex-col">
                      <div class="flex-3 py-5 mb-8 border-b-2 border-gray-200">
                        <h1>Louis-Rae</h1>
                      </div>
                      <div class="messages flex-1 overflow-auto">
                        {our_messages.map((message) => (
                          <div class="message mb-4 flex">
                            <div class="flex-2">
                              <div class="w-12 h-12 relative"></div>
                            </div>
                            <div class="flex-1 px-2">
                              <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                                <span>{message.recent_message}</span>
                              </div>
                              <div class="pl-4">
                                <small class="text-gray-500">
                                  {message.date_sent}
                                </small>
                              </div>
                            </div>
                          </div>
                        ))}
                        {their_messages.map((message) => (
                          <div class="message me mb-4 flex text-right">
                            <div class="flex-1 px-2">
                              <div class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                                {message.recent_message}
                              </div>
                              <div class="pr-4 text-gray-500">
                                <small>{message.date_sent}</small>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <form>
                        <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                          <button class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg
                              aria-hidden="true"
                              class="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <button class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg
                              aria-hidden="true"
                              class="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <textarea
                            rows="4"
                            class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                          ></textarea>
                          <button
                            type="submit"
                            class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                          >
                            <svg
                              aria-hidden="true"
                              class="w-6 h-6 rotate-90"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default Chat;
