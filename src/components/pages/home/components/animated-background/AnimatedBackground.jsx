import { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const parallaxRef = useRef({ x: 0, y: 0 });
  const layersRef = useRef([]);

  // Particle settings
  const PARTICLE_COUNT = 70; // cap for performance
  const BURST_INTERVAL = 6000; // ms between occasional bursts

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // build particles
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(makeParticle(true));
    }

    function makeParticle(randomPosition = false) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.6 + 0.05;
      const r = Math.random() * 1.8 + 0.6;
      return {
        x: randomPosition ? Math.random() * w : w / 2,
        y: randomPosition ? Math.random() * h : h / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r,
        alpha: Math.random() * 0.7 + 0.15,
        hue: Math.random() < 0.75 ? 40 : 190, // mostly gold (40) sometimes teal-ish (190)
      };
    }

    let lastTime = 0;
    function animate(t) {
      const dt = t - lastTime;
      lastTime = t;
      ctx.clearRect(0, 0, w, h);

      // slight global fade for trails
      // draw particles
      for (let p of particles) {
        p.x += p.vx * (dt * 0.06);
        p.y += p.vy * (dt * 0.06);

        // wrap
        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;
        if (p.y < -50) p.y = h + 50;
        if (p.y > h + 50) p.y = -50;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        const baseColor =
          p.hue === 40 ? `rgba(255,220,150,` : `rgba(120,220,220,`;
        g.addColorStop(0, baseColor + p.alpha + ")");
        g.addColorStop(0.6, baseColor + p.alpha * 0.25 + ")");
        g.addColorStop(1, baseColor + "0)");

        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // occasional burst
    let burstTimer = setInterval(() => {
      // create several particles radiating from center-right-ish
      const cx = Math.random() * w * 0.6 + w * 0.2;
      const cy = Math.random() * h * 0.6 + h * 0.2;
      for (let i = 0; i < 12; i++) {
        const p = makeParticle(false);
        const angle = (i / 12) * Math.PI * 2 + (Math.random() - 0.5) * 0.6;
        const speed = Math.random() * 3 + 0.6;
        p.x = cx;
        p.y = cy;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.r = Math.random() * 2 + 1.2;
        p.alpha = 0.9;
        particles.push(p);
      }
      // trim particles to cap
      while (particles.length > 220) particles.shift();
    }, BURST_INTERVAL);

    return () => {
      clearInterval(burstTimer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Parallax mouse movement for layers
  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      parallaxRef.current = { x: dx, y: dy };
    };
    window.addEventListener("mousemove", onMove);

    // animate parallax transforms
    let raf = null;
    const update = () => {
      const p = parallaxRef.current;
      const layers = document.querySelectorAll(".egb-parallax-layer");
      if (layers.length) {
        layers.forEach((el, i) => {
          const depth = (i + 1) / 30; // weaker deeper
          const tx = p.x * 40 * depth;
          const ty = p.y * 30 * depth;
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        });
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="egb-root">
      {/* Base animated gradient + grid + layers */}
      <div className="egb-gradient"></div>

      {/* energy grid (CSS) */}
      {/* <div className="egb-grid"></div> */}

      {/* parallax layers */}
      {/* <div className="egb-parallax-layer egb-parallax-layer--back" />
      <div className="egb-parallax-layer egb-parallax-layer--mid" />
      <div className="egb-parallax-layer egb-parallax-layer--front" /> */}

      {/* canvas particles */}
      {/* <canvas ref={canvasRef} className="egb-canvas" hidden /> */}

      {/* scanlines + flicker */}
      {/* <div className="egb-scanlines" /> */}

      {/* logo sweep helper — add class "egb-logo-sweep" to your logo wrapper */}
      {/* e.g. <div className="egb-logo-sweep"><img src="logo.png" alt="logo" /></div> */}
    </div>
  );
}
