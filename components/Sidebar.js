import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <>
      <div>
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <Navigation></Navigation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
