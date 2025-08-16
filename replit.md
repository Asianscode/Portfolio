# Overview

This is a 3D biotech portfolio website built for a Biotechnologist & Computational Biologist who also develops software and simulations. The application showcases their expertise across wet lab techniques, computational biology, software development, and research projects through an interactive, visually striking 3D interface. The portfolio features scientific visualizations including DNA helixes, neural networks, and molecular structures to create an immersive biotech-inspired experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **3D Graphics**: React Three Fiber (@react-three/fiber) with Three.js for 3D visualizations including DNA helixes, neural networks, and interactive molecular structures
- **3D Utilities**: React Three Drei (@react-three/drei) for additional 3D components and helpers
- **Styling**: TailwindCSS with custom biotech color scheme (cyan, green, purple accents) and shadcn/ui component library for consistent UI patterns
- **State Management**: Zustand for lightweight state management (audio controls, game state)
- **Data Fetching**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Asset Support**: GLSL shaders, 3D models (GLTF/GLB), and audio files

## Backend Architecture
- **Runtime**: Node.js with Express.js server using TypeScript
- **Module System**: ES modules throughout the application
- **API Structure**: RESTful API with `/api` prefix for all backend routes
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot module replacement via Vite integration for seamless development experience

## Data Storage
- **Database**: PostgreSQL with Neon serverless database integration
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema**: Zod integration for runtime type validation
- **Connection**: Environment-based database URL configuration
- **Migrations**: Drizzle Kit for database schema management

## Component Architecture
- **UI Components**: Modular shadcn/ui components with Radix UI primitives
- **3D Components**: Reusable Three.js components for scientific visualizations (DNA helix, neural networks, interactive cells)
- **Section-Based Layout**: Hero, Wet Lab, Computational Biology, Software, Projects, and Contact sections
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints
- **Animation System**: Smooth transitions and hover effects throughout the interface

## Performance Optimizations
- **Code Splitting**: Lazy loading with React Suspense for 3D components
- **Asset Optimization**: Vite's built-in optimization for static assets
- **3D Rendering**: Efficient Three.js rendering with proper cleanup and memory management
- **Background Effects**: Optimized floating particles and gradient systems