// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Upcoming Events Data
  const upcomingEvents = [
    { month: 'JAN', day: '18', year: '2026', title: 'Orphanage Visit & Feeding Program', desc: 'Partnering with local homes to provide meals, supplies, and mentorship for children.', location: 'Nakuru Children’s Home, Nakuru' },
    { month: 'FEB', day: '14', year: '2026', title: 'Community Health Camp', desc: 'Free medical check-ups, screenings, and health education in collaboration with local clinics.', location: 'Kabarak University Grounds' },
    { month: 'MAR', day: '07', year: '2026', title: 'Tree Planting Drive', desc: 'Plant 1,000 trees to promote environmental sustainability in the Rift Valley region.', location: 'Rift Valley Region' },
    { month: 'APR', day: '25', year: '2026', title: 'Digital Literacy Workshop', desc: 'Training youth and community members on basic computer skills and online safety.', location: 'Kabarak University' },
    { month: 'MAY', day: '10', year: '2026', title: 'Youth Leadership & Career Workshop', desc: 'Inspirational sessions on leadership, entrepreneurship, and career guidance for students.', location: 'Kabarak University Main Hall' },
    { month: 'JUN', day: '20', year: '2026', title: 'Street Children Outreach', desc: 'Distribution of food, clothing, and educational materials to vulnerable children.', location: 'Nakuru Town' }
  ];

  const eventsGrid = document.getElementById('eventsGrid');
  upcomingEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <div class="event-date">
        <span class="event-month">${event.month}</span>
        <span class="event-day">${event.day}</span>
      </div>
      <div class="event-info">
        <h3>${event.title}</h3>
        <p class="event-desc">${event.desc}</p>
        <p class="event-location"><strong>Location:</strong> ${event.location}</p>
        <a href="#volunteer" class="btn btn-primary">Register Interest</a>
      </div>
    `;
    eventsGrid.appendChild(card);
  });

  // Events Tab Switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.events-tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // Testimonial Carousel
  const carousel = document.getElementById('testimonialCarousel');
  const items = carousel.querySelectorAll('.testimonial-item');
  let idx = 0;
  items[0].classList.add('active');
  setInterval(() => {
    items[idx].classList.remove('active');
    idx = (idx + 1) % items.length;
    items[idx].classList.add('active');
  }, 5000);

  // Back to Top
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 300);
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Placeholder form alerts
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you! Your submission has been received (demo mode).');
    });
  });
});
