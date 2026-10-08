import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../Toolkit/StudentSlice";

export default function StudentForm({ editId, setEditId }) {
  const studentList = useSelector((state) => state.Student.studentList);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    rollNumber: "",
    course: "",
    htmlMarks: "",
    cssMarks: "",
    javascriptMarks: "",
    reactMarks: "",
  });

  useEffect(() => {
    if (editId !== null) {
      const student = studentList.find((student) => student.id === editId);
      if (student) {
        setData(student);
      }
    }
  }, [editId, studentList]);
  return (
    <div className="student-form">
      <h2>Student Form 📝</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={data.rollNumber}
          onChange={(e) => {
            setData({ ...data, rollNumber: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Course"
          value={data.course}
          onChange={(e) => {
            setData({ ...data, course: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Html Marks"
          value={data.htmlMarks}
          onChange={(e) => {
            setData({ ...data, htmlMarks: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Css Marks"
          value={data.cssMarks}
          onChange={(e) => {
            setData({ ...data, cssMarks: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Javascript Marks"
          value={data.javascriptMarks}
          onChange={(e) => {
            setData({ ...data, javascriptMarks: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="React Marks"
          value={data.reactMarks}
          onChange={(e) => {
            setData({ ...data, reactMarks: e.target.value });
          }}
        />

        <button
          onClick={() => {
            if (editId === null) {
              dispatch(
                addStudent({
                  id: Date.now(),
                  ...data,
                  htmlMarks: Number(data.htmlMarks),
                  cssMarks: Number(data.cssMarks),
                  javascriptMarks: Number(data.javascriptMarks),
                  reactMarks: Number(data.reactMarks),
                }),
              );
            } else {
              dispatch(
                updateStudent({
                  id: editId,
                  ...data,
                  htmlMarks: Number(data.htmlMarks),
                  cssMarks: Number(data.cssMarks),
                  javascriptMarks: Number(data.javascriptMarks),
                  reactMarks: Number(data.reactMarks),
                }),
              );
              setEditId(null);
            }
            setData({
              name: "",
              rollNumber: "",
              course: "",
              htmlMarks: "",
              cssMarks: "",
              javascriptMarks: "",
              reactMarks: "",
            });
          }}
        >
          {editId === null ? "Add" : "Update"}
        </button>
      </form>
    </div>
  );
}
