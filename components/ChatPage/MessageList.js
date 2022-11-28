export default function MessageList({ message_data }) {
  return (
    <>
      <div class="chat-area flex-1 flex flex-col">
        <div class="flex-3 py-5 mb-8 border-b-2 border-gray-200">
          <h1>Conversation</h1>
        </div>

        {message_data.map((message) => (
          <div class="message me mb-2 flex">
            <div class="flex-1 px-2">
              <div
                className={
                  message.prospect !== 0
                    ? "inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700"
                    : "inline-block bg-blue-600 rounded-full p-2 px-6 text-white"
                }
              >
                {message.body}
              </div>
              <div
                className={
                  message.prospect !== 0 ? "pl-4" : "pr-4 text-gray-500"
                }
              >
                <small class="text-gray-500">{message.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
