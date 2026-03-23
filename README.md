# Portfolio Website - Rohit Jadhav

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: JavaScript

## ✨ Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Modern UI** - Dark theme with smooth animations and transitions
- **Interactive Components** - Tabbed sections for Skills and Projects
- **Form Handling** - Contact form with validation
- **Performance Optimized** - Built with Next.js for optimal performance
- **Component-Based** - Modular React components for easy maintenance

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.js         # Root layout component
│   └── page.js           # Main page
├── components/
│   ├── Hero.jsx          # Hero section with intro
│   ├── Skills.jsx        # Skills section with tabs
│   ├── Projects.jsx      # Projects showcase
│   ├── Education.jsx     # Education timeline
│   └── Contact.jsx       # Contact form
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── next.config.js        # Next.js configuration
```

## 🛠️ Installation

1. **Install Dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

3. **Open in Browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Sections

### 1. Hero Section
- Introduction and tagline
- Social media links (GitHub, LinkedIn)
- Animated illustration

### 2. Skills Section
- Tabbed interface (Software, Expertise, Language)
- Grid layout with skill cards
- Interactive tab switching

### 3. Projects Section
- Featured and past projects tabs
- Project cards with descriptions
- Color-coded tags

### 4. Education Section
- Timeline view
- Status badges (In progress, Done)
- Education cards with dates

### 5. Contact Section
- Contact form with validation
- Name, Email, and Message fields
- Submit button with gradient styling

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      dark: {
        DEFAULT: '#0a0a0a',
        light: '#1a1a1a',
        // ... more colors
      }
    }
  }
}
```

### Content
Update the data in each component file:
- `components/Hero.jsx` - Personal information
- `components/Skills.jsx` - Skills data
- `components/Projects.jsx` - Project details
- `components/Education.jsx` - Education history

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

For any questions or suggestions, feel free to reach out through the contact form on the website.
