# Approach
- Think before acting. Read existing files before writing code.
- Be concise in output but thorough in reasoning.
- Prefer editing over rewriting whole files.
- Do not re-read files you have already read unless the file may have changed.
- Skip files over 100KB unless explicitly required.
- Suggest running /cost when a session is running long to monitor cache ratio.
- Recommend starting a new session when switching to an unrelated task.
- Test your code before declaring done.
- No sycophantic openers or closing fluff.
- Keep solutions simple and direct.
- User instructions always override this file.

# In this project:

- This is a static website project. 
- Expectation: fast loading, clear navigation, novelty.
- Review code structure constantly and remove redundancy.
- Creative vector design for hero sections of each page, and consistant css styling for the rest of the contents.

# Requests

Add requests here. Summarize from user's text. Numeric number (1,2,3,4,...)

1. Add hover-reveal headbar to blog, about, and projects pages. Bar hides by default, appears when mouse approaches the top, hides when mouse moves away. Links to all four pages (skips current page). index.html excluded.

2. Scrollable content sections for blog, about, projects.

3. Website Responsiveness: Blog and About page vectors

# Changelog

Template: request number + your work

## Pending for Review


## Completed


- [x] Example: Write base style.css with CSS variables

- [x] Rewrite style.css as content-section system (hero styles stay inline per page) — #3 — edited css/style.css

- [x] Restructure blog.html: 100vh hero-section wrapper + scrollable content section with highlight grid and archive list; shape click handlers — #3 — edited blog.html

- [x] Restructure about.html: 100vh hero-section wrapper + scrollable content section with 3 subsections; text block click handlers — #3 — edited about.html

- [x] Restructure projects.html: 100vh hero-section wrapper + scrollable content section with highlight grid and archive list — #3 — edited projects.html

- [x] Wire blog shape→section mapping from Figma — #3 — pending Figma MCP

- [x] Rewrite navigation.js with self-contained hover-reveal navbar (CSS injection + HTML injection + show/hide logic) — #2 — edited js/navigation.js

- [x] Link navigation.js to blog, about, projects pages — #2 — edited blog.html, about.html, projects.html

- [x] Remove hover-reveal logic; make navbar always visible — #2 amendment — edited js/navigation.js