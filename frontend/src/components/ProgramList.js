import React, { useEffect, useState } from "react";
import API from "../api";
import { FaDumbbell } from "react-icons/fa";

function ProgramList() {

  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [enrolledPrograms, setEnrolledPrograms] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await API.get("/api/programs");
      setPrograms(res.data.data);
    } catch (err) {
      setError("Failed to load programs");
    } finally {
      setLoading(false);
    }
  };

  const enrollProgram = async (programId) => {

    setMessage("");

    try {

      await API.post("/api/enroll", {
        userId: "USR101",
        programId
      });

      setMessage("🎉 Enrollment successful!");

      setEnrolledPrograms([...enrolledPrograms, programId]);

    } catch (err) {

      setMessage(err.response?.data?.message || "Server error");

    }

  };

  if (loading)
    return <h2 style={{ textAlign: "center" }}>Loading programs...</h2>;

  if (error)
    return <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>;

  return (

    <div style={{
      padding: "40px",
      fontFamily: "Segoe UI",
      background: "#f5f7fa",
      minHeight: "100vh"
    }}>

      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        <FaDumbbell /> FitTrack Fitness Programs
      </h1>

      <p style={{ textAlign: "center", color: "#666" }}>
        Explore and enroll in fitness programs
      </p>

      {message && (
        <div style={{
          background: "#e3f2fd",
          padding: "12px",
          width: "400px",
          margin: "20px auto",
          textAlign: "center",
          borderRadius: "6px",
          fontWeight: "500"
        }}>
          {message}
        </div>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "25px",
        marginTop: "30px"
      }}>

        {programs.map(program => {

          const alreadyEnrolled =
            enrolledPrograms.includes(program.programId);

          return (

            <div key={program.programId} style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "0.2s"
            }}>

              <h3>{program.name}</h3>

              <span style={{
                background: "#e0f2f1",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "12px"
              }}>
                {program.category}
              </span>

              <p style={{ marginTop: "10px" }}>
                <strong>Level:</strong> {program.level}
              </p>

              <p style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#1976d2"
              }}>
                ₹{program.price}
              </p>

              <button
                onClick={() => enrollProgram(program.programId)}
                disabled={alreadyEnrolled}
                style={{
                  marginTop: "10px",
                  padding: "10px 16px",
                  background: alreadyEnrolled ? "#9e9e9e" : "#1976d2",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "100%"
                }}
              >
                {alreadyEnrolled ? "Enrolled ✓" : "Enroll Now"}
              </button>

            </div>

          );

        })}

      </div>

      <hr style={{ margin: "50px 0" }} />

      <h2>Your Enrolled Programs</h2>

      {enrolledPrograms.length === 0 ? (
        <p>No programs enrolled yet.</p>
      ) : (
        <ul style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "300px"
        }}>
          {enrolledPrograms.map(p => (
            <li key={p} style={{ padding: "6px 0" }}>{p}</li>
          ))}
        </ul>
      )}

    </div>

  );
}

export default ProgramList;