"use client";

import { useState } from "react";

const initial = {
  name: "",
  email: "",
  country: "",
  role: "user",
  hp: "",
};

export default function WaitlistForm({ source = "home" }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Could not submit form");
      }

      setStatus("success");
      setMessage("You are on the waitlist. We will keep you posted.");
      setForm(initial);
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form className="waitlist-form glass" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Name (optional)
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </label>
        <label>
          Country (optional)
          <input
            name="country"
            type="text"
            value={form.country}
            onChange={onChange}
            placeholder="Germany"
            autoComplete="country-name"
          />
        </label>
        <label>
          I am joining as
          <select name="role" value={form.role} onChange={onChange}>
            <option value="user">Future app user</option>
            <option value="organization">Organization / NGO</option>
          </select>
        </label>
      </div>

      <input
        name="hp"
        value={form.hp}
        onChange={onChange}
        className="hp"
        tabIndex={-1}
        autoComplete="off"
      />

      <button className="btn btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Joining..." : "Join the Waitlist"}
      </button>
      <p className="muted small">
        By joining, you agree to receive launch updates from SmileUp.
      </p>
      {message ? (
        <p className={status === "error" ? "error" : "success"}>{message}</p>
      ) : null}
    </form>
  );
}

