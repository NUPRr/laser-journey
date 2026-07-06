import "../styles/login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/auth";


function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSignup = async (e) => {

    e.preventDefault();

    if (form.password !== form.confirmPassword) {

      alert("Passwords do not match");

      return;

    }

    try {

      await API.post("/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      const login = await API.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", login.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(login.data.user)
      );

      navigate("/dashboard");

    } catch (err) {

      alert(err.response?.data?.message || "Signup Failed");

    }

  };

  return (

    <div className="login-page">

      <form className="login-card" onSubmit={handleSignup}>

        <h1>Create Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />

        <button type="submit">

          Create Account

        </button>

        <p>

          Already have an account?

          <Link to="/login"> Login</Link>

        </p>

      </form>

    </div>

  );

}

export default Signup;