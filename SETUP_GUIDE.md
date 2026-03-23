# 🚀 Quick Setup Guide

Follow these simple steps to get your portfolio website running:

## Step 1: Install Node.js

Make sure you have Node.js installed (version 18 or higher).
Check your version:
```bash
node --version
```

If not installed, download from: https://nodejs.org/

## Step 2: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- Next.js
- React
- Tailwind CSS
- Lucide React (icons)

## Step 3: Start Development Server

```bash
npm run dev
```

## Step 4: View Your Website

Open your browser and go to:
```
http://localhost:3000
```

## 🎉 That's it! Your portfolio is now running locally.

## Next Steps:

### 1. Customize Your Content

Edit the following files to add your personal information:

**Hero Section** (`components/Hero.jsx`):
- Change name and introduction
- Update GitHub and LinkedIn URLs

**Skills** (`components/Skills.jsx`):
- Add/remove skills in the `skillsData` object
- Customize skill categories

**Projects** (`components/Projects.jsx`):
- Add your projects in the `projectsData` object
- Update project descriptions and tags

**Education** (`components/Education.jsx`):
- Update education history in `educationData` array

**Contact** (`components/Contact.jsx`):
- Customize form submission logic
- Update Tally link or remove if not needed

### 2. Customize Styling

**Colors** (`tailwind.config.js`):
```javascript
colors: {
  dark: '#0a0a0a',  // Change background color
  // ... add more custom colors
}
```

**Global Styles** (`app/globals.css`):
- Modify button styles
- Adjust card styles
- Change animations

### 3. Deploy Your Website

**Option 1: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Option 2: Netlify**
1. Push code to GitHub
2. Connect repository on Netlify
3. Deploy

**Option 3: Build Static**
```bash
npm run build
npm start
```

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Use a different port
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Styles not updating?**
```bash
# Restart the development server
# Press Ctrl+C, then run npm run dev again
```

## 💡 Tips

1. **Hot Reload**: Changes are automatically reflected in the browser
2. **Component Structure**: Each section is a separate component for easy editing
3. **Tailwind Classes**: Use Tailwind utility classes for quick styling
4. **Icons**: Browse more icons at https://lucide.dev/icons/

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

## Need Help?

- Check the README.md for detailed documentation
- Review component files for inline comments
- Visit Next.js documentation for framework-specific questions

Happy coding! 🎨
