import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: "url('/team.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 60px)", // below navbar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.15)",
        }}
      />

      {/* Transparent Center Box */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "rgba(255,255,255,0.2)",
          padding: "40px 60px",
          borderRadius: "15px",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Welcome to SG Computech
        </h1>
        <button
          onClick={() => navigate("/about")}
          style={{
            padding: "12px 25px",
            fontSize: "1rem",
            border: "2px solid white",
            borderRadius: "8px",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default Home;
