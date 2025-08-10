'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BookingCalendar from './BookingCalendar';

const rooms = [
  {
    id: 1,
    title: "Deluxe Villa",
    slug: "deluxe-villa",
    price: "$299/malam",
    description: "Villa mewah dengan pemandangan taman tropis dan kolam renang pribadi.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
      { icon: "fas fa-bed", text: "2 Kamar Tidur" },
      { icon: "fas fa-bath", text: "2 Kamar Mandi" },
      { icon: "fas fa-swimming-pool", text: "Private Pool" }
    ]
  },
  {
    id: 2,
    title: "Ocean View Villa",
    slug: "ocean-view-villa",
    price: "$459/malam",
    description: "Villa premium dengan pemandangan laut yang menakjubkan dan akses pantai pribadi.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
      { icon: "fas fa-bed", text: "3 Kamar Tidur" },
      { icon: "fas fa-bath", text: "3 Kamar Mandi" },
      { icon: "fas fa-water", text: "Beach Access" }
    ]
  },
  {
    id: 3,
    title: "Presidential Suite",
    slug: "presidential-suite",
    price: "$799/malam",
    description: "Suite mewah terluas dengan semua fasilitas premium dan butler pribadi.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: [
      { icon: "fas fa-bed", text: "4 Kamar Tidur" },
      { icon: "fas fa-bath", text: "4 Kamar Mandi" },
      { icon: "fas fa-user-tie", text: "Private Butler" }
    ]
  }
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [selectedDates] = useState<{checkIn: string, checkOut: string}>({checkIn: '', checkOut: ''});

  const handleDateSelect = (date: string) => {
    console.log('Selected date:', date);
  };

  const toggleRoomDetail = (roomId: number) => {
    setSelectedRoom(selectedRoom === roomId ? null : roomId);
  };
  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Kamar & Suite</span>
          <h2 className="section-title">Pilihan Akomodasi Eksklusif</h2>
          <p className="section-description">Setiap kamar dirancang dengan perhatian detail untuk memberikan kenyamanan maksimal</p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image">
                <Image 
                  src={room.image} 
                  alt={room.title}
                  width={800}
                  height={250}
                />
                <div className="room-price">{room.price}</div>
              </div>
              <div className="room-content">
                <h3 className="room-title">{room.title}</h3>
                <p className="room-description">{room.description}</p>
                <div className="room-amenities">
                  {room.amenities.map((amenity, index) => (
                    <span key={index}>
                      <i className={amenity.icon}></i> {amenity.text}
                    </span>
                  ))}
                </div>
                <div className="room-buttons">
                  <Link 
                    href={`/villa/${room.slug}`}
                    className="btn btn-primary"
                  >
                    Lihat Detail
                  </Link>
                  <button 
                    className="btn btn-outline"
                    onClick={() => toggleRoomDetail(room.id)}
                    suppressHydrationWarning
                  >
                    {selectedRoom === room.id ? 'Tutup Kalender' : 'Cek Ketersediaan'}
                  </button>
                </div>
              </div>
              {selectedRoom === room.id && (
                <div className="room-detail">
                  <div className="room-detail-content">
                    <h4>Pilih Tanggal Booking</h4>
                    <BookingCalendar 
                      selectedVilla={room.title}
                      onDateSelect={handleDateSelect}
                      selectedCheckIn={selectedDates.checkIn}
                      selectedCheckOut={selectedDates.checkOut}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
