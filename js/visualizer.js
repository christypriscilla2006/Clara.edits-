/**
 * Hero Audio Spectrum Canvas Visualizer & Color Grading Split Slider Controls
 */

// 1. Audio Spectrum Canvas Simulation
(function initAudioSpectrum() {
  const canvas = document.getElementById('heroSpectrumCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width;
  let height = canvas.height;
  const bars = 40;
  let amplitudes = new Array(bars).fill(10);

  function drawSpectrum() {
    ctx.clearRect(0, 0, width, height);

    const barWidth = (width / bars) - 3;
    const gradient = ctx.createLinearGradient(0, height, 0, 0);
    gradient.addColorStop(0, '#00f2fe');
    gradient.addColorStop(0.5, '#7928ca');
    gradient.addColorStop(1, '#ff007f');

    for (let i = 0; i < bars; i++) {
      // Smoothly animate amplitudes simulating Premiere Pro audio track peak VU meter
      const target = Math.random() * (height - 15) + 5;
      amplitudes[i] += (target - amplitudes[i]) * 0.15;

      const x = i * (barWidth + 3);
      const barHeight = amplitudes[i];
      const y = height - barHeight;

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, barWidth, barHeight, 3) : ctx.rect(x, y, barWidth, barHeight);
      ctx.fill();
    }

    requestAnimationFrame(drawSpectrum);
  }

  drawSpectrum();
})();

// 2. Color Grading Split Slider Interactivity
(function initSplitSlider() {
  const container = document.getElementById('splitSlider');
  const afterImage = document.getElementById('afterImage');
  const handle = document.getElementById('sliderHandle');
  if (!container || !afterImage || !handle) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width)); // Clamp between 0 and width
    
    const percentage = (x / rect.width) * 100;
    afterImage.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  // Mouse Events
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  // Touch Events for Mobile / Tablet
  handle.addEventListener('touchstart', () => {
    isDragging = true;
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    updateSliderPosition(e.touches[0].clientX);
  });
})();
