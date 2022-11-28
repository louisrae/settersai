import Link from "next/link";

export const meta_sid = [
  {
    meta_data: {
      full_name: "Caycee Ohl",
      date_sent: "2022-11-23 16:01:20+00:00",
      recent_message: "Any relief is amazing",
      chat_link: "/chat/caycee",
      active: false,
    },
    message_data: [
      {
        body: "Hey Caycee,\n\nAustin here from Dr Maggie's team\n\nI saw you just joined our Transform Autoimmune Diseases group and I'm wondering what made you join\n\nWhat are the biggest health struggles you are working through right now?",
        date: "2022-11-23 16:01:20+00:00",
        prospect: 0,
      },
      {
        body: "Possible thyroid disease ",
        date: "2022-11-23 16:03:46+00:00",
        prospect: 1,
      },
    ],
  },
  {
    meta_data: {
      full_name: "Patrick Dineen",
      date_sent: "2022-11-23 16:01:20+00:00",
      recent_message: "Yes",
      chat_link: "/chat/pat",
      active: false,
    },
    message_data: [
      {
        body: "Hey Caycee,\n\nAustin here from Dr Maggie's team\n\nI saw you just joined our Transform Autoimmune Diseases group and I'm wondering what made you join\n\nWhat are the biggest health struggles you are working through right now?",
        date: "2022-11-23 16:01:20+00:00",
        prospect: 0,
      },
      {
        body: "Possible thyroid disease ",
        date: "2022-11-23 16:03:46+00:00",
        prospect: 1,
      },
    ],
  },
  {
    meta_data: {
      full_name: "Tylee Groll",
      date_sent: "2022-11-23 16:01:20+00:00",
      recent_message: "This is working pretty well but does this keep going",
      chat_link: "/chat/tylee",
      active: false,
    },
    message_data: [
      {
        body: "Hey Caycee,\n\nAustin here from Dr Maggie's team\n\nI saw you just joined our Transform Autoimmune Diseases group and I'm wondering what made you join\n\nWhat are the biggest health struggles you are working through right now?",
        date: "2022-11-23 16:01:20+00:00",
        prospect: 0,
      },
      {
        body: "Possible thyroid disease ",
        date: "2022-11-23 16:03:46+00:00",
        prospect: 1,
      },
    ],
  },
  {
    meta_data: {
      full_name: "Amanda Little",
      date_sent: "2022-11-25 16:01:20+00:00",
      recent_message: "Good",
      chat_link: "/chat/amanda",
      active: false,
    },
    message_data: [
      {
        body: "Hey Caycee,\n\nAustin here from Dr Maggie's team\n\nI saw you just joined our Transform Autoimmune Diseases group and I'm wondering what made you join\n\nWhat are the biggest health struggles you are working through right now?",
        date: "2022-11-23 16:01:20+00:00",
        prospect: 0,
      },
      {
        body: "Possible thyroid disease ",
        date: "2022-11-23 16:03:46+00:00",
        prospect: 1,
      },
    ],
  },
  {
    meta_data: {
      full_name: "Louis-Rae",
      date_sent: "2022-11-29 16:01:20+00:00",
      recent_message: "Yes",
      chat_link: "/chat/lr",
      active: false,
    },
    message_data: [
      {
        body: "Hey Caycee,\n\nAustin here from Dr Maggie's team\n\nI saw you just joined our Transform Autoimmune Diseases group and I'm wondering what made you join\n\nWhat are the biggest health struggles you are working through right now?",
        date: "2022-11-23 16:01:20+00:00",
        prospect: 0,
      },
      {
        body: "Possible thyroid disease ",
        date: "2022-11-23 16:03:46+00:00",
        prospect: 1,
      },
    ],
  },
];

export default function ChatList() {
  return (
    <>
      <div class="search flex-2 pb-6 px-2">
        <input
          type="text"
          class="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200 mt-5"
          placeholder="Search"
        />
      </div>
      <div class="flex-1 overflow-auto px-2">
        {meta_sid.map((person) => (
          <Link
            className={
              person.meta_data.active === true
                ? "entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-1 rounded p-4 flex shadow-md border-b-2 border-red-300"
                : "entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-1 rounded p-4 flex shadow-md"
            }
            href={person.meta_data.chat_link}
          >
            <div class="flex-1 px-2">
              <div class="truncate w-32">
                <span class="text-gray-800">{person.meta_data.full_name}</span>
              </div>
              <div>
                <small class="text-gray-600">
                  {person.meta_data.recent_message}
                </small>
              </div>
            </div>
            <div class="flex-2 text-right">
              <div>
                <small class="text-gray-500">
                  {person.meta_data.date_sent}
                </small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
