# replit.md

## Overview

This is a full-stack web application for ExhibitPro, an exhibition and event services company. The application features a modern React frontend with a comprehensive company portfolio, services showcase, and contact form functionality, backed by an Express.js REST API.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Validation**: Zod for runtime type checking
- **Database Provider**: Neon Database (@neondatabase/serverless)

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript types and schemas
- `migrations/` - Database migration files

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero**: Landing section with call-to-action buttons
- **Services**: Exhibition design, event setup, carpentry, and interior design showcase
- **Portfolio**: Case studies with project examples
- **Testimonials**: Client feedback section
- **Contact**: Contact form with validation
- **WhatsApp Integration**: Floating WhatsApp contact button

### Backend Services
- **Contact API**: Handles contact form submissions with validation
- **Storage Layer**: Currently using in-memory storage (MemStorage class)
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
- **Contact Inquiries Table**: Stores customer inquiries with fields for personal info, service type, and project details
- **UUID Primary Keys**: Uses PostgreSQL's gen_random_uuid() for unique identifiers
- **Timestamps**: Automatic created_at tracking

## Data Flow

1. **Contact Form Submission**:
   - Frontend validates form data using Zod schema
   - Data sent to `/api/contact` endpoint via POST request
   - Backend validates and stores inquiry
   - Success/error feedback shown to user

2. **Admin Data Access**:
   - `/api/contact-inquiries` endpoint provides access to all submissions
   - Currently no authentication (admin endpoint)

## External Dependencies

### Frontend Libraries
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date utilities
- **Animations**: CSS-based animations with Tailwind

### Backend Libraries
- **Database**: Neon serverless PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Type Checking**: Comprehensive TypeScript configuration
- **Code Quality**: ESLint and Prettier (implied by project structure)

## Deployment Strategy

### Production Build Process
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations handle schema updates

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Scripts**: Separate development (`npm run dev`) and production (`npm start`) commands
- **Database Management**: `npm run db:push` for schema synchronization

### Development Workflow
- Hot module replacement in development
- TypeScript compilation checking
- Automatic server restart with tsx
- Database schema validation with Drizzle

## Current Limitations

1. **Storage**: Using in-memory storage instead of actual database persistence
2. **Authentication**: No admin authentication for contact inquiry access
3. **File Uploads**: No file upload capability for project attachments
4. **Email Integration**: No email notifications for new inquiries
5. **Rate Limiting**: No API rate limiting implemented

The application is designed as a professional company website with a focus on showcasing services and capturing leads through the contact form. The architecture supports easy migration from in-memory storage to full PostgreSQL persistence when the database is properly configured.