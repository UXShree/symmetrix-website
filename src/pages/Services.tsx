import React, { useState } from "react";

const Services: React.FC = () => {
  // Default selections
  const [selectedTop, setSelectedTop] = useState<string>("IT Solutions");
  const [selectedBottom, setSelectedBottom] = useState<string>("Enterprise Solutions");

  const serviceDetails: { [key: string]: string[] } = {
    "IT Solutions": [
      "Turnkey Projects",
      "Managed Services",
      "Infrastructure Management",
      "Staff Augmentation",
      "Training & Development (Products, Soft-skill, Certifications)",
      "Software Application Deployments",
    ],
    "Cloud Computing": [
      "Cloud Strategy & Consulting",
      "Cloud Migration Services",
      "Cloud Infrastructure Management",
      "SaaS, PaaS, IaaS Deployment",
      "Backup & Disaster Recovery Solutions",
      "Cloud Security and Compliance",
    ],
    "Networking Solutions": [
      "Supply, installation & configuration of Routers, Switches, Firewalls, Enterprise Wi-Fi",
      "Setup and integration of all passive components of networks",
      "On-site as well as remote management of network infrastructure",
    ],
    "Enterprise Solutions": [
      "Range of Servers & Storage Devices from leading brands",
      "Annual Maintenance Contracts",
      "On-site & remote management of Servers and IT Infrastructure",
    ],
    "CCTV & Surveillance": [
      "CCTV Solutions",
      "Access Control Systems",
    ],
    "Others": [
      "Audio / Video Conferencing",
      "Data Analytics / Branding",
      "Website Development",
      "IT Audit",
      "DRP & BCP",
    ],
  };

  const topServices = ["IT Solutions", "Cloud Computing", "Networking Solutions"];
  const bottomServices = ["Enterprise Solutions", "CCTV & Surveillance", "Others"];

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "50px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#282c34", textAlign: "center" }}>Our Services</h1>
      <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
        We offer IT, Cloud, Networking, Enterprise, and Surveillance solutions tailored to client requirements.
      </p>

      {/* Top Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        {topServices.map((service) => (
          <button
            key={service}
            onClick={() => setSelectedTop(service)}
            style={{
              padding: "12px 25px",
              cursor: "pointer",
              borderRadius: "10px",
              border: "none",
              fontWeight: "bold",
              color: selectedTop === service ? "white" : "#282c34",
              backgroundColor: selectedTop === service ? "#2f425bff" : "#f0f0f0",
              boxShadow: selectedTop === service ? "0 4px 10px rgba(0,0,0,0.2)" : "0 2px 5px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Top Service Box */}
      <div
        style={{
          marginTop: "30px",
          padding: "25px",
          borderRadius: "12px",
          backgroundColor: "#fef6f5",
          borderLeft: "5px solid #2f425bff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#2f425bff", marginBottom: "15px" }}>{selectedTop}</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {serviceDetails[selectedTop].map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px", flexWrap: "wrap" }}>
        {bottomServices.map((service) => (
          <button
            key={service}
            onClick={() => setSelectedBottom(service)}
            style={{
              padding: "12px 25px",
              cursor: "pointer",
              borderRadius: "10px",
              border: "none",
              fontWeight: "bold",
              color: selectedBottom === service ? "white" : "#282c34",
              backgroundColor: selectedBottom === service ? "#2f425bff" : "#f0f0f0",
              boxShadow: selectedBottom === service ? "0 4px 10px rgba(0,0,0,0.2)" : "0 2px 5px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Bottom Service Box */}
      <div
        style={{
          marginTop: "30px",
          padding: "25px",
          borderRadius: "12px",
          backgroundColor: "#f5faff",
          borderLeft: "5px solid #2f425bff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#2f425bff", marginBottom: "15px" }}>{selectedBottom}</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {serviceDetails[selectedBottom].map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
