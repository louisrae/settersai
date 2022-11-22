import Link from "next/link";
const people = [
  {
    full_name: "Louis-Rae",
    recent_message: "Yes",
    date_sent: "19 April",
    chat_link: "/chat/lr",
    active: true,
  },
  {
    full_name: "Patrick Dineen",
    recent_message: "No",
    date_sent: "18 April",
    chat_link: "/chat/pat",
    active: false,
  },
  {
    full_name: "Amanda Little",
    recent_message: "Hello",
    date_sent: "17 April",
    chat_link: "/chat/amanda",
    active: false,
  },
  {
    full_name: "Tylee Groll",
    recent_message: "Fill out the KPIs",
    date_sent: "16 April",
    chat_link: "/chat/tylee",
    active: false,
  },
  {
    full_name: "Caycee Ohl",
    recent_message: "Michael pays for dinner",
    date_sent: "15 April",
    chat_link: "/chat/caycee",
    active: false,
  },
  {
    full_name: "Louis-Rae",
    recent_message: "Yes",
    date_sent: "19 April",
    chat_link: "/chat/lr",
    active: false,
  },
  {
    full_name: "Patrick Dineen",
    recent_message: "No",
    date_sent: "18 April",
    chat_link: "/chat/pat",
    active: false,
  },
  {
    full_name: "Amanda Little",
    recent_message: "Hello",
    date_sent: "17 April",
    chat_link: "/chat/amanda",
    active: false,
  },
  {
    full_name: "Tylee Groll",
    recent_message: "Fill out the KPIs",
    date_sent: "16 April",
    chat_link: "/chat/tylee",
    active: false,
  },
  {
    full_name: "Caycee Ohl",
    recent_message: "Michael pays for dinner",
    date_sent: "15 April",
    chat_link: "/chat/caycee",
    active: false,
  },
  {
    full_name: "Caycee Ohl",
    recent_message: "Michael pays for dinner",
    date_sent: "15 April",
    chat_link: "/chat/caycee",
    active: false,
  },
  {
    full_name: "Louis-Rae",
    recent_message: "Yes",
    date_sent: "19 April",
    chat_link: "/chat/lr",
    active: false,
  },
  {
    full_name: "Patrick Dineen",
    recent_message: "No",
    date_sent: "18 April",
    chat_link: "/chat/pat",
    active: false,
  },
  {
    full_name: "Amanda Little",
    recent_message: "Hello",
    date_sent: "17 April",
    chat_link: "/chat/amanda",
    active: false,
  },
];

export default function ChatList() {
  return (
    <>
      <div class="search flex-2 pb-6 px-2">
        <input
          type="text"
          class="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
          placeholder="Search"
        />
      </div>
      <div class="flex-1 overflow-auto px-2">
        {people.map((person) => (
          <Link
            className={
              person.active === true
                ? "entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-1 rounded p-4 flex shadow-md border-b-2 border-red-300"
                : "entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-1 rounded p-4 flex shadow-md"
            }
            href={person.chat_link}
          >
            <div class="flex-1 px-2">
              <div class="truncate w-32">
                <span class="text-gray-800">{person.full_name}</span>
              </div>
              <div>
                <small class="text-gray-600">{person.recent_message}</small>
              </div>
            </div>
            <div class="flex-2 text-right">
              <div>
                <small class="text-gray-500">{person.date_sent}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
