import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendNewsletter(recipientEmail: string, subject: string, content: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            ${content}
          </div>
          <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #999;">
            <p>You received this email because you subscribed to our newsletter.</p>
            <p><a href="${process.env.BASE_URL}/newsletter?mode=unsubscribe" style="color: #ff6600;">Unsubscribe</a></p>
          </div>
        </div>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error("Email sending error:", error)
    throw error
  }
}
