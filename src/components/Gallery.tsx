'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Villa Exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Bedroom"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Pool Area"
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Living Room"
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Bathroom"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Dining Area"
  }
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (image: { src: string; alt: string }) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Galeri</span>
          <h2 className="section-title">Kemewahan dalam Setiap Detail</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                width={600}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="lightbox"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div 
            className="lightbox-overlay"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <div 
              className="lightbox-content"
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90%'
              }}
            >
              <Image 
                src={lightboxImage.src} 
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
              />
              <button 
                onClick={closeLightbox}
                className="lightbox-close"
                suppressHydrationWarning
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  background: 'white',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  fontSize: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
