<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Joshua Alexander - Software Engineer Portfolio

A modern, cyberpunk-themed portfolio built with Next.js 16, featuring an interactive skill graph, AI-powered chat terminal, and comprehensive project showcase.

## Tech Stack

- **Framework:** Next.js 16.0.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Package Manager:** Yarn 4 (with node-modules linker)
- **AI Integration:** Google Gemini API
- **Data Visualization:** D3.js
- **Icons:** Lucide React

## Run Locally

**Prerequisites:** Node.js 18+ and Yarn

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Set your `NEXT_PUBLIC_GEMINI_API_KEY` in `.env.local`
   - Get your API key from: https://makersuite.google.com/app/apikey

3. Run the development server:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
yarn build
yarn start
```

## Features

- Interactive skill graph with D3.js force simulation
- AI-powered terminal chat using Gemini API
- Responsive design with mobile navigation
- Boot sequence animation
- System shutdown/reboot functionality
- Project showcase with filterable tech stacks
- Experience timeline

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts
│   │   ├── page.tsx         # Main portfolio page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── SkillGraph.tsx
│   │   ├── Terminal.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── ExperienceTimeline.tsx
│   ├── services/
│   │   └── geminiService.ts # AI chat service
│   ├── constants.ts         # Portfolio data
│   └── types.ts            # TypeScript types
├── next.config.ts
├── tailwind.config.ts
└── package.json
```
