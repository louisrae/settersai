import Sidebar from "../components/Sidebar";
export default function Example() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden"></div>
        <main className="flex-1">
          <div className="py-6">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-xl font-semibold text-gray-900">
                    Conversations
                  </h1>
                  <p className="mt-2 text-sm text-gray-700">
                    A list of all the active conversations
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
                  <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <div className="min-h-screen bg-gray-100">
                      <div className="py-6">
                        <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                          <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
                            <div
                              aria-label="Sidebar"
                              className="sticky top-6 divide-y divide-gray-300 text-center"
                            >
                              Contacts
                            </div>
                          </div>
                          <main className="lg:col-span-9 xl:col-span-6 text-center">
                            Conversations
                          </main>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
