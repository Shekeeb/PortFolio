import { useState } from "react";
import { sendEmail } from "../utils/sendEmail";

const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  color: "#00abf0",
  backgroundColor: "#081b29",
  border: "2px solid #00abf0",
  borderRadius: "10px",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  transition: "box-shadow 0.3s ease",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEmail(form);
      setStatus("success");
      setForm({ name: "", email: "", mobile: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="contact">
      <h1>Contact <span style={{ color: "#00abf0" }}>Me</span></h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>

        {/* Row 1: Name + Email */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ flex: 1 }}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Row 2: Mobile + Subject */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={{ flex: 1 }}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Row 3: Message */}
        <div style={{ marginBottom: "24px" }}>
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              resize: "vertical",
              minHeight: "160px",
            }}
          />
        </div>

        {/* Status message */}
        {status === "success" && (
          <p style={{ color: "#00abf0", textAlign: "center", marginBottom: "12px", fontWeight: "600" }}>
            ✅ Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "#ff4d4d", textAlign: "center", marginBottom: "12px", fontWeight: "600" }}>
            ❌ Failed to send. Please set up EmailJS credentials in <code>src/utils/sendEmail.js</code>
          </p>
        )}

        {/* Submit Button */}
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "12px 40px",
              border: "2px solid #00abf0",
              backgroundColor: status === "sending" ? "#00abf0" : "#081b29",
              color: status === "sending" ? "#081b29" : "#00abf0",
              borderRadius: "30px",
              fontSize: "15px",
              fontWeight: "700",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              minWidth: "140px",
            }}
            onMouseEnter={(e) => {
              if (status !== "sending") {
                e.currentTarget.style.backgroundColor = "#00abf0";
                e.currentTarget.style.color = "#081b29";
              }
            }}
            onMouseLeave={(e) => {
              if (status !== "sending") {
                e.currentTarget.style.backgroundColor = "#081b29";
                e.currentTarget.style.color = "#00abf0";
              }
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>

      </form>
    </div>
  );
}
