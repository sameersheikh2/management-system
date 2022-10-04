import React, { useState } from "react";

const Form = () => {
  const [teacherName, setTeacherName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [department, setDepartment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const teachers = {
      teacherName: teacherName,
      email: email,
      contact: contact,
      department: department,
    };
    fetch("http://localhost:5000/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teachers),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form
      className="flex flex-col w-[95%] m-auto mt-9 border border-teal-600 p-2"
      onSubmit={submitHandler}
    >
      <div className="flex w-[95%]">
        <div className="flex flex-col m-5">
          <label htmlFor="name" className="my-1">
            Teacher name*
          </label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <label htmlFor="email" className="my-1">
            Email*
          </label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="number" className="my-1">
            Contact number*
          </label>
          <input
            type="number"
            name="number"
            required
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="mt-9 ml-10">
          <span>Department*</span>
          <select
            name="department"
            id=""
            className="rounded cursor-pointer "
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="Accounting and Business Law">
              Accounting and Business Law
            </option>
            <option value="Art and Architectural History">
              Art and Architectural History
            </option>
            <option value="Biology">Biology</option>
            <option value="Chemistry and Biochemistry">
              {" "}
              Chemistry and Biochemistry
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="History">History</option>
            <option value="Physics and Astronomy">Physics and Astronomy</option>
          </select>
        </div>
      </div>
      <button className="bg-teal-700 text-white rounded w-[10%] m-auto">
        Submit
      </button>
    </form>
  );
};

export default Form;
