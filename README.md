# NLDM virtual lab

Public course website for **Psychology 505: Neurobiology of Learning & Decision Making**.

## Site structure

- `index.html` — main navigation
- `overview.html` — stable course description and slide-aligned module map
- `review.html` — links to all 13 study modules
- `ExamPrep/module-data.js` — original, slide-aligned study-guide content
- `ExamPrep/module-guide.js` — shared accessible study-guide renderer
- `demonstrations.html` and `Demonstrations/` — interactive concept demonstrations
- `experiments.html` — behavioral tasks and classroom activities
- `project.html` — public final-project workflow and privacy guidance
- `vibe-coding.html` — public individual practice assignment for AI-assisted experiment development
- `student-projects.html` — credited public project showcase
- `site-navigation.js` — shared course-home and laboratory navigation for static pages

The site is static and can be served directly by GitHub Pages. The real-time allocation activity is the only component with a build step; its deployed output is committed under `ClassPolls/RealTimeAllocation/dist/`.

## Content authority

Lecture slides are the source of truth for instructional content and module order. Canvas is the source of truth for dates, deadlines, grading values, assigned readings, rooms, announcements, and submission links.

## Publication policy

The public repository may contain:

- Instructor-authored concept summaries
- Original practice questions
- Interactive demonstrations and anonymous tasks
- Student names only when crediting their public projects
- Course-community photographs intentionally approved for public display, without identifying captions
- Public project descriptions and links intentionally submitted for showcase

The public repository must not contain:

- Grades or rosters
- Student submissions outside the public project showcase
- Identifiable student records or participant-level research datasets
- Exam forms, answers, or publisher test banks
- Instructor-only notes
- Copyrighted readings or textbook chapters
- Private database, spreadsheet, or storage links

Raw behavioral research data must use random identifiers and access-controlled storage. A public experiment must never imply that its underlying participant-level dataset is also public. The anonymous classroom allocation poll is limited by database rules to five numeric response values, totals, and a server timestamp; it collects no name, student ID, email, free text, or stable participant identifier.

## Editing modules

Modules 1–13 use one shared data file. Add or revise learning objectives, sections, original key terms, quiz questions, and related resources in `ExamPrep/module-data.js`. Each question must include a zero-based `correct` option index and an explanatory rationale.

Before publishing:

1. Validate content against the final lecture slides.
2. Confirm that all questions are original rather than copied from a test bank.
3. Run a local-link check.
4. Test keyboard navigation and mobile layout.
5. Confirm that no private or copyrighted course files were added.
