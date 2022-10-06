import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Students = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/students");
        const data = await res.json();
        setStudentsData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full mt-7">
      <Link to="/addStudent">
        <button className="m-3 px-[6px] rounded text-white hover:bg-teal-600 bg-teal-700">
          Add
        </button>
      </Link>
      <table className="table-auto m-auto w-[95%] border ">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th>Name</th>
            <th>Course</th>
            <th>Semester</th>
            <th>Contact No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr className="text-center border" key={student._id}>
              <td className="cursor-pointer hover:underline hover:text-blue-300">
                {student.studentName}
              </td>
              <td>{student.course}</td>
              <td>{student.contactNumber}</td>
              <td className="cursor-pointer hover:underline hover:text-red-400">
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {studentsData.length === 0 ? (
        <span className="m-auto w-[100%] block text-center">
          No entry found!
        </span>
      ) : null}
    </div>
  );
};

export default Students;
