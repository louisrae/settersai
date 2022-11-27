const conversation_sid = [
  {
    Body: "Please fucking work",
    Direction: "outbound-api",
    SentDate: 1668716597000,
    Sid: "SM5b1153b8779bc670f900e6c65888ef62",
    Status: "delivered",
    To: "+17025391284",
  },
  {
    Body: "Get off it mate ",
    Direction: "inbound",
    SentDate: 1668716629000,
    Sid: "SMf8b2944f539dcb04ad8d45b0b9e6facc",
    Status: "received",
    To: "+17174938126",
  },
  {
    Body: "Thank fuck",
    Direction: "outbound-api",
    SentDate: 1668716636000,
    Sid: "SMb050c409a013221a6d8a9458df3f6c7e",
    Status: "delivered",
    To: "+17025391284",
  },
];

export default function MessageList() {
  return (
    <>
      <div class="chat-area flex-1 flex flex-col">
        <div class="flex-3 py-5 mb-8 border-b-2 border-gray-200">
          <h1>Conversation</h1>
        </div>

        {conversation_sid.map((message) => (
          <div
            className={
              message.Status !== "delivered"
                ? "message me mb-4 flex"
                : "message me mb-4 flex text-right"
            }
          >
            <div class="flex-1 px-2">
              <div
                className={
                  message.Status !== "delivered"
                    ? "inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700"
                    : "inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                }
              >
                {message.Body}
              </div>
              <div
                className={
                  message.Status !== "delivered" ? "pl-4" : "pr-4 text-gray-500"
                }
              >
                <small class="text-gray-500">{message.SentDate}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
