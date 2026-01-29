# Resend Setup Guide for Form Submissions

Your "Join the Team" form is configured to use Resend to email all applications to your team.

## How It Works

1. User fills out the "Join the Team" form
2. Form submits to your API route (`/api/join-team`)
3. **Resend sends a formatted email** with all application details to your specified email
4. Your applications manager receives the email and can reply directly to the applicant

---

## Setup Steps

### Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free forever)
3. Verify your email

### Step 2: Get Your API Key

1. In your Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Give it a name (e.g., "Rivvia Production")
4. Copy the API key (starts with `re_...`)

### Step 3: Add API Key to Your Project

1. Create a file named `.env.local` in your project root (if it doesn't exist)
2. Add this line:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

3. **Important:** Never commit `.env.local` to git (it's already in `.gitignore`)

### Step 4: Configure Your Domain (Recommended for Production)

For better deliverability, verify your domain with Resend:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `rivviasales.com`)
4. Add the DNS records Resend provides to your domain settings
5. Wait for verification (usually takes a few minutes)

**Without domain verification:** Emails will come from `onboarding@resend.dev` (works but looks less professional)

**With domain verification:** Emails will come from `noreply@rivviasales.com` (looks professional)

### Step 5: Update Email Addresses

Edit `/src/app/api/join-team/route.ts` and update these lines:

```typescript
from: 'Rivvia Careers <noreply@yourdomain.com>', // Line 28
// Change to: 'Rivvia Careers <noreply@rivviasales.com>'

to: 'careers@rivvia.com', // Line 29
// Change to: whoever should receive applications
```

### Step 6: Deploy Environment Variable

When deploying to Vercel/production:

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your API key value
4. Redeploy your site

---

## Testing

### Local Testing

1. Make sure `.env.local` has your API key
2. Restart your development server: `npm run dev`
3. Open your site and click "Join the Team"
4. Fill out the form and submit
5. Check the email address you specified in `route.ts`

### Production Testing

After deployment:
1. Submit a test application through your live site
2. Verify the email arrives correctly
3. Test the reply functionality

---

## Email Template

The email your manager receives will include:

- **Subject:** "New Team Application: [Applicant Name]"
- **From:** Rivvia Careers
- **Reply-To:** The applicant's email (so you can reply directly)
- **Content:**
  - Full Name
  - Email (clickable)
  - Phone Number (clickable)
  - Sales Experience level
  - About Themselves message
  - Who referred them (if provided)

---

## Troubleshooting

### "Failed to submit application" error

**Check:**
1. Is `RESEND_API_KEY` set in `.env.local`?
2. Did you restart the dev server after adding the key?
3. Is your API key valid? (Check Resend dashboard)

### Email not arriving

**Check:**
1. Spam/junk folder
2. Is the `to` email address correct in `route.ts`?
3. Check Resend dashboard → **Logs** to see if email was sent
4. If using a custom domain, is it verified?

### "Unauthorized" error

- Your API key is invalid or expired
- Generate a new API key in Resend dashboard

---

## Costs

- **Free tier:** 100 emails/day (3,000/month)
- **Paid tier:** $20/month for 50,000 emails
- More than enough for a recruiting site

---

## What's Already Done

✅ Resend package installed (`npm install resend`)  
✅ API route configured (`/src/app/api/join-team/route.ts`)  
✅ Form integrated in Navbar, Hero, Footer CTA, and Incentives page  
✅ Professional email template with styling  
✅ Reply-to functionality enabled  

**All you need to do:** Get your API key and add it to `.env.local`!

---

## Next Steps

1. Create Resend account → Get API key → Add to `.env.local`
2. Update email addresses in `route.ts`
3. Test locally
4. Add domain to Resend (optional but recommended)
5. Deploy with environment variable
6. Test in production

Need help? Check the [Resend documentation](https://resend.com/docs) or let me know!
