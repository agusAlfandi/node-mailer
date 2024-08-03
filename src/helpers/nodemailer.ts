import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  //   port: 587,
  auth: {
    user: "agusalfandi8@gmail.com",
    pass: "X5t6qFz8Z3d5ZvzG4q",
  },
});
