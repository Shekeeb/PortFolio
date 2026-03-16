const education = [
  { date: "June 2022 - May 2024", title: "Master of Computer Applications", place: "Federal Institute of Science and Technology, Angamaly", grade: "Grade : 8.1 CGPA" },
  { date: "June 2019 - May 2022", title: "Bachelor of Computer Applications", place: "Gems Arts and Science and Technology, Ramapuram", grade: "Grade : 7.58 CGPA" },
  { date: "June 2017 - May 2019", title: "Higher Secondary", place: "IKTHSS, Cherukulamba", grade: "Grade : 83%" },
  { date: "June 2016 - May 2017", title: "SSLC", place: "IKTHSS, Cherukulamba", grade: "Grade : 89%" },
];

const experience = [
  {
    date: "December 2024 - Present",
    title: "Junior Software Engineer",
    place: "Acqodis Technologies, Kochi",
    type: "Full-time",
    description: [
      "Working as a Full Stack Developer on three MERN stack projects.",
      "Serving as Team Lead — overseeing progress, assigning tasks, and mentoring junior developers.",
      "Developed a cross-platform mobile application using React Native with backend API integration.",
      "Involved in database design and management for optimized query performance.",
    ],
  },
  {
    date: "June 2024 - October 2024",
    title: "MERN Stack Developer Trainee",
    place: "Zoople Technologies, Kochi",
    type: "Trainee",
    description: [
      "Worked on multiple websites using HTML, CSS, React, Node.js, Express, and MongoDB.",
      "Designed user interfaces and provided IT support to colleagues.",
      "Participated in daily sessions and reported on project progress.",
    ],
  },
];

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Libraries & Frameworks",
    skills: ["React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS", "React Native"],
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Postman", "npm", "Stripe", "Cloudinary", "Firebase"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL"],
  },
];

function TimelineCard({ item, showDescription }) {
  return (
    <div
      className="timeline-content"
      style={{
        textAlign: "left",
        backgroundColor: "#081b29",
        color: "white",
        transition: "none",
      }}
      // Override the CSS hover by using a CSS class override below
    >
      <h5 style={{ marginBottom: "6px", color: "#00abf0" }}>{item.title}</h5>
      <p style={{ marginBottom: "6px", fontWeight: "600", color: "white" }}>{item.place}</p>
      <span
        style={{
          display: "inline-block",
          backgroundColor: "transparent",
          color: "#00abf0",
          fontSize: "12px",
          fontWeight: "700",
          padding: "2px 12px",
          borderRadius: "20px",
          border: "1px solid #00abf0",
          marginBottom: showDescription ? "10px" : "0",
        }}
      >
        {item.grade || item.type}
      </span>
      {showDescription && item.description && (
        <ul style={{ paddingLeft: "0", marginTop: "10px", listStyle: "none" }}>
          {item.description.map((point, j) => (
            <li key={j} style={{ fontSize: "13px", marginBottom: "7px", lineHeight: "1.6", paddingLeft: "16px", position: "relative", color: "white" }}>
              <span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", backgroundColor: "#00abf0", borderRadius: "50%", display: "inline-block" }} />
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Timeline({ items, showDescription }) {
  return (
    <div className="timeline-items">
      {items.map((item, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot"></div>
          <div className="timeline-date">{item.date}</div>
          <TimelineCard item={item} showDescription={showDescription} />
        </div>
      ))}
    </div>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div style={{
      border: "2px solid #00abf0",
      borderRadius: "20px",
      padding: "24px 28px",
      boxShadow: "0 0 10px #00abf0",
      backgroundColor: "#081b29",
      flex: "1 1 300px",
    }}>
      <h4 style={{ color: "#00abf0", marginBottom: "18px", fontWeight: "700" }}>
        {category}
      </h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              border: "1px solid #00abf0",
              color: "white",
              fontSize: "13px",
              fontWeight: "600",
              padding: "6px 16px",
              borderRadius: "20px",
              backgroundColor: "transparent",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#00abf0";
              e.target.style.color = "#081b29";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <style>{`
        .timeline-content:hover {
          background-color: #0d2a3e !important;
          color: white !important;
          font-weight: normal !important;
          box-shadow: 0 0 20px #00abf0 !important;
          transform: scale(1.02);
        }
        .timeline-content:hover h5 {
          color: #00abf0 !important;
        }
        .timeline-content:hover p,
        .timeline-content:hover li {
          color: white !important;
          font-weight: normal !important;
        }
      `}</style>

      <div className="about" id="about">
        <h1>About <span style={{ color: "#00abf0" }}>Me</span></h1>

        <div className="about-img">
          <img src="/images/portfolio.png" alt="profile" />
        </div>

        <div className="about-content">
          <p>
            An MCA Graduate from Federal Institute of Science and Technology with a strong foundation in
            full-stack development. Currently working as a Junior Software Engineer and Team Lead at Acqodis
            Technologies, Kochi, contributing to multiple MERN stack projects and a React Native mobile
            application. Passionate about building efficient, scalable systems and continuously growing through
            challenging real-world problems.
          </p>
          <div className="button">
            <a href="/files/MOHAMMED SHEKEEB.pdf" download>Download CV</a>
          </div>
        </div>

        <div className="education">
          <h1>My <span style={{ color: "#00abf0" }}>Education</span></h1>
          <Timeline items={education} showDescription={false} />
        </div>

        <div className="experience">
          <h1>My <span style={{ color: "#00abf0" }}>Experience</span></h1>
          <Timeline items={experience} showDescription={true} />
        </div>

        <div className="skills" style={{ marginTop: "100px", marginLeft: "60px", marginRight: "60px" }}>
          <h1 style={{ marginBottom: "40px" }}>My <span style={{ color: "#00abf0" }}>Skills</span></h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            {skillCategories.map((cat) => (
              <SkillCategory key={cat.category} category={cat.category} skills={cat.skills} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
