import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/teachers");
        const data = await res.json();
        setTeachersData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full mt-7">
      <Link to="/addTeacher">
        <button className="m-3 px-[6px] rounded text-white hover:bg-teal-600 bg-teal-700">
          Add Teacher
        </button>
      </Link>
      <table className="table-auto m-auto w-[95%] border ">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th>Teacher Name</th>
            <th>Department</th>
            <th>Contact No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachersData.map((teacher) => (
            <tr className="text-center border" key={teacher.index}>
              <td className="cursor-pointer hover:underline hover:text-blue-300">
                {teacher.teacherName}
              </td>
              <td>{teacher.department}</td>
              <td>{teacher.contact}</td>
              <td className="cursor-pointer hover:underline hover:text-red-400">
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {teachersData.length === 0 ? (
        <span className="m-auto w-[100%] block text-center">NO data </span>
      ) : null}
    </div>
  );
};

export default Teachers;
