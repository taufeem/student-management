import React, { useState } from "react";
import "./popup.css";
function Popup({setPop,fetchStudetn,editStudent}) {
 
  const [name, setName] = useState(editStudent?.name || "");
  const [age, setAge] = useState(editStudent?.age || "");
  const [classes, setStudentClass] = useState(editStudent?.classes || "");
  const [dateOfBirth, setDateOfBirth] = useState(editStudent?.dateOfBirth || "");
  const [phoneNumber, setPhoneNumber] = useState(editStudent?.phoneNumber || "");
  const [grade, setGrade] = useState(editStudent?.grade || "");
  const [father_name, setfather_name] = useState(editStudent?.father_name || "");
  const [father_job, setfather_job] = useState(editStudent?.father_job || "");
  
  
  const submitData = async (e) => {
    e.preventDefault();

    const student = {
      name,
      age,
      classes,
      dateOfBirth,
      phoneNumber,
      grade,
      father_name,
      father_job,
    };
    if (editStudent) {
   await fetch(
      `http://localhost:3000/students/${editStudent._id}`,
      {
         method: "PUT",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(student)
      }
   );
}

else {
   await fetch(
      "http://localhost:3000/students",
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(student)
      }
   );
}
    setPop(false);
    fetchStudetn();
  };

  return (
    <>
      <div className="p"></div>
      
    
        <div className="modal">
          <div className="form-header">
          <h2>Admission form</h2>
          <button onClick={()=>setPop(false)}>Cancel</button>
          </div>
          <br />
          <form onSubmit={submitData}>
            <div className="label-input">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="label-input">
              <label htmlFor="">Age</label>
              <input
                type="number"
                placeholder="Enter age"
                value={age}
                 required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="label-input">
              <label htmlFor="">Class</label>
              <input
                type="number"
                placeholder="Enter class"
                value={classes}
                 required
                onChange={(e) => setStudentClass(e.target.value)}
              />
            </div>
            <div className="label-input">
              <label htmlFor="">DOB</label>
              <input
                type="number"
                placeholder="Enter DOB"
                value={dateOfBirth}
                 required
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="label-input">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                placeholder="Enter phone number"
                value={phoneNumber}
                 required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="label-input">
              <label htmlFor="">Grade</label>
              <input
                type="text"
                placeholder="Enter Grade"
                value={grade}
                 required
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            <div className="label-input">
              <label htmlFor="">Father name</label>
              <input
                type="text"
                placeholder="Enter father name"
                value={father_name}
                 required
                onChange={(e) => setfather_name(e.target.value)}
              />
            </div>
            <div className="label-input">
              <label htmlFor="">Occupation</label>
              <input
                type="text"
                placeholder="Enter occupation"
                value={father_job}
                 required
                onChange={(e) => setfather_job(e.target.value)}
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
  
    </> 
  );
}
export default Popup;
