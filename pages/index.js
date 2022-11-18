import {
  ChatBubbleBottomCenterIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Contacts", href: "#", icon: UsersIcon, current: true },
  { name: "Chat", href: "#", icon: ChatBubbleBottomCenterIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden"></div>
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <button className="text-2xl font-semibold text-gray-900">
                  Please sign in
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
