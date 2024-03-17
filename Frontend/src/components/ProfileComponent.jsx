export function ProfileComponent({ user }) {
  return (
    <div
      className="rounded-lg mt-12 mx-4 shadow-md h-fit w-64 px-4 py-4 bg-gradient-to-b from-slate-100 to-white"
    >
      <div
        className="relative items-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2 flex flex-col justify-center mx-16"
      >
        <span class="font-medium text-gray-500 dark:text-gray-300">
          {user.firstName[0]}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold text-gray-800">{user.firstName}</p>
        <p className="text-gray-500 text-sm mt-1">Plumber</p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mt-2">
        <div className="flex flex-col items-center">
          <b>3</b>
          <p className="text-gray-500 text-xs ps-2">Proficiency</p>
        </div>
        <div className="flex flex-col items-center">
          <b>4.9/5</b>
          <p className="text-gray-500 text-xs px-2">Rating</p>
        </div>
        <div className="flex flex-col items-center">
          <b>10</b>
          <p className="text-gray-500 text-xs px-2">Connections</p>
        </div>
      </div>
    </div>
  );
}
