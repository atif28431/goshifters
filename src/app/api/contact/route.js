import nodemailer from "nodemailer";

export async function POST(req) {
console.log(process.env.EMAIL_PASS);
  const body = await req.json();
  const { name, phone, email, shifting, deliveryDate, pickup, delivery, message } = body;
	
  // Alternative Hostinger configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // Use STARTTLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    },
    requireTLS: true,
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
  });

  // Rest of your email code remains the same...
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
      We appreciate your interest in Go Shifters. Your inquiry has been received and our team will review your request promptly. Here's what you can expect next:
    </p>
    <ol style="color: #444; margin: 0 0 18px 18px; padding: 0;">
      <li style="margin-bottom: 8px;">
        <strong>Order Placement:</strong> Your shifting request has been placed successfully.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Booking Verification:</strong> Our customer service team will verify your booking details, including the confirmation date, pickup and drop locations, and preferred time.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Supervisor Visit:</strong> After confirmation, a supervisor will visit your premises the next day to conduct a survey and inspect/count your household goods.
      </li>
    </ol>
    <p style="color: #d32f2f; font-size: 14px; margin-bottom: 18px;">
      <strong>Note:</strong> If the supervisor visit is completed and you choose to cancel your shifting booking afterwards, a 10% cancellation charge will be applicable.
    </p>
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
    console.error("Hostinger email error:", error);
    return new Response(JSON.stringify({ 
      error: "Failed to send email via Hostinger.", 
      details: error.message 
    }), { status: 500 });
  }
}