const m_list = [
  {
    recent_message:
      "Hey there. We would like to invite you over to our office for a visit. How about it?",
    date_sent: "15 April",
    we_sent: true,
  },
  {
    recent_message:
      "Hey there. We would like to invite you over to our office for a visit. How about it?",
    date_sent: "16 April",
    we_sent: true,
  },

  {
    recent_message: "It's like a dream come true",
    date_sent: "17 April",
    we_sent: false,
  },
  {
    recent_message: "I accept. Thank you very much.",
    date_sent: "18 April",
    we_sent: false,
  },
  {
    recent_message: "It's like a dream come true",
    date_sent: "19 April",
    we_sent: false,
  },
];

export default function MessageList() {
  return (
    <>
      <div class="chat-area flex-1 flex flex-col">
        <div class="flex-3 py-5 mb-8 border-b-2 border-gray-200">
          <h1>Conversation</h1>
        </div>

        {m_list.map((message) => (
          <div
            className={
              message.we_sent === true
                ? "message me mb-4 flex"
                : "message me mb-4 flex text-right"
            }
          >
            <div class="flex-1 px-2">
              <div
                className={
                  message.we_sent === true
                    ? "inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700"
                    : "inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                }
              >
                {message.recent_message}
              </div>
              <div
                className={
                  message.we_sent === true ? "pl-4" : "pr-4 text-gray-500"
                }
              >
                <small class="text-gray-500">{message.date_sent}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
