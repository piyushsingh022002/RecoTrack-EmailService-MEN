const apiInstance = require('../config/brevo.config');
const EmailLog = require('../models/emailLog.model');

exports.sendEmail = async ({to, subject, htmlContent}) => {
    console.log('Preparing to send email to:', to);
    const sendSmtpEmail = {
        sender: {email : "workspace.piyush01@gmail.com", name : "RecoTrack Team 📚"},
        to: [{email : to}],
        subject,
        htmlContent
    };

    
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    // Save the sent email to database
    await EmailLog.create(sendSmtpEmail);
    
    return response;
}