// import Sidebar from "../components/Sidebar";

export default function ContactTable({ contact }) {
  return (
    <table className="min-w-full table-fixed divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            First Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Last Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Phone
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Created
          </th>
          <th
            scope="col"
            className="px-3 first-letter:py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Tags
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {contact.map((person) => (
          <tr>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.f_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.l_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.phone}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.created}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.tag}
            </td>
            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit<span className="sr-only">, {person.name}</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
