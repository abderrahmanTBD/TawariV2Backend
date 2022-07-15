import nodemailer from 'nodemailer';

export const sendEmailVerify = async (subject: string, to: string, html: string) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'abdouy71@gmail.com',
            pass: 'jekejsfvnjiqzzqh'
        }
    });


    const mailOptions = {
        from: 'abdouy71@gmail.com',
        to: to,
        subject: subject,
        html: html,
    };

    await transporter.sendMail( mailOptions );

} 