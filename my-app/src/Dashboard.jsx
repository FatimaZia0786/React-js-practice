import React from "react";

function AttendanceDashboard() {
  const students = [
    { id: 101, name: "Ali Khan", present: true },
    { id: 102, name: "Sara Malik", present: false },
    { id: 103, name: "Ahmed Raza", present: true },
    { id: 104, name: "Ayesha Bibi", present: false },
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>🎓 Student Attendance Dashboard - Faisalabad College</h2>

      {/* Summary Section */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div>📊 Total Students: {students.length}</div>
        <div>✅ Present Today: {students.filter((s) => s.present).length}</div>
        <div>❌ Absent Today: {students.filter((s) => !s.present).length}</div>
      </div>

      {/* Table Section */}
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.present ? "Present" : "Absent"}</td>
              <td>
                <button>Edit Attendance</button>
                <button style={{ marginLeft: "10px" }}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceDashboard;
