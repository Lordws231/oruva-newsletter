# Go-live checklist — newsletter.oruva.com.ng + newsletter@oruva.com.ng
Prepared 2026-10-15. The prototype in this folder is built and locally verified.
Each step below is marked with who must do it. Nothing here has been executed yet —
the DNS change, the Vercel project and the Zoho aliases are founder-account actions
and are listed for one approval from Esther/founder, then Muse executes what it can.

## A. Subdomain — newsletter.oruva.com.ng
Current DNS (checked live 2026-10-15 via Cloudflare API): oruva.com.ng → Vercel,
points.oruva.com.ng → Vercel, www → Vercel, Zoho MX/SPF/DKIM verified.
1. [DONE 2026-10-15 ~14:02 WAT, on Esther's go-live approval] Cloudflare API:
   CNAME `newsletter.oruva.com.ng` → `cname.vercel-dns.com` created
   (record id 43bb09a9d472c42b9c8a133dc39aa294, DNS-only).
2. [Founder browser session, Muse driving] Vercel: create/import project
   `oruva-newsletter` under team ORUVA TRANSPORTATION SERVICES from the GitHub
   repo (step B), framework "Other"/static, root = this folder.
3. [Same session] Vercel project → Domains → add `newsletter.oruva.com.ng`;
   confirm status Valid (the points/www pattern took minutes).
4. [Muse] Live-verify https://newsletter.oruva.com.ng in a real browser:
   feed loads, Edition 001 opens, register → comment → like → rate → repost works,
   @oruva profile shows the gold checkmark.

## B. Code home
1. [Founder approval] Create private GitHub repo `Lordws231/oruva-newsletter`
   (same pattern as oruva-website / oruva-platform) and push this folder.
   Pushing needs founder approval, as with the platform code.

## C. Official email — newsletter@ + communication@
Zoho Free plan: 5/5 mailboxes used. Aliases do NOT consume a seat.
1. [Founder Zoho admin session — admin@oruva.com.ng is the org admin]
   Zoho Admin Console → Users → admin@ → Email Alias → add:
   - `newsletter@oruva.com.ng`
   - `communication@oruva.com.ng`
2. [Muse] Send/receive test: mail to both aliases must land in admin@ inbox;
   reply path tested.
3. Sending provider (do NOT bulk-send from Zoho):
   - Start: Brevo or Mailchimp free tier, account under the founder's identity.
   - Add the provider's SPF + DKIM records in Cloudflare (Muse, on approval —
     append to the existing SPF carefully; never replace the Zoho records).
   - Verify sender: From `The Oruva Newsletter <newsletter@oruva.com.ng>`,
     Reply-To `communication@oruva.com.ng`.
   - Import templates from /email (welcome + edition), set merge tags,
     double opt-in ON, footer address "Osogbo, Osun State, Nigeria".
4. [Muse] Send the welcome email to a test list (founder + Esther) and check
   Primary-folder placement before the first real edition.
5. Optional upgrade later: a dedicated Zoho Mail Lite seat for newsletter@
   (~$1/user/month) if it needs its own inbox, and/or a sending subdomain
   (e.g. send.newsletter.oruva.com.ng) for the provider.

## D. Production data (before public launch announcement)
The prototype stores data in each visitor's browser (localStorage) — fine for
review, not for a public community. Before announcing publicly, swap the DB
adapter in app.js for the API in SYSTEM-SPEC.md §6 (auth with hashed passwords,
posts, comments, likes, ratings, reposts, verification applications with an
Oruva admin approval queue, subscribers synced to the sending provider).
Gold checkmark rule is hard-coded: only @oruva (official) can be gold; community
verification is blue, admin-approved.

## E. Launch sequence (once A–D are done)
1. Publish Edition 001 (Lagos drivers' strike article — still needs Esther's
   approval, as recorded for the strike content package).
2. Announce on oruva.com.ng (footer link + News section) and in the Week 1
   social plan — every post drives traffic to newsletter.oruva.com.ng,
   per the standing traffic & engagement requirement.
3. Add follow/subscribe task consideration for Points Season 1 (founder decision).
