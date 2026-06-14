import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
// import Dashboard from './dashboard';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://student-management-p6ht.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      localStorage.setItem("token", data.token);

      //  alert("Added Successfully");
      if (res.ok) {
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="body">
      <div className="regContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Sign in</button>
        </form>
      </div>

      <div className="reqSigninbody">
        <div className="reqSignin">
          <h1>New User!</h1>
          <p>
            Please sing up first and make an <br /> account.
          </p>
          <Link to="/">
            <button type="submit">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
