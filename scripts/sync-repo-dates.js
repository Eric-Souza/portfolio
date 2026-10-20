// Records when each public repo was last pushed to, so case studies can sort by "recently updated".
// Run `npm run sync-dates` after pushing to a repo. The build doesn't call GitHub, so deploys never
// depend on its rate limits.
import { writeFileSync } from 'node:fs';

const user = 'Eric-Souza';
const out = new URL('../src/data/caseStudies/repoDates.json', import.meta.url);

const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`, {
  headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'portfolio-sync' },
});
if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);

const repos = await res.json();
const dates = Object.fromEntries(
  repos
    .map((repo) => [repo.name, repo.pushed_at.slice(0, 10)])
    .sort(([a], [b]) => a.localeCompare(b)),
);

writeFileSync(out, `${JSON.stringify(dates, null, 2)}\n`);
console.log(`Wrote ${Object.keys(dates).length} repo dates to src/data/caseStudies/repoDates.json`);
