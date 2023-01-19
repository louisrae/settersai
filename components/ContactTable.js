const headings = [
  "First Name",
  "Last Name",
  "Phone",
  "Email",
  "Created",
  "Tags",
];

export default function ContactTable({ contact }) {
  return (
    <table className="min-w-full table-fixed divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          {headings.map((head) => (
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              {head}
            </th>
          ))}

          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {contact.map((person) => (
          <tr>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.first_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.last_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.phone_num}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.created}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {person.tags}
            </td>
            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
