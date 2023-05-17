import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import Email from '@/components/Email';

async function handle(req, res){

    const emailHtml = render(<Email name={req.query.name} url="https://smartfigures.vercel.app" />)
    const receiver = req.query.email
    // const receiver = 'princeayokunle2002@gmai.c'
    const subject = 'Thank you for contacting me'


    const transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        // port: 587,
        service: 'gmail',
        secure: false,
        auth: {
          user: 'pajayi221@stu.ui.edu.ng',
          pass: 'PriLijah_2002',
        },
      });
      
      
      const options = {
        from: 'pajayi221@stu.ui.edu.ng',
        to: receiver,
        subject: subject,
        html: emailHtml,
      };
      
      transporter.sendMail(options, (err) => {
        !err ? res.send({okay: true}) : res.send({okay: false, error: err})
      });
}

export default handle