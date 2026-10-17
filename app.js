/* The Oruva Newsletter — prototype front-end v2
   Reddit- + Pinterest-inspired redesign (Esther, 2026-10-15):
   - Pinterest: colourful masonry feed, visual cover cards, Save to profile.
   - Reddit: upvote/downvote scores, sorting (Hot / New / Top), category flairs,
     threaded comments with replies, community stats + karma.
   Data lives in localStorage for this review prototype. In production the DB
   adapter is replaced by the Oruva API (SYSTEM-SPEC.md §6) — every feature
   maps to one API resource. */
'use strict';
const LS_KEY = 'oruva_newsletter_v2';
const CATEGORIES = ['Fresh Roads','Transport Explained','Innovation','Capital & Opportunities','Partnerships','Spotlight','Expert on the Road','Resources','Opportunities Board'];
const CAT_COLORS = {'Fresh Roads':'#e4572e','Transport Explained':'#0e7c86','Innovation':'#7c3aed','Capital & Opportunities':'#a9853d','Partnerships':'#1d9bf0','Spotlight':'#d6336c','Expert on the Road':'#2f9e44','Resources':'#f08c00','Opportunities Board':'#e64980'};
const catColor = c => CAT_COLORS[c] || '#0b2a4a';

const ORUVA_USER = {
  id:'u_oruva', name:'Oruva Transportation Services', username:'oruva',
  email:'newsletter@oruva.com.ng', password:null, role:'official',
  verification:'gold', verificationStatus:'verified',
  bio:'Organised, technology-driven mobility for Nigeria — safer, clearer, fairer movement, starting in Osun and growing city by city. Publishers of The Oruva Newsletter.',
  website:'https://oruva.com.ng', location:'Osogbo, Osun State, Nigeria',
  contacts:'support@oruva.com.ng · partners@oruva.com.ng · complaints@oruva.com.ng · newsletter@oruva.com.ng',
  socials:'X / Facebook: @Oruvatransport · Instagram / Threads: @oruvatransportation',
  joined:'2026-10-15'
};

function seed(){
  const posts = [
    {id:'p_building', authorId:'u_oruva', category:'Fresh Roads', edition:'Edition 002', cover:'',
     title:"We Haven't Been Quiet. We've Been Building — Inside the Oruva Platform, Days From User Testing",
     excerpt:'Long days, sleepless nights, stubborn bugs, policy research, a 51-question survey to hear your voice — and a platform now live on staging. The honest inside story of what we have been building, and how close we are to user testing.',
     body:`If you have not heard much noise from us in the past few days, there is a reason. We have been busy. Seriously busy.\\n\\nBehind the scenes, Oruva Transportation Services has been in full building mode — long days that rolled into nights, lines of code, broken flows, fixes, re-tests, policy documents, and hard questions about what a truly safer, better organised transportation system for Nigeria should look like. This edition is an honest update from inside that build.\\n\\nTHE CODING — AND THE BUGS NOBODY SEES\\n\\nA transport platform is not just an app with a "Book a Ride" button. Every step has to work, in order, for real people with real money: sign up, verify your identity, book, pay, track, complete the trip, release the payment, rate each other, withdraw safely.\\n\\nIn the last few days we pushed major parts of that system live on our staging platform: phone and email login, identity verification tiers, advance bookings, shared-ride matching, live tracking and a distance meter, location-integrity checks, community safety alerts, an in-app support assistant, and a payment flow where money is held safely until a ride is truly complete. Our test suite now stands at 728 backend tests passing.\\n\\nAnd yes, there were bugs. One day phone verification would not work at all — hours later we found one wrong character in an identification code had broken the whole flow. Fix that one character, and registration came alive. Another day, email login timed out for two minutes at a time; we rebuilt the email route entirely, and the next code completed in 1.2 seconds. That is building: stubborn, sleepless problem-solving until it works — safely.\\n\\nSAFETY IS THE SYSTEM, NOT A FEATURE\\n\\nVerified people only, one account per person, NIN and BVN identity checks, and tiers that unlock more as trust grows — shared rides sit behind our highest tier. When a rider pays, the money is held on the platform and released only when BOTH rider and driver or biker confirm completion. No completion by both sides = no release of money. Pricing is transparent: car rides from a ₦1,500 peg for 1 km / 5 minutes, bike rides from ₦700, and a clear 10% all-in fee, itemised on the invoice.\\n\\nTHE POLICY WORK — AND A SURVEY TO HEAR YOU\\n\\nAn app alone cannot fix fares that change without warning, unverified drivers or night-time safety fears. So alongside the code we have been researching transport policy: what rules actually protect passengers and drivers, and what a fair system should require.\\n\\nAnd because we will not impose answers from an office, we built a survey to listen properly — 51 questions, starting with your State, LGA and town, covering fair fares, waiting time, driver conduct, safety, traffic, and the policies you would introduce yourself. When it reaches you, please take it. Your answers will help shape routes, fares and our policy positions.\\n\\nSEEKING INVESTORS AND PARTNERS — FOR OUR USERS\\n\\nWhile the engineers coded, we have also been submitting applications and reaching out to investors, and seeking financial and technological partners — not simply to raise money, but to create more stable financial income for the people who use Oruva: advance bookings drivers can plan around, shared rides that fill seats, escrow that guarantees a completed trip is a paid trip, tips that go 100% to the driver, and, with the right financial partners, savings tools and vehicle-finance pathways so daily earnings can grow into ownership. If you are an investor or a financial or technological partner reading this, reach us through oruva.com.ng — the conversation starts now, before the rollout.\\n\\nHOW CLOSE ARE WE?\\n\\nVery close. The core platform is built, tested and live on staging. What remains is the final stretch: the last end-to-end test journeys — verified booking, payment, completed ride, payout — and then opening Oruva to a first user base for real testing and real feedback. Osogbo first. Carefully. Honestly.\\n\\nThank you for following, reading and waiting while we built in silence. The silence was work — and the rollout is coming. Stay close.\\n\\n— The Oruva Team\\n\\noruva.com.ng · newsletter.oruva.com.ng · points.oruva.com.ng\\nInstagram & Threads: @oruvatransportation · X & Facebook: @Oruvatransport\\nWhatsApp Channel: Oruva Transportation Newsletter`,
     createdAt:'2026-10-17T18:30:00+01:00'},
    {id:'p_welcome', authorId:'u_oruva', category:'Fresh Roads', edition:'Welcome', cover:'assets/covers/welcome.png',
     title:'Welcome to The Oruva Newsletter — here is how to get the most from your subscription',
     excerpt:'A growing community learning the road ahead: transport explained, innovation, capital, partnerships, grants and scholarships — signal over noise, every week.',
     body:`Hi, and welcome.\n\nWe are excited to have you join a growing community of riders, drivers, founders, operators, students and builders shaping the future of movement in Nigeria.\n\nThe Oruva Newsletter is where Oruva Transportation Services shares thoughtful perspectives on the transport system and its services, innovation, and the opportunities moving around them. Our goal is simple: help you stay informed, gain knowledge, and discover opportunities you can actually use.\n\nHere is what you can expect from us:\n\n• Fresh Roads — insights and opinions from the Oruva team on transport, mobility and Nigeria's evolving markets.\n• Transport Explained — the transport system, simply taught: fares, commissions, verification, safety and regulation.\n• Innovation — mobility technology and ideas, in Nigeria and beyond.\n• Capital & Opportunities — capital opportunities, grants and scholarships, with deadlines and who can apply.\n• Partnerships — partner spotlights and open calls to work with Oruva.\n• Spotlight — stories of drivers, riders, founders and operators.\n• Expert on the Road — practical lessons from people who run transport every day.\n• Resources — one recommended read or tool in every edition.\n• Opportunities Board — jobs and openings across Oruva and our partners.\n\nA few quick things to help you get the most out of it:\n\n✅ Add newsletter@oruva.com.ng to your contacts or safe sender list so you never miss an edition.\n✅ If an edition lands in Spam, click "Not Spam"; in Gmail, drag it from Promotions to Primary.\n✅ Create your free account here on newsletter.oruva.com.ng to comment, like, rate and repost — and to apply for your verification checkmark.\n✅ Reply to any edition at communication@oruva.com.ng and say hello. Tell us what you want us to cover.\n✅ Share The Oruva Newsletter with someone who moves, builds or drives for a living.\n\nThank you for subscribing. See you on the road — and in your inbox — soon.\n\n— The Oruva Team`,
     createdAt:'2026-10-15T09:00:00+01:00'},
    {id:'p_strike', authorId:'u_oruva', category:'Fresh Roads', edition:'Edition 001', cover:'assets/covers/strike.png',
     title:'When the Drivers Stopped: What the Lagos Strike Is Really Telling Nigeria',
     excerpt:"Lagos e-hailing drivers under AUATON began an indefinite strike on 12 October 2026, demanding a 10% commission cap — the very ceiling Oruva's model is built on. This is the arithmetic behind the protest.",
     body:`This week, Lagos moved a little slower — and the whole country should be paying attention.\n\nSince Monday, 12 October 2026, e-hailing drivers under the Amalgamated Union of App-based Transporters of Nigeria (AUATON) have been on indefinite strike, withdrawing their services from Bolt and inDrive. The union's demands include a review of fare structures, platform commissions capped at 10%, a transparent breakdown of fares and deductions, stronger welfare provisions, and protection against arbitrary deactivation.\n\nStrip away the headlines and the dispute is about simple maths. A driver buys the fuel, pays for repairs, replaces the tyres, renews insurance and absorbs depreciation — while the platform sets the fare and takes its percentage of the gross. Before subsidy removal in May 2023, petrol sold for about ₦185 per litre; it now averages roughly ₦1,400. Bolt's own Nigeria driver guide lists a 20% commission; drivers say platform charges can run as high as 30%.\n\nAt Oruva, this week has clarified us. We are building precisely the alternative: a 10% all-in fee — the very ceiling AUATON is demanding; upfront fares the rider sees before the trip; negotiated fares from ₦1,000 that respect today's costs; verified drivers and landmark-based pickups designed for how Nigerian addresses actually work; and community value through Oruva Points.\n\nThe full referenced article, with sources, is published with this edition. Transport is economic infrastructure — when drivers cannot earn, cars leave the road, cities slow down, and economies shrink. A fairer system is not a slogan; it is arithmetic that works for everyone in the vehicle.\n\n— The Oruva Team`,
     createdAt:'2026-10-15T09:05:00+01:00'},
    {id:'p_commissions', authorId:'u_oruva', category:'Transport Explained', edition:'Explainer', cover:'assets/covers/commissions.png',
     title:'Transport Explained: How Ride-Hailing Commissions Actually Work',
     excerpt:'What a commission is, where the rest of your fare goes, and why the percentage point difference between 10% and 30% decides whether driving pays.',
     body:`Every ride-hailing fare is split three ways, whether the app shows you or not:\n\n1. The driver — who also pays for fuel, servicing, tyres, insurance, data and the vehicle itself out of their share.\n2. The platform commission — the percentage the app keeps for matching, technology and support.\n3. Taxes and fees — VAT and any regulatory charges.\n\nA simple example. On a ₦5,000 trip:\n• At a 30% commission, the platform keeps ₦1,500 and the driver receives ₦3,500 before buying fuel.\n• At a 20% commission, the driver receives ₦4,000.\n• At Oruva's 10% all-in fee, the driver receives ₦4,500 — and "all-in" means there are no extra hidden deductions layered on top.\n\nThat difference is not abstract. At today's fuel prices it can be the difference between a day that pays and a day that costs the driver money — which is why commissions were at the centre of the October 2026 Lagos drivers' strike.\n\nWhat to look for on any platform: Is the fare shown upfront? Is the commission one clear number? Can the driver see every deduction before accepting the trip? If the answer to any of these is no, the person least able to absorb a surprise is carrying it.\n\nNext in Transport Explained: how driver verification (BVN/NIN tiers) protects both drivers and riders.`,
     createdAt:'2026-10-15T09:10:00+01:00'},
    {id:'p_grants', authorId:'u_oruva', category:'Capital & Opportunities', edition:'Guide', cover:'assets/covers/grants.png',
     title:'How to Find Grants and Scholarships Without Missing Deadlines',
     excerpt:'A practical system any student, driver or founder can run in 20 minutes a week — the same method our Capital & Opportunities desk uses for every edition.',
     body:`Opportunities are rarely scarce. What is scarce is a system for catching them before the deadline. Here is the one we recommend — and use ourselves:\n\n1. Keep one list. One page (paper or phone notes) with four columns: Opportunity · Who can apply · Deadline · Link. If it is not on the list, it does not exist.\n2. Check on a schedule. Twenty minutes, same day every week. Sources worth checking: the funder's own website first, then trusted roundups — including this newsletter's Capital & Opportunities section and Opportunities Board, where every item carries its source link and deadline.\n3. Prepare your documents once. A one-page profile of you or your business, ID, and a short "what we do / what I study" paragraph, kept ready. Most missed grants are missed at the document stage, not the idea stage.\n4. Apply early, apply exactly. Read the eligibility line twice. Funders reject more applications for ignoring instructions than for weak ideas.\n5. Track and learn. Note the outcome of every application. A rejection with a reason is free coaching for the next one.\n\nIn every edition of The Oruva Newsletter, our desk verifies each grant, scholarship, accelerator and partnership call before listing it — opportunity, deadline and source — so your list starts clean.\n\nHave an opportunity our community should know about? Send it to partners@oruva.com.ng.`,
     createdAt:'2026-10-15T09:15:00+01:00'},
    {id:'p_points', authorId:'u_oruva', category:'Spotlight', edition:'Community', cover:'assets/covers/points.png',
     title:'Oruva Points: How the Community Earns as Oruva Grows',
     excerpt:'Follow, join, engage — the Farm Engagement / Oruva Points community at points.oruva.com.ng, explained in one read.',
     body:`Oruva Points is our community engagement home at points.oruva.com.ng.\n\nMembers earn points for simple community actions — following Oruva on X, Instagram, Threads, Facebook and Discord (1,000 points per follow/join task) — and for engaging with what we publish, including editions of this newsletter.\n\nWhy points? Because a transport platform is not built by a company alone. The riders who test, the drivers who advise, and the community that shows up early are part of the build — and Oruva Points is how that contribution is recognised and rewarded as the platform grows, Season 1 starting 26 October 2026.\n\nStart here: create your account on points.oruva.com.ng, complete the follow tasks, and keep your newsletter account on newsletter.oruva.com.ng for reading, discussion and reposts. Two accounts, one community.`,
     createdAt:'2026-10-15T09:20:00+01:00'}
  ];
  return {
    users:[ ORUVA_USER,
      {id:'u_demo_verified', name:'Adaeze Nwosu', username:'adaeze', email:'adaeze@example.com', password:null, role:'member', verification:'blue', verificationStatus:'verified', bio:'Transport writer and community blogger in Osogbo. I repost and save the editions worth your time.', website:'', location:'Osogbo, Nigeria', contacts:'', socials:'', joined:'2026-10-15'}
    ],
    posts, comments:[
      {id:'c1', postId:'p_welcome', authorId:'u_demo_verified', parentId:null, likes:[], text:'Welcome edition is clear and useful. The sections menu makes it easy to know what to expect every week.', createdAt:'2026-10-15T10:00:00+01:00'},
      {id:'c2', postId:'p_welcome', authorId:'u_oruva', parentId:'c1', likes:[], text:'Thank you, Adaeze — tell us in the comments which section you want us to go deeper on next week.', createdAt:'2026-10-15T10:05:00+01:00'}
    ],
    likes:[{postId:'p_welcome', userId:'u_demo_verified'}],
    votes:[{postId:'p_welcome', userId:'u_demo_verified', value:1},{postId:'p_strike', userId:'u_demo_verified', value:1}],
    saves:[{postId:'p_strike', userId:'u_demo_verified'}],
    ratings:[{postId:'p_welcome', userId:'u_demo_verified', stars:5}],
    reposts:[], applications:[], subscribers:[],
    session:null, seq:100
  };
}
let DB;
try{ DB = JSON.parse(localStorage.getItem(LS_KEY)) || seed(); }catch(e){ DB = seed(); }
if(!DB.users || !DB.users.find(u=>u.id==='u_oruva') || !DB.votes || !DB.saves) DB = seed();
/* Merge any new official seed posts into existing visitors' saved data, so new editions appear without wiping their accounts, comments or saves. */
try{ const _sp = seed().posts; _sp.forEach(p=>{ if(!DB.posts.find(x=>x.id===p.id)) DB.posts.push(p); }); }catch(e){}
function save(){ localStorage.setItem(LS_KEY, JSON.stringify(DB)); }
save();

const $app = document.getElementById('app');
const esc = s => String(s??'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const userById = id => DB.users.find(u=>u.id===id);
const userByName = name => DB.users.find(u=>u.username.toLowerCase()===String(name).toLowerCase());
const me = () => DB.session ? userById(DB.session) : null;
function check(u){
  if(!u) return '';
  if(u.verification==='gold') return ' <span class="check gold" title="Verified official Oruva account">✔</span>';
  if(u.verification==='blue') return ' <span class="check blue" title="Verified community member">✔</span>';
  return '';
}
function avatar(u, cls=''){ const inner = u.username==='oruva' ? '<img src="assets/oruva-mark.jpg" alt="">' : esc(u.name.trim()[0]||'?'); return `<span class="avatar ${u.username==='oruva'?'goldbg':''} ${cls}">${inner}</span>`; }
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),3200); }
function avgRating(postId){ const r=DB.ratings.filter(x=>x.postId===postId); return r.length? {avg:(r.reduce((a,b)=>a+b.stars,0)/r.length), n:r.length} : {avg:0,n:0}; }
function starRow(postId){ const {avg,n}=avgRating(postId); let s=''; for(let i=1;i<=5;i++) s+=`<span class="${i<=Math.round(avg)?'lit':''}">★</span>`; return `<span class="stars">${s}</span> ${avg?avg.toFixed(1):'—'} (${n})`; }
function likeCount(id){ return DB.likes.filter(l=>l.postId===id).length; }
function commentCount(id){ return DB.comments.filter(c=>c.postId===id).length; }
function repostCount(id){ return DB.reposts.filter(r=>r.postId===id).length; }
function score(id){ return DB.votes.filter(v=>v.postId===id).reduce((a,v)=>a+v.value,0); }
function myVote(id){ const u=me(); const v=u&&DB.votes.find(v=>v.postId===id&&v.userId===u.id); return v?v.value:0; }
function isSaved(id){ const u=me(); return !!(u&&DB.saves.some(s=>s.postId===id&&s.userId===u.id)); }
function hotScore(p){ return score(p.id)*3 + commentCount(p.id)*2 + likeCount(p.id) + repostCount(p.id)*2 + DB.saves.filter(s=>s.postId===p.id).length + (avgRating(p.id).avg||0); }
function karma(u){ const myPosts=DB.posts.filter(p=>p.authorId===u.id); return myPosts.reduce((a,p)=>a+score(p.id),0) + DB.comments.filter(c=>c.authorId===u.id).reduce((a,c)=>a+(c.likes||[]).length,0) + myPosts.reduce((a,p)=>a+likeCount(p.id),0); }

/* ---------- top bar ---------- */
function renderTop(){
  const u=me(); const el=document.getElementById('top-actions');
  if(u) el.innerHTML = `<button class="btn gold small" onclick="openComposer()">+ Write post</button>
    <a class="btn ghost small" style="text-decoration:none" href="#/profile/${esc(u.username)}">${esc(u.name.split(' ')[0])}${check(u)}</a>
    <button class="btn small" onclick="logout()">Sign out</button>`;
  else el.innerHTML = `<button class="btn ghost small" onclick="openAuth('login')">Sign in</button>
    <button class="btn small" onclick="openAuth('register')">Create account</button>`;
}
/* ---------- feed ---------- */
let activeCat='All', query='', sortMode='hot';
function sortPosts(posts){
  const arr=posts.slice();
  if(sortMode==='new') arr.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  else if(sortMode==='top') arr.sort((a,b)=>score(b.id)-score(a.id) || commentCount(b.id)-commentCount(a.id));
  else arr.sort((a,b)=>hotScore(b)-hotScore(a));
  return arr;
}
function communityStrip(){
  return `<div class="community-strip">
    <div><strong class="comm-name">The Oruva Community</strong> <span class="comm-sub">· the newsletter, run like a community board</span></div>
    <div class="comm-stats"><span><strong>${DB.users.length}</strong> members</span><span><strong>${DB.posts.length}</strong> posts</span><span><strong>${DB.comments.length}</strong> comments</span><span><strong>${DB.subscribers.length}</strong> subscribers</span></div>
    <div class="comm-rules">Be kind · Teach what you know · No spam · Every opportunity needs a source and a deadline</div>
  </div>`;
}
function renderFeed(onlyOpps=false){
  renderTop();
  const cats = onlyOpps ? ['Capital & Opportunities','Partnerships','Opportunities Board'] : CATEGORIES;
  let posts = DB.posts.slice();
  if(onlyOpps) posts = posts.filter(p=>cats.includes(p.category));
  if(activeCat!=='All') posts = posts.filter(p=>p.category===activeCat);
  if(query) posts = posts.filter(p=>(p.title+p.excerpt+p.category).toLowerCase().includes(query.toLowerCase()));
  posts = sortPosts(posts);
  const chips = ['All',...cats].map(c=>`<button class="chip ${activeCat===c?'active':''}" style="${activeCat===c&&c!=='All'?`background:${catColor(c)};border-color:${catColor(c)}`:''}" onclick="setCat('${esc(c)}')">${c!=='All'?`<span class="dot" style="background:${catColor(c)}"></span>`:''}${esc(c)}</button>`).join('');
  const sortbar = `<div class="sortbar"><span>Sort:</span>${['hot','new','top'].map(s=>`<button class="sortbtn ${sortMode===s?'active':''}" onclick="setSort('${s}')">${s==='hot'?'🔥 Hot':s==='new'?'✨ New':'🏆 Top'}</button>`).join('')}</div>`;
  const trending = (!query && activeCat==='All') ? `<div class="trending"><strong>🔥 Trending in the community</strong><ol>${DB.posts.slice().sort((a,b)=>hotScore(b)-hotScore(a)).slice(0,3).map(p=>`<li><a href="#/post/${p.id}">${esc(p.title)}</a> <span class="tag flair" style="background:${catColor(p.category)}">${esc(p.category)}</span> <small>▲ ${score(p.id)} · 💬 ${commentCount(p.id)}</small></li>`).join('')}</ol></div>` : '';
  const u0 = me();
  const recos = (u0 && !query) ? (()=>{ const savedCats = [...new Set(DB.saves.filter(s=>s.userId===u0.id).map(s=>(DB.posts.find(p=>p.id===s.postId)||{}).category).filter(Boolean))];
    const rec = DB.posts.filter(p=>savedCats.includes(p.category) && !DB.saves.some(s=>s.postId===p.id&&s.userId===u0.id) && p.authorId!==u0.id).slice(0,3);
    return rec.length? `<div class="recos"><strong>📌 Ideas for your board</strong> — more from the sections you save from:${rec.map(p=>` <a href="#/post/${p.id}">${esc(p.title)}</a>`).join(' · ')}</div>` : ''; })() : '';
  $app.innerHTML = `${communityStrip()}
  ${onlyOpps?'<h2>Opportunities</h2><p>Grants, scholarships, capital, partnership calls and openings — verified by the Oruva desk, with deadlines and sources in each post.</p>':''}
  <div class="chips">${chips}</div>
  <input class="searchbar" placeholder="Search the newsletter…" value="${esc(query)}" oninput="setQuery(this.value)">
  ${sortbar}
  ${trending}
  ${recos}
  <div class="masonry">${posts.length? posts.map(postCard).join('') : '<div class="empty">Nothing here yet. Try another section.</div>'}</div>`;
}
function coverHTML(p){
  const saved = isSaved(p.id);
  const cover = p.cover ? `<img class="cover" src="${esc(p.cover)}" alt="">` : `<div class="cover cover-grad" style="background:linear-gradient(140deg,${catColor(p.category)},var(--navy2))"><span>${esc(p.category)}</span></div>`;
  return `<div class="coverwrap"><a href="#/post/${p.id}">${cover}</a><button class="savebtn ${saved?'saved':''}" onclick="toggleSave('${p.id}')">${saved?'Saved':'Save'}</button></div>`;
}
function voteHTML(p, big=false){
  const v=myVote(p.id);
  return `<span class="votebox ${big?'big':''}"><button class="votebtn ${v===1?'up':''}" title="Upvote" onclick="vote('${p.id}',1)">▲</button><strong>${score(p.id)}</strong><button class="votebtn ${v===-1?'down':''}" title="Downvote" onclick="vote('${p.id}',-1)">▼</button></span>`;
}
function postCard(p){
  if(!p) return '';
  const a=userById(p.authorId); const u=me();
  const liked = u && DB.likes.some(l=>l.postId===p.id&&l.userId===u.id);
  return `<article class="card">
    ${coverHTML(p)}
    <span class="tag flair" style="background:${catColor(p.category)}">${esc(p.category)}${p.edition?' · '+esc(p.edition):''}</span>
    <div class="byline">${avatar(a)}<span><a href="#/profile/${esc(a.username)}" style="text-decoration:none;font-weight:700;color:var(--navy)">${esc(a.name)}</a>${check(a)}<br><small style="color:var(--muted)">@${esc(a.username)} · ${new Date(p.createdAt).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</small></span></div>
    <h3><a href="#/post/${p.id}">${esc(p.title)}</a></h3><p>${esc(p.excerpt)}</p>
    <div class="meta-row">${voteHTML(p)}<span>${starRow(p.id)}</span>
    <button class="${liked?'on':''}" onclick="toggleLike('${p.id}')">♥ ${likeCount(p.id)}</button>
    <a href="#/post/${p.id}" style="text-decoration:none;color:var(--muted);font-weight:600">💬 ${commentCount(p.id)}</a>
    <button onclick="repost('${p.id}')">🔁 ${repostCount(p.id)}</button></div></article>`;
}
window.setCat=c=>{activeCat=c; renderFeed(location.hash.includes('opportunities'));};
window.setSort=s=>{sortMode=s; renderFeed(location.hash.includes('opportunities'));};
window.setQuery=q=>{query=q; renderFeed(location.hash.includes('opportunities')); const n=document.querySelector('.searchbar'); if(n){n.focus(); n.setSelectionRange(n.value.length,n.value.length);} };
/* ---------- post page ---------- */
function commentHTML(postId, parentId, depth){
  return DB.comments.filter(c=>c.postId===postId && (c.parentId||null)===parentId)
    .sort((x,y)=>new Date(x.createdAt)-new Date(y.createdAt))
    .map(c=>{ const ca=userById(c.authorId); const u=me(); const liked=u&&(c.likes||[]).includes(u.id);
      return `<div class="comment" style="margin-left:${Math.min(depth,5)*22}px">${avatar(ca)}<div class="cbody">
      <strong>${esc(ca.name)}</strong>${check(ca)} <small style="color:var(--muted)">@${esc(ca.username)} · ${new Date(c.createdAt).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</small>
      <p>${esc(c.text)}</p>
      <div class="cactions"><button class="${liked?'on':''}" onclick="likeComment('${c.id}')">▲ ${(c.likes||[]).length}</button>
      ${u?`<button onclick="toggleReply('${c.id}')">↩ Reply</button>`:''}</div>
      <div id="replybox-${c.id}"></div>
      ${commentHTML(postId, c.id, depth+1)}
      </div></div>`; }).join('');
}
function renderPost(id){
  renderTop(); const p=DB.posts.find(x=>x.id===id);
  if(!p){ $app.innerHTML='<div class="empty">Post not found.</div>'; return; }
  const a=userById(p.authorId); const u=me();
  const myRating = u ? (DB.ratings.find(r=>r.postId===id&&r.userId===u.id)||{}).stars||0 : 0;
  const liked = u && DB.likes.some(l=>l.postId===id&&l.userId===u.id);
  $app.innerHTML = `<article class="article">
    ${p.cover?`<img class="cover hero-cover" src="${esc(p.cover)}" alt="">`:''}
    <div class="post-layout"><div class="voterail">${voteHTML(p,true)}<button class="savebtn static ${isSaved(p.id)?'saved':''}" onclick="toggleSave('${p.id}');renderPost('${p.id}')">${isSaved(p.id)?'Saved':'Save'}</button></div>
    <div class="post-main">
    <span class="tag flair" style="background:${catColor(p.category)}">${esc(p.category)}${p.edition?' · '+esc(p.edition):''}</span>
    <h2 style="margin-top:12px">${esc(p.title)}</h2>
    <div class="byline">${avatar(a)}<span><a href="#/profile/${esc(a.username)}" style="text-decoration:none;font-weight:700;color:var(--navy)">${esc(a.name)}</a>${check(a)}<br><small style="color:var(--muted)">@${esc(a.username)} · The Oruva Newsletter · ${new Date(p.createdAt).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})} · Sent from newsletter@oruva.com.ng</small></span></div>
    <div class="body" style="margin-top:18px">${esc(p.body)}</div>
    <div class="meta-row" style="margin-top:22px"><button class="${liked?'on':''}" onclick="toggleLike('${p.id}');renderPost('${p.id}')">♥ ${likeCount(p.id)} Like</button>
    <button onclick="repost('${p.id}');renderPost('${p.id}')">🔁 ${repostCount(p.id)} Repost</button><span>${commentCount(p.id)} comments</span></div>
    <div class="rate-box"><h3>Rate this edition</h3>
      <div class="rate-btns">${[1,2,3,4,5].map(i=>`<button class="${i<=myRating?'lit':''}" onclick="rate('${p.id}',${i})">★</button>`).join('')}</div>
      <p style="color:var(--muted);margin:6px 0 0">Average: ${starRow(p.id)} ${u?'':'· <a href="javascript:void(0)" onclick="openAuth(\'login\')">Sign in</a> to rate'}</p></div>
    <div class="comment-box"><h3>Discussion (${commentCount(p.id)})</h3>
      ${u?`<form class="comment-form" onsubmit="addComment(event,'${p.id}',null)"><textarea id="comment-text" placeholder="Join the discussion, ${esc(u.name.split(' ')[0])}…" required></textarea><p><button class="btn" type="submit">Post comment</button></p></form>`
         :`<div class="notice">Create a free account or sign in to comment, vote, like, rate, save and repost. <a href="javascript:void(0)" onclick="openAuth('register')">Create account</a></div>`}
      ${commentHTML(p.id, null, 0) || '<p style="color:var(--muted)">No comments yet — be the first.</p>'}
    </div></div></div></article>`;
  window.scrollTo(0,0);
}
/* ---------- actions ---------- */
function requireAuth(){ if(me()) return true; openAuth('register'); toast('Create a free account to do that.'); return false; }
function refreshAfter(id){ if(location.hash.startsWith('#/post')) renderPost(id); else renderFeed(location.hash.includes('opportunities')); }
window.vote=(id,val)=>{ if(!requireAuth())return; const u=me(); const ex=DB.votes.find(v=>v.postId===id&&v.userId===u.id);
  if(ex && ex.value===val){ DB.votes.splice(DB.votes.indexOf(ex),1); } else if(ex){ ex.value=val; } else DB.votes.push({postId:id,userId:u.id,value:val});
  save(); refreshAfter(id); };
window.toggleSave=id=>{ if(!requireAuth())return; const u=me(); const i=DB.saves.findIndex(s=>s.postId===id&&s.userId===u.id);
  if(i>=0){DB.saves.splice(i,1); toast('Removed from your saved board.');} else {DB.saves.push({postId:id,userId:u.id}); toast('Saved to your profile board. 📌');}
  save(); if(!location.hash.startsWith('#/post')) renderFeed(location.hash.includes('opportunities')); };
window.toggleLike=id=>{ if(!requireAuth())return; const u=me(); const i=DB.likes.findIndex(l=>l.postId===id&&l.userId===u.id); if(i>=0)DB.likes.splice(i,1); else DB.likes.push({postId:id,userId:u.id}); save(); refreshAfter(id); };
window.rate=(id,stars)=>{ if(!requireAuth())return; const u=me(); const r=DB.ratings.find(r=>r.postId===id&&r.userId===u.id); if(r)r.stars=stars; else DB.ratings.push({postId:id,userId:u.id,stars}); save(); renderPost(id); toast(`You rated this ${stars} star${stars>1?'s':''}. Thank you.`); };
window.repost=id=>{ if(!requireAuth())return; const u=me(); if(DB.reposts.some(r=>r.postId===id&&r.userId===u.id)){toast('You already reposted this to your profile.');return;} DB.reposts.push({id:'r'+(++DB.seq),postId:id,userId:u.id,createdAt:new Date().toISOString()}); save(); toast('Reposted to your profile.'); if(!location.hash.startsWith('#/post'))renderFeed(location.hash.includes('opportunities')); };
window.addComment=(e,id,parentId)=>{ e.preventDefault(); const box = parentId? document.getElementById('reply-text-'+parentId) : document.getElementById('comment-text'); const t=box.value.trim(); if(!t)return; DB.comments.push({id:'c'+(++DB.seq),postId:id,authorId:me().id,parentId:parentId||null,likes:[],text:t,createdAt:new Date().toISOString()}); save(); renderPost(id); };
window.toggleReply=cid=>{ const el=document.getElementById('replybox-'+cid); if(!el)return; const c=DB.comments.find(x=>x.id===cid);
  if(el.innerHTML){ el.innerHTML=''; return; }
  el.innerHTML=`<form class="comment-form" onsubmit="addComment(event,'${c.postId}','${cid}')"><textarea id="reply-text-${cid}" placeholder="Write a reply…" required></textarea><p><button class="btn small" type="submit">Reply</button></p></form>`;
  const t=document.getElementById('reply-text-'+cid); if(t)t.focus(); };
window.likeComment=cid=>{ if(!requireAuth())return; const c=DB.comments.find(x=>x.id===cid); c.likes=c.likes||[]; const i=c.likes.indexOf(me().id); if(i>=0)c.likes.splice(i,1); else c.likes.push(me().id); save(); renderPost(c.postId); };
/* ---------- profiles ---------- */
function renderProfile(username){
  renderTop(); const u=userByName(username);
  if(!u){ $app.innerHTML='<div class="empty">Profile not found.</div>'; return; }
  const mine = me() && me().id===u.id;
  const myPosts = sortPosts(DB.posts.filter(p=>p.authorId===u.id));
  const myReposts = DB.reposts.filter(r=>r.userId===u.id).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  const mySaves = DB.saves.filter(s=>s.userId===u.id);
  const likesRecv = DB.likes.filter(l=>myPosts.some(p=>p.id===l.postId)).length;
  const appStatus = DB.applications.filter(a=>a.userId===u.id).slice(-1)[0];
  $app.innerHTML = `<div class="profile-head">${avatar(u)}
    <div style="flex:1;min-width:240px"><h2 style="margin:0">${esc(u.name)}${check(u)}</h2>
    <p style="margin:2px 0;color:var(--muted)">@${esc(u.username)} · ${u.verification==='gold'?'Official Oruva account — gold verified':u.verification==='blue'?'Verified community member':'Community member'} · Joined ${esc(u.joined||'2026')}</p>
    <p>${esc(u.bio||'')}</p>
    ${u.website?`<p>🌐 <a href="${esc(u.website)}">${esc(u.website.replace('https://',''))}</a>${u.location?' · 📍 '+esc(u.location):''}</p>`:''}
    ${u.contacts?`<p>✉️ ${esc(u.contacts)}</p>`:''}${u.socials?`<p>${esc(u.socials)}</p>`:''}
    <div class="profile-stats"><span><strong>${myPosts.length}</strong>Posts</span><span><strong>${myReposts.length}</strong>Reposts</span><span><strong>${mySaves.length}</strong>Saved</span><span><strong>${karma(u)}</strong>Karma</span><span><strong>${likesRecv}</strong>Likes received</span></div>
    ${mine?`<p style="margin-top:14px"><button class="btn gold small" onclick="openComposer()">+ Write post</button>
      ${u.verification==='gold'?'<span style="margin-left:10px;color:var(--gold-dark);font-weight:700">Gold verification is reserved for official Oruva accounts.</span>'
        :u.verification==='blue'?'<span style="margin-left:10px;color:var(--blue);font-weight:700">✔ Your account is verified.</span>'
        :appStatus?`<span style="margin-left:10px;font-weight:700">Verification: ${esc(appStatus.status)} — our team reviews applications before the checkmark is issued.</span>`
        :`<button class="btn ghost small" onclick="openVerify()">Apply for verification checkmark</button>`}</p>`:''}
    </div></div>
    <h3 style="margin:26px 0 12px">Posts</h3>
    <div class="masonry">${myPosts.length?myPosts.map(postCard).join(''):'<div class="empty">No posts yet.</div>'}</div>
    <h3 style="margin:26px 0 12px">Reposts</h3>
    <div class="masonry">${myReposts.length?myReposts.map(r=>postCard(DB.posts.find(p=>p.id===r.postId))).join(''):'<div class="empty">No reposts yet. Repost an edition and it will appear here, on your own profile.</div>'}</div>
    <h3 style="margin:26px 0 12px">Saved board 📌</h3>
    <div class="masonry">${mySaves.length?mySaves.map(s=>postCard(DB.posts.find(p=>p.id===s.postId))).join(''):'<div class="empty">Nothing saved yet. Tap Save on any post and it lands on this board, Pinterest-style.</div>'}</div>`;
  window.scrollTo(0,0);
}
/* ---------- modals ---------- */
const modalRoot=document.getElementById('modal-root');
function closeModal(){ modalRoot.innerHTML=''; }
window.openAuth=mode=>{
  modalRoot.innerHTML=`<div class="modal-wrap" onclick="if(event.target===this)closeModal()"><div class="modal">
  <h3>${mode==='register'?'Create your free account':'Welcome back'}</h3>
  <p style="color:var(--muted)">${mode==='register'?'An account lets you comment and reply, vote, like, rate, save, repost, publish your own posts, and apply for the verification checkmark.':'Sign in to comment, vote, like, rate, save and repost.'}</p>
  <form onsubmit="submitAuth(event,'${mode}')">
    ${mode==='register'?`<label>Full name</label><input id="a-name" required>
    <label>Username</label><input id="a-username" required pattern="[a-zA-Z0-9_]{3,20}" title="3–20 letters, numbers or underscores">`:''}
    <label>Email</label><input id="a-email" type="email" required>
    <label>Password</label><input id="a-pass" type="password" required minlength="6">
    <div class="row"><button type="button" class="btn ghost" onclick="closeModal()">Cancel</button><button class="btn" type="submit">${mode==='register'?'Create account':'Sign in'}</button></div>
  </form>
  <p style="text-align:center;color:var(--muted)">${mode==='register'?'Already have an account? <a href="javascript:void(0)" onclick="openAuth(\'login\')">Sign in</a>':'New here? <a href="javascript:void(0)" onclick="openAuth(\'register\')">Create account</a>'}</p>
  <p style="font-size:.78rem;color:var(--muted)">Prototype note: accounts are stored in this browser only. Production accounts are server-side with hashed passwords (SYSTEM-SPEC.md §6).</p></div></div>`;
};
window.submitAuth=(e,mode)=>{
  e.preventDefault();
  const email=document.getElementById('a-email').value.trim().toLowerCase();
  const pass=document.getElementById('a-pass').value;
  if(mode==='register'){
    const name=document.getElementById('a-name').value.trim();
    const username=document.getElementById('a-username').value.trim();
    if(DB.users.some(u=>u.username.toLowerCase()===username.toLowerCase()))return toast('That username is taken.');
    if(DB.users.some(u=>u.email.toLowerCase()===email))return toast('That email already has an account — sign in.');
    const u={id:'u'+(++DB.seq),name,username,email,password:pass,role:'member',verification:null,verificationStatus:'none',bio:'',website:'',location:'',contacts:'',socials:'',joined:new Date().toISOString().slice(0,10)};
    DB.users.push(u); DB.session=u.id; save(); closeModal(); renderTop(); toast(`Welcome, ${name.split(' ')[0]}. Your account is ready.`);
    location.hash='#/profile/'+username;
  } else {
    const u=DB.users.find(u=>u.email.toLowerCase()===email && u.password===pass);
    if(!u)return toast('No account matches that email and password in this prototype.');
    DB.session=u.id; save(); closeModal(); renderTop(); toast(`Welcome back, ${u.name.split(' ')[0]}.`); renderFeed(false);
  }
};
window.logout=()=>{ DB.session=null; save(); renderTop(); location.hash='#/'; renderFeed(false); };
window.openComposer=()=>{
  if(!requireAuth())return;
  modalRoot.innerHTML=`<div class="modal-wrap" onclick="if(event.target===this)closeModal()"><div class="modal">
  <h3>Write a post</h3><p style="color:var(--muted)">Publishing as ${esc(me().name)}${check(me())}. Your section's colour becomes your post's cover, Pinterest-style.</p>
  <form onsubmit="submitPost(event)"><label>Title</label><input id="p-title" required>
  <label>Section (flair)</label><select id="p-cat">${CATEGORIES.map(c=>`<option>${c}</option>`).join('')}</select>
  <label>Summary (one or two lines)</label><input id="p-excerpt" required>
  <label>Body</label><textarea id="p-body" rows="7" required></textarea>
  <div class="row"><button type="button" class="btn ghost" onclick="closeModal()">Cancel</button><button class="btn" type="submit">Publish</button></div></form></div></div>`;
};
window.submitPost=e=>{ e.preventDefault();
  const p={id:'p'+(++DB.seq),authorId:me().id,category:document.getElementById('p-cat').value,edition:'Community',cover:'',
    title:document.getElementById('p-title').value.trim(),excerpt:document.getElementById('p-excerpt').value.trim(),
    body:document.getElementById('p-body').value.trim(),createdAt:new Date().toISOString()};
  DB.posts.push(p); save(); closeModal(); location.hash='#/post/'+p.id; renderPost(p.id); toast('Your post is live.');
};
window.openVerify=()=>{
  modalRoot.innerHTML=`<div class="modal-wrap" onclick="if(event.target===this)closeModal()"><div class="modal">
  <h3>Apply for verification</h3>
  <p style="color:var(--muted)">Verified community members get a <span class="check blue">✔ blue checkmark</span> beside their name everywhere on the platform. Gold is reserved for official Oruva accounts. Tell us who you are — a person, creator, driver, student or business — and why verification helps readers trust your posts.</p>
  <form onsubmit="submitVerify(event)"><label>Who are you?</label><input id="v-who" required placeholder="e.g. Transport blogger, Osogbo">
  <label>Why should your account be verified?</label><textarea id="v-why" rows="4" required></textarea>
  <div class="row"><button type="button" class="btn ghost" onclick="closeModal()">Cancel</button><button class="btn" type="submit">Submit application</button></div></form></div></div>`;
};
window.submitVerify=e=>{ e.preventDefault();
  DB.applications.push({id:'a'+(++DB.seq),userId:me().id,who:document.getElementById('v-who').value.trim(),why:document.getElementById('v-why').value.trim(),status:'Pending review',createdAt:new Date().toISOString()});
  save(); closeModal(); renderProfile(me().username); toast('Application submitted. Status shows on your profile.');
};
/* ---------- subscribe ---------- */
document.getElementById('subscribe-form').addEventListener('submit',e=>{
  e.preventDefault(); const em=document.getElementById('subscribe-email').value.trim().toLowerCase();
  if(DB.subscribers.includes(em)){ toast('You are already subscribed. Welcome back.'); return; }
  DB.subscribers.push(em); save();
  document.getElementById('subscribe-note').innerHTML=`✅ Subscribed. Your welcome email is on its way from <strong>newsletter@oruva.com.ng</strong> — add us to your contacts so editions land in Primary.`;
  toast('Subscribed to The Oruva Newsletter.');
});
/* ---------- router ---------- */
function route(){
  const h=location.hash||'#/';
  if(h.startsWith('#/post/')) return renderPost(h.slice(7));
  if(h.startsWith('#/profile/')) return renderProfile(decodeURIComponent(h.slice(10)));
  if(h.startsWith('#/opportunities')) return renderFeed(true);
  activeCat='All'; return renderFeed(false);
}
window.addEventListener('hashchange',route);
route();
