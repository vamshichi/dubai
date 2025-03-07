import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        // Parse the request body
        const { companyName, contactPerson, designation, phone, email, city, category } = await req.json();

        // Validate the input
        if (!companyName || !contactPerson || !designation || !phone || !email || !city || !category) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Configure the email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "chvamshi03@gmail.com",
                pass: "hcfj ewwj tecd kqnx",
            },
        });

        // Email options
        const mailOptions = {
            from: "Gmec Exhibitions <chvamshi03@gmail.com>",
            to: "digital.maxpo@gmail.com, db.gmecindia@gmail.com",
            subject: "GMEC Exhibitor Registration",
            text: `Company Name: ${companyName}\nContact Person: ${contactPerson}\nDesignation: ${designation}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nCategory: ${category}`,
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
