import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../Toolkit/StudentSlice";

export default function StudentList({ setEditId }) {
  const studentList = useSelector((state) => state.Student.studentList);
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const [filter, setFilter] = useState("All");
  const filteredStudents = studentList.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );
  const resultStudents = filteredStudents.filter((student) => {
    const passed =
      student.htmlMarks >= 40 &&
      student.cssMarks >= 40 &&
      student.javascriptMarks >= 40 &&
      student.reactMarks >= 40;

    if (filter === "Pass") return passed;
    if (filter === "Fail") return !passed;

    return true;
  });

  return (
    <div className="student-card">
      <h2>Student List 👥</h2>
      <input
        type="text"
        placeholder="search 🔍"
        value={search}
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All Students</option>
        <option value="Pass">Pass ✅</option>
        <option value="Fail">Fail ❌</option>
      </select>

      {resultStudents.map((student) => (
        <div key={student.id}>
          <p>Name - {student.name}</p>
          <p>Roll number - {student.rollNumber}</p>
          <p>Course - {student.course}</p>
          <p>Html Marks - {student.htmlMarks}</p>
          <p>Css Marks - {student.cssMarks}</p>
          <p>Javascript Marks - {student.javascriptMarks}</p>
          <p>React Marks - {student.reactMarks}</p>
          <button
            onClick={() => {
              dispatch(deleteStudent(student.id));
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setEditId(student.id);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
