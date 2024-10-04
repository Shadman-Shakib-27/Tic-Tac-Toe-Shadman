import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue("X");
  };
  return (
    <button
      className="bg-gradient-to-br from-green-400 to-cyan-600 border border-gray-300 rounded-lg h-16 w-16 m-2 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out text-white text-2xl font-bold"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

const Board = () => {
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;
