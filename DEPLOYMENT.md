# Mr.Tayeb∞ Deployment Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- Vercel account (or other Next.js hosting)

## Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
```
http://localhost:3000
```

## Environment Variables

Create `.env.local` file:
```bash
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=1643975840073551
NEXT_PUBLIC_WHATSAPP_PHONE=213771640848
WEBHOOK_URL=https://raslem-n8n.duckdns.org/webhook/6569787d-7c6d-4dc2-a651-cd63c9c6b902
```

## Deploy to Vercel

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
vercel --prod
```

### 4. Configure Environment Variables

In Vercel Dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add:
   - `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
   - `NEXT_PUBLIC_WHATSAPP_PHONE`
   - `WEBHOOK_URL`

### 5. Configure Custom Domain

1. Go to Domains in Vercel Dashboard
2. Add `mr-tayeb.com`
3. Update DNS records at your domain provider:
   - Type: `A` Record
   - Name: `@`
   - Value: Vercel's IP
   - Type: `CNAME` Record
   - Name: `www`
   - Value: `cname.vercel-dns.com`

## Deploy to Other Platforms

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

### Self-Hosted (PM2)
```bash
npm run build
pm2 start npm --name "mr-tayeb" -- start
```

## Post-Deployment Checklist

- [ ] Test all 4 products display correctly
- [ ] Test order form submission
- [ ] Verify WhatsApp links work
- [ ] Check Facebook Pixel is firing
- [ ] Test on mobile devices
- [ ] Verify images load (should be <200KB)
- [ ] Check Arabic RTL layout
- [ ] Test on 3G connection
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Verify SSL certificate
- [ ] Test webhook integration

## Performance Optimization

### Images
- All images optimized to <200KB
- WebP format with JPEG fallback
- Lazy loading enabled
- Next.js Image component used

### Code
- TypeScript strict mode
- Tree-shaking enabled
- CSS purging with Tailwind

### Monitoring

Add analytics:
- Google Analytics
- Vercel Analytics
- Facebook Pixel (already integrated)

## Troubleshooting

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Image Loading Issues
- Verify images are in `public/images/`
- Check file names match imports
- Ensure WebP support in browser

### Form Not Submitting
- Check webhook URL is correct
- Verify CORS settings on n8n
- Check browser console for errors

## Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Monitor Performance
```bash
npm run build
npx lighthouse http://localhost:3000
```

## Support

- **Documentation:** See README.md
- **Issues:** Create issue in GitHub
- **Contact:** m.t.infinity.01@gmail.com
