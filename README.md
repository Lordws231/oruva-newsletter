# The Oruva Newsletter — newsletter.oruva.com.ng

The newsletter platform for Oruva Transportation Services: users read editions,
and with a free account can comment, like, rate (1–5 stars), repost to their own
profile, publish their own posts, and apply for a verification checkmark
(blue for community members; **gold is reserved for the official @oruva account**).

- `SYSTEM-SPEC.md` — full system design, incl. the inbox research it is modelled on
  (Ventures Platform "Series V", communications@venturesplatform.com, and others).
- `index.html` / `styles.css` / `app.js` — the working prototype (zero dependencies,
  data in localStorage; production API swap described in SYSTEM-SPEC.md §6).
- `email/` — welcome + edition email templates (HTML, merge-tagged).
- `DEPLOY.md` — subdomain, Vercel, Zoho alias and sending-provider go-live steps.

Run locally: `python3 -m http.server 8080` in this folder, open http://localhost:8080

Seed content: Welcome edition, Edition 001 (Lagos drivers' strike), a Transport
Explained commission explainer, a grants/scholarships guide, and an Oruva Points
explainer — all posted by @oruva (gold verified, full official profile).
Brand: navy #081e3a, gold #c9a45c, ivory #f7f5f0 — same as oruva.com.ng.
