const projects = [
  {
    img: "/images/EatZilla.png",
    title: "EatZilla",
    tech: "React.js, Node.js, Express.js, MongoDB, Stripe",
    description: "A user-friendly food delivery app with real-time order tracking, secure Stripe payment processing, and efficient backend architecture ensuring smooth data flow between front-end and back-end.",
    link: "https://eatzilla-frontend.onrender.com/",
  },
  {
    img: "/images/MediConnect.png",
    title: "Medi-Connect",
    tech: "React.js, Node.js, Express.js, MongoDB, Bootstrap",
    description: "A doctor consultancy app with a patient portal for booking appointments and an admin panel to manage doctors, approve/reject appointments, and maintain hospital records.",
    link: "https://github.com/Shekeeb/Medi-Connect",
  },
  {
    img: "/images/nike.jpg",
    title: "Nike",
    tech: "React.js, Node.js, Express.js, MongoDB, Stripe, Tailwind CSS",
    description: "A responsive e-commerce store with Tailwind CSS UI, JWT-based authentication, cart management system, and Stripe integration for secure payment processing.",
    link: "https://github.com/Shekeeb/Nike",
  },
  {
    img: "/images/xpense.jpg",
    title: "Xpense",
    tech: "React Native, Firebase, Cloudinary",
    description: "A mobile expense tracker with income & expense monitoring, Firebase Firestore for real-time data, Cloudinary image uploads, and interactive charts for weekly, monthly, and yearly spending trends.",
    link: "https://github.com/Shekeeb/Xpense",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>My <span style={{ color: "#00abf0" }}>Projects</span></h1>
      <div className="project-container">
        {projects.map((project, i) => (
          <div className="project-box" key={i}>
            <img src={project.img} alt={project.title} width="100%" />
            <div
              className="project-layer"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>{project.title}</h4>
              <p style={{ fontSize: "13px", padding: "0 20px" }}>{project.description}</p>
              <p style={{ fontSize: "11px", color: "#081b29", fontWeight: "700", padding: "0 20px", marginBottom: "12px" }}>
                {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "46px",
                  height: "46px",
                  backgroundColor: "#081b29",
                  border: "2px solid #00abf0",
                  borderRadius: "50%",
                  color: "#00abf0",
                  textDecoration: "none",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#00abf0";
                  e.currentTarget.style.color = "#081b29";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#081b29";
                  e.currentTarget.style.color = "#00abf0";
                }}
              >
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
