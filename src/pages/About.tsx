import React from "react";

const About: React.FC = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px", lineHeight: "1.7" }}>
      
      {/* Header */}
      <h1>About Symmetrix Computer Systems Pvt. Ltd.</h1>
      <p>We provide top-notch computer systems solutions.</p>

      {/* Company Overview */}
      <section style={{ marginTop: "30px" }}>
        <h2>Who We Are</h2>
        <p>
          We are a leading IT services & solutions company. Our core competency is in providing customized IT business solutions specific to client requirements. 
          We are a team of well-experienced professionals equipped to address critical and complex customer needs. 
          We have a diverse client base spread across multiple business domains and have been in this business since 1987.
        </p>
        <p>
          We are an ISO 9001:2015, ISO 27001:2013, ISO 20000-1:2011 certified organization and are registered as an MSME.
        </p>
      </section>

      {/* Images Section */}
      <section style={{ marginTop: "30px", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <img src="https://via.placeholder.com/250x150?text=IT+Solutions" alt="IT Solutions" style={{ borderRadius: "8px" }} />
        <img src="https://via.placeholder.com/250x150?text=Team+Collaboration" alt="Team Collaboration" style={{ borderRadius: "8px" }} />
        <img src="https://via.placeholder.com/250x150?text=Client+Support" alt="Client Support" style={{ borderRadius: "8px" }} />
      </section>

      {/* Why Choose Us */}
      <section style={{ marginTop: "30px" }}>
        <h2>Why Choose Symmetrix?</h2>
        <ul>
          <li>30+ years of industry knowledge and rich experience in understanding customers' needs</li>
          <li>80% of our client relationships are more than 20+ years old, retained due to our focus on providing the best service</li>
          <li>Extensive OEM partnerships provide a wide range of IT products and services</li>
          <li>Strong relationships with India's major IT distributors for fastest delivery</li>
          <li>We have a group company - Exocore IT Solutions, a partner of Cisco</li>
        </ul>
      </section>

      {/* Footer Info */}
      <section style={{ marginTop: "30px" }}>
        <p>
          Symmetrix is committed to delivering innovative IT solutions tailored to client requirements. 
          Our highly skilled team ensures that complex challenges are addressed efficiently and effectively.
        </p>
      </section>

    </div>
  );
};

export default About;
