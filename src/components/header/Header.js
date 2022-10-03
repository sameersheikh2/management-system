import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-teal-700">
      <div className="flex justify-between">
        {/* <h2 className="text-xl font-semibold text-white">Management System</h2> */}
        <Link to="/">
          <h1 className="text-2xl font-bold font-serif text-white p-2">HOME</h1>
        </Link>
        <ul className="flex text-white font-medium text-lg">
          <Link>
            <li className="p-2 h-full hover:bg-teal-900 cursor-pointer duration-200 ease">
              Department
            </li>
          </Link>
          <Link to="/list/teachers">
            <li className="p-2 h-full hover:bg-teal-900 cursor-pointer duration-200 ease">
              Teachers
            </li>
          </Link>
          <Link to="/list/students">
            <li className="p-2 h-full hover:bg-teal-900 cursor-pointer duration-200 ease">
              Students
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
