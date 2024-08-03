import { NextFunction, Request, Response } from "express";
import { transporter } from "../helpers/nodemailer.js";
import fs from "fs";
import path from "path";
import ejs from "ejs"; // Add this line to import the 'ejs' module
import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);

export const sendEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, subject, text } = req.body;
  try {
    // const tamplatePath = path.join(__dirname, "../template", "email.ejs");
    // const tampalteSource = fs.readFileSync(tamplatePath, { encoding: "utf-8" });
    // const renderTemplate = ejs.render(tampalteSource);
    // const html = renderTemplate({ name: text });

    await transporter.sendMail({
      from: "agusalfandi8@gmail.com",
      to: email,
      subject,
      html: ejs.render(
        fs.readFileSync(
          path.join(__dirname, "./template", "email.ejs"),
          "utf-8"
        ),
        { name: text }
      ),
    });
    res.status(200).json({ message: "Email send" });
  } catch (error) {
    console.log("send email error", error);
  }
};
