'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import BookingCalendar from '@/components/BookingCalendar';
import { useState } from 'react';

// Data villa yang lebih detail
const villaData = {
  'deluxe-villa': {
    id: 'deluxe-villa',
    title: 'Deluxe Villa',
    price: 299,
    description: 'Villa mewah dengan pemandangan taman tropis dan kolam renang pribadi yang sempurna untuk liburan romantis atau keluarga kecil.',
    longDescription: 'Nikmati kemewahan dan kenyamanan di Deluxe Villa kami yang dirancang dengan sempurna. Villa ini menawarkan pemandangan taman tropis yang memukau dan kolam renang pribadi untuk pengalaman menginap yang tak terlupakan. Dengan desain modern dan fasilitas lengkap, villa ini cocok untuk pasangan yang ingin menikmati bulan madu atau keluarga kecil yang mencari liburan berkualitas.',
    amenities: [
      { icon: 'fas fa-bed', text: '2 Kamar Tidur' },
      { icon: 'fas fa-bath', text: '2 Kamar Mandi' },
      { icon: 'fas fa-swimming-pool', text: 'Private Pool' },
      { icon: 'fas fa-wifi', text: 'Free WiFi' },
      { icon: 'fas fa-car', text: 'Parking' },
      { icon: 'fas fa-coffee', text: 'Kitchen' }
    ],
    features: [
      'Air conditioning di semua ruangan',
      'Smart TV dengan Netflix',
      'Mini bar dan kulkas',
      'Safe deposit box',
      'Hair dryer dan amenities mandi',
      'Teras pribadi dengan furniture outdoor',
      'Layanan housekeeping harian',
      'Concierge service 24/7'
    ],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Zona Taman Tropis',
    size: '120m²',
    maxGuests: 4
  },
  'ocean-view-villa': {
    id: 'ocean-view-villa',
    title: 'Ocean View Villa',
    price: 459,
    description: 'Villa premium dengan pemandangan laut yang menakjubkan dan akses pantai pribadi.',
    longDescription: 'Rasakan kemewahan sejati di Ocean View Villa dengan pemandangan laut yang spektakuler. Villa ini menawarkan akses langsung ke pantai pribadi dan fasilitas premium yang akan membuat pengalaman menginap Anda istimewa. Desain villa yang elegan dengan sentuhan modern memberikan kenyamanan maksimal sambil menikmati keindahan alam laut tropis.',
    amenities: [
      { icon: 'fas fa-bed', text: '3 Kamar Tidur' },
      { icon: 'fas fa-bath', text: '3 Kamar Mandi' },
      { icon: 'fas fa-water', text: 'Beach Access' },
      { icon: 'fas fa-swimming-pool', text: 'Infinity Pool' },
      { icon: 'fas fa-wifi', text: 'Free WiFi' },
      { icon: 'fas fa-utensils', text: 'Private Chef Available' }
    ],
    features: [
      'Pemandangan laut 180 derajat',
      'Akses pantai pribadi eksklusif',
      'Infinity pool menghadap laut',
      'Jacuzzi outdoor',
      'Butler service tersedia',
      'Private dining area',
      'Kayak dan snorkeling gear',
      'Sunset deck dengan bar area'
    ],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Zona Tepi Pantai',
    size: '180m²',
    maxGuests: 6
  },
  'presidential-suite': {
    id: 'presidential-suite',
    title: 'Presidential Suite',
    price: 799,
    description: 'Suite mewah terluas dengan semua fasilitas premium dan butler pribadi.',
    longDescription: 'Presidential Suite adalah puncak kemewahan di Dieng Villa Luxury. Dengan luas terbesar dan fasilitas paling lengkap, suite ini menawarkan pengalaman menginap yang tak tertandingi. Dilengkapi dengan butler pribadi dan semua fasilitas premium, Presidential Suite cocok untuk tamu VIP atau acara spesial yang membutuhkan kemewahan ekstra.',
    amenities: [
      { icon: 'fas fa-bed', text: '4 Kamar Tidur' },
      { icon: 'fas fa-bath', text: '4 Kamar Mandi' },
      { icon: 'fas fa-user-tie', text: 'Private Butler' },
      { icon: 'fas fa-swimming-pool', text: 'Private Pool & Jacuzzi' },
      { icon: 'fas fa-car', text: 'Chauffeur Service' },
      { icon: 'fas fa-spa', text: 'In-Villa Spa' }
    ],
    features: [
      'Butler pribadi 24/7',
      'Chauffeur dan mobil mewah',
      'Private spa dan massage room',
      'Wine cellar dan premium bar',
      'Private dining room untuk 12 orang',
      'Home theater dan game room',
      'Office space dengan meeting room',
      'Helicopter landing pad access'
    ],
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    location: 'Zona Premium Hilltop',
    size: '350m²',
    maxGuests: 8
  }
};

export default function VillaDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const villa = villaData[slug as keyof typeof villaData];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedCheckIn, setSelectedCheckIn] = useState('');
  const [selectedCheckOut, setSelectedCheckOut] = useState('');

  if (!villa) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Villa Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">Maaf, villa yang Anda cari tidak tersedia.</p>
          <Link href="/" className="btn btn-primary">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    const message = `Halo, saya tertarik untuk memesan ${villa.title} dengan harga $${villa.price}/malam. Bisakah Anda memberikan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="villa-detail-page">
      {/* Header Section */}
      <div className="villa-detail-header">
        <div className="container">
          <div className="villa-detail-breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/#rooms">Villa</Link>
            <span>/</span>
            <span>{villa.title}</span>
          </div>
          
          <div className="villa-detail-title-section">
            <div className="villa-detail-title-content">
              <h1 className="villa-detail-title">{villa.title}</h1>
              <p className="villa-detail-subtitle">{villa.description}</p>
              <div className="villa-detail-quick-info">
                <span><i className="fas fa-map-marker-alt"></i> {villa.location}</span>
                <span><i className="fas fa-ruler-combined"></i> {villa.size}</span>
                <span><i className="fas fa-users"></i> Maks {villa.maxGuests} Tamu</span>
              </div>
            </div>
            <div className="villa-detail-price-section">
              <div className="villa-detail-price">
                <span className="price-amount">${villa.price}</span>
                <span className="price-period">/malam</span>
              </div>
              <button className="btn btn-primary" onClick={handleBookNow}>
                <i className="fab fa-whatsapp"></i>
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="villa-detail-gallery">
        <div className="container">
          <div className="gallery-main">
            <div className="gallery-main-image">
              <Image
                src={villa.images[selectedImage]}
                alt={villa.title}
                width={800}
                height={500}
                className="main-image"
              />
            </div>
            <div className="gallery-thumbnails">
              {villa.images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${villa.title} ${index + 1}`}
                    width={150}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="villa-detail-content">
        <div className="container">
          <div className="villa-detail-grid">
            <div className="villa-detail-main">
              {/* Description */}
              <div className="villa-detail-section">
                <h2>Tentang Villa</h2>
                <p>{villa.longDescription}</p>
              </div>

              {/* Amenities */}
              <div className="villa-detail-section">
                <h2>Fasilitas Utama</h2>
                <div className="amenities-grid">
                  {villa.amenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      <i className={amenity.icon}></i>
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="villa-detail-section">
                <h2>Fitur & Layanan</h2>
                <div className="features-list">
                  {villa.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div className="villa-detail-section">
                <h2>Ketersediaan & Pemesanan</h2>
                <div className="villa-calendar-container">
                  <BookingCalendar 
                    selectedVilla={villa.title}
                    onDateSelect={(date: string) => {
                      if (!selectedCheckIn) {
                        setSelectedCheckIn(date);
                      } else if (!selectedCheckOut) {
                        setSelectedCheckOut(date);
                      } else {
                        setSelectedCheckIn(date);
                        setSelectedCheckOut('');
                      }
                    }}
                    selectedCheckIn={selectedCheckIn}
                    selectedCheckOut={selectedCheckOut}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="villa-detail-sidebar">
              <div className="booking-card">
                <div className="booking-card-header">
                  <div className="booking-price">
                    <span className="price-amount">${villa.price}</span>
                    <span className="price-period">/malam</span>
                  </div>
                </div>
                
                <div className="booking-card-content">
                  <div className="villa-info-quick">
                    <div className="info-item">
                      <i className="fas fa-bed"></i>
                      <span>{villa.amenities.find(a => a.icon.includes('bed'))?.text}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-bath"></i>
                      <span>{villa.amenities.find(a => a.icon.includes('bath'))?.text}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-users"></i>
                      <span>Maks {villa.maxGuests} Tamu</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-ruler-combined"></i>
                      <span>{villa.size}</span>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary btn-full" onClick={handleBookNow}>
                    <i className="fab fa-whatsapp"></i>
                    Pesan via WhatsApp
                  </button>
                  
                  <div className="booking-note">
                    <p><i className="fas fa-info-circle"></i> Gratis pembatalan hingga 24 jam sebelum check-in</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="contact-card">
                <h3>Butuh Bantuan?</h3>
                <div className="contact-methods">
                  <a href="tel:+6281234567890" className="contact-method">
                    <i className="fas fa-phone"></i>
                    <span>+62 812-3456-7890</span>
                  </a>
                  <a href="mailto:info@villaparadise.com" className="contact-method">
                    <i className="fas fa-envelope"></i>
                    <span>info@villaparadise.com</span>
                  </a>
                  <a href="https://wa.me/6281234567890" className="contact-method" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
