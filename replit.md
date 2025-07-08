Personal Portfolio Website
Overview
This is a full-stack personal portfolio website for Abdul Hannan (Honey), a Full Stack .NET & Angular Developer. The application showcases professional experience, skills, projects, and provides a contact form for potential clients and employers. It's built using modern web technologies with a focus on performance, accessibility, and user experience.

System Architecture
Frontend Architecture
Framework: React 18 with TypeScript
Build Tool: Vite for fast development and optimized builds
Styling: Tailwind CSS with custom design system
UI Components: Radix UI primitives with shadcn/ui components
State Management: TanStack Query for server state management
Routing: Wouter for lightweight client-side routing
Animations: Framer Motion for smooth animations and transitions
Backend Architecture
Runtime: Node.js with Express.js server
Language: TypeScript for type safety
Database: PostgreSQL with Drizzle ORM
Database Provider: Neon Database (serverless PostgreSQL)
API Design: RESTful API endpoints
Session Management: Express sessions with PostgreSQL store
Development Setup
Monorepo Structure: Single repository with client, server, and shared code
Hot Reload: Vite development server with HMR
Type Safety: Shared TypeScript types between frontend and backend
Database Migrations: Drizzle Kit for schema management
Key Components
Frontend Components
Navigation: Responsive navigation with smooth scrolling and scroll spy
Hero Section: Professional introduction with animated typing effect
About Section: Skills showcase with animated progress bars
Projects Section: Portfolio projects with filtering and categorization
Experience Section: Timeline-based work experience display
Tech Stack: Technology icons with hover effects
Contact Form: Form validation with real-time feedback
Theme System: Light/dark mode toggle with system preference detection
Backend Components
Contact API: Handles form submissions with validation
Database Schema: User and contact submission tables
Storage Layer: Abstraction layer supporting both in-memory and database storage
Request logging: Comprehensive API request logging
Error Handling: Centralized error handling middleware
Shared Components
Schema Definitions: Zod schemas for validation
Type Definitions: TypeScript interfaces shared between client and server
Validation: Form validation schemas using Drizzle-Zod integration
Data Flow
User Interaction: User interacts with the portfolio website
Form Submission: Contact form data is validated on the client side
API Request: TanStack Query sends validated data to Express server
Server Processing: Express server validates data again using Zod schemas
Database Storage: Contact submissions are stored in PostgreSQL via Drizzle ORM
Response: Server sends success/error response back to client
UI Update: Client updates UI based on response (toast notifications)
External Dependencies
Frontend Dependencies
React Ecosystem: React, React DOM, React Query
UI Libraries: Radix UI components, Lucide React icons
Styling: Tailwind CSS, Class Variance Authority
Animations: Framer Motion, Embla Carousel
Form Handling: React Hook Form, Hookform Resolvers
Date Handling: date-fns for date formatting
Backend Dependencies
Server Framework: Express.js with TypeScript support
Database: Drizzle ORM, Neon Database client
Validation: Zod for schema validation
Session Management: connect-pg-simple for PostgreSQL sessions
Development: tsx for TypeScript execution, esbuild for production builds
Development Dependencies
Build Tools: Vite, TypeScript compiler
Development: Replit-specific plugins for development environment
Database Tools: Drizzle Kit for migrations and schema management
Deployment Strategy
Production Build
Frontend: Vite builds optimized static assets
Backend: esbuild bundles server code for production
Database: Drizzle migrations ensure schema consistency
Environment Configuration
Development: Uses Vite dev server with proxy to Express backend
Production: Express serves static files and API endpoints
Database: PostgreSQL connection via environment variables
File Structure
/client          # React frontend application
/server          # Express backend API
/shared          # Shared types and schemas
/migrations      # Database migration files
/dist           # Production build output
Changelog
Changelog:

July 04, 2025. Initial setup
January 04, 2025. Updated with real data from Abdul Hannan's resume:
Updated experience section with actual work history (Root Pointers, Xeven Solutions, Technoid)
Added real projects (Buch Hospital, Vinciio, Room Round, Door Cut, OnBatch)
Updated skills to reflect actual tech stack (C#, .NET Core, SQL Server, MySQL, Redis, etc.)
Added real contact information (email, phone, GitHub, LinkedIn)
Changed title from "Full Stack" to "Senior Backend .NET Developer"
Updated descriptions to reflect 2.5+ years backend experience
January 04, 2025. Added email notifications and resume download:
Implemented SMTP email service using nodemailer for contact form notifications
Added resume download functionality with proper file serving
Added download resume buttons in hero and about sections
Created email notification system that sends formatted emails when users submit contact forms
Added environment configuration for Gmail, Outlook, and Yahoo SMTP providers
User Preferences
Preferred communication style: Simple, everyday language.