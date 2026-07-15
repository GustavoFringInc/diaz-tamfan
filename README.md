# Diaz Rahardi — Portfolio

Personal portfolio website for **Muhammad Diaz Rahardi Putra**, an AI Product Builder from Indonesia.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Modern Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- **Smooth Animations**: Framer Motion, Lenis smooth scroll
- **Dark Mode**: Gruvbox-inspired warm color palette
- **Responsive**: Mobile-first design with adaptive animations
- **Performance**: Optimized for speed and SEO
- **Pages**:
  - Home — Hero with typing effect, constellation background, featured projects
  - Projects — Detailed case studies of AI products and experiments
  - Journal — Long-form writing on product thinking and design
  - Now — What I'm currently working on (inspired by nownownow.com)
  - Uses — My development setup, tools, and workflow
  - Contact — Direct contact links

## 🎨 Design Philosophy

**Quiet Confidence** — The design doesn't scream for attention. It earns trust through precision, restraint, and respect for the user's time.

- Warm dark theme (Gruvbox-inspired, desaturated for web)
- Minimal motion — animations serve meaning, not decoration
- Editorial typography with generous whitespace
- Constellation network visualization representing interconnected thinking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/diaz-tamfan.git
cd diaz-tamfan

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── journal/           # Journal/writing page
│   ├── now/               # Now page
│   ├── uses/              # Uses/setup page
│   └── contact/           # Contact page
├── components/
│   ├── layout/            # Navbar, Footer, SmoothScroll
│   ├── motion/            # Animation components
│   │   ├── RevealText.tsx
│   │   ├── StaggerGrid.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── TypingEffect.tsx
│   │   ├── ConstellationBg.tsx
│   │   ├── MouseSpotlight.tsx
│   │   └── Terminal.tsx
│   ├── sections/          # Page sections (Hero, Philosophy, etc.)
│   └── ui/                # Reusable UI components
├── data/                  # Static data (projects, journal posts)
└── lib/                   # Utilities
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion, Lenis
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter, JetBrains Mono

## 📝 Adding Content

### Adding a New Project

Edit `src/data/projects.ts` and add a new project object:

```typescript
{
  slug: "your-project",
  title: "Project Name",
  tagline: "Short description",
  description: "Brief overview",
  longDescription: "Detailed description",
  tech: ["Next.js", "TypeScript", "..."],
  category: "Category",
  status: "active", // or "experiment" or "completed"
  year: "2024",
  link: "https://...",
  featured: true
}
```

### Adding a Journal Post

Edit `src/data/journal.ts` and add a new post:

```typescript
{
  slug: "your-post-slug",
  title: "Post Title",
  excerpt: "Brief excerpt",
  content: `Full post content in markdown...`,
  date: "2024-12-15",
  tags: ["tag1", "tag2"],
  readingTime: "5 min"
}
```

## 🎨 Customization

### Colors

Edit the color variables in `src/app/globals.css`:

```css
@theme {
  --color-bg: #1a1917;
  --color-accent: #e8a948;
  /* ... */
}
```

### Fonts

Update the Google Fonts link in `src/app/layout.tsx` and the font variables in `globals.css`.

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio.

## 🤝 Contact

**Muhammad Diaz Rahardi Putra**

- GitHub: [@diazrahardi](https://github.com/diazrahardi)
- LinkedIn: [Diaz Rahardi](https://linkedin.com/in/diazrahardi)
- Email: diaz@example.com

---

Built with intention. Designed with quiet confidence.
