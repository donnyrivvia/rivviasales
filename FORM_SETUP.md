# Join Team Form Setup Guide - Resend

The "Join the Team" modal form is now integrated and configured to use Resend. All form submissions will be sent as emails to your designated email address.

## Resend Setup (Current Configuration)

### Option 1: Web3Forms (Recommended for Quick Start)
**Free, unlimited submissions, no backend needed**

1. Go to [web3forms.com](https://web3forms.com)
2. Sign up and get your Access Key
3. Update `/src/components/JoinTeamModal.tsx`:

```typescript
// Replace the handleSubmit fetch with:
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY_HERE', // Replace with your key
    subject: 'New Team Application from Rivvia',
    from_name: formData.fullName,
    ...formData,
  }),
});
```

4. You'll receive submissions via email

### Option 2: Formspree
**50 free submissions/month**

1. Go to [formspree.io](https://formspree.io)
2. Create a form and get your Form ID
3. Update `/src/components/JoinTeamModal.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Option 3: Resend (Email API)
**Professional email delivery, 100 emails/day free**

1. Install Resend:
```bash
npm install resend
```

2. Get API key from [resend.com](https://resend.com)

3. Add to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
```

4. Update `/src/app/api/join-team/route.ts`:
   - Uncomment the Resend section (lines 18-34)
   - Update the email addresses

### Option 4: Database + Email (Most Control)

**Full control, best for production**

1. Set up a database (Supabase, Prisma, etc.)
2. Install dependencies:
```bash
npm install @prisma/client prisma resend
```

3. Create database schema
4. Update API route to save to database AND send email

## Environment Variables

Create `.env.local` in your project root:

```env
# Option 1: Web3Forms
WEB3FORMS_ACCESS_KEY=your_access_key

# Option 2: Formspree
# No env variables needed

# Option 3: Resend
RESEND_API_KEY=your_api_key

# Option 4: Database
DATABASE_URL=your_database_url
```

## Current Setup

The form currently uses the API route at `/api/join-team` which:
- Validates the form data
- Logs to console (for testing)
- Returns success/error responses

**You must implement one of the options above for production use.**

## Testing

1. Open your site
2. Click "Join the Team" button
3. Fill out the form
4. Check browser console for logged data
5. Once you implement an option above, verify you receive the submission

## Form Fields

- **Full Name** (required)
- **Email** (required)
- **Phone Number** (required)
- **Sales Experience** (required dropdown)
  - No Experience
  - Less than 1 year
  - 1-3 years
  - 3-5 years
  - 5+ years
- **Tell Us About Yourself** (optional textarea)
- **Referred By** (optional)

## Need Help?

1. Check the commented code in `/src/app/api/join-team/route.ts`
2. See examples in `/src/components/JoinTeamModal.tsx`
3. All options are well-documented on their respective websites
