import logo from "./assets/O7DCE10.jpg";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Popup from "./Popup.jsx";
import Login from "./Login.jsx";
import { useNavigate } from "react-router-dom";
import Career from "./Career.jsx";
import About from "./About.jsx";
import Setting from "./Setting.jsx";

function Dashboard() {
  const [search,setSearch] = useState("")
  const [editStudent, setEditStudent] = useState("");
  const [student, setStudent] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [pop, setPop] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const navigate = useNavigate();

  const fetchStudetn = async () => {
    const response = await fetch("https://student-management-p6ht.onrender.com/students");
    const data = await response.json();

    setStudent(data);
  };

  useEffect(() => {
    fetchStudetn();
  }, []);

  const searchHandle = student.filter((item)=>
     item.name.toLowerCase().includes(search.toLowerCase()))
  

  const deletehandle = async () => {
    if(!selectedId){
       alert("Please Select first");
       return;
    }
    const isConfirm = confirm("Are you confirm to delete");
    if (!isConfirm) {
      return;
    }
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://student-management-p6ht.onrender.com/students/${selectedId}`,
      {
        method: "DELETE",
  
      },
    );
    fetchStudetn();
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <img src={logo} alt="logo" />

          <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
          <button onClick={() => setActivePage("career")}>Career</button>
          <button onClick={() => setActivePage("About us")}>About us</button>

          <div className="s">
            <button onClick={() => setActivePage("setting")}>Setting</button>
            <button onClick={() => navigate("/login")}>Sign out</button>
          </div>
        </div>
        <div className="right">
          <header className="header">
            <h2>SDM</h2>
            <h4>Student Data Management</h4>

            <input
              type="text"
              placeholder="Search by student"
              title="Search by student"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
          

            <button className="bt" onClick={deletehandle} title="Delete">
              Delete
            </button>
            <button
              className="btn"
              title="Update"
              onClick={() => {
                const selectedStudent = student.find(
                  (s) => s._id === selectedId,
                );
                // console.log(selectedStudent);

                setEditStudent(selectedStudent);

                setPop(true);
              }}
            >
              Update
            </button>
            <button
              className="btn"
              onClick={() => {
                setEditStudent(null);
                setPop(true);
              }}
              title="Add new student"
            >
              + Add Student
            </button>
            {pop && (
              <Popup
                setPop={setPop}
                fetchStudetn={fetchStudetn}
                editStudent={editStudent}
              />
            )}
          </header>
          {activePage === "career" && <Career />}
          {activePage === "About us" && <About />}
          {activePage === "setting" && <Setting />}
          {activePage === "dashboard" && (
            <div className="tableset">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>REG NO</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>CLASS</th>
                    <th>DOB</th>
                    <th>FATHER NAME</th>
                    <th>FATHER JOB</th>
                    <th>GRADE</th>
                  </tr>
                </thead>
                <tbody>
                  {searchHandle.map((student) => (
                    <tr key={student._id}>
                      <td>
                        <input
                          type="checkbox"
                          onChange={() => setSelectedId(student._id)}
                        />
                      </td>
                      <td>{student.RegNo}</td>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>{student.classes}</td>
                      <td>{student.dateOfBirth}</td>
                      <td>{student.father_name}</td>
                      <td>{student.father_job}</td>
                      <td>{student.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
