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

export default function MessageList() {
  return (
    <>
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
                  <small class="text-gray-500">{message.date_sent}</small>
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
      </div>
    </>
  );
}
