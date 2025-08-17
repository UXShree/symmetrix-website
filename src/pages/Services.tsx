import React, { useState } from "react";

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const serviceDetails: { [key: string]: string[] } = {
    "IT Solutions": [
      "Turnkey Projects",
      "Managed Services",
      "Infrastructure Management",
      "Staff Augmentation",
      "Training & Development (Products, Soft-skill, Certifications)",
      "Software Application Deployments"
    ],
    "Cloud Computing": [
      "Cloud Strategy & Consulting",
      "Cloud Migration Services",
      "Cloud Infrastructure Management",
      "SaaS, PaaS, IaaS Deployment",
      "Backup & Disaster Recovery Solutions",
      "Cloud Security and Compliance"
    ]
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#282c34", textAlign: "center" }}>Our Services</h1>
      <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
        We offer a wide range of IT solutions and cloud computing services tailored to client requirements.
      </p>

      {/* Service Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
        {Object.keys(serviceDetails).map((service) => (
          <button
            key={service}
            onClick={() => setSelectedService(service)}
            style={{
              padding: "12px 25px",
              cursor: "pointer",
              borderRadius: "10px",
              border: "none",
              fontWeight: "bold",
              color: selectedService === service ? "white" : "#282c34",
              backgroundColor: selectedService === service ? "#2f425bff" : "#f0f0f0",
              boxShadow: selectedService === service ? "0 4px 10px rgba(0,0,0,0.2)" : "0 2px 5px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = selectedService === service ? "#2f425bff" : "#e0e0e0";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = selectedService === service ? "#2f425bff" : "#f0f0f0";
            }}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Service Details */}
      {selectedService && (
        <div
          style={{
            marginTop: "40px",
            padding: "25px",
            borderRadius: "12px",
            backgroundColor: "#fef6f5",
            borderLeft: "5px solid #2f425bff",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#2f425bff", marginBottom: "15px" }}>{selectedService}</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {serviceDetails[selectedService].map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Services;
