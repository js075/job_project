import nodemailer from 'nodemailer';
const transporter=nodemailer.createTransport({
service:"gmail",
auth:{
  user:process.env.EMAIL_USER,
  pass:process.env.EMAIL_PASS
},
});


export const sendOtpEmail=async(email, otp)=>{
  await transporter.sendMail({
    from:process.env.EMAIL_USER,
    to:email,
    subject:"otp expires in 10 minutes",
    text :`your otp is ${otp}`
  });
};

export const sendPostEmail=async(email,post)=>{
  await transporter.sendMail({
    from:process.env.EMAIL_USER,
    to:email,
    subject:"your post is created successfully ",
    text :`your new post is ${post}`
  });
};

