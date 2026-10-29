# AI & Me – Career check (prototype)

A one-page prototype for a first-year uni AI literacy workshop (module: *AI policy and the future of work*).

Students pick their degree and see:

- **AI risk meter**: a simple gauge showing low / medium / high exposure to AI, with a one-line explanation
- **Who does what?**: tasks AI might do vs. tasks they'll still do
- **Action plan**: three skills to build now (click "See my action plan")
- **Did you know?**: light-hearted AI fun facts

The message is meant to be balanced: AI changes *tasks* more than it replaces whole jobs, and human skills still matter. Ratings are broad labels, not statistics.

Only the "Career check" page exists. The other nav links (Home, AI 101, Rules and policy) are placeholders.

## Run it

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things are

| File | What it is |
| --- | --- |
| `app/page.tsx` | The Career check page |
| `components/` | Header, RiskMeter (SVG gauge), TasksCard, FunFact |
| `data/careers.ts` | All degrees, tasks, skills and fun facts. Edit this to change content |

No backend, database or API calls. Everything is hardcoded.

Built with Next.js (App Router), TypeScript and Tailwind CSS.
