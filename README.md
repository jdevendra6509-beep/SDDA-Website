
# Shreya D. Dave & Associates — Firm website

Static website for the firm (Chartered Accountants, Mumbai · Pune). There is no build step: open `index.html` in a browser, or deploy the folder to any static host (Vercel, GitHub Pages, Netlify, cPanel).

## How it is organised
The whole site is one page, `index.html`, with views switched by the address `#`:

| Address | View |
|---|---|
| `index.html` or `#home` | Home: hero with office / AI photos, who we are, services, how we work, what sets us apart, service finder, ways to engage, industries & systems, reviews |
| `#services` | All services, with category filters |
| `#service-<slug>` | Detail page for one service (`internal-audit`, `automation`, `custom-erp`, `accounting`, `tax`, `statutory-audit`, `virtual-cfo`, `startup-advisory`, `roc`, `trainings`) |
| `#about` | About the firm |
| `#contact` | Contact form (prepares the enquiry; opens the email app or copies the text) |

Files:
- `assets/css/site.css`: all styles (theme colours are at the top: `--g900`, `--g800`, `--lime`, `--gold`, `--cream`, …)
- `assets/js/site.js`: service content (the `S` list), interactive widgets and the page router
- `assets/img/photos/`: photos (free Unsplash stock; see `CREDITS.md`). Replace with real office photos using the same file names.
- `internal-audit.html`, `automation.html`, `erp-solutions.html`, `about.html`, `contact.html`: forward old links to the matching view

## Editing content
- Service text, scope, steps, deliverables and FAQs are in the `S` list at the top of `assets/js/site.js`.
- **Reviews:** the home page has three placeholder review cards (search `REVIEWS` in `index.html`). Replace them with real client reviews (with permission), or delete the section. Check ICAI guidelines on testimonials first.
- An ICAI disclaimer is shown once per browser session (`#disclaimer` in `index.html`).
