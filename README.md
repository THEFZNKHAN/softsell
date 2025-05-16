# SoftSell - Software License Resale Platform

<table>
  <tr>
    <td style="vertical-align: middle; width: 80px;">
      <img src="public/logo.png" alt="SoftSell Logo" width="64" />
    </td>
    <td style="vertical-align: middle; padding-left: 16px;">
      A modern, responsive marketing website for <strong>SoftSell</strong>, a software license resale platform that helps businesses sell their unused software licenses quickly and at competitive market rates.
    </td>
  </tr>
</table>

## 📋 Project Overview

SoftSell is a single-page marketing website built with Next.js and Tailwind CSS. The website showcases a fictional software resale startup that helps businesses monetize their unused software licenses. The design focuses on modern aesthetics, smooth animations, and responsive layouts to provide an excellent user experience across all devices.

## ✨ Features Implemented

### Core Requirements

- **Hero Section**
  - Eye-catching headline with gradient text effect
  - Compelling subheading explaining the value proposition
  - Dual CTA buttons ("Sell My Licenses" and "Get a Quote")
  - Animated illustration representing software license management

- **How It Works**
  - Three-step process with clear visual flow
  - Custom icons for each step (Upload License, Get Valuation, Get Paid)
  - Animated cards with hover effects
  - Visual connection between steps on desktop view

- **Why Choose Us**
  - Four key benefits with custom icons
  - Animated cards with scale effect on hover
  - Concise descriptions highlighting unique selling points
  - Responsive grid layout that adapts to all screen sizes

- **Customer Testimonials**
  - Two detailed testimonials with star ratings
  - Professional presentation with company and role information
  - Card-based design with subtle hover animations
  - Avatar placeholders with gradient backgrounds

- **Contact/Lead Form**
  - Comprehensive form with all required fields
  - Client-side validation with helpful error messages
  - Interactive form elements with focus states
  - Success confirmation with animation after submission

### UI/UX Features

- **Modern Design**
  - Clean, professional aesthetic with ample white space
  - Consistent use of rounded corners and subtle shadows
  - Gradient accents for visual interest
  - Thoughtful typography hierarchy

- **Responsive Layout**
  - Fully responsive design that works on mobile, tablet, and desktop
  - Mobile-optimized navigation with hamburger menu
  - Appropriate spacing and sizing adjustments for different screens
  - Grid layouts that reflow based on screen size

- **Animations and Transitions**
  - Smooth entrance animations for section elements
  - Interactive hover effects on cards and buttons
  - Staggered animations for list items
  - Subtle transitions between states

### Bonus Features

- **Dark/Light Mode Toggle**
  - System preference detection with manual override
  - Carefully designed color palette that works in both modes
  - Smooth transition between themes
  - Persistent theme selection

- **AI-Powered Chat Widget**
  - Floating chat button with animation
  - Expandable chat interface
  - Pre-programmed responses to common questions
  - Loading indicators and typing animations

- **SEO Optimization**
  - Proper meta tags and page title
  - Semantic HTML structure
  - Optimized content hierarchy
  - Descriptive alt text for images

- **Accessibility**
  - Proper contrast ratios for text
  - Semantic HTML elements
  - Focus states for interactive elements
  - Screen reader considerations

## 🎨 Design Choices

### Color Palette

- **Primary Colors**: Emerald and teal gradient (#10b981 to #14b8a6)
  - Creates a fresh, modern look associated with financial growth
  - Provides good contrast against both light and dark backgrounds
  - Stands out without being overwhelming

- **Background Colors**:
  - Light mode: Clean white with subtle gray accents
  - Dark mode: Deep slate with careful contrast management

- **Text Colors**:
  - Primary text: High contrast for readability
  - Secondary text: Muted for visual hierarchy
  - Accent text: Gradient for emphasis

### Typography

- **Font Family**: Inter (sans-serif)
  - Modern, clean typeface with excellent readability
  - Works well at various sizes and weights
  - Renders crisply on all devices

- **Hierarchy**:
  - Large, bold headings for section titles
  - Medium-sized subheadings for content organization
  - Appropriately sized body text for readability
  - Small text for supplementary information

### Layout

- **Section Structure**:
  - Consistent vertical rhythm between sections
  - Alternating background colors for visual separation
  - Centered content with appropriate max-width constraints
  - Strategic use of white space

- **Component Design**:
  - Card-based UI for content grouping
  - Consistent padding and border radius
  - Subtle shadows for depth
  - Interactive elements with clear hover states

### Animations

- **Purpose-Driven**:
  - Entrance animations to guide attention
  - Hover effects to indicate interactivity
  - Loading states to communicate processing
  - Transitions to maintain context

- **Performance Considerations**:
  - Hardware-accelerated animations
  - Optimized for smooth performance
  - Reduced motion for accessibility

## 💻 Technical Implementation

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom configuration
- **Components**: shadcn/ui component library
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Theme Management**: next-themes
- **Icons**: Lucide React

## ⏱️ Time Spent

- **Planning and Research**: 1 hours
  - Requirement analysis
  - Design inspiration gathering
  - Technology selection
  - Project structure planning

- **UI/UX Design**: 1 hours
  - Color palette selection
  - Component design
  - Responsive layout planning
  - Animation storyboarding

- **Core Implementation**: 5 hours
  - Project setup
  - Component development
  - Responsive styling
  - Form validation

- **Animations and Interactions**: 2 hours
  - Section entrance animations
  - Hover effects
  - Interactive elements
  - Chat widget functionality

- **Testing and Refinement**: 2 hours
  - Cross-browser testing
  - Responsive design testing
  - Performance optimization
  - Bug fixing

- **Documentation**: 1 hour
  - README creation
  - Code commenting
  - Project organization

**Total Time**: ~12 hours

## 🚀 Installation and Setup

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation Steps

1. Clone the repository:
  ```bash
  git clone https://github.com/thefznkhan/softsell.git
  cd softsell
  ```

2. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```

3. Run the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

5. (Optional) Build for production:
  ```bash
  npm run build
  npm start
  # or
  yarn build
  yarn start
  ```