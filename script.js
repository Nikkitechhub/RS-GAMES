/* =========================================================
   RSGAMES — script.js
   Pure vanilla JS. No frameworks.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Data (placeholder — swap for a real feed / API) ---------- */
  const DEALS = [
    { id:1, title:"Nebula Drift: Ascension", cat:"pc", catLabel:"PC Key", img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=70", badge:"Trending", offer:"-46%", rating:4.8, reviews:1204, price:18.49, oldPrice:34.99, cta:"View Deal", link:"https://example.com/affiliate/nebula-drift?ref=rsgames" },
    { id:2, title:"Ironclad Legion: Ultimate Pass", cat:"pc", catLabel:"PC Key", img:"https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=70", badge:"Hot", offer:"-38%", rating:4.6, reviews:892, price:24.99, oldPrice:39.99, cta:"Buy Now", link:"https://example.com/affiliate/ironclad-legion?ref=rsgames" },
    { id:3, title:"Volt Reaver Wireless Controller", cat:"gear", catLabel:"Gear", img:"https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?auto=format&fit=crop&w=600&q=70", badge:"New", offer:"-20%", rating:4.7, reviews:531, price:39.00, oldPrice:49.00, cta:"Order Now", link:"https://example.com/affiliate/volt-reaver?ref=rsgames" },
    { id:4, title:"Skyline Circuit: GT Edition", cat:"console", catLabel:"Console", img:"https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=70", badge:"Trending", offer:"-30%", rating:4.5, reviews:670, price:34.99, oldPrice:49.99, cta:"View Deal", link:"https://example.com/affiliate/skyline-circuit?ref=rsgames" },
    { id:5, title:"90-Day Cloud Play Pass", cat:"subscription", catLabel:"Subscription", img:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=70", badge:"Best Value", offer:"-25%", rating:4.4, reviews:412, price:29.99, oldPrice:39.99, cta:"Visit Website", link:"https://example.com/affiliate/cloud-play-pass?ref=rsgames" },
    { id:6, title:"$50 Store Wallet Top-up", cat:"giftcard", catLabel:"Gift Card", img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=70", badge:"Popular", offer:"-10%", rating:4.9, reviews:2011, price:44.99, oldPrice:50.00, cta:"Buy Now", link:"https://example.com/affiliate/wallet-topup?ref=rsgames" },
    { id:7, title:"Ashen Ridge: Warlord's Cut", cat:"pc", catLabel:"PC Key", img:"https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=70", badge:"Trending", offer:"-52%", rating:4.3, reviews:355, price:14.49, oldPrice:29.99, cta:"View Deal", link:"https://example.com/affiliate/ashen-ridge?ref=rsgames" },
    { id:8, title:"Aero-Grip Pro Gaming Mouse", cat:"gear", catLabel:"Gear", img:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=70", badge:"New", offer:"-18%", rating:4.6, reviews:288, price:32.00, oldPrice:39.00, cta:"Order Now", link:"https://example.com/affiliate/aero-grip-pro?ref=rsgames" }
  ];

  const FEATURED = [
    { id:101, title:"Frostvane Odyssey — Collector's Bundle", cat:"pc", img:"https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=700&q=75", badge:"Editor's Pick", desc:"Base game, expansion pass and the soundtrack in one key — usually sold separately for $20 more.", price:27.99, oldPrice:59.99, cta:"View Deal", link:"https://example.com/affiliate/frostvane-odyssey?ref=rsgames" },
    { id:102, title:"Ridgeline Pit Crew Wheel Set", cat:"gear", img:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=75", badge:"Staff Favorite", desc:"Force-feedback racing wheel with a clamp mount that actually fits standing desks.", price:189.00, oldPrice:249.00, cta:"Buy Now", link:"https://example.com/affiliate/ridgeline-wheel?ref=rsgames" },
    { id:103, title:"Console Game Pass — 12 Months", cat:"subscription", img:"https://images.unsplash.com/photo-1580327344181-c1163234e5a0?auto=format&fit=crop&w=700&q=75", badge:"Best Value", desc:"Cheapest verified rate we've tracked all quarter for a full annual subscription.", price:139.00, oldPrice:180.00, cta:"Visit Website", link:"https://example.com/affiliate/console-pass?ref=rsgames" },
    { id:104, title:"Emberfall Tactics: Season Two", cat:"console", img:"https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&w=700&q=75", badge:"Trending", desc:"Cross-play title with a season pass discount that expires with the in-game event.", price:22.49, oldPrice:34.99, cta:"Order Now", link:"https://example.com/affiliate/emberfall-tactics?ref=rsgames" },
    { id:105, title:"$100 Multi-Store Wallet Code", cat:"giftcard", img:"https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=700&q=75", badge:"Popular", desc:"Redeemable across three major storefronts — good for splitting between two accounts.", price:92.00, oldPrice:100.00, cta:"Buy Now", link:"https://example.com/affiliate/wallet-100?ref=rsgames" },
    { id:106, title:"Hushline Studio Headset", cat:"gear", img:"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=75", badge:"New", desc:"Closed-back comfort for long raid nights, with a mic clip that doesn't rattle.", price:59.00, oldPrice:79.00, cta:"Order Now", link:"https://example.com/affiliate/hushline-headset?ref=rsgames" }
  ];

  const REVIEWS = [
    { name:"Priya N.", role:"PC · 3 years on the board", text:"Caught the Frostvane bundle the morning it dropped — link worked, price matched exactly what was posted.", avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=60" },
    { name:"Marcus O.", role:"Console player", text:"The side-by-side price comparison saved me from buying the same key at a worse rate on a different store.", avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=60" },
    { name:"Elena V.", role:"Gear reviews reader", text:"Reported a dead coupon in the comments on a Friday night, it was pulled down before I woke up.", avatar:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&q=60" }
  ];

  const FAQS = [
    { q:"Do you sell the games or gear yourselves?", a:"No — RSGAMES is a deal board, not a store. Every card sends you to the actual retailer or reseller to complete checkout there." },
    { q:"How is a deal verified before it's posted?", a:"Someone on the desk opens the live storefront listing, checks the current price against what's being claimed, and only then does the card go on the board." },
    { q:"Why do you use affiliate links?", a:"Commissions from qualifying purchases keep the board free to use and ad-clutter-free. It doesn't change which deals we show or how they're ranked." },
    { q:"What happens if a deal expires after I click?", a:"Flash sales move fast. If a link has gone dead, use the report link on the card — the desk usually pulls it within a few hours." },
    { q:"Can I submit a deal I found myself?", a:"Yes — there's a submission link in the footer. Community tips are how a good chunk of the board's best finds get discovered first." }
  ];

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];
  const money = n => `$${n.toFixed(2)}`;
  const starIcon = () => `<svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`;

  /* ---------- Loader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => $('#loader').classList.add('is-hidden'), 500);
  });

  /* ---------- Scroll progress + header state + back-to-top ---------- */
  const progressBar = $('#scrollProgress');
  const header = $('#siteHeader');
  const backToTop = $('#backToTop');

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';

    header.classList.toggle('is-scrolled', scrollTop > 40);
    backToTop.classList.toggle('is-visible', scrollTop > 500);
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  /* ---------- Mobile nav ---------- */
  const navToggle = $('#navToggle');
  const mainNav = $('#mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  $$('#mainNav a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
  }));

  /* ---------- Theme toggle (day / night) ---------- */
  const root = document.documentElement;
  const themeToggle = $('#themeToggle');
  const savedTheme = localStorage.getItem('rsgames-theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'day' ? 'night' : 'day';
    root.setAttribute('data-theme', next);
    localStorage.setItem('rsgames-theme', next);
  });

  /* ---------- Render: Trending ticket cards ---------- */
  const trendingGrid = $('#trendingGrid');

  function renderTrending(list){
    trendingGrid.innerHTML = list.map(d => `
      <article class="ticket-card" data-cat="${d.cat}">
        <div class="ticket-media">
          <img loading="lazy" src="${d.img}" alt="${d.title}">
          <span class="ticket-badge">${d.badge}</span>
          <span class="ticket-offer">${d.offer}</span>
        </div>
        <div class="ticket-body">
          <span class="ticket-cat">${d.catLabel}</span>
          <h3 class="ticket-title">${d.title}</h3>
          <div class="ticket-rating">
            ${starIcon()} ${d.rating} <span class="muted">(${d.reviews})</span>
          </div>
          <div class="ticket-price-row">
            <span class="price-now">${money(d.price)}</span>
            <span class="price-old">${money(d.oldPrice)}</span>
          </div>
          <a class="btn btn-affiliate btn-sm" href="${d.link}" target="_blank" rel="nofollow sponsored noopener">
            ${d.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </article>
    `).join('');
    observeReveal($$('.ticket-card', trendingGrid));
  }

  /* ---------- Render: Featured cards ---------- */
  const featuredGrid = $('#featuredGrid');
  featuredGrid.innerHTML = FEATURED.map(f => `
    <article class="feature-card">
      <div class="feature-media">
        <img loading="lazy" src="${f.img}" alt="${f.title}">
        <span class="feature-badge">${f.badge}</span>
      </div>
      <div class="feature-body">
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-desc">${f.desc}</p>
        <div class="feature-meta">
          <div class="feature-price">
            <span class="price-now">${money(f.price)}</span>
            <span class="price-old">${money(f.oldPrice)}</span>
          </div>
        </div>
        <a class="btn btn-affiliate" href="${f.link}" target="_blank" rel="nofollow sponsored noopener">
          ${f.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
  `).join('');
  observeReveal($$('.feature-card', featuredGrid));

  /* ---------- Render: Reviews ---------- */
  $('#reviewTrack').innerHTML = REVIEWS.map(r => `
    <article class="review-card">
      <div class="review-stars">${starIcon()}${starIcon()}${starIcon()}${starIcon()}${starIcon()}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-person">
        <img loading="lazy" src="${r.avatar}" alt="${r.name}">
        <div>
          <strong>${r.name}</strong>
          <span>${r.role}</span>
        </div>
      </div>
    </article>
  `).join('');
  observeReveal($$('.review-card'));

  /* ---------- Render: FAQ accordion ---------- */
  const accordion = $('#accordion');
  accordion.innerHTML = FAQS.map((f, i) => `
    <div class="accordion-item" data-index="${i}">
      <button class="accordion-trigger" aria-expanded="false">
        <span>${f.q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      </button>
      <div class="accordion-panel">
        <div class="accordion-panel-inner">${f.a}</div>
      </div>
    </div>
  `).join('');

  $$('.accordion-trigger', accordion).forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const panel = $('.accordion-panel', item);
      const isOpen = item.classList.contains('is-open');

      $$('.accordion-item', accordion).forEach(other => {
        other.classList.remove('is-open');
        $('.accordion-trigger', other).setAttribute('aria-expanded', 'false');
        $('.accordion-panel', other).style.maxHeight = null;
      });

      if (!isOpen){
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Search + filter + sort (Trending grid) ---------- */
  const searchInput = $('#dealSearch');
  const sortSelect = $('#sortSelect');
  const chips = $$('.chip', $('#categoryChips'));
  let activeFilter = 'all';

  function getFilteredSorted(){
    const term = searchInput.value.trim().toLowerCase();
    let list = DEALS.filter(d =>
      (activeFilter === 'all' || d.cat === activeFilter) &&
      d.title.toLowerCase().includes(term)
    );
    const sortVal = sortSelect.value;
    if (sortVal === 'low') list = [...list].sort((a,b) => a.price - b.price);
    if (sortVal === 'high') list = [...list].sort((a,b) => b.price - a.price);
    if (sortVal === 'discount') list = [...list].sort((a,b) => (b.oldPrice-b.price)/b.oldPrice - (a.oldPrice-a.price)/a.oldPrice);
    if (sortVal === 'popular') list = [...list].sort((a,b) => b.reviews - a.reviews);
    return list;
  }

  function refresh(){ renderTrending(getFilteredSorted()); }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-selected','false'); });
      chip.classList.add('is-active');
      chip.setAttribute('aria-selected','true');
      activeFilter = chip.dataset.filter;
      refresh();
    });
  });
  searchInput.addEventListener('input', refresh);
  sortSelect.addEventListener('change', refresh);

  refresh();

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });

  function observeReveal(nodes){
    nodes.forEach(n => revealObserver.observe(n));
  }
  observeReveal($$('.feature-col'));
  observeReveal($$('.stats-bar'));

  /* ---------- Animated stat counters ---------- */
  const counters = $$('.stat-num');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1200;
      const start = performance.now();

      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold:0.4 });
  counters.forEach(c => countObserver.observe(c));

  /* ---------- Footer year ---------- */
  $('#year').textContent = new Date().getFullYear();

});
