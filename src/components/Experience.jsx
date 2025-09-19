import React from "react";
import "./Experience.css";

const TimelineItem = ({ role, company, duration, description, index }) => (
  <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
    <div className="timeline-content">
      <h3>{role}</h3>
      <h4>{company}</h4>
      <span>{duration}</span>
      <p>{description}</p>
    </div>
  </div>
);

const Timeline = ({ experiences }) => (
  <section className="timeline">
    {experiences.map((exp, index) => (
      <TimelineItem key={index} index={index} {...exp} />
    ))}
  </section>
);

export default Timeline;
