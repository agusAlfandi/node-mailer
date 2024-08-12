import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  //   port: 587,
  auth: {
    user: "agusalfandi8@gmail.com",
    pass: "iosq ymvv agpg cdnp",
  },
});
