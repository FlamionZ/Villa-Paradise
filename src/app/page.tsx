'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingCalendar from '@/components/BookingCalendar';
import PremiumFeatures from '@/components/PremiumFeatures';
import WhatsAppBooking from '@/components/WhatsAppBooking';

export default function Home() {
  const [selectedVilla, setSelectedVilla] = useState('Villa Sunset Paradise');

  const handleDateSelect = (date: string) => {
    console.log('Selected date:', date);
  };
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.room-card, .facility-card, .testimonial-card, .gallery-item');
    
    animatedElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <BookingCalendar 
        selectedVilla={selectedVilla}
        onDateSelect={handleDateSelect}
        selectedCheckIn=""
        selectedCheckOut=""
      />
      <PremiumFeatures />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppBooking />
    </>
  );
}
