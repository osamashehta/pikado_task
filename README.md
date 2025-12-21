# Product Listing Application

A modern product browsing application built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates best practices in building responsive, performant web applications with server-side rendering and infinite scroll pagination.

## Live Demo

🔗 **[View Live Application](https://pikado-task.vercel.app/)**

## Overview

This application allows users to browse products from the DummyJSON API, view detailed product information, and read customer reviews. The interface is fully responsive and includes loading states, error handling, and smooth animations.

## Features

- **Product Listing** with infinite scroll pagination
- **Product Details** page with image gallery and reviews
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Advanced UI States** including skeleton loaders and error boundaries
- **SEO Optimized** with dynamic metadata generation
- **Type-Safe** with TypeScript throughout
- **Modern Styling** using Tailwind CSS

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- TanStack Query (React Query)
- Swiper.js for carousels
- DummyJSON API

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd pikado_task
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

4. Run the development server:

```bash
pnpm dev
```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
pikado_task/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page (product listing)
│   │   ├── products/
│   │   │   └── [id]/          # Dynamic product details page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles and CSS variables
│   ├── components/
│   │   ├── product-list/      # Product listing components
│   │   ├── product-details/   # Product detail components
│   │   ├── icons/             # SVG icon components
│   │   └── shared/            # Reusable components
│   ├── hooks/                 # Custom React hooks
│   ├── services/              # API service functions
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
└── package.json
```

## Key Components

### Product Listing

The main page displays products in a responsive grid with infinite scroll. As you scroll down, more products load automatically using Intersection Observer API.

### Product Details

Each product has its own detail page showing:

- Image gallery with Swiper carousel
- Complete product information
- Customer reviews in a carousel
- Breadcrumb navigation

### Skeleton Loaders

Custom skeleton components provide visual feedback during data fetching, improving perceived performance.

## API Integration

The application uses service functions that directly call the Fetch API with the DummyJSON endpoint. Data fetching is handled through:

- **Service Functions** (`src/services/`) - Direct API calls using native Fetch
- **React Query Hooks** (`src/hooks/`) - TanStack Query for state management and caching

Example usage:

```typescript
// Service function
import getProducts from "@/services/getProducts";

const data = await getProducts({ limit: 12, skip: 0 });

// Using React Query hook
import { useProductList } from "@/hooks/useProductList";

const { data, fetchNextPage, hasNextPage } = useProductList();
```

## Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Environment Variables

Create a `.env.local` file with the following:

```
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

This variable is used throughout the application to construct API requests.

## Design Decisions

### Why Infinite Scroll?

Instead of traditional pagination buttons, infinite scroll provides a seamless browsing experience, especially on mobile devices.

### Server Components by Default

Product listing and detail pages use Next.js Server Components for better performance and SEO. Client components are only used where interactivity is needed (carousels, infinite scroll).

### CSS Variables with Tailwind

The project uses CSS custom properties for theming, making it easy to adjust colors and spacing across the entire application.

### Type Safety

TypeScript interfaces for all API responses ensure type safety and better developer experience with autocomplete.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading images and components
- Server-side rendering for initial page load
- Efficient pagination with skip/limit parameters
- Skeleton loaders for better perceived performance

## Known Limitations

- The application relies on the DummyJSON API availability
- Some product images may have varying dimensions
- Reviews data is simulated and may not reflect real user feedback

## Development Time

Total time spent: Approximately 3-4 hours

## Future Improvements

- Add product filtering by category
- Implement search functionality
- Add shopping cart functionality
- Include product comparison feature
- Add dark mode toggle

## License

This project is created as a technical task demonstration.

## Contact

For any questions or feedback, please reach out through the project repository.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
