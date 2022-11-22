import {
  ChatBubbleBottomCenterIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

const navigation = [
  { name: "Contacts", href: "/contacts", icon: UsersIcon },
  {
    name: "Chat",
    href: "/chat",
    icon: ChatBubbleBottomCenterIcon,
  },
];

export default function Navigation() {
  return (
    <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <item.icon className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
