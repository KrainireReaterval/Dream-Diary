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

# Action Guidelines

Do not edit READMD.md in this repository.

Do not edit # Approach and # Action Guidelines in DOC.md.

I will upload requests for debug/feature request/design build/architectural advising to terminal or Claude plugin in vscode. Claude will review my request and address them accordingly.

Claude should add changelog everytime it edits code. 

Claude can add tasks in Actions/Active when Claude find it to be neccessary to fulfill my request. 

Claude can remove tasks in Actions/Active when it find it not neccessary to fulfill my request.

Claude is only allowed to move tasks from *Active* to *Completed* once I reviewed and agreed to last edit. 

If I ask follow up questions that disrupts the flow, Claude does not need to move tasks from *Pending for Review* to *Completed* unless further requested.

My request can be large or small. Claude should breakdown request into bite size actions for better auditing.

# Requests

Add requests here. Summarize from user's text. Numeric number (1,2,3,4,...)

1. Summarize current website progress and workflow legitimacy. No tasks needed. Test request to validate the DOC.md workflow.

2. Add hover-reveal headbar to blog, about, and projects pages. Bar hides by default, appears when mouse approaches the top, hides when mouse moves away. Links to all four pages (skips current page). index.html excluded.

# Tasks

## Active

Template: task + request number (one request can have many small tasks or only one) + optional memo

- [ ] Example: Build blog.html card grid layout — waiting on design decision: tags or no tags?


## Pending for Review - Changelog

Template: task + request number + what files were changed

- [ ] Example: Set up navigation.js smooth scroll - edited navigation.js

- [ ] Rewrite navigation.js with self-contained hover-reveal navbar (CSS injection + HTML injection + show/hide logic) — #2 — edited js/navigation.js

- [ ] Link navigation.js to blog, about, projects pages — #2 — edited blog.html, about.html, projects.html

## Completed

Template: task + request number

- [x] Example: Write base style.css with CSS variables.


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
