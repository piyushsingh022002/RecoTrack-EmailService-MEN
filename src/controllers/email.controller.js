const emailService = require('../services/email.service');

exports.sendEmailHandler = async (req, res) => {
    console.log("'Received email send request'");
    try{
        const { to, type, data } = req.body;

        let subject = "";
        let htmlContent = "";

        switch(type){
            case "WELCOME":
                subject = "Welcome to RecoTrack - Your Smart Note Companion!";
                htmlContent = `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; border-radius: 10px;">
                        <!-- Header -->
                        <div style="text-align: center; color: white; margin-bottom: 30px;">
                            <h1 style="margin: 0; font-size: 32px; font-weight: 700;">Welcome to RecoTrack!</h1>
                            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">Your ultimate note-taking companion</p>
                        </div>

                        <!-- Main Content -->
                        <div style="background: white; border-radius: 8px; padding: 40px; color: #333;">
                            <p style="font-size: 18px; margin: 0 0 20px 0; color: #667eea; font-weight: 600;">Hi ${data.name}! 👋</p>
                            <p style="font-size: 14px; line-height: 1.6; margin: 0 0 25px 0; color: #555;">Thank you for joining RecoTrack! We're thrilled to have you as part of our growing community. Get ready to transform the way you create, manage, and collaborate on notes.</p>

                            <!-- Features Section -->
                            <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; border-radius: 5px; margin: 25px 0;">
                                <h3 style="margin: 0 0 15px 0; color: #667eea; font-size: 16px;">✨ What You Can Do With RecoTrack:</h3>
                                <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 13px; line-height: 1.8;">
                                    <li><strong>Smart Note Creation:</strong> Full CRUD operations with rich text editing</li>
                                    <li><strong>Instant Mail Export:</strong> Share your notes directly via email</li>
                                    <li><strong>Tags & Organization:</strong> Categorize and find notes effortlessly</li>
                                    <li><strong>Attachments & URLs:</strong> Embed files and links within your notes</li>
                                    <li><strong>Multiple Export Formats:</strong> Download as PDF or Word documents instantly</li>
                                    <li><strong>Streak Tracking:</strong> Maintain your productivity streaks with visual calendar</li>
                                    <li><strong>Customizable Settings:</strong> Personalize your experience completely</li>
                                </ul>
                            </div>

                            <!-- Premium Feature -->
                            <div style="background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%); padding: 20px; border-radius: 5px; margin: 25px 0; color: white;">
                                <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 700;">🚀 Premium Feature - Global Coordination & Collaboration</h3>
                                <p style="margin: 0; font-size: 13px; line-height: 1.6;">Work seamlessly with your team across the globe. Real-time collaboration, shared workspaces, and unified productivity - all in one platform.</p>
                            </div>

                            <!-- Get Started -->
                            <p style="font-size: 13px; line-height: 1.6; margin: 25px 0; color: #555;">Start creating your first note today and unlock the full potential of organized digital workspace. Your journey to enhanced productivity begins now!</p>

                            <!-- CTA Button -->
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="https://recotrackpiyushsingh.vercel.app/login" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 14px; display: inline-block;">Start Using RecoTrack Now→</a>
                            </div>

                            <!-- Divider -->
                            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

                            <!-- Admin Contact Section -->
                            <div style="background: #f0f4ff; padding: 20px; border-radius: 5px; margin: 20px 0;">
                                <h4 style="margin: 0 0 15px 0; color: #667eea; font-size: 14px; font-weight: 700;">Need Help? Connect With Us</h4>
                                <p style="font-size: 12px; margin: 8px 0; color: #555;"><strong>👤 Admin & Creator:</strong> Piyush Singh</p>
                                <p style="font-size: 12px; margin: 8px 0; color: #555;"><strong>📧 Work Email:</strong> <a href="mailto:workspace.piyush01@gmail.com" style="color: #667eea; text-decoration: none;">workspace.piyush01@gmail.com</a></p>
                                <p style="font-size: 12px; margin: 8px 0; color: #555;"><strong>📱 Contact:</strong> +91 8382818030</p>
                                
                                <div style="margin-top: 15px; display: flex; gap: 12px; justify-content: center;">
                                    <a href="https://github.com/piyushsingh022002" style="display: inline-block; background: #333; color: white; padding: 8px 15px; border-radius: 4px; text-decoration: none; font-size: 11px; font-weight: 600;">GitHub</a>
                                    <a href="https://www.linkedin.com/in/piyushsingh02" style="display: inline-block; background: #0077b5; color: white; padding: 8px 15px; border-radius: 4px; text-decoration: none; font-size: 11px; font-weight: 600;">LinkedIn</a>
                                </div>
                            </div>

                            <!-- Footer -->
                            <p style="font-size: 12px; text-align: center; margin: 25px 0 0 0; color: #999; line-height: 1.6;">
                                This email was sent because you recently joined RecoTrack.<br>
                                © 2026 RecoTrack. All rights reserved.
                            </p>
                        </div>
                    </div>
                `;
                break;
            case "WELCOME_GOOGLE":
                subject = "Welcome to RecoTrack - Your Smart Note Companion!";
                htmlContent = `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; border-radius: 10px;">
                        <!-- Header -->
                        <div style="text-align: center; color: white; margin-bottom: 30px;">
                            <h1 style="margin: 0; font-size: 32px; font-weight: 700;">Welcome to RecoTrack!</h1>
                            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">Your ultimate note-taking companion</p>
                        </div>

                        <!-- Main Content -->
                        <div style="background: white; border-radius: 8px; padding: 40px; color: #333;">
                            <p style="font-size: 18px; margin: 0 0 20px 0; color: #667eea; font-weight: 600;">Hi ${data.username}! 👋</p>
                            <p style="font-size: 14px; line-height: 1.6; margin: 0 0 25px 0; color: #555;">Thank you for joining RecoTrack! We're thrilled to have you as part of our growing community. Get ready to transform the way you create, manage, and collaborate on notes.</p>
                            <p style="font-size: 14px; line-height: 1.6; margin: 0 0 25px 0; color: #555;">You have been successfully registered with our system using Google Services.</p>
                            <p style="font-size: 14px; line-height: 1.6; margin: 0 0 25px 0; color: #555;">This is HERE your Auto Generated PAssword, Please Do not share it with anyone, You can change it later in your profile settings.</p>
                            <p style="font-size: 14px; line-height: 1.6; margin: 0 0 25px 0; color: #555;"><strong>Auto Generated Password:</strong> ${data.userPassword}</p>

                            <!-- Features Section -->
                            <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; border-radius: 5px; margin: 25px 0;">
                                <h3 style="margin: 0 0 15px 0; color: #667eea; font-size: 16px;">✨ What You Can Do With RecoTrack:</h3>
                                <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 13px; line-height: 1.8;">
                                    <li><strong>Smart Note Creation:</strong> Full CRUD operations with rich text editing</li>
                                    <li><strong>Instant Mail Export:</strong> Share your notes directly via email</li>
                                    <li><strong>Tags & Organization:</strong> Categorize and find notes effortlessly</li>
                                    <li><strong>Attachments & URLs:</strong> Embed files and links within your notes</li>
                                    <li><strong>Multiple Export Formats:</strong> Download as PDF or Word documents instantly</li>
                                    <li><strong>Streak Tracking:</strong> Maintain your productivity streaks with visual calendar</li>
                                    <li><strong>Customizable Settings:</strong> Personalize your experience completely</li>
                                </ul>
                            </div>

                            <!-- Premium Feature -->
                            <div style="background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%); padding: 20px; border-radius: 5px; margin: 25px 0; color: white;">
                                <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 700;">🚀 Premium Feature - Global Coordination & Collaboration</h3>
                                <p style="margin: 0; font-size: 13px; line-height: 1.6;">Work seamlessly with your team across the globe. Real-time collaboration, shared workspaces, and unified productivity - all in one platform.</p>
                            </div>

                            <!-- Get Started -->
                            <p style="font-size: 13px; line-height: 1.6; margin: 25px 0; color: #555;">Start creating your first note today and unlock the full potential of organized digital workspace. Your journey to enhanced productivity begins now!</p>

                            <!-- CTA Button -->
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="https://recotrackpiyushsingh.vercel.app/login" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 14px; display: inline-block;">Start Using RecoTrack →</a>
                            </div>

                            <!-- Divider -->
                            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

                            <!-- Admin Contact Section -->
                            <div style="background: #f0f4ff; padding: 20px; border-radius: 5px; margin: 20px 0;">
                                <h4 style="margin: 0 0 15px 0; color: #667eea; font-size: 14px; font-weight: 700;">Need Help? Connect With Us</h4>
                                <p style="font-size: 12px; margin: 8px 0; color: #555;"><strong>👤 Admin & Creator:</strong> Piyush Singh</p>
                                <p style="font-size: 12px; margin: 8px 0; color: #555;"><strong>📧 Work Email:</strong> <a href="mailto:workspace.piyush01@gmail.com" style="color: #667eea; text-decoration: none;">workspace.piyush01@gmail.com</a></p>
                                <p style="font-size: 12px; margin: 8px 0; color: #555;"><strong>📱 Contact:</strong> +91 8382818030</p>
                                
                                <div style="margin-top: 15px; display: flex; gap: 12px; justify-content: center;">
                                    <a href="https://github.com/piyushsingh022002" style="display: inline-block; background: #333; color: white; padding: 8px 15px; border-radius: 4px; text-decoration: none; font-size: 11px; font-weight: 600;">GitHub</a>
                                    <a href="https://www.linkedin.com/in/piyushsingh02" style="display: inline-block; background: #0077b5; color: white; padding: 8px 15px; border-radius: 4px; text-decoration: none; font-size: 11px; font-weight: 600;">LinkedIn</a>
                                </div>
                            </div>

                            <!-- Footer -->
                            <p style="font-size: 12px; text-align: center; margin: 25px 0 0 0; color: #999; line-height: 1.6;">
                                This email was sent because you recently joined RecoTrack.<br>
                                © 2026 RecoTrack. All rights reserved.
                            </p>
                        </div>
                    </div>
                `;
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