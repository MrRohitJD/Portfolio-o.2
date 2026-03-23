# 🎨 Customization Cheat Sheet

Quick reference guide for common customizations.

---

## 🎯 Quick Links to Edit

| What to Change | File to Edit | Line/Section |
|----------------|--------------|--------------|
| Your name | `components/Hero.jsx` | Line ~18 |
| Introduction text | `components/Hero.jsx` | Lines ~21-29 |
| GitHub URL | `components/Hero.jsx` | Line ~36 |
| LinkedIn URL | `components/Hero.jsx` | Line ~43 |
| Skills list | `components/Skills.jsx` | Lines ~5-26 |
| Projects | `components/Projects.jsx` | Lines ~5-31 |
| Education | `components/Education.jsx` | Lines ~4-20 |
| Colors | `tailwind.config.js` | Lines ~10-20 |
| Form action | `components/Contact.jsx` | Lines ~13-18 |

---

## 🔤 Change Text Content

### Hero Section

```javascript
// components/Hero.jsx

// Change name (line ~18)
<h2 className="...">
  Hello, I'm YOUR NAME HERE.
</h2>

// Change description (lines ~21-23)
<p className="...">
  I'm an <strong>YOUR TITLE</strong>, YOUR DESCRIPTION.
</p>

// Change social links (lines ~36, 43)
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_USERNAME" ...>
```

---

## 🎨 Change Colors

### Tailwind Config

```javascript
// tailwind.config.js

extend: {
  colors: {
    // Background colors
    dark: {
      DEFAULT: '#YOUR_COLOR',    // Main background
      light: '#YOUR_COLOR',      // Cards background
      lighter: '#YOUR_COLOR',    // Hover states
      border: '#YOUR_COLOR',     // Border color
    },

    // Add custom colors
    primary: '#YOUR_BRAND_COLOR',
    secondary: '#YOUR_ACCENT_COLOR',
  }
}
```

### Button Colors

```css
/* app/globals.css */

.btn-primary {
  @apply bg-red-500 hover:bg-red-600;  /* Change red-500 */
}

.btn-linkedin {
  @apply bg-blue-600 hover:bg-blue-700;  /* Change blue-600 */
}

.btn-purple {
  @apply bg-gradient-to-br from-purple-600 to-purple-500;
  /* Change purple-600 and purple-500 */
}
```

### Tag Colors

```css
/* app/globals.css */

.tag-rag {
  @apply bg-red-500/15 text-red-500 border border-red-500/30;
}

.tag-django {
  @apply bg-blue-500/15 text-blue-500 border border-blue-500/30;
}

/* Add new tags */
.tag-react {
  @apply bg-cyan-500/15 text-cyan-500 border border-cyan-500/30;
}
```

---

## 📝 Add/Remove Content

### Add a New Skill

```javascript
// components/Skills.jsx

const skillsData = {
  software: [
    // ... existing skills
    { icon: '🎨', name: 'Your New Skill' },  // Add this line
  ]
}
```

### Add a New Project

```javascript
// components/Projects.jsx

const projectsData = {
  featured: [
    // ... existing projects
    {
      title: 'Your Project Name',
      description: 'Project description here...',
      tags: ['React', 'Node.js'],
      tagType: 'react'  // or 'rag', 'django', or create new
    },
  ]
}
```

### Add Education Entry

```javascript
// components/Education.jsx

const educationData = [
  // ... existing entries
  {
    title: 'Your Degree',
    institution: '- University Name',
    status: 'progress',  // or 'done'
    statusText: 'In progress',  // or 'Done'
    date: 'Expected Month Year',
  },
]
```

---

## 🖼️ Add Images/Icons

### Using Lucide Icons

```javascript
// Import icon at top of component
import { YourIconName } from 'lucide-react'

// Use in JSX
<YourIconName className="w-5 h-5" />
```

**Browse icons**: https://lucide.dev/icons

### Add Custom Images

1. Create `public/images` folder
2. Add your image
3. Use in component:

```javascript
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

---

## 📱 Adjust Responsive Breakpoints

```javascript
// tailwind.config.js

theme: {
  screens: {
    'sm': '640px',   // Mobile
    'md': '768px',   // Tablet
    'lg': '1024px',  // Desktop
    'xl': '1280px',  // Large desktop
    '2xl': '1536px', // Extra large

    // Add custom breakpoint
    'tablet': '900px',
  }
}
```

Use in components:
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## ✨ Modify Animations

### Change Hover Effects

```css
/* app/globals.css */

.card {
  /* Change -translate-y value for less/more movement */
  @apply hover:-translate-y-0.5;  /* Change to -translate-y-1 or -translate-y-2 */

  /* Change duration */
  @apply transition-all duration-200;  /* Change to duration-300 or duration-500 */
}
```

### Add New Animations

```css
/* app/globals.css */

@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}
```

Use in component:
```javascript
<div className="animate-fade-in">
```

---

## 🔲 Modify Card Styles

```css
/* app/globals.css */

.card {
  /* Border radius */
  @apply rounded-xl;  /* Change to rounded-lg, rounded-2xl */

  /* Padding */
  @apply p-6;  /* Change to p-4, p-8 */

  /* Border */
  @apply border border-dark-border;  /* Change border width: border-2 */

  /* Shadow */
  @apply shadow-lg;  /* Add custom shadow */
}
```

---

## 🎭 Change Fonts

### Using Google Fonts

1. **Add to app/layout.js:**

```javascript
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

2. **Or in tailwind.config.js:**

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Roboto', 'sans-serif'],
    }
  }
}
```

---

## 📐 Adjust Spacing

### Section Padding

```javascript
// In any component

<section className="py-20">  {/* Change to py-16, py-24, etc. */}
```

### Container Width

```javascript
<div className="container mx-auto px-6 max-w-7xl">
  {/* Change max-w-7xl to max-w-6xl, max-w-4xl, etc. */}
</div>
```

### Grid Gaps

```javascript
<div className="grid gap-6">  {/* Change to gap-4, gap-8, etc. */}
```

---

## 🎪 Add New Section

1. **Create component file:**

```javascript
// components/NewSection.jsx

'use client'

export default function NewSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title">Your Section Title</h2>
        {/* Your content here */}
      </div>
    </section>
  )
}
```

2. **Export in components/index.js:**

```javascript
export { default as NewSection } from './NewSection'
```

3. **Add to app/page.js:**

```javascript
import { Hero, Skills, Projects, Education, Contact, NewSection } from '@/components'

export default function Home() {
  return (
    <main>
      {/* ... existing sections */}
      <NewSection />
    </main>
  )
}
```

---

## 🔗 Modify Form Action

### Option 1: Custom API

```javascript
// components/Contact.jsx

const handleSubmit = async (e) => {
  e.preventDefault()

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    alert('Message sent!')
  }
}
```

### Option 2: Email Service

```bash
npm install @emailjs/browser
```

```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    .then(() => alert('Message sent!'))
}
```

### Option 3: Form Service (Formspree, etc.)

```javascript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🎯 Common Tailwind Classes

### Spacing
```
p-4    = padding: 1rem
px-6   = padding left/right: 1.5rem
py-8   = padding top/bottom: 2rem
m-4    = margin: 1rem
gap-6  = grid/flex gap: 1.5rem
```

### Text
```
text-sm    = font-size: 0.875rem
text-lg    = font-size: 1.125rem
text-2xl   = font-size: 1.5rem
font-bold  = font-weight: 700
text-center = text-align: center
```

### Colors
```
bg-red-500    = background red
text-blue-600 = text blue
border-gray-300 = border gray
```

### Layout
```
flex          = display: flex
grid          = display: grid
grid-cols-3   = 3 columns
items-center  = align items center
justify-between = justify content space-between
```

### Responsive
```
md:text-lg   = large text on medium screens+
lg:grid-cols-3 = 3 columns on large screens+
```

---

## 💡 Pro Tips

1. **Preview Changes Instantly**: Dev server auto-reloads
2. **Use Browser DevTools**: Inspect elements and try classes
3. **Tailwind Docs**: https://tailwindcss.com/docs
4. **Lucide Icons**: https://lucide.dev/icons
5. **Component First**: Create reusable components
6. **Mobile First**: Design for mobile, then scale up

---

## 🚨 Common Mistakes to Avoid

❌ Using `class` instead of `className`
✅ Use `className` in JSX

❌ Forgetting `'use client'` for interactive components
✅ Add `'use client'` at top of file

❌ Not reading file before editing
✅ Always read files first

❌ Hardcoding colors
✅ Use Tailwind classes or config

---

## 📞 Quick Reference Links

- **Tailwind Classes**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/icons
- **Next.js Docs**: https://nextjs.org/docs
- **React Hooks**: https://react.dev/reference/react

---

Happy customizing! 🎨
