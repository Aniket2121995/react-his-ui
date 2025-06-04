import React, { useState } from "react";
import PatientCard from "./PatientCard";

function App() {
  const [patients, setPatients] = useState([
    { name: "Ahmed", email: "ahmed@example.com", city: "Riyadh" },
    { name: "Sara", email: "sara@example.com", city: "Jeddah" },
  ]);

  const [newPatient, setNewPatient] = useState({ name: "", email: "", city: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleAddPatient = () => {
    if (newPatient.name && newPatient.email && newPatient.city) {
      setPatients([...patients, newPatient]);
      setNewPatient({ name: "", email: "", city: "" });
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>React Patient Dashboard</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Name"
          value={newPatient.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={newPatient.email}
          onChange={handleChange}
        />
        <input
          name="city"
          placeholder="City"
          value={newPatient.city}
          onChange={handleChange}
        />
        <button onClick={handleAddPatient}>Add Patient</button>
      </div>

      {patients.map((patient, index) => (
        <PatientCard key={index} {...patient} />
      ))}
    </div>
  );
}

export default App;
