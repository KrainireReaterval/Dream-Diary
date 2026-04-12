/* NAVIGATION COMPONENT: Dynamically create navigation menu
   Purpose: Generate navigation links and highlight the current active page
   Why: This reduces code repetition across pages and makes updates easier
*/

// DEFINE NAVIGATION STRUCTURE
// This is a data structure (array of objects) that defines all page routes
const pages = [
  { name: 'Home', path: '../pages/index.html', id: 'home' },
  { name: 'Blog', path: '../pages/blog.html', id: 'blog' },
  { name: 'Projects', path: '../pages/projects.html', id: 'projects' },
  { name: 'About', path: '../pages/about.html', id: 'about' }
];

// FUNCTION: Render Navigation Menu
// Purpose: Loop through pages array and create <a> tags for each page
// How: Creates HTML elements and adds them to the navigation <ul>
function renderNavigation() {
  const navList = document.getElementById('navigation');
  
  // Loop through each page in our pages array
  pages.forEach(page => {
    // CREATE: New <li> element to hold the link
    const listItem = document.createElement('li');
    
    // CREATE: New <a> (anchor/link) element
    const link = document.createElement('a');
    link.href = page.path;
    link.textContent = page.name;
    link.id = page.id; // Give it an ID so we can highlight it later
    
    // APPEND: Add the link inside the list item
    listItem.appendChild(link);
    
    // APPEND: Add the list item to the navigation
    navList.appendChild(listItem);
  });
  
  // Set the active page after all links are created
  setActivePage();
}

// FUNCTION: Highlight Current Active Page
// Purpose: Detect which page user is on and add "active" class to highlight it
// How: Check current page URL and match it to the pages array
function setActivePage() {
  // GET: Current page filename from browser URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // LOOP: Through all navigation links
  pages.forEach(page => {
    const link = document.getElementById(page.id);
    // GET: Expected filename from page.path
    const pageName = page.path.split('/').pop();
    
    // CHECK: If this link matches current page
    if (currentPage === pageName || (currentPage === '' && page.id === 'home')) {
      // ADD: "active" class to highlight this link
      link.classList.add('active');
    } else {
      // REMOVE: "active" class from other links
      link.classList.remove('active');
    }
  });
}

// EXECUTE: Call renderNavigation when page loads
// This ensures navigation is created before user sees the page
document.addEventListener('DOMContentLoaded', renderNavigation);
