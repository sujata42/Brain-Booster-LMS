import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth.js";

export function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    if (!form.email || !form.password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await loginUser({
        email: form.email,
        password: form.password
      });

      localStorage.setItem("demo_auth_token", result.token || "demo-token");
      if (result.user) {
        localStorage.setItem("demo_auth_user", JSON.stringify(result.user));
      }
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message || "Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="logo-mark">JBB</div>
        <h1>Login</h1>

        {errorMessage ? <div className="form-message form-message-error">{errorMessage}</div> : null}

        <div className="form-grid">
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="auth-meta">
          <label className="checkbox-row">
            <input
              name="rememberMe"
              type="checkbox"
              checked={form.rememberMe}
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>
          <a href="/">Forgot password?</a>
        </div>
        <button className="primary-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging In..." : "Login"}
        </button>
        <p className="auth-switch">
          Don&apos;t have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
