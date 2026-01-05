import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://cloudlens-backend:5000/api/health")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
      })
      .catch((err) => {
        setError("Backend not reachable");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "Arial" }}>
      <h1>🚀 CloudLens Dashboard</h1>

      <div style={{
        marginTop: "40px",
        display: "inline-block",
        padding: "20px 30px",
        borderRadius: "10px",
        background: "#111827",
        color: "white"
      }}>
        <h2>Backend Status</h2>

        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p style={{ color: "lightgreen" }}>{status}</p>
        )}
      </div>
    </div>
  );
}

export default App;
