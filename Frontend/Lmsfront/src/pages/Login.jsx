import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // ← important

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/student/login", {
        username,
        password,
      });
      -localStorage.setItem("token", res.data.token);
      +localStorage.setItem("studentToken", res.data.token);

      alert("Login Successful!");

      // 👉 Redirect user to Dashboard
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[30%] flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center text-blue-600">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="p-3 border rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
