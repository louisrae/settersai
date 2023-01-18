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
      <div class="overflow-y-scroll h-96">
        {meta_sid.map((person) => (
          <Link
            className={
              person.meta_data.active === true
                ? "entry cursor-pointer transform hover:bg-blue-200 duration-300 transition-transform bg-white mb-1 rounded p-4 flex shadow-md border-b-2 border-blue-300"
                : "entry cursor-pointer transform hover:bg-blue-200 duration-300 transition-transform bg-white mb-1 rounded p-4 flex shadow-md"
            }
            href={person.meta_data.chat_link}
          >
            <div class="flex-1">
              <div class="truncate w-36">
                <span class="text-gray-800">{person.meta_data.full_name}</span>
              </div>
              <div class="truncate w-44">
                <small class="text-gray-600">
                  {person.meta_data.recent_message}
                </small>
              </div>
            </div>
            <div class="text-right truncate w-20">
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
