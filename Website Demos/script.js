// ===============================
// EDIT YOUR INFORMATION HERE
// ===============================

// Add your 5 real websites below — just the name and your Vercel URL.
const demos = [
    { name: "Architecture", url: "https://shahs-studio.vercel.app/" },
    { name: "Restaurant",  url: "https://bolands-multicuisine.vercel.app/" },
    { name: "Hotels and Resorts", url: "https://palm-hotels-resorts070609.vercel.app/" },
    { name: "E-Commerce",  url: "https://ecommerce-eight-kappa-63.vercel.app/" },
    { name: "Cafe",  url: "https://cafe-website-1-omega.vercel.app/" }
];

// Your contact details — replace every placeholder below with your real info.
const contact = {
    email: "rishi572006@email.com",
    phone: "+91 9106398581",       // shown as text, and used for the Call button
    whatsappNumber: "919106398581", // digits only, with country code, no + or spaces
    linkedin: "https://www.linkedin.com/in/rishi-shah-176752361/",
    instagram: "https://www.instagram.com/rishishah_web_developer/" // used for the "DM" button
};

// ===============================
// END EDITABLE SECTION
// ===============================

document.addEventListener('DOMContentLoaded', () => {

  const demoList = document.getElementById('demoList');
  demoList.innerHTML = demos.map(d => `
    <button class="demo-btn" data-url="${d.url}">
      <span class="btn-name">${d.name}</span>
      <span class="arrow">&rarr;</span>
    </button>`).join('');

  demoList.addEventListener('click', e => {
    const btn = e.target.closest('.demo-btn');
    if (btn) window.open(btn.dataset.url, '_blank');
  });

  const contactRow = document.getElementById('contactRow');
  contactRow.innerHTML = `
    <a href="mailto:${contact.email}" class="contact-link">Email</a>
    <a href="tel:${contact.phone.replace(/\s+/g,'')}" class="contact-link">Call</a>
    <a href="https://wa.me/${contact.whatsappNumber}" target="_blank" class="contact-link">WhatsApp</a>
    <a href="${contact.linkedin}" target="_blank" class="contact-link">LinkedIn</a>
    <a href="${contact.instagram}" target="_blank" class="contact-link">Instagram</a>
  `;

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));

});
