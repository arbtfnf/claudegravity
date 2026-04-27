"use client";
import { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en">
      <body style={{ backgroundColor: 'black' }}>
        {children}
      </body>
    </html>
  );
}
