/**
 * CLARA Studio — High-Performance Application Script
 * Optimized for instant category filtering, video modal playback, and responsive studio interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA || {};
  let currentCategory = 'All';
  let currentRatio = 'all';

  // 1. Populate Studio Profile Header
  function renderProfile() {
    const prof = data.profile || {};
    const headerName = document.getElementById('headerName');
    const headerTitle = document.getElementById('headerTitle');

    if (headerName) headerName.textContent = prof.name || 'CLARA';
    if (headerTitle) headerTitle.textContent = prof.title || 'VIDEO EDITING & MOTION DESIGN STUDIO';
  }

  // 2. Helper: Detect Direct Video File URLs
  function isDirectVideoUrl(url) {
    if (!url) return false;
    const clean = decodeURIComponent(url).toLowerCase().split('?')[0];
    return clean.endsWith('.mp4') ||
           clean.endsWith('.webm') ||
           clean.endsWith('.mov') ||
           clean.includes('vercel-storage.com') ||
           clean.includes('blob.vercel-storage.com');
  }

  // 3. Project Grid Renderer
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
        <div class="project-card" style="grid-column: 1 / -1; cursor: default; background: rgba(13,16,26,0.5);">
          <div class="empty-card-state" style="padding: 48px;">
            <div class="empty-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div class="empty-text" style="color: #94a3b8; font-size: 0.95rem;">
              No showcase videos currently under category <strong>"${currentCategory}"</strong> (${currentRatio.toUpperCase()}).<br>
              Select another filter above to explore CLARA studio work.
            </div>
          </div>
        </div>
      `;
      return;
    }

    const fragment = document.createDocumentFragment();

    filtered.forEach(proj => {
      const card = document.createElement('div');
      const ratioClass = proj.aspectRatio === '9:16' ? 'ratio-9-16' : 'ratio-16-9';
      card.className = `project-card ${ratioClass}`;

      let mediaContentHTML = '';

      if (proj.videoUrl && proj.videoUrl.trim() !== '') {
        if (isDirectVideoUrl(proj.videoUrl)) {
          mediaContentHTML = `
            <video class="card-thumb-media" muted playsinline preload="metadata">
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
            <div class="empty-icon">▶</div>
            <div class="empty-text">${proj.title}</div>
          </div>
        `;
      }

      const toolsList = (proj.tools || []).map(t => `<span class="card-tool-tag">${t}</span>`).join('');
      const clientLabel = proj.client ? `<span class="card-client-tag">${proj.client}</span>` : '';

      card.innerHTML = `
        <div class="card-thumb-frame">
          ${mediaContentHTML}
          <div class="card-play-overlay">
            <div class="play-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span class="watch-case-btn">WATCH CASE STUDY</span>
          </div>
        </div>
        <div class="card-content-drawer">
          <div class="card-meta-top">
            <span class="card-cat-badge">${proj.category}</span>
            <span class="card-ratio-badge">${proj.aspectRatio}</span>
          </div>
          <h4 class="card-project-title">${proj.title}</h4>
          ${proj.description ? `<p class="card-project-desc">${proj.description}</p>` : ''}
          <div class="card-tools-row">
            ${clientLabel}
            ${toolsList}
          </div>
        </div>
      `;

      // Play video hover preview on desktop for high-end feel
      card.addEventListener('mouseenter', () => {
        const vid = card.querySelector('video');
        if (vid) {
          vid.play().catch(() => {});
        }
      });
      card.addEventListener('mouseleave', () => {
        const vid = card.querySelector('video');
        if (vid) {
          vid.pause();
          vid.currentTime = 0;
        }
      });

      card.addEventListener('click', () => openVideoModal(proj), { passive: true });
      fragment.appendChild(card);
    });

    gridContainer.innerHTML = '';
    gridContainer.appendChild(fragment);
  }

  // 4. Video Modal Functionality
  const videoModal = document.getElementById('videoModal');
  const videoModalContainer = document.getElementById('videoModalContainer');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalMediaContainer = document.getElementById('modalMediaContainer');
  const modalDetailsDrawer = document.getElementById('modalDetailsDrawer');

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
    }

    if (modalDetailsDrawer) {
      const toolsHTML = (proj.tools || []).map(t => `<span class="card-tool-tag">${t}</span>`).join(' ');
      modalDetailsDrawer.innerHTML = `
        <div class="modal-badge-group">
          <span class="modal-badge">${proj.category}</span>
          <span class="modal-badge outline">${proj.aspectRatio}</span>
          ${proj.client ? `<span class="modal-badge outline">${proj.client}</span>` : ''}
        </div>
        <h3 class="modal-project-title">${proj.title}</h3>
        <p class="modal-project-desc">${proj.description || 'Professional post-production edit crafted by CLARA studio.'}</p>
        ${toolsHTML ? `<div style="margin-top:12px;"><strong>Toolset:</strong> ${toolsHTML}</div>` : ''}
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

  // 5. Category Filter Pills Handler
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

  // 6. Direct Expertise Filter Buttons Handler (Services Section)
  document.querySelectorAll('.expertise-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const filterCat = btn.getAttribute('data-filter');
      currentCategory = filterCat;

      document.querySelectorAll('.pill-btn').forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-cat') === filterCat);
      });

      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      renderProjects();
    });
  });

  // 7. Aspect Ratio Switcher Handler
  document.querySelectorAll('.ratio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentRatio = btn.getAttribute('data-ratio');
      renderProjects();
    });
  });

  // Initialize
  renderProfile();
  renderProjects();
});
