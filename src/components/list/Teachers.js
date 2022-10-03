import React from "react";

const Teachers = () => {
  return (
    <table className="table-auto w-[50%] ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact No.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Teachers;
