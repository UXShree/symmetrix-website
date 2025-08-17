import React from "react";

const Contact: React.FC = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", padding: "0 20px", lineHeight: "1.7", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#282c34" }}>Contact Us</h1>

      <p><strong>Email:</strong> info@symmetrix.com</p>
      <p><strong>Contact:</strong> +91 872917292</p>
      <p>
        <strong>Location:</strong><br />
        Symmetrix Computer Systems Pvt. Ltd,<br />
        # 263, 1st Floor,<br />
        6th Main, MICO Layout,<br />
        BTM 2nd Stage,<br />
        Bengaluru - 560076
      </p>
    </div>
  );
};

export default Contact;
