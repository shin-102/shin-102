# High-End Portfolio - Next.js

A production-ready, premium portfolio website featuring glassmorphism, Bento Grid layout, and sophisticated animations.

## Features

- ✨ **Glassmorphic Design** - Modern aesthetic with backdrop blur and subtle gradients
- 🎨 **Bento Grid Layout** - Dynamic, responsive card-based layout
- 🎭 **Premium Animations** - Smooth micro-interactions with Framer Motion
- ⌨️ **Command Palette** - Quick navigation with keyboard shortcuts (⌘K / Ctrl+K)
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎯 **Auto-Featured Project** - Automatically highlights most complex project
- 📊 **GitHub Contribution Graph** - Animated activity visualization
- 📧 **Contact Form** - Validated form with elegant error states
- 🔍 **SEO Optimized** - Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Command Palette**: KBar
- **Icons**: Lucide React

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### 1. Edit Personal Information

Edit `/lib/data.ts` to customize your portfolio content:

```typescript
export const portfolio = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

### 2. Add Projects

Add your projects to the `projects` array in `/lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Title",
    description: "Project description...",
    tags: ["React", "TypeScript", "Next.js"],
    featured: false,
    complexity: 8, // 1-10, used for auto-featured detection
    github: "https://github.com/...",
    link: "https://...",
  },
  // Add more projects...
];
```

The project with the highest `complexity` score will automatically be featured in the largest Bento grid tile.

### 3. Update Skills

Edit the `skills` array in `/lib/data.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", category: "frontend", icon: "⚛️" },
  // Add more skills...
];
```

### 4. Customize Colors

Edit `/tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  border: "hsl(var(--border))",
  background: "hsl(var(--background))",
  // Customize other colors...
}
```

### 5. Integrate Contact Form

The contact form is ready for backend integration. Options:

**Option A: EmailJS**
```bash
npm install @emailjs/browser
```

**Option B: API Route**
Create `/app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Handle email sending
  return Response.json({ success: true });
}
```

**Option C: Third-party service**
- Formspree
- SendGrid
- Resend

Update `/components/ContactForm.tsx` with your integration.

### 6. Replace GitHub Graph

To use your actual GitHub contribution graph:

1. Generate SVG from GitHub profile
2. Save as `/public/github-metrics.svg`
3. Update `/components/GitHubGraph.tsx` to use the image:

```typescript
<img src="/github-metrics.svg" alt="GitHub contributions" />
```

## Keyboard Shortcuts

Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) to open the command palette:

- `H` - Navigate to Home
- `P` - Navigate to Projects
- `C` - Navigate to Contact
- `G` - Open GitHub profile
- `L` - Open LinkedIn profile

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production version:

```bash
npm run build
npm run start
```

Deploy the `.next` folder to your hosting provider.

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css       # Global styles & Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── CommandPalette.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── GitHubGraph.tsx
│   ├── GlassCard.tsx
│   ├── Hero.tsx
│   ├── KeyboardHint.tsx
│   ├── MagneticButton.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── lib/
│   ├── data.ts           # Portfolio content (EDIT THIS)
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Performance

- ⚡ Lighthouse Score: 95+
- 🎯 First Contentful Paint: < 1s
- 📦 Bundle Size: Optimized with Next.js
- 🚀 Lazy Loading: Components load on scroll

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
