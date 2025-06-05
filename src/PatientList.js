import React, { useEffect, useState } from "react";
import PatientCard from "./PatientCard";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setPatients(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // ✅ EMPTY dependency array!

  if (loading) return <p>Loading patient data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>Fetched Patients</h3>
     {patients.map((p) => (
  <PatientCard
    key={p.id}
    name={p.name}
    email={p.email}
    city={p.address.city}
  />
))}
    </div>
  );
};

export default PatientList;
