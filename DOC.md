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

# Guidelines

**The Request and Changelog serves as a documentation of code evolvement of this website, while Architecture serves as general decisiob documentation.**

Do not edit READMD.md in this repository.

Do not edit # Approach and # Action Guidelines in DOC.md.

I will upload requests for debug/feature request/design build/architectural advising. Claude will summarize, review and address them accordingly.

Claude should add changelog everytime it edits code. 

Claude can add or remove tasks in *Changelog*. Modification of tasks depends on Claude's judgement of whether it is relevent with one request.

Claude moves last queue of tasks from *Pending for review* to *Completed* automatically when user finishes the last request and file a new one.

My request can be large or small. Claude should breakdown request into bite size actions for better auditing.

# Requests

Add requests here. Summarize from user's text. Numeric number (1,2,3,4,...)

1. Summarize current website progress and workflow legitimacy. No tasks needed. Test request to validate the DOC.md workflow.

2. Add hover-reveal headbar to blog, about, and projects pages. Bar hides by default, appears when mouse approaches the top, hides when mouse moves away. Links to all four pages (skips current page). index.html excluded.

# Changelog

## Pending for Review

Template: task + corresponding request number + what files were changed

- [ ] Example: Set up navigation.js smooth scroll - edited navigation.js

- [ ] Rewrite navigation.js with self-contained hover-reveal navbar (CSS injection + HTML injection + show/hide logic) — #2 — edited js/navigation.js

- [ ] Link navigation.js to blog, about, projects pages — #2 — edited blog.html, about.html, projects.html

## Completed

Template: task + request number + date completed

- [x] Example: Write base style.css with CSS variables - 02/04/2025


# Architectural Decisions

- If made an architectural decision, write down below this section with categorization.
- Categorization: Tech, Design, Security, Effeciency. If want to add another categorization, add a request in Issue Report.
- Template: what request I made + what the decision is + why it address my request

## Tech

- 

## Design

- 

## Security

- 

## Effeciency

- 

# Issue Report

Write down any issues (code-wise or decision wise) below.

I will occasionally ask you to summarize workflow and how to enhance it. You can record any effeciency failures here, even not as an urgent issue.
