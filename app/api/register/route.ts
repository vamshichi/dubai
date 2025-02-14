import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        // Parse the request body
        const { name, email, phone, preferredCity, preferredBudget } = await req.json();

        // Validate the input
        if (!name || !email || !phone || !preferredCity || !preferredBudget) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Configure the email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // Use your email provider (e.g., Gmail)
            auth: {
                user: "chvamshi03@gmail.com", // Your email address
                pass: "hcfj ewwj tecd kqnx", // Your email password or app password
            },
        });

        // Email options
        const mailOptions = {
            from: "chvamshi03@gmail.com", // Sender's email
            to: "annu@maxpo.ae, digital.maxpo@gmail.com, digital.maxpo@gmail.com" , // Recipient's email
            subject: "New Registration for BAHRAIN visiter",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${preferredCity}\nBudget: ${preferredBudget}`,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);

        // Respond with success
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);

        // Handle unknown error type
        if (error instanceof Error) {
            return NextResponse.json(
                { message: "An error occurred", error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "An unknown error occurred" },
            { status: 500 }
        );
    }
}
