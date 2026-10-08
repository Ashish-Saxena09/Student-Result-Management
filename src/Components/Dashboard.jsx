import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const students = useSelector((state) => state.Student.studentList);
  const totalStudent = students.length;

  const passed = students.filter((student) => {
    return (
      student.htmlMarks >= 40 &&
      student.cssMarks >= 40 &&
      student.javascriptMarks >= 40 &&
      student.reactMarks >= 40
    );
  });

  const failed = students.filter((student) => {
    return (
      student.htmlMarks < 40 ||
      student.cssMarks < 40 ||
      student.javascriptMarks < 40 ||
      student.reactMarks < 40
    );
  });

  return (
    <div className="dashboard">
      <h2>Dashboard 📊</h2>
      <p>Total Student: {totalStudent}</p>
      <p>Passed: {passed.length}</p>
      <p>Failed: {failed.length}</p>
    </div>
  );
}
