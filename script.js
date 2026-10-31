document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hide'), 600);
  });

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  /* ---------- Data ---------- */
  const services = [
    ['Architectural Design', 'Ground-up design of buildings, from massing and structure to facade and detail.'],
    ['Interior Architecture', 'Spatial planning, materials, and built-in elements that shape how a room performs.'],
    ['Residential Design', 'Private homes designed around how a family actually moves and gathers.'],
    ['Commercial Architecture', 'Workplaces and retail environments built for identity, flow, and durability.'],
    ['Hospitality Design', 'Hotels and restaurants designed as a sequence of considered arrivals.'],
    ['Landscape & Outdoor Spaces', 'Courtyards, gardens, and thresholds that extend architecture outward.'],
    ['Renovation & Restoration', 'Careful updates to existing structures that respect their original character.'],
    ['Project Consultation', 'Early-stage feasibility, site analysis, and design direction.']
  ];

  const projects = [
    {name:'The Courtyard Residence', location:'Ahmedabad, India', type:'Residential', year:'2024', area:'620 sqm', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400', desc:'A single-storey home organised around a central courtyard that pulls light and air through every room. Exposed concrete and local sandstone were left untreated to age naturally with the climate.', materials:'Board-formed concrete, Dholpur sandstone, teak'},
    {name:'Casa Aurelia', location:'Goa, India', type:'Residential', year:'2023', area:'480 sqm', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400', desc:'A hillside villa stepped across three levels to follow the natural grade of the site, with deep overhangs shading every glazed wall from the coastal sun.', materials:'Lime plaster, laterite stone, oxidised steel'},
    {name:'The Stone House', location:'Udaipur, India', type:'Residential', year:'2022', area:'390 sqm', img:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400', desc:'Built into a granite outcrop, the house uses the existing rock as both foundation and interior feature, with living spaces carved around it rather than over it.', materials:'Local granite, timber, hand-troweled plaster'},
    {name:'Urban Pavilion', location:'Bengaluru, India', type:'Commercial', year:'2024', area:'1,100 sqm', img:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400', desc:'A ground-floor cultural pavilion with a perforated brick screen that filters light into a column-free exhibition hall.', materials:'Perforated brick, steel truss, polished screed'},
    {name:'Grand Terrace Villa', location:'Alibaug, India', type:'Hospitality', year:'2023', area:'2,300 sqm', img:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400', desc:'A boutique retreat of eight suites arranged around a series of terraced water gardens that step down toward the coastline.', materials:'Travertine, teak louvres, lime-washed brick'},
    // {name:'Modern Heritage Residence', location:'Jaipur, India', type:'Renovation', year:'2022', area:'540 sqm', img:'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?q=80&w=1400', desc:'A century-old haveli restored and reorganised for contemporary family life, preserving its original jaali screens and courtyard proportions.', materials:'Restored sandstone, reclaimed timber, brass'}
  ];

  const processSteps = [
    ['Discover', 'Understanding the site, requirements, and vision.'],
    ['Concept', 'Developing the architectural direction.'],
    ['Design', 'Refining spaces, materials, proportions, and details.'],
    ['Develop', 'Technical planning and documentation.'],
    ['Build', 'Collaborating through construction and execution.'],
    ['Complete', 'Delivering a finished environment with attention to every detail.']
  ];

  const testimonials = [
    ['Every detail felt intentional. The result is a home that feels both timeless and completely ours.', 'Arjun Mehta, Residential Client'],
    ['They understood our site better than we did. The final building responds to the light in a way no rendering showed us.', 'Priya Raval, Commercial Client'],
    ['A genuinely collaborative process. Nothing felt rushed, and nothing felt generic.', 'Karan Shah, Hospitality Client'],
    ['They restored our family home without erasing its history. It feels new and old at once.', 'Meera Joshi, Restoration Client']
  ];

  /* ---------- Render services ---------- */
  const serviceGrid = document.getElementById('serviceGrid');
  serviceGrid.innerHTML = services.map((s, i) => `
    <div class="service-card fade-up">
      <span class="service-num">${String(i + 1).padStart(2, '0')}</span>
      <div><h3>${s[0]}</h3><p>${s[1]}</p></div>
    </div>`).join('');

  /* ---------- Render projects ---------- */
  const sizeClasses = ['wide', '', 'narrow', '', 'wide', 'narrow'];
  const projectGrid = document.getElementById('projectGrid');
  projectGrid.innerHTML = projects.map((p, i) => `
    <div class="project-card ${sizeClasses[i]} fade-up" data-index="${i}">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="project-overlay-info">
        <p class="p-name">${p.name}</p>
        <p class="p-meta">${p.location} — ${p.type}, ${p.year}</p>
      </div>
    </div>`).join('');

  /* ---------- Project overlay/modal ---------- */
  const overlay = document.getElementById('projectOverlay');
  const overlayContent = document.getElementById('overlayContent');
  let currentProject = 0;

  function renderOverlay(i) {
    const p = projects[i];
    overlayContent.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="overlay-detail">
        <h2>${p.name}</h2>
        <p class="p-loc">${p.location}</p>
        <p>${p.desc}</p>
        <div class="overlay-specs">
          <div><span>Type</span>${p.type}</div>
          <div><span>Year</span>${p.year}</div>
          <div><span>Area</span>${p.area}</div>
          <div><span>Materials</span>${p.materials}</div>
        </div>
      </div>`;
  }

  function openOverlay(i) {
    currentProject = i;
    renderOverlay(i);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeOverlay() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  projectGrid.addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (card) openOverlay(parseInt(card.dataset.index));
  });
  document.getElementById('overlayClose').addEventListener('click', closeOverlay);
  document.getElementById('overlayNext').addEventListener('click', () => openOverlay((currentProject + 1) % projects.length));
  document.getElementById('overlayPrev').addEventListener('click', () => openOverlay((currentProject - 1 + projects.length) % projects.length));
  overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeOverlay();
    if (e.key === 'ArrowRight') openOverlay((currentProject + 1) % projects.length);
    if (e.key === 'ArrowLeft') openOverlay((currentProject - 1 + projects.length) % projects.length);
  });

  /* ---------- Render process ---------- */
  const processList = document.getElementById('processList');
  processList.innerHTML = processSteps.map((s, i) => `
    <div class="process-item">
      <span class="process-num">${String(i + 1).padStart(2, '0')}</span>
      <div><h3>${s[0]}</h3><p>${s[1]}</p></div>
    </div>`).join('');

  /* ---------- Render + control testimonial slider ---------- */
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-slide"><p>"${t[0]}"</p><span>— ${t[1]}</span></div>`).join('');
  dotsWrap.innerHTML = testimonials.map((_, i) => `<button data-i="${i}" class="${i === 0 ? 'active' : ''}"></button>`).join('');

  let tIndex = 0;
  function goToSlide(i) {
    tIndex = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    dotsWrap.querySelectorAll('button').forEach((b, bi) => b.classList.toggle('active', bi === i));
  }
  dotsWrap.querySelectorAll('button').forEach(b => b.addEventListener('click', () => goToSlide(parseInt(b.dataset.i))));
  setInterval(() => goToSlide((tIndex + 1) % testimonials.length), 6000);

  /* ---------- Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-up, .process-item').forEach(el => revealObserver.observe(el));

  /* ---------- Stat counters ---------- */
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 30);
      statObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('.field').forEach(field => {
      const input = field.querySelector('input, textarea');
      const err = field.querySelector('.err');
      const isEmail = input.type === 'email';
      const filled = input.value.trim().length > 1;
      const emailOk = !isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      if (!filled || !emailOk) {
        valid = false;
        field.classList.add('invalid');
        err.textContent = !filled ? 'Please fill in this field.' : 'Please enter a valid email.';
      } else {
        field.classList.remove('invalid');
        err.textContent = '';
      }
    });
    if (valid) {
      form.reset();
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 6000);
    }
  });

});
