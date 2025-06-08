import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stars
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    // Shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; angle: number; opacity: number }[] = [];
    
    const createShootingStar = () => {
      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 6 + 4,
          angle: Math.random() * Math.PI / 4 + Math.PI / 4,
          opacity: 1,
        });
      }
    };

    // Nebula particles
    const nebula: { x: number; y: number; size: number; color: string; speed: number }[] = [];
    const colors = ['rgba(100, 255, 218, 0.1)', 'rgba(255, 110, 199, 0.1)', 'rgba(138, 43, 226, 0.1)'];
    
    for (let i = 0; i < 30; i++) {
      nebula.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.2 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebula
      nebula.forEach((particle) => {
        particle.x += particle.speed;
        if (particle.x > canvas.width + particle.size) {
          particle.x = -particle.size;
        }

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw stars
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Create and draw shooting stars
      createShootingStar();
      
      shootingStars.forEach((star, index) => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;

        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(index, 1);
          return;
        }

        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        gradient.addColorStop(0, `rgba(100, 255, 218, ${star.opacity})`);
        gradient.addColorStop(1, 'transparent');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(180deg, #0a192f 0%, #1a1a2e 100%)' }}
    />
  );
};

export default AnimatedBackground;