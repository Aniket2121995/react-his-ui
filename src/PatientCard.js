import React from "react";

const PatientCard = ({ name, email, city }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "12px auto",
      maxWidth: "400px",
      boxShadow: "0 0 8px rgba(0,0,0,0.05)"
    }}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

export default PatientCard;
