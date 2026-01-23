# Video Assets

This folder contains the hero background video for local development.

## Local Development Setup

1. Place your `website.MOV` or `website.mp4` file in this directory
2. The video will automatically load when running locally

## Production Deployment

For production (Vercel), the video is hosted externally to avoid bundle size issues.

### Option 1: Use Cloudinary (Recommended)
1. Sign up at https://cloudinary.com (free tier available)
2. Upload your video
3. Copy the video URL
4. Add to Vercel environment variables: `NEXT_PUBLIC_VIDEO_URL=your_cloudinary_url`

### Option 2: Use Bunny.net CDN
1. Sign up at https://bunny.net
2. Create a storage zone
3. Upload your video
4. Get the CDN URL
5. Add to Vercel: `NEXT_PUBLIC_VIDEO_URL=your_bunny_url`

### Option 3: Use Vercel Blob Storage
```bash
npm install @vercel/blob
```
Then upload via CLI or dashboard.

## Current Video
- File: `website.MOV`
- Size: ~29MB
- Google Drive backup: https://drive.google.com/file/d/1i945Qj4pfvJFao8Xlbplt0GTef9qTYJ8/view

## Notes
- Video files are git-ignored to prevent deployment issues
- Local development uses files from this directory
- Production uses the URL from `NEXT_PUBLIC_VIDEO_URL` environment variable
