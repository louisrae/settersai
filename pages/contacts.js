import { PrismaClient } from "@prisma/client";
import ContactTable from "../components/ContactTable";
import Sidebar from "../components/Sidebar";

import { useSession } from "next-auth/react";
import React from "react";
const prisma = new PrismaClient();

const Contacts = (props) => {
  const { data: session, status } = useSession({ required: true });
  if (status === "authenticated") {
    return (
      <>
        <div>
          <Sidebar></Sidebar>
          <div className="flex flex-1 flex-col md:pl-64">
            <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden"></div>
            <main className="flex-1">
              <div className="py-6">
                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                      <h1 className="text-xl font-semibold text-gray-900">
                        Users
                      </h1>
                      <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their
                        name, title, email and role.
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                      <input
                        id="mobile-search"
                        className="block w-full rounded-md border border-gray bg-gray bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray focus:border-transparent  sm:text-sm"
                        placeholder="Search for contact"
                        type="search"
                        name="search"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                          <ContactTable contact={props.data}></ContactTable>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
};

export async function getServerSideProps() {
  const allUsers = await prisma.api_maggiecontacts.findMany();
  return {
    props: {
      data: JSON.parse(
        JSON.stringify(allUsers, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      ),
    },
  };
}

export default Contacts;
