'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const useCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (e.target.closest('a, button')) {
          setCursorState('pointer');
        } else if (e.target.closest('img, p, span, h1, h2, h3, h4, h5, h6')) {
          setCursorState('hover');
        } else {
          setCursorState('default');
        }
      } else {
        setCursorState('default');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver, true);
    };
  }, []);

  return { position, cursorState };
};

export const CustomCursor = () => {
  const { position, cursorState } = useCursor();
  
  const cursorSize = cursorState === 'pointer' ? 60 : 20;

  const cursorVariants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "#000",
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: {
      width: 20,
      height: 20,
      backgroundColor: "#fff",
      mixBlendMode: 'difference',
      transition: { duration: 0.2, ease: "easeOut" }
    },
    pointer: {
      width: 60,
      height: 60,
      backgroundColor: "#fff",
      mixBlendMode: 'difference',
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block"
      style={{
        translateX: position.x - (cursorSize / 2),
        translateY: position.y - (cursorSize / 2),
      }}
      variants={cursorVariants}
      animate={cursorState}
    />
  );
};