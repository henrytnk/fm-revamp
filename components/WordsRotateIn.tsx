"use client";

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
  delay?: number;
}

export default function WordsRotateIn({
  children,
  className = '',
  immediate = false,
  delay = 0,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    splitTextNodes(el);

    const wordInners = el.querySelectorAll<HTMLElement>('.word-inner');
    if (wordInners.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(wordInners, {
        rotationX: -90,
        transformPerspective: 1000,
        transformOrigin: 'bottom center',
        willChange: 'transform',
      });

      gsap.set(el, { opacity: 1 });

      const tl = gsap.timeline({ paused: true });
      tl.to(wordInners, {
        rotationX: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: { amount: 0.6 },
      });

      if (immediate) {
        tl.delay((delay || 150) / 1000).play();
      } else {
        ScrollTrigger.create({
          trigger: el,
          start: 'top bottom',
          onLeaveBack: () => {
            tl.progress(0);
            tl.pause();
          },
        });
        ScrollTrigger.create({
          trigger: el,
          start: 'top 60%',
          onEnter: () => {
            if (delay > 0) {
              gsap.delayedCall(delay / 1000, () => tl.play());
            } else {
              tl.play();
            }
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [immediate, delay]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
}

function splitTextNodes(root: HTMLElement) {
  const gradientEls: HTMLElement[] = [];
  root.querySelectorAll<HTMLElement>('[style]').forEach((el) => {
    const s = el.style;
    if (
      s.webkitBackgroundClip === 'text' ||
      s.backgroundClip === 'text'
    ) {
      gradientEls.push(el);
    }
  });

  for (const el of gradientEls) {
    const wordOuter = document.createElement('span');
    wordOuter.className = 'word';
    wordOuter.style.overflow = 'hidden';
    wordOuter.style.display = 'inline-block';
    wordOuter.style.paddingBottom = '0.2em';
    wordOuter.style.marginBottom = '-0.2em';

    el.parentNode?.insertBefore(wordOuter, el);
    wordOuter.appendChild(el);
    el.classList.add('word-inner');
    el.style.display = 'inline-block';
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const textNodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (node.textContent && node.textContent.trim().length > 0) {
      const closest = (node.parentNode as HTMLElement)?.closest?.('.word');
      if (closest) continue;
      textNodes.push(node as Text);
    }
  }

  for (const textNode of textNodes) {
    const parent = textNode.parentNode;
    if (!parent || !(parent instanceof HTMLElement)) continue;

    const text = textNode.textContent || '';

    const parts = text.split(/(\s+)/);
    const fragment = document.createDocumentFragment();

    for (const part of parts) {
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
      } else if (part.length > 0) {
        const wordOuter = document.createElement('span');
        wordOuter.className = 'word';
        wordOuter.style.overflow = 'hidden';
        wordOuter.style.display = 'inline-block';
        wordOuter.style.paddingBottom = '0.2em';
        wordOuter.style.marginBottom = '-0.2em';

        const wordInner = document.createElement('span');
        wordInner.className = 'word-inner';
        wordInner.style.display = 'inline-block';
        wordInner.textContent = part;

        wordOuter.appendChild(wordInner);
        fragment.appendChild(wordOuter);
      }
    }

    parent.replaceChild(fragment, textNode);
  }
}
