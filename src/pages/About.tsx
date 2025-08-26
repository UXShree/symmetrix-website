import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Why Symmetrix */}
      <section className="highlight-section">
        
        <h1>Why SG Computech?</h1>
        <ul>
          <li>
            30+ years of industry knowledge and rich experience in understanding
            customers' needs
          </li>
          <li>
            80% of our client relationships are more than 20+ years old,
            retained due to our focus on providing the best service
          </li>
          <li>
            Our extensive list of OEM partnerships help us provide a wide range
            of IT products and services
          </li>
          <li>
            Strong relationships with India's major IT distributors for the
            fastest delivery of products
          </li>
          <li>
            Symmetrix also has a group company –{" "}
            <b>Exocore IT Solutions</b>, which is a partner of Cisco. Visit
            Exocore’s website for more information.
          </li>
        </ul>
      </section>

      {/* Who We Are */}
      <section className="overview-section">
        <h2>Who We Are</h2>
        <p>
          We are a leading IT services & solutions company with expertise in
          customized business solutions since 1987.
        </p>

        {/* Small centered image */}
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src="/abc.jpg"
            alt="Our Team"
            style={{
              width: "200px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />
        </div>

        <p>
          Our certified team (ISO 9001:2015, ISO 27001:2013, ISO 20000-1:2011)
          ensures reliable and innovative solutions for diverse industries.
        </p>
        <p>
          We are an MSME registered company with a strong reputation in
          delivering long-term IT value to our clients.
        </p>
      </section>

      {/* Images / Visuals */}
      <section className="images-section">
        <img
          src="https://via.placeholder.com/280x160?text=IT+Solutions"
          alt="IT Solutions"
        />
        <img
          src="https://via.placeholder.com/280x160?text=Teamwork"
          alt="Teamwork"
        />
        <img
          src="https://via.placeholder.com/280x160?text=Client+Support"
          alt="Client Support"
        />
      </section>

      {/* Mission / Vision / Policy / Values */}
      <section className="cards-section">
        <div className="info-card">
          <h3>Our Mission</h3>
          <p>
            To be the most sought after organization by delivering extraordinary
            customer experience.
          </p>
        </div>
        <div className="info-card">
          <h3>Our Vision</h3>
          <p>
            To provide the best customer experience and be the first choice of
            our Clients with focus on Quality, Versatility and our mantra of
            'Customer First'.
          </p>
        </div>
        <div className="info-card">
          <h3>Quality Policy</h3>
          <p>
            Committed to delivering IT products and support services meeting
            quality standards & deadlines, with continual improvement and total
            customer satisfaction.
          </p>
        </div>
        <div className="info-card">
          <h3>Core Values</h3>
          <ul>
            <li>Integrity</li>
            <li>Reliability</li>
            <li>Commitment</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
