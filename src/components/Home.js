import React from "react";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex mt-9 ml-3 justify-center h-[50vh] w-[70%] flex-col bg-teal-100  rounded">
      {/* <h2 className="text-3xl  font-semibold p-2 bg-teal-700 rounded">List</h2>
      <div className="m-3 text-lg">
        <Link to="/list/teachers">
          <h3 className="cursor-pointer w-[13%] hover:underline duration-300 ease-in-out">
            Teachers
          </h3>
        </Link>
        <Link to="/list/students">
          <h3 className="cursor-pointer w-[13%] hover:underline duration-300 ease-in-out">
            Students
          </h3>
        </Link>
      </div> */}
      <h1 className="text-2xl ml-1 text-black">College Management System</h1>
    </div>
  );
};

export default Home;
