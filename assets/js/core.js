(function () {
  const M = window.MABRO, C = M.contact;
  const page = document.body.dataset.page;
  const byId = id => M.products.find(p => p.id === id);
  const deg = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v) + ' °C';

  /* En-tête et pied de page */
  const links = [['gamme.html', 'La gamme', 'gamme'], ['index.html#vehicule', 'Quel liquide ?', 'finder'], ['distributeurs.html', 'Distributeurs', 'dist'], ['contact.html', 'Contact', 'contact']];
  const h = document.querySelector('[data-header]');
  if (h) h.outerHTML = `
  <header class="top"><div class="wrap">
    <a class="brand" href="index.html" aria-label="Mabro, accueil"><img src="assets/img/emblem.svg" alt="" width="52" height="40"><b>MABRO</b></a>
    <nav class="nav" aria-label="Navigation principale">${links.map(([u, l, k]) => `<a href="${u}"${k === page ? ' aria-current="page"' : ''}>${l}</a>`).join('')}</nav>
    <a class="btn red cta-top" href="distributeurs.html#demande">Devenir distributeur</a>
    <button class="burger" data-menu aria-label="Ouvrir le menu" aria-expanded="false"><span></span></button>
  </div></header>`;
  const f = document.querySelector('[data-footer]');
  if (f) f.outerHTML = `
  <footer class="foot"><div class="wrap">
    <div><img src="assets/img/logo-blanc.svg" alt="Mabro"><p>Antigels et liquides de refroidissement fabriqués en Algérie. Produits pour les distributeurs, les grossistes et les garages, dans toutes les wilayas.</p><p class="ar" style="font-size:18px;color:#fff">لكل أنواع المحركات</p></div>
    <div><h4>La gamme</h4><ul>${M.products.map(p => `<li><a href="produit.html?id=${p.id}">${p.name}</a></li>`).join('')}</ul></div>
    <div><h4>Mabro</h4><ul>${links.map(([u, l]) => `<li><a href="${u}">${l}</a></li>`).join('')}</ul></div>
    <div><h4>Nous joindre</h4><ul><li><a href="tel:${C.telHref}">${C.tel}</a></li><li><a href="https://wa.me/${C.waHref}" target="_blank" rel="noopener">WhatsApp ${C.whatsapp}</a></li><li><a href="mailto:${C.mail}">${C.mail}</a></li><li>Facebook, Instagram et TikTok : Mabro</li></ul></div>
    <p class="legal">© <span class="year"></span> Mabro, ${C.societe}. Fabriqué en Algérie.</p>
  </div></footer>`;

  /* Bandeau de démonstration + pastille de version */
  const inV2 = location.pathname.includes('/v2/');
  const demo = document.createElement('div');
  demo.className = 'wm-demo';
  demo.textContent = 'Maquette de démonstration réalisée par Webminds · aucun formulaire n’est enregistré';
  document.body.appendChild(demo);
  const pill = document.createElement('a');
  pill.className = 'wm-pill';
  pill.href = inV2 ? '../index.html' : 'v2/';
  pill.innerHTML = '<span class="wm-dot"></span>' + (inV2 ? 'Découvrir la version corporate' : 'Découvrir la version moderne');
  document.body.appendChild(pill);

  /* Menu mobile */
  const b = document.querySelector('[data-menu]');
  if (b) b.addEventListener('click', () => { const o = document.body.classList.toggle('menu-open'); b.setAttribute('aria-expanded', o); });

  /* Échelle de températures */
  const MIN = -40, MAX = 140, pos = v => ((v - MIN) / (MAX - MIN) * 100);
  function ruler(el, list) {
    const rows = list.map(p => {
      const end = p.max ?? 40, open = p.max == null;
      return `<a class="ruler-row" href="produit.html?id=${p.id}"><span class="r-name">${p.name.replace('Specialized Coolant', 'Specialized')}<small>${p.tag}</small></span>
        <span class="track"><span class="zero" style="left:${pos(0)}%"></span>
        <span class="bar${open ? ' open' : ''}" style="left:${pos(p.min)}%;width:${pos(end) - pos(p.min)}%;background:${p.color}">
        <span class="v l">${deg(p.min)}</span>${open ? '' : `<span class="v r">${deg(p.max)}</span>`}</span></span></a>`;
    }).join('');
    const ticks = [-40, -20, 0, 20, 40, 60, 80, 100, 120, 140].map(t => `<span${t % 40 && t ? ' class="m"' : ''} style="left:${pos(t)}%">${t > 0 ? '+' + t : t === 0 ? '0' : '−' + Math.abs(t)}</span>`).join('');
    el.innerHTML = rows + `<div class="ticks"><span></span><div class="t">${ticks}</div></div>`;
  }
  document.querySelectorAll('[data-ruler]').forEach(el => {
    const id = el.dataset.ruler;
    ruler(el, id ? [byId(id)] : M.products);
  });

  /* Cartes produits */
  document.querySelectorAll('[data-products]').forEach(el => {
    el.innerHTML = M.products.map(p => `<a class="pcard" href="produit.html?id=${p.id}" style="--c:${p.color}">
      <span class="ph"><img src="assets/img/${p.img}" alt="Bidon Mabro ${p.name}" loading="lazy"></span>
      <h3>${p.name}</h3><span class="tag">${p.tag}</span>
      <span class="spec"><span class="chip c">${deg(p.min)}${p.max ? ' / ' + deg(p.max) : ''}</span>${p.formats.map(x => `<span class="chip">${x}</span>`).join('')}</span></a>`).join('');
  });

  /* Sélecteur véhicule */
  const fb = document.querySelector('[data-brands]'), fa = document.querySelector('[data-answer]');
  if (fb && fa) {
    fb.innerHTML = M.vehicles.map(([n, id]) => `<button type="button" data-id="${id}" aria-pressed="false">${n}</button>`).join('');
    fb.addEventListener('click', e => {
      const btn = e.target.closest('button'); if (!btn) return;
      fb.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === btn));
      const p = byId(btn.dataset.id);
      fa.innerHTML = `<img src="assets/img/${p.img}" alt="Bidon Mabro ${p.name}"><div><span class="chip c">${deg(p.min)}${p.max ? ' / ' + deg(p.max) : ''}</span>
        <h3 style="margin-top:12px">${p.name}</h3><p>Pour ${btn.textContent} : ${p.pitch}</p><a class="btn" href="produit.html?id=${p.id}">Voir la fiche produit</a></div>`;
    });
    fb.querySelector("button:nth-child(4)").click();
  }

  /* Fiche produit */
  const pp = document.querySelector('[data-product]');
  if (pp) {
    const id = new URLSearchParams(location.search).get('id') || 'g13';
    const p = byId(id) || M.products[0];
    document.title = `${p.name} · Mabro`;
    pp.style.setProperty('--c', p.color);
    pp.innerHTML = `<div class="prod-ph"><img src="assets/img/${p.img}" alt="Bidon Mabro ${p.name}"></div>
      <div><span class="fam">${p.family}</span><h1>${p.name}</h1><p class="lead" style="margin-top:16px">${p.pitch}</p>
      <div class="mini-ruler" data-r></div>
      <ul class="points">${p.points.map(x => `<li>${x}</li>`).join('')}</ul>
      <p><b>Formats :</b> ${p.formats.join(', ')}${p.id === 'coolant' ? ' · carton de 4 × 5 L' : ''}</p>
      <div class="ctas"><a class="btn red" href="distributeurs.html#demande">Commander en gros</a><a class="btn ghost" href="https://wa.me/${C.waHref}?text=${encodeURIComponent('Bonjour, je souhaite des informations sur ' + p.name)}" target="_blank" rel="noopener">Demander sur WhatsApp</a></div>
      <p class="note">Caractéristiques reprises des étiquettes Mabro, à valider par l’administration de Mabro</p></div>`;
    ruler(pp.querySelector('[data-r]'), [p]);
    const o = document.querySelector('[data-others]');
    if (o) o.innerHTML = M.products.map(x => `<a href="produit.html?id=${x.id}"${x.id === p.id ? ' aria-current="page"' : ''}><img src="assets/img/${x.img}" alt="" loading="lazy">${x.name}</a>`).join('');
  }

  /* Wilayas */
  document.querySelectorAll('select[data-wilayas]').forEach(s => M.wilayas.forEach((w, i) => {
    const o = document.createElement('option'); o.value = w; o.textContent = String(i + 1).padStart(2, '0') + ' ' + w; s.appendChild(o);
  }));

  /* Calculateur de commande garage */
  const calc = document.querySelector('[data-calc]');
  if (calc) {
    const v = calc.querySelector('#vid'), cap = calc.querySelector('#cap');
    const up = () => {
      calc.querySelector('output[for=vid]').value = v.value; calc.querySelector('output[for=cap]').value = cap.value + ' L';
      const litres = v.value * cap.value, bid = Math.ceil(litres / 5), cart = Math.ceil(bid / 4);
      calc.querySelector('[data-l]').textContent = litres; calc.querySelector('[data-b]').textContent = bid; calc.querySelector('[data-ct]').textContent = cart;
    };
    v.addEventListener('input', up); cap.addEventListener('input', up); up();
  }

  /* Formulaires factices */
  document.querySelectorAll('form[data-fake]').forEach(fm => fm.addEventListener('submit', e => {
    e.preventDefault();
    const ok = fm.querySelector('.form-ok'); if (ok) { ok.hidden = false; ok.setAttribute('tabindex', '-1'); ok.focus(); }
    fm.querySelectorAll('input,textarea,select,button[type=submit]').forEach(x => x.disabled = true);
  }));

  document.querySelectorAll('[data-c]').forEach(el => el.textContent = C[el.dataset.c]);
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
})();
