import { useEffect } from 'react';

export default function useMouseGlow(glowRef, parentRef) {
  useEffect(() => {
    const glow = glowRef.current;
    const parent = parentRef.current;
    if (!glow || !parent) return;

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
    };

    const onLeave = () => {
      glow.style.background = 'transparent';
    };

    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    return () => {
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, [glowRef, parentRef]);
}