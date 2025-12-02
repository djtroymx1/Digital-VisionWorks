import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue
} from 'framer-motion';
import { GeneratedImageProps } from '../types';

/* ---------------- PRIMITIVES ---------------- */

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  href?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, variant = 'primary', onClick, className = '', href, ariaLabel, type = 'button' }) => {
  const baseStyles = "relative px-8 py-4 font-bold tracking-wide uppercase transition-all duration-300 overflow-hidden group rounded-sm inline-block text-center min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]";
  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]",
    secondary: "bg-transparent border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === 'primary' && (
        <>
          {/* Hover Fill */}
          <div aria-hidden="true" className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          {/* Shimmer Effect */}
          <div aria-hidden="true" className="absolute inset-0 z-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} aria-label={ariaLabel}>
      {content}
    </button>
  );
};

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ src, className = "", overlayOpacity = 0, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#1a1a1a] ${className}`}>
      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#252525] to-[#1a1a1a] animate-pulse"
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
          <span className="text-gray-500 text-sm">Image unavailable</span>
        </div>
      )}

      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
        transition={{ duration: 0.8 }}
        src={src}
        alt={alt || ""}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `rgba(10, 10, 10, ${overlayOpacity})` }}
      />
    </div>
  );
};

/* ---------------- OPTIMIZED IMAGE COMPONENT ---------------- */

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  overlay = false,
  overlayOpacity = 0.5,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Preload priority images
  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setHasError(true);
    }
  }, [src, priority]);

  if (hasError) {
    return (
      <div className={`bg-[#1a1a1a] flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#1a1a1a] ${className}`}>
      {/* Skeleton loading state */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#1a1a1a] via-[#252525] to-[#1a1a1a] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"
        />
      )}

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05,
        }}
        transition={{ duration: 0.6 }}
        className="w-full h-full object-cover"
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(10, 10, 10, ${overlayOpacity})` }}
        />
      )}
    </div>
  );
};

/* ---------------- GLOBAL UI COMPONENTS ---------------- */

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export const NoiseOverlay = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.05] mix-blend-overlay">
      <svg className="w-full h-full" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
            numOctaves="3"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Use springs for smooth movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-8 h-8 border border-cyan-500 rounded-full pointer-events-none z-[9998] hidden md:block mix-blend-difference"
      style={{
        x: springX,
        y: springY
      }}
    />
  );
};


/* ---------------- ANIMATION COMPONENTS ---------------- */

// 1. Text Reveal (Masked Slide Up)
export const TextReveal: React.FC<{ children: string; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  // Split by words for responsiveness, or lines if you prefer
  const words = children.split(" ");

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + (i * 0.03), ease: [0.33, 1, 0.68, 1] }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// 2. Parallax Image Container
export const ParallaxImage: React.FC<{
  src: string;
  aspectRatio?: GeneratedImageProps['aspectRatio'];
  className?: string;
  overlayOpacity?: number;
}> = ({ src, aspectRatio, className = "", overlayOpacity = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll to y-transform (moves slower than container); keep movement modest to avoid cropping on mobile
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-[130%] -mt-[15%] md:h-[120%] md:-mt-[10%] relative">
        <GeneratedImage src={src} aspectRatio={aspectRatio} className="w-full h-full" overlayOpacity={overlayOpacity} alt="Parallax Visual" />
      </motion.div>
    </div>
  );
};

// 3. 3D Tilt Card
export const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// 4. Floating Element (Bobbing)
export const FloatingElement: React.FC<{ children?: React.ReactNode; delay?: number; duration?: number; className?: string }> = ({ children, delay = 0, duration = 5, className = "" }) => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: duration, repeat: Infinity, ease: "easeInOut", delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 5. Section Title with standard animation
export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-16 md:mb-24 relative z-10">
    {subtitle && (
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="block text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm"
      >
        {subtitle}
      </motion.span>
    )}
    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight overflow-hidden">
      <TextReveal>{title}</TextReveal>
      <span className="text-cyan-500">.</span>
    </h2>
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="absolute -left-4 top-0 w-1 bg-gradient-to-b from-cyan-500 to-transparent opacity-0 md:opacity-100"
    />
  </div>
);
