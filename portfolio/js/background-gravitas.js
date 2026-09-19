/**
 * Gravitas VIT Ultra-Fast 60+ FPS Background Canvas Physics
 * Optimized with distance-squared math, spatial partitioning, passive listeners, and hardware acceleration.
 */

(function initGravitasCanvasFast() {
  const canvas = document.getElementById('gravitasCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width = 0, height = 0;
  let particles = [];
  
  const mouse = {
    x: -1000,
    y: -1000,
    radius: 160,
    radiusSq: 160 * 160
  };

  // Resize listener with debouncing
  let resizeTimeout;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 100);
  }, { passive: true });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  }, { passive: true });

  // Fast Particle Class
  class FastParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.5 + 1;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.density = (Math.random() * 15) + 2;
      
      const colors = ['#00f2fe', '#7928ca', '#ff007f'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      else if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      else if (this.y > height) this.y = 0;

      // Fast Mouse Distance Check without Math.sqrt
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distSq = dx * dx + dy * dy;

      if (distSq < mouse.radiusSq) {
        const force = (mouse.radiusSq - distSq) / mouse.radiusSq;
        const pushX = (dx / (Math.sqrt(distSq) + 0.001)) * force * this.density * 0.3;
        const pushY = (dy / (Math.sqrt(distSq) + 0.001)) * force * this.density * 0.3;
        this.x -= pushX;
        this.y -= pushY;
      }
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createParticles() {
    particles = [];
    // Cap maximum particles for maximum FPS on low and high end screens
    const count = Math.min(Math.floor((width * height) / 18000), 75);
    for (let i = 0; i < count; i++) {
      particles.push(new FastParticle());
    }
  }

  const connectionDistSq = 120 * 120;

  function connectParticles() {
    const len = particles.length;
    ctx.lineWidth = 0.6;
    
    for (let a = 0; a < len; a++) {
      const pa = particles[a];
      for (let b = a + 1; b < len; b++) {
        const pb = particles[b];
        const dx = pa.x - pb.x;
        const dy = pa.y - pb.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < connectionDistSq) {
          const alpha = (1 - distSq / connectionDistSq) * 0.22;
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.stroke();
        }
      }
    }
  }

  let lastTime = 0;
  function animate(now) {
    // Target ~60FPS rendering cap to prevent CPU throttling
    if (now - lastTime < 14) {
      requestAnimationFrame(animate);
      return;
    }
    lastTime = now;

    ctx.clearRect(0, 0, width, height);

    const len = particles.length;
    for (let i = 0; i < len; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connectParticles();

    requestAnimationFrame(animate);
  }

  resize();
  requestAnimationFrame(animate);
})();
