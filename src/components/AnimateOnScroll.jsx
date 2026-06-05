import React, { useEffect, useRef } from 'react';

const AnimateOnScroll = ({ children, animation = "animate-fade-in", className = "", delay = 0 }) => {
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`animate-on-scroll ${animation} ${className}`}
      style={{ 
        transitionDelay: `${delay}s`, 
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;