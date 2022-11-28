import Link from "next/link";

import { meta_sid } from "../convos_api";

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
