const emailService = require('../services/email.service');

exports.sendEmailHandler = async (req, res) => {
    console.log("'Received email send request'");
    try{
        const { to, type, data } = req.body;

        let subject = "";
        let htmlContent = "";

        switch(type){
            case "WELCOME":
                subject = "Welcome to RecoTrack!";
                htmlContent = `<h1>Welcome to RecoTrack, ${data.name}!</h1><p>Thank you for joining us. We're excited to have you on board.</p>`;
                break;
            case "OTP":
                subject = "Your OTP Code";
                htmlContent = `<h1>Your OTP Code</h1><p>Your OTP code is: <strong>${data.otp}</strong>. It will expire in 10 minutes.</p>`;
                break;
            case "STREAK":
                subject = "Your Streak Update";
                htmlContent = `<h1>Your Streak Update</h1><p>Congratulations! You've maintained a streak of ${data.streak} days. Keep it up!</p>`;
                break;
            case "READ_REMINDER":
                subject = "Don't Forget to Read!";
                htmlContent = `<h1>Don't Forget to Read!</h1><p>It's been a while since your last reading session. Keep your streak alive by reading today!</p>`;
                break;
            default:
                return res.status(400).json({ message: 'Invalid email type' });
        }

        
        await emailService.sendEmail({ to, subject, htmlContent });

        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch(error){
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
}