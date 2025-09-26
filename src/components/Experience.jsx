import "./Experience.css";

const experiences = [
  {
  company: "CodeMantra",
  period: "June 2025 - Present",
  role: "Coding Instructor",
  mode: "Remote",
  work: [
    "Conducted coding classes for beginners covering Python (basic concepts), JavaScript, and hands-on projects.",
    "Taught practical applications using MIT App Inventor, Tinkercad, and circuit design tools.",
    "Mentored 15+ students remotely, providing personalized guidance and debugging assistance.",
    "Introduced students to computational thinking and real-world coding projects to enhance understanding."
  ]
},

  {
    company: " Augean Enterprise Solutions PVT. LTD",
    period: "Jan 2025 - April 2025",
    role: "Intern",
    mode: "On-site [Surat]",
      work: [
      "Resolved frontend bugs across major ERP modules, resulting in a 20% improvement in overall system usability.",
      "Developed various new features for the ERP.",
      "Built and deployed a mobile application, OrdrTECH, integrating ERP order management, enabling 24x7 mobile access for 50+ users.",
      "Handled 5+ ad-hoc tasks and features with a 100% on-time delivery rate, ensuring seamless business operations."
    ]
  },
  {
    company: "Matlab Infotech",
    period: "June 2024 - July 2024",
    role: "Trainee Developer",
    mode: "On-site [Vadodara]",
    work: [
      "Javascript Training:Gained in-depth knowledge of JavaScript concepts and applied them in various projects.",
     " React.js: Developed interactive front-end components using React.js, implementing state management, hooks, and routing."
        ]
  }
];

export const Experience = () => {
  return (
    <div className="content">
      <h1>Experience</h1>
    <div className="timeline-container">
            {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{exp.company}</h3>
            <span>{exp.period} | {exp.role} | {exp.mode}</span>
            <ul>
                {exp.work.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
