document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hide'), 700);
  });

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  /* ---------- Data ---------- */
  const experiences = [
    ['The Dining Room', 'An intimate setting designed for unforgettable evenings.', 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900'],
    ["The Chef's Table", 'A private culinary experience featuring a curated tasting menu.', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900'],
    ['The Terrace', 'An atmospheric outdoor setting for relaxed evening dining.', 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=900'],
    ['Private Dining', 'Exclusive spaces for celebrations and special occasions.', 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=900']
  ];

  const dishes = [
    ['Truffle Risotto', 'Carnaroli rice, black truffle, aged parmesan', '₹1,450', 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800'],
    ['Saffron-Crusted Sea Bass', 'Line-caught sea bass, saffron beurre blanc', '₹1,850', 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800'],
    ['Heritage Tomato Tart', 'Heirloom tomatoes, whipped goat cheese, basil oil', '₹1,050', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800'],
    ['Wild Mushroom Ravioli', 'Hand-folded pasta, wild mushroom, brown butter sage', '₹1,250', 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800'],
    ['Charcoal-Grilled Tenderloin', 'Grass-fed beef, red wine jus, roasted bone marrow', '₹2,450', 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800'],
    ['Dark Chocolate Soufflé', 'Valrhona chocolate, vanilla bean anglaise', '₹950', 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800']
  ];

  const menuData = {
    Starters: [['Burrata & Heirloom Tomato', 'Fresh burrata, heirloom tomato, basil oil', '₹950'], ['Seared Scallops', 'Cauliflower purée, brown butter, chive', '₹1,150'], ['Tuna Tartare', 'Yellowfin tuna, avocado, citrus soy', '₹1,050']],
    'Soups & Salads': [['Wild Mushroom Velouté', 'Roasted mushroom, truffle oil, chive crème', '₹750'], ['Charred Endive Salad', 'Endive, walnut, blue cheese, pear', '₹850']],
    'Main Course': [['Saffron-Crusted Sea Bass', 'Line-caught sea bass, saffron beurre blanc', '₹1,850'], ['Charcoal-Grilled Tenderloin', 'Grass-fed beef, red wine jus', '₹2,450'], ['Truffle Risotto', 'Carnaroli rice, black truffle, parmesan', '₹1,450']],
    "Chef's Selection": [['Seven-Course Tasting Menu', "Chef Adrian's seasonal tasting journey", '₹6,500'], ['Wagyu Course', 'A5 wagyu, charred leek, jus', '₹3,200']],
    Desserts: [['Dark Chocolate Soufflé', 'Valrhona chocolate, vanilla bean anglaise', '₹950'], ['Citrus Panna Cotta', 'Blood orange, almond tuile', '₹750']],
    Beverages: [['Sommelier Wine Pairing', 'Five glasses curated per course', '₹4,200'], ['Signature Cocktails', 'House-crafted seasonal cocktails', '₹850']]
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900',
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=900',
    'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=900',
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=900',
    'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=900',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=900'
  ];

  const testimonials = [
    ['Every course felt intentional, the atmosphere was extraordinary, and the entire evening felt beautifully choreographed.', 'Elena Morgan'],
    ["Aurelia doesn't just serve dinner — it stages an evening. The chef's table was the best meal we've had this year.", 'Daniel Cross'],
    ['Quiet, precise, and generous all at once. The service matched the food at every step.', 'Ritika Sen'],
    ['We hosted our anniversary in the private room and it felt like the space was built just for us.', 'Vikram Anand']
  ];

  /* ---------- Render experience cards ---------- */
  document.getElementById('experienceGrid').innerHTML = experiences.map((e, i) => `
    <div class="exp-card fade-up">
      <img src="${e[2]}" alt="${e[0]}" loading="lazy">
      <div class="exp-info">
        <span class="exp-num">${String(i + 1).padStart(2, '0')}</span>
        <h3>${e[0]}</h3>
        <p>${e[1]}</p>
      </div>
    </div>`).join('');

  /* ---------- Render signature dishes ---------- */
  document.getElementById('dishGrid').innerHTML = dishes.map(d => `
    <div class="dish-card fade-up">
      <img src="${d[3]}" alt="${d[0]}" loading="lazy">
      <div class="dish-top"><h3>${d[0]}</h3><span class="dish-price">${d[2]}</span></div>
      <p>${d[1]}</p>
    </div>`).join('');

  /* ---------- Interactive menu ---------- */
  const categories = Object.keys(menuData);
  const menuTabs = document.getElementById('menuTabs');
  const menuItems = document.getElementById('menuItems');
  menuTabs.innerHTML = categories.map((c, i) => `<button data-cat="${c}" class="${i === 0 ? 'active' : ''}">${c}</button>`).join('');

  function renderMenu(cat) {
    menuItems.innerHTML = menuData[cat].map(item => `
      <div class="menu-item">
        <div class="menu-item-text"><h3>${item[0]}</h3><p>${item[1]}</p></div>
        <span class="menu-item-price">${item[2]}</span>
      </div>`).join('');
  }
  renderMenu(categories[0]);

  menuTabs.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    menuTabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.cat);
  });

  /* ---------- Gallery + lightbox ---------- */
  const galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.innerHTML = galleryImages.map((src, i) => `
    <div class="gallery-item" data-index="${i}"><img src="${src}" alt="Aurelia gallery image ${i + 1}" loading="lazy"></div>`).join('');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  let currentImg = 0;

  function openLightbox(i) {
    currentImg = i;
    lightboxImg.src = galleryImages[i];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  galleryGrid.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (item) openLightbox(parseInt(item.dataset.index));
  });
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxNext').addEventListener('click', () => openLightbox((currentImg + 1) % galleryImages.length));
  document.getElementById('lightboxPrev').addEventListener('click', () => openLightbox((currentImg - 1 + galleryImages.length) % galleryImages.length));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') openLightbox((currentImg + 1) % galleryImages.length);
    if (e.key === 'ArrowLeft') openLightbox((currentImg - 1 + galleryImages.length) % galleryImages.length);
  });

  /* ---------- Testimonial slider ---------- */
  const track = document.getElementById('testimonialTrack');
  track.innerHTML = testimonials.map(t => `<div class="testimonial-slide"><p>"${t[0]}"</p><span>— ${t[1]}</span></div>`).join('');
  let tIndex = 0;
  function goToSlide(i) {
    tIndex = (i + testimonials.length) % testimonials.length;
    track.style.transform = `translateX(-${tIndex * 100}%)`;
  }
  document.getElementById('tNext').addEventListener('click', () => goToSlide(tIndex + 1));
  document.getElementById('tPrev').addEventListener('click', () => goToSlide(tIndex - 1));
  setInterval(() => goToSlide(tIndex + 1), 7000);

  /* ---------- Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));

  /* ---------- Reservation form validation ---------- */
  const reserveForm = document.getElementById('reserveForm');
  const reserveSuccess = document.getElementById('reserveSuccess');
  const dateField = document.getElementById('rdate');
  dateField.min = new Date().toISOString().split('T')[0];

  reserveForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    reserveForm.querySelectorAll('.field').forEach(field => {
      const input = field.querySelector('input, select');
      const err = field.querySelector('.err');
      if (!input.hasAttribute('required')) return;
      const filled = input.value.trim().length > 0;
      const isEmail = input.type === 'email';
      const emailOk = !isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      const isDate = input.type === 'date';
      const dateOk = !isDate || input.value >= dateField.min;
      if (!filled || !emailOk || !dateOk) {
        valid = false;
        field.classList.add('invalid');
        if (err) err.textContent = !filled ? 'Required.' : (!emailOk ? 'Enter a valid email.' : 'Choose a future date.');
      } else {
        field.classList.remove('invalid');
        if (err) err.textContent = '';
      }
    });
    if (valid) {
      reserveForm.reset();
      reserveSuccess.classList.add('show');
      setTimeout(() => reserveSuccess.classList.remove('show'), 6000);
    }
  });

  /* ---------- Newsletter ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsSuccess = document.getElementById('newsSuccess');
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    newsletterForm.reset();
    newsSuccess.classList.add('show');
    setTimeout(() => newsSuccess.classList.remove('show'), 5000);
  });

});
