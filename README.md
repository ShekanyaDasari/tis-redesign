# 🏛️ Tula's International School (TIS) — Homepage Redesign

A cutting-edge, high-converting, and animated homepage redesign for **Tula's International School (TIS), Dehradun** — *"The Modern Gurukul"*.

This project preserves the institutional legacy and core brand identity of TIS while elevating the user experience into an interactive, agency-grade digital presence with smooth physics-based motion and mobile responsiveness.

---

## 🔗 Project Links

- **Live Deployed Site**: [https://tis-redesign.vercel.app](https://tis-redesign.vercel.app) *(Replace with your actual Vercel URL)*
- **GitHub Repository**: [https://github.com/ShekanyaDasari/tis-redesign](https://github.com/ShekanyaDasari/tis-redesign)

---

## 🌟 Key Standout Features

As requested in the project brief, this build incorporates multiple advanced interactive elements:

### 1. 🎯 Custom Interactive Magnetic Cursor (`CustomCursor.jsx`)
- Built with physics-based spring dampening via Framer Motion (`useSpring`).
- Expands and reacts dynamically with smooth color blending whenever hovering over interactive targets (`<button>`, `<a>`, or links).
- **Accessibility & UX optimized**: Automatically detects and disables itself on touch and coarse pointer devices (smartphones/tablets) to prevent touch conflicts.

### 2. 📊 Viewport Scroll Progress Bar (`ScrollProgress.jsx`)
- Fixed reading-progress indicator anchored along the top header.
- Utilizes `useScroll` and spring-normalized physics to provide smooth visual feedback without layout thrashing.

### 3. ✨ Scroll-Triggered Stagger Reveals (`Pillars.jsx`)
- Cards and content sections enter the viewport with staggered fade-and-slide reveals via Framer Motion's `whileInView` and `staggerChildren`.
- Designed with negative margins to prevent early triggers and preserve 60fps scrolling.

### 4. 📝 High-Converting Admissions Lead Modal (`AdmissionsModal.jsx`)
- Accessible popup inquiry form with animated entrance/exit states (`AnimatePresence`).
- Includes interactive form fields (Grade selector, Parent contact) with instant success confirmation states.

---

## 🎨 Design System & Brand Identity

- **The Modern Gurukul Palette**:
    - **Imperial Navy (`#0A192F` / `#050C1A`)**: Represents institutional authority, stability, and prestige.
    - **Royal Warm Gold (`#D4AF37` / `#F3E5AB`)**: Represents excellence, heritage, and distinction.
    - **Muted Slate (`#8892B0` / `#CCD6F6`)**: Clean, high-legibility secondary text.
- **Typography**: Editorial serif headings paired with clean, modern sans-serif body typography.
- **Responsive Layout**: Designed mobile-first, supporting fluid viewports from 360px mobile screens up to 4K displays.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React.js 18 (Vite bundler for ultra-fast HMR)
- **Styling**: Tailwind CSS 3
- **Motion & Interactions**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (CI/CD connected to GitHub)

### Folder Structure
```text
tis-redesign/
├── public/                 # Static assets
├── src/
│   ├── components/         # Modular UI Components
│   │   ├── AdmissionsModal.jsx   # Interactive Inquiry Form
│   │   ├── CustomCursor.jsx      # Mouse-follower ring
│   │   ├── Footer.jsx            # Institutional footer
│   │   ├── Hero.jsx              # Hero section with key metrics
│   │   ├── Navbar.jsx            # Sticky responsive navigation
│   │   ├── Pillars.jsx           # Stagger-animated feature cards
│   │   └── ScrollProgress.jsx    # Smooth top reading bar
│   ├── App.jsx             # Main layout orchestration
│   ├── index.css           # Tailwind directives & CSS variables
│   └── main.jsx            # Application entrypoint
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js      # Custom TIS color palette configuration
├── vite.config.js
└── README.md