import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

interface EmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Free SMTP configurations
const SMTP_CONFIGS: Record<string, EmailConfig> = {
  gmail: {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || ''
    }
  },
  outlook: {
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || ''
    }
  },
  yahoo: {
    host: 'smtp.mail.yahoo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || ''
    }
  }
};

export class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    const smtpProvider = process.env.SMTP_PROVIDER || 'gmail';
    const config = SMTP_CONFIGS[smtpProvider];

    if (!config.auth.user || !config.auth.pass) {
      console.warn('SMTP credentials not configured. Email notifications will not work.');
      return;
    }

    this.transporter = nodemailer.createTransport(config);
  }

  async sendContactNotification(contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<boolean> {
    if (!this.transporter) {
      console.error('Email transporter not initialized');
      return false;
    }

    try {
      const emailParams: EmailParams = {
        to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || '',
        subject: `New Contact Form Submission: ${contactData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #6366f1; margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${contactData.name}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              <p><strong>Subject:</strong> ${contactData.subject}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #6366f1; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6; color: #555;">${contactData.message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px;">
                This email was sent from your portfolio contact form.
              </p>
            </div>
          </div>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${contactData.name}
          Email: ${contactData.email}
          Subject: ${contactData.subject}
          
          Message:
          ${contactData.message}
        `
      };

      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        ...emailParams
      });

      console.log('Contact notification email sent successfully');
      return true;
    } catch (error) {
      console.error('Error sending contact notification email:', error);
      return false;
    }
  }

  async testConnection(): Promise<boolean> {
    if (!this.transporter) {
      return false;
    }

    try {
      await this.transporter.verify();
      console.log('SMTP connection verified successfully');
      return true;
    } catch (error) {
      console.error('SMTP connection test failed:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();