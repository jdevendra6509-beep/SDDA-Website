# SDDA — Firm website

A static website for SDDA, Chartered Accountants (Mumbai · Pune). It focuses on **Internal Audit**, **Process Automation** and **Custom ERP tools**.

## Pages
| File | Page |
|---|---|
| `index.html` | Home: firm & experience hero with office/AI photos → Who we are → Services → Sectors → Reviews → Contact |
| `internal-audit.html` | Four engagement concepts, nine process areas, RCM result matrix |
| `automation.html` | Automation examples, Power BI dashboards, Excel & AI training |
| `erp-solutions.html` | Custom ERP modules, built-in controls, build approach |
| `about.html` | Firm profile, vision & mission, all services |
| `contact.html` | Enquiry form (opens the visitor's email app) and office details |

Shared files: `assets/css/style.css`, `assets/js/main.js`, `assets/img/favicon.svg`.

## Run locally
Open `index.html` in a browser. There is no build step.

## Publish
Any static host works: GitHub Pages (Settings → Pages → deploy from branch), Vercel, Netlify or the cPanel of the `sdda.co.in` domain.

## Notes
- **Reviews:** the home page has three placeholder review cards (`#reviews` in `index.html`). Replace them with real client reviews, or delete the section. Check ICAI guidelines on testimonials first.
- **Photos:** `assets/img/photos/` holds free Unsplash stock photos (see `CREDITS.md`). Swap in real office photos using the same file names.
- The site names no individuals. The full firm name appears only in the copyright line.
- An ICAI-style disclaimer is shown once per browser session.
- Light and dark mode follow the device setting and can be switched in the header.
- To change the contact email, edit `data-to` on the form in `contact.html` and the links in each page footer.
