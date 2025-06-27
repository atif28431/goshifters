import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, phone, email, shifting, deliveryDate, pickup, delivery, message } = body;

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email to admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Inquiry Received",
   html: `
  <div style="font-family: Arial, sans-serif; background: #fff; padding: 24px; border-radius: 8px; border: 1px solid #eee; max-width: 480px;">
    <h2 style="color: #d32f2f; margin-bottom: 8px;">🚚 New Inquiry Received!</h2>
    <p style="color: #333; margin-bottom: 16px;">A new customer inquiry has arrived via the Go Shifters contact form. Here are the details:</p>
    <table style="width:100%; border-collapse:collapse;">
      <tr>
        <td style="padding: 6px 0; font-weight: bold;">Name:</td>
        <td style="padding: 6px 0;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
        <td style="padding: 6px 0;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold;">Email:</td>
        <td style="padding: 6px 0;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold;">Shifting Type:</td>
        <td style="padding: 6px 0;">${shifting}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold;">Delivery Date:</td>
        <td style="padding: 6px 0;">${deliveryDate}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold;">Pickup Address:</td>
        <td style="padding: 6px 0;">${pickup}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold;">Delivery Address:</td>
        <td style="padding: 6px 0;">${delivery}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold;">Message:</td>
        <td style="padding: 6px 0;">${message}</td>
      </tr>
    </table>
    <p style="margin-top: 24px; color: #888; font-size: 13px;">Please respond to the customer as soon as possible.</p>
  </div>
`
  };

  // Thank you email to user
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting Go Shifters!",
   html: `
  <div style="font-family: Arial, sans-serif; background: #fff; padding: 32px 24px; border-radius: 8px; border: 1px solid #eee; max-width: 480px;">
    <h2 style="color: #d32f2f; margin-bottom: 12px;">Thank You for Contacting Go Shifters!</h2>
    <p style="color: #333; margin-bottom: 18px;">
      Dear ${name || "Customer"},
    </p>
    <p style="color: #333; margin-bottom: 18px;">
      We have received your inquiry and our team will review your request promptly. One of our representatives will get in touch with you soon to assist you further.
    </p>
    <div style="margin-bottom: 18px;">
      <strong>Summary of your request:</strong>
      <ul style="color: #444; margin: 8px 0 0 16px; padding: 0;">
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Shifting Type:</strong> ${shifting}</li>
        <li><strong>Delivery Date:</strong> ${deliveryDate}</li>
        <li><strong>Pickup Address:</strong> ${pickup}</li>
        <li><strong>Delivery Address:</strong> ${delivery}</li>
        ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
      </ul>
    </div>
    <p style="color: #333; margin-bottom: 18px;">
      If you have any urgent questions, feel free to reply to this email or call us at <a href="tel:+917208132467" style="color: #d32f2f; text-decoration: none;">+91 720 813 2467</a>.
    </p>
    <p style="color: #888; font-size: 13px;">
      Best regards,<br>
      The Go Shifters Team
    </p>
    <div style="margin-top: 24px; text-align: center;">
      <img src="https://goshifters.com/logo.png" alt="Go Shifters Logo" style="height: 40px;"/>
    </div>
  </div>
`
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
}
