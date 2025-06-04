import React, { useState } from "react";

function SimpleFormDemo() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Live Form Tracker</h3>

      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <br /><br />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <br /><br />

      <strong>Live Form State:</strong>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}

export default SimpleFormDemo;
