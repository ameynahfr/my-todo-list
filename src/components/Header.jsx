import { FcTodoList } from "react-icons/fc";

const Header = () => {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="w-10 h-10 mr-4">
        <FcTodoList className="w-full h-full" />
      </div>
      <div>
        <h1 className="text-4xl text-cyan-800 font-bold">
          My To Do <span className="text-gray-700">List</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
