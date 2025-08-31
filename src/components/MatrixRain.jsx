import React, { useEffect, useRef } from 'react';

/**
 * Matrix rain animation component that creates a dynamic falling character effect.
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full opacity-70 dark:opacity-60 pointer-events-none z-0 ${className}`}
    />utomatically adapts to light/dark mode and provides responsive performance.
 *
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes to apply
 * @returns {JSX.Element} Canvas element with matrix rain animation
 */
const MatrixRain = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let columns, drops;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
      }
    };

    const matrix = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    const matrixArray = matrix.split('');
    let fontSize = window.innerWidth < 768 ? 10 : 12;
    const speeds = [];
    const colors = [];
    const glowIntensities = [];

    const initDrops = () => {
      if (canvas.width > 0 && canvas.height > 0) {
        columns = Math.floor(canvas.width / (fontSize * window.devicePixelRatio));
        drops = Array(columns).fill(0);

        for (let i = 0; i < columns; i++) {
          speeds[i] = Math.random() * 2 + 0.5;
          colors[i] = Math.random() > 0.8 ? '#00ffff' :
                     Math.random() > 0.9 ? '#ffff00' :
                     '#2563eb';
          glowIntensities[i] = Math.random() * 0.5 + 0.3;
        }
      }
    };

    const draw = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

      const isDark = document.documentElement.classList.contains('dark') ||
                    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

      if (isDark) {
        gradient.addColorStop(0, 'rgba(17, 24, 39, 0.71)');
        gradient.addColorStop(0.5, 'rgba(17, 24, 39, 0.7)');
        gradient.addColorStop(1, 'rgba(17, 24, 39, 0.69)');
      } else {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
        gradient.addColorStop(0.5, 'rgba(239, 246, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.08)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() > 0.75) {
          const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.shadowColor = colors[i];
          ctx.shadowBlur = glowIntensities[i] * 10;

          const textGradient = ctx.createLinearGradient(x, y - fontSize, x, y);
          const isDark = document.documentElement.classList.contains('dark') ||
                        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

          if (isDark) {
            textGradient.addColorStop(0, '#f3f4f6');
          } else {
            textGradient.addColorStop(0, '#ffffff');
          }
          textGradient.addColorStop(0.7, colors[i]);
          textGradient.addColorStop(1, colors[i]);

          ctx.fillStyle = textGradient;
          ctx.font = `${fontSize}px 'Courier New', monospace`;
          ctx.fillText(text, x, y);

          ctx.shadowBlur = 0;
        }

        if (drops[i] * fontSize > canvas.height / window.devicePixelRatio + 50) {
          drops[i] = Math.random() * -50;
        }

        drops[i] += speeds[i];
      }

      animationId = requestAnimationFrame(draw);
    };

    const startAnimation = () => {
      resizeCanvas();
      initDrops();
      if (columns > 0) {
        draw();
      }
    };

    const timer = setTimeout(startAnimation, 100);

    const handleResize = () => {
      resizeCanvas();
      const newFontSize = window.innerWidth < 768 ? 10 : 12;
      if (newFontSize !== fontSize) {
        fontSize = newFontSize;
        initDrops();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full opacity-60 dark:opacity-80 pointer-events-none z-0 ${className}`}
    />
  );
};

export default MatrixRain;
