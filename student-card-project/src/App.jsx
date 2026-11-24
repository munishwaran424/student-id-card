
import React, { useState } from "react";
import {
  GraduationCap,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Printer,
  RotateCcw
} from "lucide-react";
import "./App.css";

function App() {
  const initialData = {
    name: "Dinesh A",
    studentId: "311824103008",
    department: "Artificial Intelligence",
    year: "2026 - 2027",
    email: "student@gmail.com",
    phone: "+91 9876543210",
    college: "MOHAMED SATHAK AJ COLLEGE",
    bloodGroup: "O+"
  };

  const [student, setStudent] = useState(initialData);
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setStudent(initialData);
    setPhoto("");
  };

  return (
    <div className="app">

      <header className="navbar">
        <h2><GraduationCap /> Student Card</h2>
        <span>STUDENT ID GENERATOR</span>
      </header>

      <section className="hero">
        <p>STUDENT MANAGEMENT SYSTEM</p>
        <h1>Create Your Student ID Card</h1>
        <p className="subtitle">
          Enter your details and generate your digital identity card.
        </p>
      </section>

      <div className="container">

        {/* Student Form */}

        <div className="form-section">

          <h2>Student Details</h2>

          <label>Full Name</label>
          <div className="input-box">
            <User />
            <input
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter student name"
            />
          </div>

          <label>Student ID</label>
          <input
            name="studentId"
            value={student.studentId}
            onChange={handleChange}
            placeholder="Enter student ID"
          />

          <label>Department</label>
          <input
            name="department"
            value={student.department}
            onChange={handleChange}
            placeholder="Enter department"
          />

          <label>Academic Year</label>
          <div className="input-box">
            <Calendar />
            <input
              name="year"
              value={student.year}
              onChange={handleChange}
            />
          </div>

          <label>Email Address</label>
          <div className="input-box">
            <Mail />
            <input
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <label>Phone Number</label>
          <div className="input-box">
            <Phone />
            <input
              name="phone"
              value={student.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>

          <label>College Name</label>
          <input
            name="college"
            value={student.college}
            onChange={handleChange}
          />

          <label>Blood Group</label>
          <select
            name="bloodGroup"
            value={student.bloodGroup}
            onChange={handleChange}
          >
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <label>Upload Student Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
          />

          <div className="buttons">
            <button className="reset-btn" onClick={resetForm}>
              <RotateCcw size={16} /> Reset
            </button>

            <button
              className="print-btn"
              onClick={() => window.print()}
            >
              <Printer size={16} /> Print Card
            </button>
          </div>

        </div>

        {/* Student Card Preview */}

        <div className="preview-section">

          <h2>Live ID Card Preview</h2>

          <div className="student-card">

            <div className="card-header">
              <GraduationCap size={35} />
              <div>
                <h3>{student.college}</h3>
                <p>STUDENT IDENTITY CARD</p>
              </div>
            </div>

            <div className="card-content">

              <div className="photo">
                {photo ? (
                  <img src={photo} alt="Student" />
                ) : (
                  <User size={55} />
                )}
              </div>

              <div className="student-info">
                <h2>{student.name || "Student Name"}</h2>
                <p>{student.department}</p>
                <p><b>ID:</b> {student.studentId}</p>
              </div>

            </div>

            <div className="card-details">

              <p><b>Academic Year:</b> {student.year}</p>
              <p><b>Email:</b> {student.email}</p>
              <p><b>Phone:</b> {student.phone}</p>
              <p><b>Blood Group:</b> {student.bloodGroup}</p>

            </div>

            <div className="card-footer">
              <MapPin size={15} />
              <span>{student.college}</span>
            </div>

          </div>

          <p className="preview-text">
            Your student ID card updates automatically.
          </p>

        </div>

      </div>

      <footer>
        © 2026 Student Card Generator | React JS Project
      </footer>

    </div>
  );
}

export default App;
