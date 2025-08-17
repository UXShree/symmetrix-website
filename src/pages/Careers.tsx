import React from "react";

const Careers: React.FC = () => {
  // Job openings data
  const jobs = [
    { id: 1, position: "Customer Support Engineer – Level 1 (Onsite)", openings: 8 },
    { id: 2, position: "Customer Support Engineer – Level 1 (Field Engineer)", openings: 2 },
    { id: 3, position: "Sales Executive", openings: 4 },
    { id: 4, position: "Business Development Manager", openings: 2 },
    { id: 5, position: "Accounts Assistant", openings: 1 },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px", fontFamily: "Arial, sans-serif", lineHeight: 1.7 }}>
      {/* Header */}
      <h1 style={{ textAlign: "center", color: "#282c34" }}>Why You Should Join Symmetrix</h1>

      {/* About section */}
      <p>
        We are one of the first few IT services and solutions companies founded in Bangalore during the early eighties. Symmetrix along with Exocore and its predecessor companies have been providing quality service to our customers. We believe in providing equal opportunity to our employees and more than 30% of our workforce are still with us since inception. There is a great amount of trust and bonding within us.
      </p>
      <p>
        We are constantly hiring. Come, join & be part of a winning team. <br/>
        Mail us your CV at <a href="mailto:hr@symmetrixonline.in" style={{ color: "#ff6f61", textDecoration: "none" }}>hr@symmetrixonline.in</a>
      </p>

      {/* Job openings table */}
      <div style={{ marginTop: "30px", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead style={{ backgroundColor: "#2f425bff", color: "white" }}>
            <tr>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>#</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Job Position</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Open Positions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} style={{ backgroundColor: job.id % 2 === 0 ? "#f9f9f9" : "white" }}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{job.id}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{job.position}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{job.openings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Careers;
