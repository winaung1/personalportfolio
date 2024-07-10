import React, { useState, useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, direction, threshold = 10, maxRotation = 10 }) => {
  const [transform, setTransform] = useState('none');
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        const offsetTop = ref.current.offsetTop;
        const windowHeight = window.innerHeight;
        const elementInView = scrollY + windowHeight > offsetTop + threshold;

        if (elementInView) {
          const scrollEffect = Math.min((scrollY - offsetTop) / threshold, 1) * maxRotation;
          const rotateDirection = direction === 'left' ? -scrollEffect : scrollEffect;
          setTransform(`rotate(${rotateDirection}deg)`);
        } else {
          setTransform('rotate(0deg)');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [direction, threshold, maxRotation]);

  return (
    <div
      ref={ref}
      className="transition-transform duration-300 ease-out"
      style={{ transform, transformOrigin: 'center' }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
