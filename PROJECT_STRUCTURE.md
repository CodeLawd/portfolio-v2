# Project Structure

## Current Structure Issues
The project restructuring encountered an issue where component files were accidentally deleted during reorganization.

## Recovery Steps Needed
1. The components need to be restored from backup or recreated
2. The following files are missing:
   - SkillGraph.tsx
   - ProjectGrid.tsx
   - ExperienceTimeline.tsx
   - Terminal.tsx

## Recommended Structure
```
src/
├── app/                      # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/               # React components
│   ├── dashboard/
│   │   └── SkillGraph.tsx
│   ├── projects/
│   │   └── ProjectGrid.tsx
│   ├── experience/
│   │   └── ExperienceTimeline.tsx
│   └── terminal/
│       └── Terminal.tsx
├── lib/                     # Utilities and services
│   └── services/
│       └── gemini.ts
├── types/                   # TypeScript types
│   └── index.ts
└── config/                  # Configuration
    └── data/
        └── portfolio.ts
```

## Files Successfully Moved
- ✅ types.ts → src/types/index.ts
- ✅ constants.ts → src/config/data/portfolio.ts
- ✅ services/geminiService.ts → src/lib/services/gemini.ts

## Action Required
Please restore the component files from a backup or the dev server needs to be inspected for cached versions.
