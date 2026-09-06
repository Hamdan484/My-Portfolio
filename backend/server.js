require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio backend is running!");
});

// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: ["ibrahimhamsik3@gmail.com"],

      subject: `New Portfolio Message from ${name}`,

      html: `
        <h2>New Portfolio Message 📩</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <h3>Message:</h3>

        <p>${message}</p>
      `,

      replyTo: email,
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});