# Real-time allocation poll

An anonymous classroom poll built with React, Vite, and Firestore. Students divide
an allocation across five labeled sections; the dashboard displays distributions
and averages in real time.

The client does not ask for or generate a name, email address, student identifier,
free-text response, or stable participant ID. Firestore rules allow only the five
numeric allocation values, totals, and a server timestamp. Deploy
`firestore.rules` whenever its validation changes, and clear obsolete class
sessions according to the course retention policy.

## Development

```bash
npm ci
npm run lint
npm run build
```

The production output is committed in `dist/` because the course site is served as
static GitHub Pages content.
