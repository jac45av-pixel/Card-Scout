# CardScout 🃏

A sports card deal finder that scans eBay for raw, graded, and cross opportunities — with AI-powered photo grading.

## What It Does
- Searches eBay for cards matching your criteria ($50+, all sports)
- Identifies raw submission candidates and cross plays (PSA, BGS, SGC, CSG, HGA, TAG)
- Runs Claude AI vision analysis on each card photo
- Shows cross confidence, value delta, ROI, and grade analysis

---

## Setup (15 minutes, everything free)

### Step 1 — Get your API keys

**eBay App ID (free)**
1. Go to https://developer.ebay.com
2. Click Join and sign in with your eBay account
3. Go to My Account → Application Keysets → Get a Key → Production
4. Copy your App ID (Client ID)

**Anthropic API Key**
1. Go to https://console.anthropic.com
2. Sign up, then go to API Keys → Create Key
3. Copy the key (shown once only)
4. Add $5-10 in billing credits

---

### Step 2 — Create a GitHub account
1. Go to https://github.com and click Sign up
2. Verify your email

### Step 3 — Create a new GitHub repository
1. Click the + icon → New repository
2. Name it: cardscout
3. Set to Public
4. Click Create repository

### Step 4 — Upload the files
1. On your new repo page, click "uploading an existing file"
2. Drag both files (index.html and README.md) into the upload area
3. Click Commit changes

### Step 5 — Deploy with Vercel (free)
1. Go to https://vercel.com and click Sign Up
2. Choose "Continue with GitHub" and authorize
3. Click Add New → Project
4. Find your cardscout repo and click Import
5. Leave all settings as default and click Deploy
6. Wait ~60 seconds — Vercel gives you a live URL like cardscout.vercel.app

---

### Step 6 — Use the app
1. Open your Vercel URL on any device
2. Click "API Keys" in the top right
3. Enter your eBay App ID and Anthropic API key
4. Hit Save — keys are stored in your browser only
5. Search for any player, set, or just leave blank for broad results
6. Hit Scan eBay and let the AI do the work

---

## Cost Estimate
- eBay API: Free
- Vercel hosting: Free
- Claude AI grading: ~$0.01-0.05 per card analyzed (~$1-3 per session)

## Notes
- Keys are stored in your browser's localStorage and never sent anywhere except the official APIs
- eBay Finding API is used (requires App ID, not OAuth token)
- Claude Sonnet analyzes each card image and title for grading assessment
