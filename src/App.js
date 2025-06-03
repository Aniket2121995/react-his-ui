import React from "react";
import PatientCard from "./PatientCard";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>React Patient Dashboard</h2>
      <PatientCard name="Ahmed" email="ahmed@example.com" city="Riyadh" />
      <PatientCard name="Sara" email="sara@example.com" city="Jeddah" />
    </div>
  );
}

export default App;