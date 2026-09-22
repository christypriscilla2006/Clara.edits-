/**
 * High-Speed Main Application Script for Premiere Pro & Motion Designer Portfolio
 * Optimized for instant filter switches, zero layout thrashing, fast video modal loading, and smooth interaction.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA || {};
  let currentCategory = 'All';
  let currentRatio = 'all';

  // 1. Populate Profile Data
  function renderProfile() {
    const prof = data.profile || {};
    const headerName = document.getElementById('headerName');
    const headerTitle = document.getElementById('headerTitle');
    const heroBio = document.getElementById('heroBio');
    const taglineText = document.getElementById('taglineText');

    const statExp = document.getElementById('statExp');
    const statLocation = document.getElementById('statLocation');
    const statAvailability = document.getElementById('statAvailability');
    const statViews = document.getElementById('statViews');

    const contactEmail = document.getElementById('contactEmail');
    const contactInsta = document.getElementById('contactInsta');
    const contactDiscord = document.getElementById('contactDiscord');
    const contactMailBtn = document.getElementById('contactMailBtn');

    if (headerName) headerName.textContent = prof.name || 'CLARA';
    if (headerTitle) headerTitle.textContent = prof.title || 'PREMIERE PRO & MOTION GRAPHICS SPECIALIST';
    if (heroBio) heroBio.textContent = prof.bio || 'Clara — 2.5+ years of experience in video editing and motion graphics.';
    if (taglineText) taglineText.textContent = prof.tagline || 'SHARP & INTENTIONAL VISUAL STORYTELLING';

    if (statExp) statExp.innerHTML = `2.5+ <span class="unit">YRS</span>`;
    if (statLocation) statLocation.textContent = prof.stats?.location || 'Chennai';
    if (statAvailability) statAvailability.textContent = prof.stats?.availability || 'Freelance & In-House';
    if (statViews) statViews.textContent = prof.stats?.viewsGenerated || '10M+';

    if (contactEmail) contactEmail.textContent = prof.contact?.email || 'clara.edit2904@gmail.com';
    if (contactMailBtn && prof.contact?.email) {
      contactMailBtn.href = `mailto:${prof.contact.email}`;
    }
  }

  // 2. Optimized Project Grid Renderer
  const gridContainer = document.getElementById('projectGrid');

  function isDirectVideoUrl(url) {
    if (!url) return false;
    const clean = url.toLowerCase().split('?')[0];
    return clean.endsWith('.mp4') ||
           clean.endsWith('.webm') ||
           clean.endsWith('.mov') ||
           url.includes('vercel-storage.com') ||
           url.includes('blob.vercel-storage.com');
  }

  function renderProjects() {
    if (!gridContainer) return;

    const projects = data.projects || [];
    const filtered = projects.filter(proj => {
      const matchCat = (currentCategory === 'All') || (proj.category === currentCategory);
      const matchRatio = (currentRatio === 'all') || (proj.aspectRatio === currentRatio);
      return matchCat && matchRatio;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="project-card" style="grid-column: 1 / -1; cursor: default;">
          <div class="empty-card-state" style="padding: 40px;">
            <div class="empty-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div class="empty-text">
              No videos matching "${currentCategory}" (${currentRatio.toUpperCase()}).<br>
              Try changing category or ratio filters above.
            </div>
          </div>
        </div>
      `;
      return;
    }

    // Fast Document Fragment rendering to prevent repaint flicker
    const fragment = document.createDocumentFragment();

    filtered.forEach(proj => {
      const card = document.createElement('div');
      const ratioClass = proj.aspectRatio === '9:16' ? 'ratio-9-16' : 'ratio-16-9';
      card.className = `project-card ${ratioClass}`;

      let mediaContentHTML = '';

      if (proj.videoUrl && proj.videoUrl.trim() !== '') {
        if (isDirectVideoUrl(proj.videoUrl)) {
          // Preload metadata only for fast initial page load and lazy loading
          mediaContentHTML = `
            <video class="card-thumb-media" muted preload="metadata" playsinline>
              <source src="${proj.videoUrl}" type="video/mp4">
            </video>
          `;
        } else if (proj.thumbnailUrl && proj.thumbnailUrl.trim() !== '') {
          mediaContentHTML = `<img src="${proj.thumbnailUrl}" alt="${proj.title}" class="card-thumb-media" loading="lazy">`;
        } else {
          mediaContentHTML = `
            <div class="empty-card-state">
              <div class="empty-icon">▶</div>
              <div class="empty-text">Click to Play Video</div>
            </div>
          `;
        }
      } else {
        mediaContentHTML = `
          <div class="empty-card-state">
            <div class="empty-icon">+</div>
            <div class="empty-text">
              <strong>${proj.category} Slot</strong><br>
              (Click to add video link)
            </div>
          </div>
        `;
      }

      const toolsList = (proj.tools || []).map(t => `<span class="card-tool-tag">${t}</span>`).join('');

      card.innerHTML = `
        <div class="card-thumb-frame">
          ${mediaContentHTML}
          <div class="card-play-overlay">
            <div class="play-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div class="card-content-drawer">
          <div class="card-meta-top">
            <span class="card-cat-badge">${proj.category}</span>
            <span class="card-ratio-badge">${proj.aspectRatio}</span>
          </div>
          <h4 class="card-project-title">${proj.title}</h4>
          <p class="card-project-desc">${proj.description || 'Custom post-production edit.'}</p>
          <div class="card-tools-row">${toolsList}</div>
        </div>
      `;

      card.addEventListener('click', () => openVideoModal(proj), { passive: true });
      fragment.appendChild(card);
    });

    gridContainer.innerHTML = '';
    gridContainer.appendChild(fragment);
  }

  // 3. Fast Video Modal Functionality
  const videoModal = document.getElementById('videoModal');
  const videoModalContainer = document.getElementById('videoModalContainer');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalMediaContainer = document.getElementById('modalMediaContainer');

  function openVideoModal(proj) {
    if (!videoModal) return;

    if (videoModalContainer) {
      if (proj.aspectRatio === '9:16') {
        videoModalContainer.classList.add('vertical-modal');
      } else {
        videoModalContainer.classList.remove('vertical-modal');
      }
    }

    modalMediaContainer.innerHTML = '';
    if (proj.videoUrl && proj.videoUrl.trim() !== '') {
      if (isDirectVideoUrl(proj.videoUrl)) {
        modalMediaContainer.innerHTML = `
          <video controls autoplay playsinline preload="metadata" style="width: 100%; height: 100%;">
            <source src="${proj.videoUrl}" type="video/mp4">
            Your browser does not support HTML5 video playback.
          </video>
        `;
      } else if (proj.videoUrl.includes('youtube.com') || proj.videoUrl.includes('youtu.be')) {
        let embedUrl = proj.videoUrl.replace('watch?v=', 'embed/');
        modalMediaContainer.innerHTML = `
          <iframe src="${embedUrl}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
      } else {
        modalMediaContainer.innerHTML = `
          <iframe src="${proj.videoUrl}" allowfullscreen></iframe>
        `;
      }
    } else {
      modalMediaContainer.innerHTML = `
        <div class="empty-card-state" style="height: 280px;">
          <div class="empty-icon">+</div>
          <div class="empty-text">
            No video URL attached to this item.<br>
            Paste your video URL in <strong>js/portfolioData.js</strong>!
          </div>
        </div>
      `;
    }

    videoModal.classList.add('active');
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    modalMediaContainer.innerHTML = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeVideoModal, { passive: true });
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    }, { passive: true });
  }

  // 4. Fast Category Filter Pills
  const filterPillsContainer = document.getElementById('categoryFilterPills');
  if (filterPillsContainer) {
    filterPillsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (!btn) return;

      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.getAttribute('data-cat');
      renderProjects();
    });
  }

  // Direct Expertise Filter Buttons
  document.querySelectorAll('.expertise-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const filterCat = btn.getAttribute('data-filter');
      currentCategory = filterCat;

      document.querySelectorAll('.pill-btn').forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-cat') === filterCat);
      });

      document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
      renderProjects();
    });
  });

  // Aspect Ratio Switcher
  document.querySelectorAll('.ratio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentRatio = btn.getAttribute('data-ratio');
      renderProjects();
    });
  });

  // 5. Manage Data Modal Form
  const dataModal = document.getElementById('dataModal');
  const openAddModalBtn = document.getElementById('openAddModalBtn');
  const closeDataModalBtn = document.getElementById('closeDataModalBtn');
  const addProjectForm = document.getElementById('addProjectForm');

  if (openAddModalBtn) {
    openAddModalBtn.addEventListener('click', () => dataModal?.classList.add('active'), { passive: true });
  }
  if (closeDataModalBtn) {
    closeDataModalBtn.addEventListener('click', () => dataModal?.classList.remove('active'), { passive: true });
  }

  if (addProjectForm) {
    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const newProj = {
        id: 'proj-' + Date.now(),
        title: document.getElementById('inputTitle').value,
        category: document.getElementById('inputCategory').value,
        aspectRatio: document.getElementById('inputRatio').value,
        videoUrl: document.getElementById('inputVideoUrl').value,
        thumbnailUrl: document.getElementById('inputThumbUrl').value,
        description: document.getElementById('inputDesc').value,
        tools: document.getElementById('inputTools').value.split(',').map(s => s.trim()).filter(Boolean),
        client: "New Add"
      };

      data.projects = data.projects || [];
      data.projects.unshift(newProj);

      renderProjects();
      dataModal?.classList.remove('active');
      addProjectForm.reset();

      document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Init
  renderProfile();
  renderProjects();
});
