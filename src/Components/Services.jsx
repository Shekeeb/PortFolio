const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    title: "Full Stack Web Development",
    description: "End-to-end web application development using React.js for dynamic UIs, Node.js & Express.js for robust backend APIs, and MongoDB for scalable database management.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
    title: "Frontend Development",
    description: "Crafting responsive, pixel-perfect interfaces using React.js, Tailwind CSS, and Bootstrap — focused on performance, accessibility, and seamless user experience.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Backend & API Development",
    description: "Building secure, scalable server-side systems using Node.js, Express.js, and MongoDB. Includes RESTful API design, JWT authentication, Stripe payment integration, and database optimization.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: "Mobile App Development",
    description: "Developing cross-platform mobile applications using React Native with Firebase for real-time data, Cloudinary for media management, and smooth API integrations.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "API Integration & Tools",
    description: "Seamless third-party integrations including Stripe for payments, Cloudinary for media, Firebase for auth & real-time data — tested and documented using Postman.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: "Team Lead & Code Review",
    description: "Leading development teams by managing project timelines, reviewing code quality, mentoring junior developers, and ensuring best practices across MERN stack projects.",
  },
];

export default function Services() {
  return (
    <div className="services" id="services">
      <h1>My <span style={{ color: "#00abf0" }}>Services</span></h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        {services.map((service, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#081b29",
              border: "2px solid #00abf0",
              borderRadius: "20px",
              boxShadow: "0 0 10px #00abf0",
              padding: "30px 24px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
              cursor: "default",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 0 25px #00abf0";
              e.currentTarget.style.backgroundColor = "#0d2a3e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 10px #00abf0";
              e.currentTarget.style.backgroundColor = "#081b29";
            }}
          >
            {/* Icon */}
            <div
              style={{
                color: "#00abf0",
                marginBottom: "18px",
                padding: "14px",
                borderRadius: "50%",
                border: "2px solid #00abf0",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h5
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              {service.title}
            </h5>

            {/* Description */}
            <p
              style={{
                color: "#a0b8c8",
                fontSize: "13.5px",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
