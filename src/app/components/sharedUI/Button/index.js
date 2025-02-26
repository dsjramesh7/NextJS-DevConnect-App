import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-red-500 px-4 py-2 rounded-lg outline-none text-white font-semibold">
      {name}
    </button>
  );
};

export default Button;
