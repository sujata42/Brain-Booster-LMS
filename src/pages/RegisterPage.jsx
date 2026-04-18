import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth.js";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false
};

export function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
    setSuccessMessage("");

    if (!form.firstName || !form.lastName || !form.email) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (form.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!form.agreeToTerms) {
      setErrorMessage("Please agree to the Terms & Conditions.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await registerUser(form);
      setSuccessMessage(result.message || "Account created successfully.");
      setForm(initialForm);

      window.setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      setErrorMessage(
        error.message || "Could not create account. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card auth-card-tall" onSubmit={handleSubmit}>
        <div className="logo-mark">JBB</div>
        <h1>Create your account</h1>

        {errorMessage ? <div className="form-message form-message-error">{errorMessage}</div> : null}
        {successMessage ? (
          <div className="form-message form-message-success">{successMessage}</div>
        ) : null}

        <div className="form-grid">
          <label>
            <span>First Name</span>
            <input
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Last Name</span>
            <input
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={form.lastName}
              onChange={handleChange}
            />
          </label>
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
          <label>
            <span>Confirm Password</span>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className="checkbox-row">
          <input
            name="agreeToTerms"
            type="checkbox"
            checked={form.agreeToTerms}
            onChange={handleChange}
          />
          <span>I agree to all Terms &amp; Conditions</span>
        </label>
        <button className="primary-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Sign Up"}
        </button>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
