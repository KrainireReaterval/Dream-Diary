# Portfolio Website

## Project Structure

```
pw/
├── pages/                 # HTML pages (routes)
│   ├── index.html        # Landing page
│   ├── blog.html         # Blog page
│   ├── projects.html     # Projects showcase
│   └── about.html        # About me page
├── css/
│   └── style.css         # Shared styles for all pages
├── js/
│   └── navigation.js     # Dynamic navigation menu
└── components/           # Reserved for future components (Next.js prep)
```

## How to Use

1. **Open in Browser**: Double-click `pages/index.html` to view the website locally
2. **Edit Content**: Update the HTML files with your own content
3. **Customize Styles**: Edit `css/style.css` to change colors, fonts, spacing
4. **Add Interactivity**: Add new JavaScript files to `js/` folder

## Key Components Explained

### 1. **HTML Structure** (Semantic HTML)
- `<header>` - Navigation bar
- `<main>` - Primary content area
- `<section>` - Content sections
- `<footer>` - Footer with copyright

### 2. **Reusable Components**
- **Card**: Used for blog posts, projects, and skills (see `.card` class in CSS)
- **Header/Navigation**: Shared across all pages
- **Hero Section**: Eye-catching intro on landing page

### 3. **JavaScript Navigation**
- `navigation.js` dynamically creates navigation menu from a single data structure
- Automatically highlights the current active page
- **Why this matters**: If you want to add a new page, just add it to the `pages` array—no need to edit HTML on every page

## Next Steps for Learning

1. **Week 1-2**: Customize content (add your own text, projects, blog posts)
2. **Week 2-3**: Learn CSS—change colors, fonts, layout
3. **Week 3-4**: Add interactivity with JavaScript (e.g., make buttons do things)
4. **Week 4+**: Deploy to GitHub Pages for free hosting

## Foundation for Next.js Migration

This structure is designed to switch to Next.js easily later:
- `pages/` folder follows Next.js convention
- Component-based CSS (modular styles)
- Separated concerns (HTML, CSS, JS)

When ready to migrate, Next.js will recognize your `pages/` folder structure automatically.

## Deployment

**Free hosting options:**
- **GitHub Pages**: Push code to GitHub, enable Pages in settings → Site goes live for free
- **Netlify**: Connect GitHub repo → Auto-deploys on every commit

## Resources

- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
