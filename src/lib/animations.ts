import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateOnScroll = (selector: string, options = {}) => {
  if (typeof window === 'undefined') return;

  const defaults = {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  };

  gsap.from(selector, { ...defaults, ...options });
};

export const staggerAnimation = (selector: string, staggerDelay = 0.1) => {
  if (typeof window === 'undefined') return;

  gsap.from(selector, {
    y: 60,
    opacity: 0,
    duration: 0.6,
    stagger: staggerDelay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
    },
  });
};

export const cleanup = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
};
