'use client';

import { useEffect, useRef, useState } from 'react';

interface WipeRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  theme?: 'light' | 'dark';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function WipeReveal({ 
  children, 
  delay = 0, 
  className = '', 
  theme = 'light',
  as: Component = 'div'
}: WipeRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  // Split text into lines if it's a string
  const renderContent = () => {
    if (typeof children === 'string') {
      // Split by line breaks if present
      const lines = children.split('\n').filter(line => line.trim());
      
      if (lines.length > 1) {
        return lines.map((line, index) => (
          <span
            key={index}
            className={`wipe-reveal-line ${theme === 'dark' ? 'dark' : ''} ${isVisible ? 'active' : ''}`}
            style={{ 
              animationDelay: `${delay + (index * 150)}ms`,
              display: 'block'
            }}
          >
            <span style={{ animationDelay: `${delay + (index * 150)}ms` }}>
              {line}
            </span>
          </span>
        ));
      }
      
      // Single line
      return (
        <span
          className={`wipe-reveal-line ${theme === 'dark' ? 'dark' : ''} ${isVisible ? 'active' : ''}`}
          style={{ 
            '--animation-delay': `${delay}ms`,
            animationDelay: `${delay}ms` 
          } as React.CSSProperties}
        >
          <span style={{ animationDelay: `${delay}ms` }}>
            {children}
          </span>
        </span>
      );
    }

    // For React nodes, wrap in single reveal
    return (
      <span
        className={`wipe-reveal-line ${theme === 'dark' ? 'dark' : ''} ${isVisible ? 'active' : ''}`}
        style={{ 
          '--animation-delay': `${delay}ms`,
          animationDelay: `${delay}ms` 
        } as React.CSSProperties}
      >
        <span style={{ animationDelay: `${delay}ms` }}>
          {children}
        </span>
      </span>
    );
  };

  return (
    <Component ref={ref as any} className={`wipe-reveal ${className}`}>
      {renderContent()}
    </Component>
  );
}

// Inline version for bolded text within paragraphs
export function WipeRevealInline({ 
  children, 
  delay = 0, 
  className = '',
  theme = 'light'
}: Omit<WipeRevealProps, 'as'>) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  return (
    <span 
      ref={ref}
      className={`wipe-reveal-inline ${theme === 'dark' ? 'dark' : ''} ${isVisible ? 'active' : ''} ${className}`}
      style={{ 
        '--animation-delay': `${delay}ms`,
        animationDelay: `${delay}ms` 
      } as React.CSSProperties}
    >
      <span style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}
