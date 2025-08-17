import React, { useState } from "react";

const Home: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple check for demo purposes
    if (username === "admin" && password === "1234") {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px" }}>
      
      {/* Login Form */}
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <h1>Welcome to Symmetrix Computer Systems Pvt. Ltd.</h1>
        <p>Built on relationships and trust.</p>

        <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                required
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#282c34",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Login
            </button>
          </form>
          {message && <p style={{ marginTop: "15px", color: message.includes("successful") ? "green" : "red" }}>{message}</p>}
        </div>
      </div>

      {/* Company Info Section */}
      <div style={{ lineHeight: "1.7" }}>
        <h2>About Symmetrix</h2>
        <p>
          We are a leading IT services & solutions company. Our core competency is in providing customized IT business solutions specific to client requirements.
          We are a team of well-experienced professionals who are equipped to address critical and complex customer needs. We have a diverse client base spread across business domains. We have been in this business since 1987.
        </p>
        <p>
          We are an ISO 9001:2015, ISO 27001:2013, ISO 20000-1:2011 certified organization and are registered as an MSME.
        </p>

        <h3>Why Symmetrix?</h3>
        <ul>
          <li>30+ years of industry knowledge and rich experience in understanding customers' needs</li>
          <li>80% of our client relationships are more than 20+ years old, retained due to our focus on providing the best service</li>
          <li>Our extensive list of OEM partnerships help us provide a wide range of IT products and services</li>
          <li>Strong relationships with India's major IT distributors for the fastest delivery of products</li>
          <li>Symmetrix also has a group company - Exocore IT Solutions, which is a partner of Cisco. Visit Exocore’s website for more information.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
