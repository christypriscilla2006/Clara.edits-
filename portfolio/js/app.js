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
    
    if (statExp) statExp.textContent = prof.stats?.experience || '2.5+ YRS';
    if (statLocation) statLocation.textContent = prof.stats?.location || 'Chennai, India';
    if (statAvailability) statAvailability.textContent = prof.stats?.availability || 'Freelance & In-House';
    if (statViews) statViews.textContent = prof.stats?.viewsGenerated || '10M+';

    if (contactEmail) contactEmail.textContent = prof.contact?.email || 'clara.visuals@example.com';
    if (contactInsta) contactInsta.textContent = prof.contact?.instagram || '@clara_visuals';
    if (contactDiscord) contactDiscord.textContent = prof.contact?.discord || 'clara_visuals';
    if (contactMailBtn && prof.contact?.email) {
      contactMailBtn.href = `mailto:${prof.contact.email}`;
    }
  }

  // 2. Optimized Project Grid Renderer
  const gridContainer = document.getElementById('projectGrid');

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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div class="empty-text">
              No videos matching "${currentCategory}" (${currentRatio.toUpperCase()}).<br>
              Click <strong>"Add / Manage Data"</strong> to insert your content!
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
        const isLocalVideo = proj.videoUrl.endsWith('.mp4') || proj.videoUrl.endsWith('.MP4') || proj.videoUrl.endsWith('.webm');
        
        if (isLocalVideo) {
          // Preload metadata only for fast page load
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
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalMediaContainer = document.getElementById('modalMediaContainer');
  const modalCategory = document.getElementById('modalCategory');
  const modalRatio = document.getElementById('modalRatio');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTools = document.getElementById('modalTools');
  const modalClient = document.getElementById('modalClient');

  function openVideoModal(proj) {
    if (!videoModal) return;

    modalCategory.textContent = proj.category;
    modalRatio.textContent = proj.aspectRatio;
    modalTitle.textContent = proj.title;
    modalDesc.textContent = proj.description || 'No description provided yet.';
    modalClient.textContent = proj.client || '--';
    modalTools.innerHTML = (proj.tools || []).map(t => `<span class="card-tool-tag">${t}</span>`).join('');

    modalMediaContainer.innerHTML = '';
    if (proj.videoUrl && proj.videoUrl.trim() !== '') {
      const isLocal = proj.videoUrl.endsWith('.mp4') || proj.videoUrl.endsWith('.MP4');
      if (isLocal) {
        modalMediaContainer.innerHTML = `
          <video controls autoplay playsinline style="width: 100%; height: 100%;">
            <source src="${proj.videoUrl}" type="video/mp4">
            Your browser does not support video tag.
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
            Paste your YouTube link or local MP4 path in <strong>js/portfolioData.js</strong>!
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
