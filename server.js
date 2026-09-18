const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config();

const app = express();
const stripe = process.env.STRIPE_SECRET_KEY
  ? Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true
  })
);

app.use(express.json());

const hasMailConfiguration = () =>
  Boolean(
    process.env.RESEND_API_KEY &&
      process.env.RESEND_API_KEY !== "replace-with-your-resend-api-key" &&
      process.env.RESEND_FROM_EMAIL &&
      process.env.RESEND_TO_EMAIL
  );

const sendEmail = async ({ replyTo, subject, text }) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.RESEND_TO_EMAIL],
      reply_to: replyTo,
      subject,
      text
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error: ${response.status} ${errorText}`);
  }
};

app.post("/send-contact-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message || !hasMailConfiguration()) {
      return res.status(400).json({
        error: "Contact email is not configured or message data is incomplete"
      });
    }

    await sendEmail({
      replyTo: email,
      subject: `New message from ${name}`,
      text: [
        "New contact message",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message
      ].join("\n")
    });

    res.status(200).json({ sent: true });
  } catch (error) {
    console.error("Contact email error:", error);
    res.status(500).json({ error: "Could not send contact email" });
  }
});

app.post("/send-order-email", async (req, res) => {
  try {
    const { customer, cart, total } = req.body;

    if (!customer || !cart?.length || !hasMailConfiguration()) {
      return res.status(400).json({ error: "Order email is not configured or order data is incomplete" });
    }

    const items = cart
      .map(
        (item) =>
          `- ${item.name || item.title || "Product"} | quantity: ${Number(item.quantity) || 1} | price: ${Number(item.price) || 0} DA`
      )
      .join("\n");

    await sendEmail({
      replyTo: customer.email,
      subject: `New order from ${customer.firstName} ${customer.lastName}`,
      text: [
        "New order received",
        "",
        `Customer: ${customer.firstName} ${customer.lastName}`,
        `Email: ${customer.email}`,
        `Address: ${customer.address}, ${customer.city}, ${customer.country}`,
        "",
        "Items:",
        items,
        "",
        `Total: ${Number(total) || 0} DA`
      ].join("\n")
    });

    res.status(200).json({ sent: true });
  } catch (error) {
    console.error("Order email error:", error);
    res.status(500).json({ error: "Could not send order email" });
  }
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    if (!stripe) {
      return res.status(503).json({ error: "Stripe is not configured" });
    }

    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const line_items = cart.map((item) => ({
      price_data: {
        currency: "dzd",
        product_data: {
          name: item.name || item.title || "Product",
          images: item.image ? [item.image] : []
        },
        unit_amount: Math.round(Number(item.price) * 100)
      },
      quantity: Number(item.quantity) || 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${process.env.CLIENT_URL || "http://localhost:3000"}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL || "http://localhost:3000"}/cart`
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
