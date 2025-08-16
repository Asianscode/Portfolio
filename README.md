# Muhammad Eshaan - Biotech Portfolio

A professional 3D biotech portfolio website built with React, Three.js, and TypeScript, showcasing expertise in biotechnology, computational biology, and software development.

## 🚀 Live Demo

Visit the live portfolio at: [Your GitHub Pages URL will be here]

## ✨ Features

- **3D Interactive Elements**: DNA helix, neural networks, and interactive cellular visualizations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Professional Sections**:
  - Hero with rotating DNA helix
  - About section with profile and experience
  - Wet Lab expertise showcase
  - Computational Biology & AI skills
  - Software & Simulations portfolio
  - Featured projects gallery
  - Contact information and social links

## 🛠️ Built With

- **Frontend**: React 18 + TypeScript
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: TailwindCSS + shadcn/ui
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
# Clone the repository
git clone https://github.com/[your-username]/[your-repo-name].git
cd [your-repo-name]

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
# Build the client application
cd client
npm run build

# The built files will be in client/dist/
```

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)
This repository includes GitHub Actions workflow for automatic deployment:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://[your-username].github.io/[repo-name]/`

### Manual Deployment
If you prefer manual deployment:

1. Build the project: `cd client && npm run build`
2. Push the `client/dist` folder contents to the `gh-pages` branch

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── lib/          # Utilities and stores
│   │   └── pages/        # Page components
│   └── public/           # Static assets
├── server/               # Backend (for local development)
├── shared/              # Shared TypeScript types
└── .github/workflows/   # GitHub Actions deployment
```

## 🎨 Customization

### Updating Personal Information
- Update name and details in `src/components/Hero.tsx`
- Modify contact information in `src/components/ContactSection.tsx`
- Replace profile picture in `client/public/profile.png`
- Edit about section in `src/components/AboutSection.tsx`

### Adding Projects
- Update the projects array in `src/components/ProjectsSection.tsx`
- Add project screenshots to `client/public/`

### Modifying Skills
- Edit skills in respective section components:
  - `src/components/WetLabSection.tsx`
  - `src/components/ComputationalBiologySection.tsx`
  - `src/components/SoftwareSection.tsx`

## 📧 Contact

Muhammad Eshaan - [eshaanmuhammad363@gmail.com](mailto:eshaanmuhammad363@gmail.com)

- LinkedIn: [muhammad-eshaan-380645374](https://www.linkedin.com/in/muhammad-eshaan-380645374)
- GitHub: [@Asianscode](https://github.com/Asianscode)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Built with ❤️ using React, Three.js, and modern web technologies*