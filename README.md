# Dr. Serena Blake - Therapist Portfolio

A modern, responsive therapist portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. This site closely mimics the style and animations of growmytherapy.com while being customized for Dr. Serena Blake, a fictional clinical psychologist.

## ✨ Features

- **Modern Design**: Clean, professional design with calming colors and typography
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: 
  - Animated hero section with call-to-action
  - About section with professional photo and credentials
  - Services showcase with hover effects
  - FAQ accordion with smooth transitions
  - Contact form with validation
  - Professional footer
- **SEO Optimized**: Proper metadata, Open Graph tags, and structured data
- **Accessibility**: WCAG compliant with proper focus states and screen reader support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd therapist-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
└── components/
    ├── Hero.tsx             # Hero section with CTA
    ├── About.tsx            # About section with photo
    ├── Services.tsx         # Services showcase
    ├── FAQ.tsx              # FAQ accordion
    ├── Contact.tsx          # Contact form
    └── Footer.tsx           # Footer with contact info
```

## 🎨 Customization

### Colors
The site uses a calming blue color palette. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize as needed
  }
}
```

### Content
Update the following files to customize content:
- `src/components/Hero.tsx` - Main headline and CTA
- `src/components/About.tsx` - Bio and credentials
- `src/components/Services.tsx` - Service offerings
- `src/components/FAQ.tsx` - FAQ questions and answers
- `src/components/Contact.tsx` - Contact information
- `src/app/layout.tsx` - SEO metadata

### Images
Replace the placeholder image URL in components with your actual image:
```jsx
src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_1150-18266.jpg"
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional):
   - In your Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `blakepsychology.com`)
   - Update DNS records as instructed

### Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add scripts to package.json**:
```json
{
  "scripts": {
    "build": "next build",
    "export": "next export",
    "deploy": "npm run build && npm run export && gh-pages -d out"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

### Deploy to Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Environment variables**: None required

## 📱 Performance Optimization

- Images are optimized with Next.js Image component
- CSS is purged with Tailwind CSS
- Animations are hardware-accelerated
- Lazy loading for better performance

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any API keys or configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### SEO Configuration
Update metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter cards
- Canonical URL

## 🎯 Key Features Explained

### Hero Section
- Full-screen design with gradient background
- Animated text entrance
- Call-to-action button with smooth scroll
- Background pattern with floating elements

### About Section
- Two-column layout (image + content)
- Professional photo with decorative elements
- Credentials and experience highlights
- Smooth scroll-triggered animations

### Services Section
- Three service cards with icons
- Hover effects and animations
- Pricing and session information
- Staggered entrance animations

### FAQ Section
- Accordion-style questions
- Smooth open/close animations
- Contact CTA at the bottom
- Accessible keyboard navigation

### Contact Section
- Comprehensive contact form
- Real-time validation
- Success/error states
- Contact information display
- Office hours and location

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**: Ensure Framer Motion is properly installed
2. **Styling issues**: Check Tailwind CSS configuration
3. **Build errors**: Verify all dependencies are installed
4. **Deployment issues**: Check Vercel build logs

### Performance Tips

- Optimize images before uploading
- Use Next.js Image component for automatic optimization
- Minimize bundle size by removing unused dependencies
- Enable compression on your hosting provider

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub or contact the development team.

---

**Note**: This is a fictional therapist portfolio created for demonstration purposes. All contact information and credentials are fictional and should be replaced with real information before deployment.
