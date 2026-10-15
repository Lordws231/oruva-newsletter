# The Oruva Newsletter — System Specification
Prepared 2026-10-15 for Esther / Founder, Oruva Transportation Services.
Status: Built as a working prototype (this folder). NOT yet live on the subdomain — go-live steps in DEPLOY.md need founder-gated actions listed there.

## 1. What was asked
An email newsletter system + a newsletter platform where Oruva users can read, comment,
like and rate Oruva newsletters; a place users are educated about transportation,
services, innovation, capital opportunities, partnerships, grants and scholarships —
where they gain knowledge and discover opportunities. A subdomain of oruva.com.ng,
an official newsletter email, user accounts (required to comment / like / repost),
an opt-in verification checkmark for users (blogging feel), and an official Oruva
posting account with a GOLD verified checkmark and full profile details.

## 2. Research — patterns taken from the founder's inboxes
Checked 2026-10-15 in abiodunoyaniyi@gmail.com (connected). Notes on the other two
inboxes are at the end of this section — they could not be searched today.

**Model example — Ventures Platform, "Series V"**
- Sender: `"V. from Ventures Platform" <communications@venturesplatform.com>`,
  Reply-To = the same address. A named, branded *communications@* sender, not a person's mailbox.
- Welcome email (7 Oct 2026, "Welcome to Series V! Here's how to get the most from
  your subscription"): personal greeting by first name; what the newsletter is;
  the named sections readers can expect; a link to past editions; deliverability
  onboarding ("add us to contacts / safe sender", "if in Spam click Not Spam",
  "in Gmail drag Promotions → Primary", "reply and say hello"); footer with
  copyright, "you are receiving this because you opted in via our website",
  mailing address, update-preferences and unsubscribe links.
- Edition email (7 Oct 2026, "What Happens When the Fund Clock Runs Out?"):
  "View this email in browser" at the top; edition brand ("SERIES V"); a lead
  essay with a strong data hook (African startups raised ~$583m in Q3 2026 —
  Disrupt Africa; concentration data from Briter); an events block; a named
  expert interview ("Expert Guest on V"); portfolio news; jobs across the
  portfolio; a recommended resource; "Read Full Article" buttons driving to the web.
- Infrastructure visible in its links: Mailchimp (list-manage.com) — a dedicated
  newsletter provider sending on behalf of the brand domain, NOT bulk mail from
  the ordinary mailbox.
- Also from Ventures Platform the same day (7 Oct 2026, via Getro, hello@getro.com):
  a separate jobs subscription ("Ventures Platform jobs: you are subscribed") and
  a talent-network welcome — i.e. their opportunities/jobs stream runs as its own
  subscription alongside the newsletter. Oruva mirrors this with the Opportunities
  Board section + the dedicated /opportunities page on the platform.

**Other newsletters found in the same inbox**
- Dedicated newsletter senders are the norm: `Newsletter@konga.com`,
  `newsletter@service.tiktok.com` (content notifications), `newsletter@email.blockchain.com`
  (promotional, prize-led subject), `sapien@mail.beehiiv.com` (Beehiiv weekly digest,
  weekly cadence, date-led subject "Sapien Weekly Digest — <date>").
- Educational single-story subjects work: Luno `no-reply@engage.luno.com` —
  "Bitcoin outlasted the biggest IPO" (one idea, taught well).
- Ecobank / Blaze by Ecobank `noreply@ecobank.com` — service updates + event
  invitations (InnovateX 2026 hackathon) from the corporate domain.

**Patterns adopted for Oruva**
1. Branded sender name + dedicated address (like communications@venturesplatform.com).
2. A named edition brand + numbered editions, "View in browser" → the platform.
3. Welcome email with section menu + deliverability steps (copy Ventures' checklist).
4. Fixed named sections per edition (below), incl. jobs/opportunities across partners.
5. One lead educational essay per edition; "Read full article" drives to the platform,
   where reading turns into comments, likes, ratings and reposts.
6. Footer always: why you received it, preferences, unsubscribe, Osogbo, Osun State, Nigeria.
7. Sending via a dedicated provider (Mailchimp / Brevo / Resend class), authenticated
   with its own SPF/DKIM — never bulk-sending from the Zoho mailboxes (protects
   oruva.com.ng's reputation and the 5 free-plan mailboxes).

**Inbox status (corrected by Esther, 2026-10-15)**
- `abiodunoyaniyi@gmail.com` — the inbox Esther meant (her original message said
  abiodunoyaniyi@outlook.com by mistake; there is no Outlook inbox in scope).
  This Gmail WAS searched successfully — the Ventures Platform Series V emails
  and all other newsletter patterns above come from it.
- `oyaniyiabiodun@gmail.com` — Gmail connector initially returned
  reauthorisation_required (same known issue recorded 2026-10-15), so it could
  not be searched for the first pass. A reauthorisation link was sent to Esther
  on 2026-10-15; on re-check later the same day the account WAS searchable
  (verified by direct search) and was then searched for the Reddit/Pinterest
  pass in §2A.

**Reddit + Pinterest emails — searched 2026-10-15 at Esther's instruction**
(Esther: "make the newsletter as interactive and colourful as Reddit and Pinterest are.")
Found in abiodunoyaniyi@gmail.com AND in oyaniyiabiodun@gmail.com. Correction
(2026-10-15, verified by direct search): after the reauthorisation link was sent,
oyaniyiabiodun@gmail.com became searchable again — an early secondary summary
saying it was still blocked was wrong. Its Pinterest mail confirms the same system
with even stronger personalisation: recommendation senders segmented by stream
(recommendations@explore / @discover / @inspire .pinterest.com,
pinterest-recommendations@ideas.pinterest.com) and name-personalised subjects
("❤ Inspired by Oyaniyiabiodun", "Oyaniyiabiodun, these ideas are so you",
"you have a good eye"). Adopted: the "Picked for you" email block uses the
member's first name in its subject/heading style, and recommendation streams are
segmented by section interest rather than one generic blast.
- **Reddit** (noreply@reddit.com, do-not-reply@reddit.com): near-daily "Daily Digest"
  emails — "top posts from communities you have shown interest in", specialised
  digests ("Popular Posts in Nigeria", r/Nigeria topics), a "Popular on Reddit"
  digest, username-personalised subjects (u/...), and "Trending today" pushes.
  One digest, three jobs: personalised picks + community (subreddit) roundups +
  geo-trending.
- **Pinterest** (notifications@pinterest.com, messages@pinterest.com, an editor's
  own address, and digest@pinterest-mail.com — a dedicated mail domain): monthly
  "Account Update" digests, weekly recommendation digests ("Pins for you", "Ideas
  for your Board"), curiosity subject lines ("Don't be the last to know…",
  "You might like…"), and security-alert mail ("We noticed a login… / password
  reset request"). Pinterest separates streams by sender AND by mail domain.

**Correction adopted:** Reddit and Pinterest are not single newsletters — each is a
*layered system* (digest + notifications + recommendations + security alerts, from
specialised senders). The Oruva system therefore adopts a layered model too, rather
than one weekly email doing everything (see §4A).

## 2A. Adoptions from Reddit + Pinterest (implemented in prototype v2, 2026-10-15)
| Pattern (source) | Adopted as |
|---|---|
| Subreddit communities + post flairs (Reddit) | The 9 sections act as community boards; every post carries a coloured **flair** in its section colour |
| Upvote/downvote score decides visibility (Reddit) | ▲▼ voting on every post; feed sorting **Hot / New / Top**; Hot = votes + comments + saves + rating |
| Nested discussion (Reddit) | **Threaded comments** with replies and comment upvotes |
| Karma (Reddit) | Profile **Karma** = post scores + likes + comment upvotes received |
| "Trending today" / "Popular in Nigeria" (Reddit mail) | **🔥 Trending in the community** strip on the feed; edition email gains a Trending block |
| Personalised digest — "communities you showed interest in" (Reddit mail) | Digest personalisation rule: sections a member saves/votes in lead their email edition (template merge blocks added) |
| Masonry visual feed + covers (Pinterest) | **Masonry feed**; every post has a visual cover (real Oruva graphics; gradient cover in section colour for community posts) |
| Save / boards (Pinterest) | **Save** button on every post → the member's **Saved board** on their profile |
| "Ideas for your Board" recommendations (Pinterest mail) | **📌 Ideas for your board** block: more posts from sections the member saves from |
| Curiosity subject lines (Pinterest mail) | Subject-line options in the edition template comments (question/curiosity style, one idea per subject, like Luno) |
| Layered, specialised senders + separate mail domain (Pinterest) | Sender plan extended: editions/welcome from newsletter@, replies at communication@, future notifications (comment replies, votes) from noreply@, and the sending provider authenticated on its own subdomain — see §3/DEPLOY |
| Security-alert mail (Pinterest/Reddit) | Account emails (sign-up, verification, password changes) get a "was this you?" line; every Oruva email footer: "Oruva will never ask for your password by email" |

## 3. Names and addresses — the decision prepared
- **Platform:** https://newsletter.oruva.com.ng (parallel to points.oruva.com.ng)
- **Edition brand:** *The Oruva Newsletter* — tagline "Learn the road ahead."
- **From:** `The Oruva Newsletter <newsletter@oruva.com.ng>` — mirrors Konga/TikTok's
  dedicated newsletter@ sender and reads instantly in an inbox list.
- **Reply-To:** `communication@oruva.com.ng` (the address Esther suggested) — replies
  land with the team, mirroring Ventures' communications@ reply path.
- **Zoho free-plan reality:** Zoho Free = 5 users, all 5 already used
  (admin@, support@, complaints@, partners@, noreply@). A 6th mailbox would need a
  paid seat. Solution that costs nothing: create `newsletter@oruva.com.ng` and
  `communication@oruva.com.ng` as **aliases of admin@oruva.com.ng** (aliases do not
  consume a seat — the same trick already used for no-reply@ on noreply@). Replies
  land in the founder's mailbox; the sending provider is separately authorised to
  send *as* newsletter@oruva.com.ng. Upgrade path: move newsletter@ to its own
  Zoho Mail Lite seat (~$1/mo) when volume justifies it.
- Mailing address shown in footers: "Oruva Transportation Services, Osogbo, Osun
  State, Nigeria" — city-level only; the founder's street address used for
  registrations is NOT published.

## 4. Content system — sections of every edition
Mirroring Series V's named sections, adapted to Oruva's mission:
1. **Fresh Roads** — Oruva/team insight on transport and the market (the lead essay).
2. **Transport Explained** — education: how the transport system and services work
   (fares, commissions, verification, safety, regulation), simply taught.
3. **Innovation** — mobility technology and ideas, in Nigeria and beyond.
4. **Capital & Opportunities** — capital opportunities, grants, scholarships,
   accelerators, competitions — each with deadline, who can apply, and source link.
5. **Partnerships** — partner spotlights and open partnership calls (partners@).
6. **Spotlight** — a driver, rider, founder or operator story (Series V's Founder Spotlight).
7. **Expert on the Road** — a practical interview with an operator/expert.
8. **Resources** — one recommended read/tool per edition.
9. **Opportunities Board** — jobs and openings across Oruva and partners.
Cadence recommendation: weekly edition (Beehiiv-style consistency), plus the
long-form newsletter article format already proven on 2026-10-15
(newsletter-lagos-drivers-strike-article.md is Edition 001's draft lead essay —
it stays unpublished until Esther approves it, exactly as before).

## 5. Platform — features (all working in the prototype)
**v2 additions (Reddit/Pinterest redesign, 2026-10-15):** colourful masonry feed with
visual covers; coloured section flairs; upvote/downvote scores with Hot/New/Top
sorting; threaded comments with replies + comment upvotes; Save → Saved board on
profiles; Karma; community strip (members/posts/comments/subscribers + community
rules); 🔥 Trending in the community; 📌 Ideas for your board recommendations.
- **Read** — anyone can read editions/posts, filter by the 9 sections, search.
- **Accounts** — register / sign in (name, username, email, password). Required
  for commenting, liking, rating and reposting, exactly as requested.
- **Comment** — signed-in users comment on any post; comments show the author's
  name, @username and checkmark if verified.
- **Like** — signed-in like/unlike, counts visible to all.
- **Rate** — signed-in 1–5 star rating per post; average + count shown.
- **Repost** — signed-in users repost a post to their own profile (blogging feel);
  reposts appear on their profile feed with the original author credited.
- **Profiles** — every user has a public profile: photo initial, name, @username,
  bio, their posts/reposts, stats (reposts, likes received). Users can also write
  and publish their own posts from their account (community blogging).
- **Verification (opt-in)** — any user can *apply* for the verification checkmark
  from their profile ("Apply for verification"): they state who they are and why;
  status shows Pending → Verified. Verified community users get a **blue** checkmark.
- **Official Oruva account** — @oruva, "Oruva Transportation Services", posting
  account for all official editions, with the **gold verified checkmark** (gold is
  reserved for Oruva official accounts only — no user can receive gold). Its profile
  shows: full bio, website oruva.com.ng, Points site, official contacts
  (support@, complaints@, partners@, newsletter@), location Osogbo, Osun State,
  Nigeria, and social handles (@Oruvatransport on X/Facebook,
  @oruvatransportation on Instagram/Threads).
- **Subscribe** — email capture for the email edition (double opt-in in production),
  with the Series V-style welcome email (template included in /email).
- **Email templates** — welcome email + edition email in /email, built to the
  Ventures pattern (view-in-browser, named sections, read-full-article CTA,
  preferences/unsubscribe footer).

## 6. Production architecture (what changes at go-live)
The prototype in this folder is a zero-dependency static web app (HTML/CSS/JS,
data in browser localStorage) — deployable to Vercel as-is for review, and it is
the exact front-end the production version keeps. For a public launch where
comments/likes/accounts must be shared between all visitors, the storage adapter
in app.js is swapped for the API layer (same pattern as the existing Oruva stack):
- Hosting: Vercel project `oruva-newsletter`, domain newsletter.oruva.com.ng
  (Cloudflare CNAME → cname.vercel-dns.com, same as points.oruva.com.ng).
- Backend: reuse Oruva's stack style (Hono + tRPC + Drizzle/MySQL, as in
  oruva-platform) OR Supabase — founder/David decision; endpoints: auth, posts,
  comments, likes, ratings, reposts, verification applications (admin-approved),
  subscribers.
- Email sending: Mailchimp or Brevo free tier to start; add its SPF/DKIM records
  in Cloudflare for the sending domain; From newsletter@, Reply-To communication@.
- Moderation: Oruva admin queue for verification applications and flagged comments;
  gold checkmark is system-set for @oruva only and cannot be applied for.
- Safety: passwords hashed server-side in production (prototype stores locally
  only for demo and says so), rate limits, comment moderation, NDPR-aligned
  privacy note (data collected: name, username, email; unsubscribe in every email).

## 7. Seed content in the prototype
1. Edition 001 lead — "When the Drivers Stopped: What the Lagos Strike Is Really
   Telling Nigeria" (the prepared 2026-10-15 newsletter article; sample in-app only).
2. "Welcome to The Oruva Newsletter" — the welcome post mirroring Series V's welcome.
3. Transport Explained — "How Ride-Hailing Commissions Actually Work" (10% explainer).
4. Capital & Opportunities — "How to Find Grants and Scholarships Without Missing
   Deadlines" (a practical guide post; specific live opportunities to be added per
   edition after verification — no invented deadlines).
5. Oruva Points explainer post.
