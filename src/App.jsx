import React, { useState } from "react";
import StudentForm from "./Components/StudentForm";
import Dashboard from "./Components/Dashboard";
import StudentList from "./Components/StudentList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  const [editId, setEditId] = useState(null);
  return (
    <div>
      <h1>Student Result Management</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/StudentForm"
            element={<StudentForm editId={editId} setEditId={setEditId} />}
          />
          <Route
            path="StudentList"
            element={<StudentList setEditId={setEditId} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
