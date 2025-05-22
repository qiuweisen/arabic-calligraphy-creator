# Arabic Calligraphy Creator - Project Architecture Document

## Project Overview

This document describes the architecture, structure, and design of the Arabic Calligraphy Creator web application. The application is built using Next.js 15.2.4 and React 19, with a focus on providing a modern, responsive user interface for creating beautiful Arabic calligraphy.

## Directory Structure

```
arabic-calligraphy-creator/
├── .next/                     # Next.js build output (generated)
├── app/                       # Next.js App Router
│   ├── blog/                  # Blog pages
│   │   ├── [slug]/            # Dynamic blog post pages
│   │   └── page.tsx           # Blog index page
│   ├── faq/                   # FAQ pages
│   │   └── page.tsx           # FAQ page
│   ├── layout.tsx             # Root layout component
│   ├── globals.css            # Global CSS styles
│   └── page.tsx               # Home page/landing page
├── components/                # React components
│   ├── ui/                    # UI components (shadcn/ui)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   └── ...
│   ├── arabic-keyboard.tsx    # Virtual Arabic keyboard
│   ├── calligraphy-generator.tsx # Main generator component
│   ├── feature-showcase.tsx   # Features showcase component
│   ├── font-preview.tsx       # Font preview component
│   ├── footer.tsx             # Footer component
│   ├── navbar.tsx             # Navigation bar component
│   ├── template-browser.tsx   # Template browser component
│   ├── testimonial-carousel.tsx # Testimonials carousel
│   ├── theme-provider.tsx     # Theme provider component
│   ├── use-case-gallery.tsx   # Use case gallery component
│   └── video-showcase.tsx     # Video showcase component
├── hooks/                     # Custom React hooks
│   ├── use-mobile.tsx         # Mobile detection hook
│   └── use-toast.ts           # Toast notification hook
├── lib/                       # Utility libraries
│   └── utils.ts               # Utility functions
├── public/                    # Static assets
├── styles/                    # Additional styles
├── components.json            # shadcn/ui components config
├── next.config.mjs            # Next.js configuration
├── package.json               # Project dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── todolist.md                # Project progress tracking
```

## Technology Stack

- **Frontend Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui (based on Radix UI)
- **Icons**: Lucide React
- **Theming**: next-themes
- **Form Handling**: react-hook-form
- **Validation**: zod
- **Animation**: tailwindcss-animate
- **UI Components**:
  - Radix UI components (accordion, dialog, popover, etc.)
  - Embla Carousel
  - Sonner (toast notifications)
  - Recharts (for charts if needed)

## Page Structure

### Home Page (`app/page.tsx`)
- Landing page with the main calligraphy generator tool
- Features section highlighting key capabilities
- How-to-use guide
- Use cases with tabs for different applications
- FAQ section with common questions
- CTA section for exploring more content

### Blog Pages (`app/blog/`)
- Blog index page with article cards (`app/blog/page.tsx`)
- Individual blog posts with dynamic routing (`app/blog/[slug]/page.tsx`)
- Articles covering topics such as:
  - History of Arabic calligraphy
  - Major calligraphy styles
  - Modern typography
  - Calligraphy techniques
  - Profiles of famous calligraphers

### FAQ Page (`app/faq/page.tsx`)
- Comprehensive FAQ section organized by categories
- Accordion UI for easy navigation
- Links to relevant blog articles for more in-depth information

## Component Design

### Main Components

#### `calligraphy-generator.tsx`
The core component of the application, implementing:
- Text input with Arabic virtual keyboard support
- Font selection with preview
- Text styling options (size, color, gradient)
- Background customization (color, image upload, patterns)
- Advanced adjustments (shadow, border, Kashida control)
- Export functionality (PNG, SVG)
- Sharing capabilities

#### `arabic-keyboard.tsx`
Virtual Arabic keyboard component:
- Arabic character input
- Special characters
- Right-to-left text support

#### `template-browser.tsx`
Browsing and selecting from pre-made templates:
- Common Arabic phrases
- Different calligraphy styles
- Quick application to the generator

#### `font-preview.tsx`
Font preview component showing:
- Font sample in different sizes
- Font classification and information
- Application to the generator

### UI Components

The application uses shadcn/ui components, which are built on top of Radix UI primitives:
- `Button`: For actions and navigation
- `Card`: For content containers
- `Tabs`: For organizing different sections
- `Accordion`: For expandable content (FAQ, settings)
- `Dialog` and `Sheet`: For modal interfaces
- `Select` and `Slider`: For control inputs
- `Toast`: For notifications and feedback

## Data Flow

1. **User Input**:
   - Text entry via textarea or virtual keyboard
   - Style selections via UI controls
   - Template selection via template browser

2. **State Management**:
   - Component-level state using React's `useState` hooks
   - Real-time preview updates based on state changes

3. **Export Process**:
   - DOM-to-image conversion for PNG export
   - SVG element generation for SVG export
   - Client-side processing without server dependency

4. **Sharing**:
   - Clipboard API for copying image
   - Web Share API for native sharing on supported devices

## Responsive Design

The application implements a responsive design approach:
- Mobile-first design with progressive enhancement
- Tailwind CSS breakpoints (`sm`, `md`, `lg`, `xl`)
- Different layouts for mobile and desktop:
  - Stacked controls on mobile
  - Side-by-side layout on desktop
- Touch-friendly UI elements
- Custom hook (`use-mobile.tsx`) for detecting mobile devices

## Theming System

The application uses `next-themes` for theme management:
- Light and dark theme support
- System preference detection
- Theme persistence across sessions
- Theme toggle in navigation

## SEO Strategy

1. **Metadata Optimization**:
   - Page-specific titles and descriptions
   - Relevant keywords for Arabic calligraphy
   - Open Graph and Twitter card metadata

2. **Content Strategy**:
   - Blog articles with educational content
   - FAQ page addressing common questions
   - Keyword-rich content about Arabic calligraphy, styles, and techniques

3. **Technical SEO**:
   - Server-side rendering for critical pages
   - Optimized image loading
   - Semantic HTML structure
   - Mobile-friendly responsive design

## URL Structure

- `/` - Home page with the generator tool
- `/blog` - Blog index
- `/blog/[slug]` - Individual blog posts
- `/faq` - FAQ page

## Future Enhancements

Based on the todolist.md file, these features are planned for future implementation:

1. **Enhanced Blog Content**:
   - More in-depth articles on calligraphy history
   - Detailed style guides
   - Tutorials for beginners

2. **Font Detail Pages**:
   - Individual pages for each font
   - Historical context and characteristics
   - Usage examples

3. **SEO Improvements**:
   - Keyword optimization
   - Metadata refinement
   - Content expansion

4. **Technical Optimizations**:
   - Performance enhancements
   - Mobile experience improvements
   - Page load speed optimization
   - Sitemap generation

5. **Social Media Integration**:
   - Enhanced sharing capabilities
   - Social media preview optimization

## Development Guidelines

1. **Language & Consistency**:
   - All user-facing content should be in English
   - Maintain consistent UI terminology
   - Follow existing design patterns and color schemes

2. **Component Development**:
   - Reuse existing UI components from the components/ui directory
   - Follow the established styling patterns with Tailwind CSS
   - Ensure mobile responsiveness for all new components

3. **Content Creation**:
   - Focus on educational value and keyword optimization
   - Include relevant Arabic terms with English explanations
   - Target both beginners and experienced calligraphy enthusiasts

4. **Code Style**:
   - Follow TypeScript best practices
   - Use function components with hooks
   - Implement proper error handling
   - Add appropriate comments for complex logic

5. **Testing**:
   - Test on multiple browsers (Chrome, Firefox, Safari)
   - Ensure mobile compatibility
   - Verify RTL text rendering
   - Test with various Arabic fonts and text inputs 