import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // Check if API key is available at runtime
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend only when needed (at runtime)
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { fullName, email, phone, experience, message, referredBy } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !experience) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format experience label
    const experienceLabels: Record<string, string> = {
      'none': 'No Experience',
      'less-1-year': 'Less than 1 year',
      '1-3-years': '1-3 years',
      '3-5-years': '3-5 years',
      '5-plus-years': '5+ years',
    };

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: 'Rivvia Careers <noreply@rivvia.com>', // Verified domain in Resend
      to: [
        'donny@rivvia.com',
        'jeremy@rivvia.com',
        'matth@rivvia.com',
        // Add more emails below:
        // 'manager@rivvia.com',
        // 'hr@rivvia.com',
      ],
      replyTo: email, // Allows easy reply to the applicant
      subject: `New Team Application: ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #000;
                color: #fff;
                padding: 20px;
                text-align: center;
                margin-bottom: 30px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #eee;
              }
              .label {
                font-weight: bold;
                color: #666;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #000;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #000;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Team Application</h1>
            </div>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Sales Experience</div>
              <div class="value">${experienceLabels[experience] || experience}</div>
            </div>
            
            ${message ? `
            <div class="field">
              <div class="label">About Themselves</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            
            ${referredBy ? `
            <div class="field">
              <div class="label">Referred By</div>
              <div class="value">${referredBy}</div>
            </div>
            ` : ''}
            
            <div class="footer">
              <p>This application was submitted through rivvia.com</p>
              <p>Click reply to respond directly to ${fullName}</p>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResult.error) {
      console.error('Resend error:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email', details: emailResult.error },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', emailResult.data?.id);
    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit application', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
