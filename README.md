# React Portfolio

A personal portfolio website built with React, TypeScript, and Vite. It brings together professional information, selected projects, learning milestones, skills, education, certificates, and interactive mini apps in one responsive interface.

## ✨ Features

- Personal profile, availability, contact details, languages, and social links
- Experience and learning journey sections
- Project showcase with screenshots, technology summaries, source links, and live demos where available
- Certificate gallery and education details
- Hard and soft skills
- Six interactive mini apps: calculator, randomizer, date and time, weather, currency converter, and prediction
- Light and dark theme toggle
- Responsive navigation, carousels, and image lightboxes
- Downloadable CV PDF

## 🧰 Tech Stack

| Area | Technologies |
| --- | --- |
| App | React 19, TypeScript, Vite |
| Styling and layout | CSS, Bootstrap 5, Bootswatch |
| UI interactions | Swiper, AOS, Lightbox2, jQuery |
| Icons | Font Awesome Free |
| Code quality | ESLint, typescript-eslint, React Hooks and React Refresh ESLint plugins |

## 📚 Portfolio Sections

- Welcome
- General information: personal info, availability, contacts, languages, and social media
- Portfolio: experience, learning journey, projects, certification, education, and JavaScript mini apps
- Skills: hard skills and soft skills

## 🗂️ Project Structure

```text
public/
└── assets/
    ├── docs/                 # CV PDF
    └── img/                  # Profile, project, certificate, and utility images
src/
├── assets/styles/            # Main site stylesheet
├── components/
│   ├── Certification/
│   ├── Education/
│   ├── Experience/
│   ├── Footer/
│   ├── GeneralInfo/
│   ├── Hero/
│   ├── KeywordsMarquee/
│   ├── LearningJourney/
│   ├── Navbar/
│   ├── Projects/
│   ├── Skills/
│   └── Utills/                # Interactive mini apps
├── App.tsx
├── App.css
├── index.css
└── main.tsx
index.html
vite.config.ts
eslint.config.js
package.json
package-lock.json
tsconfig*.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (a version supported by the installed Vite release)
- npm

### Install and run

```bash
git clone https://github.com/TempPolarBear/React-Portfolio.git
cd React-Portfolio
npm ci
npm run dev
```

Vite prints the local development URL in the terminal after the server starts.

## 🛠️ Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Type-check the project and create a production build in `dist/` |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Serve the production build locally for preview |

## 🔗 Repository

[github.com/TempPolarBear/React-Portfolio](https://github.com/TempPolarBear/React-Portfolio)

No published URL for this portfolio site is listed because a deployed version has not been verified.
