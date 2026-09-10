require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);
const allowedOrigins = new Set([
  "https://hamdan484.github.io",
  "http://localhost:5173",
]);

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

// Middleware
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin.toLowerCase())) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
  }),
);
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio backend is running!");
});

// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid name, email, and message.",
      });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Portfolio Contact <onboarding@resend.dev>",

      to: ["ibrahimhamsik3@gmail.com"],

      subject: `New Portfolio Message from ${name.trim()}`,

      html: `
        <h2>New Portfolio Message 📩</h2>

        <p><strong>Name:</strong> ${safeName}</p>

        <p><strong>Email:</strong> ${safeEmail}</p>

        <h3>Message:</h3>

        <p>${safeMessage}</p>
      `,

      replyTo: email.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(400).json({
        success: false,
        message: "Failed to send email",
      });
    }

    console.log("Email sent successfully:", data);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while sending the email",
    });
  }
});

const PORT = 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
