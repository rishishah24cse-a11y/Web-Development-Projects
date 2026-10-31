const U = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const FALLBACK = U('1507525428034-b723cf961d3e');
const $ = s => document.querySelector(s);
const money = n => '$' + n.toLocaleString('en-US');
const card = (cls, inner) => `<article class="card ${cls || ''}">${inner}</article>`;
const img = (id, alt, w) => `<img src="${U(id, w)}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK}'">`;

/* ---------- DATA ---------- */
const DEST = [
  ['Maldives', 'Maldives', 'Overwater villas on powder-white atolls.', 3200, '1514282401047-d79a71a590e8'],
  ['Dubai', 'United Arab Emirates', 'Skyline glamour meets desert silence.', 1900, '1512453979798-5ea266f8880c'],
  ['Switzerland', 'Switzerland', 'Alpine lakes, glaciers and grand railways.', 3600, '1530122037265-a5f1f91d3b99'],
  ['Bali', 'Indonesia', 'Rice terraces, temples and private pool villas.', 1500, '1537996194471-e657df975ab4'],
  ['Paris', 'France', 'Timeless boulevards, couture and cuisine.', 2400, '1502602898657-3e91760cbb34'],
  ['Santorini', 'Greece', 'Whitewashed cliffs above the Aegean caldera.', 2800, '1570077188670-e3a8d69ac5ff'],
  ['Japan', 'Japan', 'Ancient temples, cherry blossom and precision.', 3100, '1493976040374-85c8e12f0c0e'],
  ['Rajasthan', 'India', 'Palaces, forts and desert camps of royalty.', 1400, '1477587458883-47145ed94245'],
  ['London', 'United Kingdom', 'Heritage, theatre and refined afternoon tea.', 2200, '1513635269975-59663e0ac1ad'],
  ['New Zealand', 'New Zealand', 'Fjords, volcanoes and untouched wilderness.', 3900, '1507699622108-4be3abd695ad']
];
const D = Object.fromEntries(DEST.map(d => [d[0], d[4]]));
// [title, category, destination, nights, price, description, imgDest]
const PACK = [
  ['Maldives Luxury Escape', 'Luxury Escapes', 'Maldives', 7, 5800, 'Overwater villa, seaplane transfers, private dining.'],
  ['Swiss Alpine Journey', 'Luxury Escapes', 'Switzerland', 8, 6400, 'Glacier Express, lakeside suites and chalet dinners.'],
  ['Dubai Luxury Experience', 'Luxury Escapes', 'Dubai', 5, 3900, 'Burj-view suite, yacht evening and desert dinner.'],
  ['Santorini Romantic Escape', 'Luxury Escapes', 'Santorini', 6, 4300, 'Cliffside cave suite with caldera sunsets.'],
  ['New Zealand Adventure', 'Adventure', 'New Zealand', 12, 7200, 'Heli-hiking, Milford Sound and Queenstown thrills.'],
  ['Bali Adventure', 'Adventure', 'Bali', 7, 1900, 'Volcano sunrise trek, rafting and temple trails.'],
  ['Himalayan Experience', 'Adventure', 'Rajasthan', 9, 2600, 'Guided mountain trails and monastery stays in the Himalaya.'],
  ['Japan Exploration', 'Adventure', 'Japan', 10, 4800, 'Kyoto, Tokyo and the Kumano Kodo pilgrimage.'],
  ['Dubai Family Holiday', 'Family Holidays', 'Dubai', 6, 3200, 'Theme parks, beach resort and dune adventures.'],
  ['Singapore Family Escape', 'Family Holidays', 'Bali', 5, 2400, 'Gardens by the Bay, zoo safari and Sentosa beaches.'],
  ['Europe Family Tour', 'Family Holidays', 'Paris', 11, 5600, 'Paris, Swiss Alps and London with family-led guides.'],
  ['Maldives Honeymoon', 'Honeymoon', 'Maldives', 7, 5200, 'Sunset cruise, spa rituals and private island picnic.'],
  ['Paris & Switzerland', 'Honeymoon', 'Paris', 9, 5900, 'Seine dinners, then lakeside Lucerne and Zermatt.'],
  ['Bali Honeymoon', 'Honeymoon', 'Bali', 7, 2300, 'Jungle villa with pool, floating breakfast and spa.'],
  ['Santorini Honeymoon', 'Honeymoon', 'Santorini', 6, 4100, 'Private caldera dinner and sailing at golden hour.']
];
const HOTELS = [
  ['Luxury Resort', 'Soneva-style Island Retreat', 'Baa Atoll, Maldives', 4.9, 1250, 'Barefoot luxury with private reef villas.', '1582719508461-905c673771fd'],
  ['Beach Resort', 'Azure Bay Resort', 'Bali, Indonesia', 4.8, 420, 'Clifftop pools above the Indian Ocean.', '1571896349842-33c89424de2d'],
  ['Mountain Resort', 'Alpine Crown Lodge', 'Zermatt, Switzerland', 4.9, 780, 'Matterhorn views, wellness spa and fireside suites.', '1520250497591-112f2f40a3f4'],
  ['City Hotel', 'The Meridian Grand', 'Paris, France', 4.8, 690, 'Haussmann elegance steps from the Seine.', '1566073771259-6a8506099945'],
  ['Palace Hotel', 'Rambagh Heritage Palace', 'Jaipur, India', 4.9, 540, 'A maharaja’s palace with royal gardens.', '1564501049412-61c2a3083791']
];
const EXP = [
  ['Private Yacht Cruises', '1567899378494-47b22a2ae96a'], ['Desert Safaris', '1451337516015-6b6e9a0e0c5e'],
  ['Mountain Experiences', '1464822759023-fed622ff2c3b'], ['Scuba Diving', '1544551763-46a013bb70d5'],
  ['Luxury Train Journeys', '1474487548417-781cb71495f3'], ['Wildlife Safaris', '1516426122078-c23e76319801'],
  ['Cultural Experiences', '1528360983277-13d401cdc186'], ['Fine Dining', '1414235077428-338989a2e8c0'],
  ['Hot-Air Balloon Rides', '1507608616759-54f48f0af0ee']
];
const WHY = [
  ['Personalized Itineraries', 'Every day designed around your pace, tastes and curiosity.', '<path d="M4 20l5-14 11 7-6 3-3 6z"/>'],
  ['Luxury Accommodations', 'Hand-inspected hotels, resorts and villas worldwide.', '<path d="M3 20V9l9-6 9 6v11M9 20v-6h6v6"/>'],
  ['Expert Advisors', 'Specialists who have lived and traveled where they advise.', '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 15-5 16 0"/>'],
  ['24/7 Assistance', 'A real person on call, wherever in the world you are.', '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],
  ['Secure Booking', 'Protected payments and flexible, transparent terms.', '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>'],
  ['Curated Experiences', 'Private access and moments you cannot book online.', '<path d="M12 3l2.6 6 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.2 1.4-6.3L3 9.6 9.4 9z"/>']
];
const TESTS = [
  ['Priya Mehta', 'Maldives', 5, 'Every detail was anticipated. The seaplane, the villa, the dinners — we never once had to ask for anything.', '1494790108377-be9c29b29330'],
  ['James Whitfield', 'Switzerland', 5, 'Our advisor knew the Alps better than the locals. Effortless, beautiful, and perfectly paced for our family.', '1507003211169-0a1dd7228f2d'],
  ['Elena Rossi', 'Japan', 5, 'Private tea ceremonies and quiet temple mornings. It felt like a journey made only for us.', '1438761681033-6461ffad8d80']
];

/* ---------- RENDER ---------- */
$('#dest-grid').innerHTML = DEST.map(d => card('reveal', `<div class="ph">${img(d[4], d[0] + ', ' + d[1] + ' travel photograph', 700)}</div>
 <div class="body"><span class="meta">${d[1]}</span><h3>${d[0]}</h3><p>${d[2]}</p><div class="row"><span><small>From</small><br><b>${money(d[3])}</b></span><a class="btn sm" href="#packages" data-dest="${d[0]}">Explore</a></div></div>`)).join('');

const stars = n => '★'.repeat(Math.floor(n)) + (n % 1 ? '½' : '');
$('#hotel-grid').innerHTML = HOTELS.map(h => card('reveal', `<div class="ph"><span class="tag">${h[0]}</span>${img(h[6], h[1] + ' in ' + h[2], 800)}</div>
 <div class="body"><span class="meta">${h[2]} · <span class="stars" style="color:var(--gold)">★</span> ${h[3]}</span><h3>${h[1]}</h3><p>${h[5]}</p><div class="row"><span><small>From / night</small><br><b>${money(h[4])}</b></span><a class="btn sm" href="#contact">View Hotel</a></div></div>`)).join('');

$('#exp-grid').innerHTML = EXP.map(e => `<figure class="reveal">${img(e[1], e[0], 800)}<figcaption>${e[0]}</figcaption></figure>`).join('');
$('#why').innerHTML = WHY.map(w => `<div class="why reveal"><svg viewBox="0 0 24 24" aria-hidden="true">${w[2]}</svg><h3>${w[0]}</h3><p>${w[1]}</p></div>`).join('');
$('#tests').innerHTML = TESTS.map(t => `<div class="test reveal"><div class="stars">${'★'.repeat(t[2])}</div><p>“${t[3]}”</p><div class="who">${img(t[4], 'Portrait of ' + t[0], 200)}<div><b>${t[0]}</b><br><small>Visited ${t[1]}</small></div></div></div>`).join('');

/* destination selects */
const opts = '<option value="">All destinations</option>' + DEST.map(d => `<option>${d[0]}</option>`).join('');
$('#f-dest').innerHTML = opts;
$('#s-dest').innerHTML = opts.replace('All destinations', 'Anywhere');

/* ---------- PACKAGE EXPLORER ---------- */
const grid = $('#pack-grid');
function renderPacks() {
  const dest = $('#f-dest').value, type = $('#f-type').value, bud = +$('#f-budget').value || 0, dur = +$('#f-dur').value || 0;
  const list = PACK.filter(p => (!dest || p[2] === dest) && (!type || p[1] === type) && (!bud || p[4] <= bud) &&
    (!dur || (dur === 99 ? p[3] >= 10 : p[3] <= dur)));
  grid.querySelectorAll('.card').forEach(c => c.classList.add('out'));
  setTimeout(() => {
    grid.innerHTML = list.length ? list.map((p, i) => card('in', `<div class="ph"><span class="tag">${p[1]}</span>${img(D[p[2]], p[0] + ' in ' + p[2], 700)}</div>
     <div class="body" style="animation-delay:${i * 40}ms"><span class="meta">${p[2]} · ${p[3]} nights</span><h3>${p[0]}</h3><p>${p[5]}</p><div class="row"><span><small>From</small><br><b>${money(p[4])}</b></span><a class="btn sm" href="#contact">View Details</a></div></div>`)).join('')
      : '<p class="empty">No packages match these filters. Try widening your budget or duration.</p>';
    $('#count').textContent = `Showing ${list.length} of ${PACK.length} journeys`;
  }, grid.children.length ? 250 : 0);
}
['#f-dest', '#f-type', '#f-budget', '#f-dur'].forEach(s => $(s).addEventListener('change', renderPacks));
renderPacks();
document.addEventListener('click', e => {
  const a = e.target.closest('[data-dest]');
  if (a) { $('#f-dest').value = a.dataset.dest; renderPacks(); }
});

/* ---------- SEARCH ---------- */
const today = new Date().toISOString().slice(0, 10);
$('#s-dep').min = $('#s-ret').min = today;
$('#s-dep').addEventListener('change', e => { $('#s-ret').min = e.target.value; });
$('#search').addEventListener('submit', e => {
  e.preventDefault();
  const dep = $('#s-dep').value, ret = $('#s-ret').value, msg = $('#s-msg');
  if (ret < dep) { msg.textContent = 'Return date must be after departure.'; return; }
  const nights = Math.round((new Date(ret) - new Date(dep)) / 864e5);
  $('#f-dest').value = $('#s-dest').value; $('#f-type').value = $('#s-cat').value;
  $('#f-budget').value = ''; $('#f-dur').value = '';
  renderPacks();
  msg.textContent = `${nights} nights for ${$('#s-trav').value} traveler(s) — showing matching journeys.`;
  $('#packages').scrollIntoView();
});

/* ---------- NAV, MENU, REVEAL, COUNTERS, NEWSLETTER ---------- */
const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 60), { passive: true });
burger.addEventListener('click', () => {
  const on = menu.classList.toggle('open'); burger.classList.toggle('on', on);
  burger.setAttribute('aria-expanded', on); document.body.style.overflow = on ? 'hidden' : '';
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.classList.remove('on'); document.body.style.overflow = ''; } });

const io = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add('show');
  en.target.querySelectorAll?.('[data-n]').forEach(count);
  if (en.target.dataset?.n) count(en.target);
  io.unobserve(en.target);
}), { threshold: .15 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(el); });
function count(el) {
  const to = +el.dataset.n, t0 = performance.now();
  (function step(t) { const p = Math.min((t - t0) / 1800, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString(); if (p < 1) requestAnimationFrame(step); })(t0);
}
$('#news-form').addEventListener('submit', e => {
  e.preventDefault(); $('#n-msg').textContent = `Thank you — ${$('#n-mail').value} is subscribed.`; e.target.reset();
});
