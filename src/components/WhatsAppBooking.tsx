'use client';

import { useState } from 'react';

interface WhatsAppButtonProps {
  villaName?: string;
  selectedDates?: string[];
  guestCount?: number;
}

const villaData = {
  'Villa Sunset Paradise': {
    price: 'Rp 5.500.000',
    features: 'Private Pool, Ocean View, 3 Bedrooms, AI Concierge',
    whatsappNumber: '6281234567890'
  },
  'Villa Garden Retreat': {
    price: 'Rp 4.200.000',
    features: 'Garden View, 2 Bedrooms, Spa Package, VR Tour',
    whatsappNumber: '6281234567890'
  },
  'Villa Royal Suite': {
    price: 'Rp 8.900.000',
    features: 'Presidential Suite, Tesla Complimentary, Private Chef, Drone Service',
    whatsappNumber: '6281234567890'
  },
  'Villa Ocean Breeze': {
    price: 'Rp 6.750.000',
    features: 'Beachfront, 4 Bedrooms, Infinity Pool, Gaming Room',
    whatsappNumber: '6281234567890'
  }
};

export default function WhatsAppBooking({ villaName = 'Villa Paradise', selectedDates = [], guestCount = 2 }: WhatsAppButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState(villaName);
  const [guests, setGuests] = useState(guestCount);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const generateWhatsAppMessage = () => {
    const villa = villaData[selectedVilla as keyof typeof villaData] || villaData['Villa Sunset Paradise'];
    const dateRange = checkIn && checkOut ? `${checkIn} - ${checkOut}` : 'Tanggal akan ditentukan';
    
    const message = `🏖️ *VILLA PARADISE - BOOKING INQUIRY*

📍 Villa: *${selectedVilla}*
💰 Tarif: *${villa.price}/malam*
✨ Fitur: ${villa.features}

📅 Check-in: ${checkIn || 'TBD'}
📅 Check-out: ${checkOut || 'TBD'}
👥 Jumlah Tamu: ${guests} orang

🎯 *EXCLUSIVE FEATURES YANG ANDA DAPATKAN:*
• 🤖 AI Concierge 24/7
• 🎮 VR Gaming Lounge
• 🚁 Drone Photography (GRATIS)
• 🌱 Smart Eco System
• 🚗 Tesla Model S (Villa Royal Suite)
• 👨‍🍳 Private Chef Laboratory
• 🛰️ Starlink Internet 1Gbps
• ❄️ Cryotherapy & Hyperbaric Chamber

${specialRequests ? `\n📝 *Permintaan Khusus:*\n${specialRequests}` : ''}

🔥 *PROMO TERBATAS:*
• Booking hari ini = DISKON 15%
• Free drone photography session
• Complimentary spa treatment
• Welcome cocktail & fruit basket

Mohon konfirmasi ketersediaan dan harga final untuk tanggal tersebut.

Terima kasih! 🙏`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    const villa = villaData[selectedVilla as keyof typeof villaData] || villaData['Villa Sunset Paradise'];
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${villa.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowModal(false);
  };

  return (
    <>
      <button 
        className="whatsapp-float-btn"
        onClick={() => setShowModal(true)}
        title="Booking via WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-text">Book Now</span>
      </button>

      {showModal && (
        <div className="whatsapp-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="whatsapp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="whatsapp-modal-header">
              <h3>
                <i className="fab fa-whatsapp"></i>
                Booking Villa Paradise
              </h3>
              <button onClick={() => setShowModal(false)} className="close-btn">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="whatsapp-modal-body">
              <div className="form-group">
                <label>Pilih Villa</label>
                <select 
                  value={selectedVilla} 
                  onChange={(e) => setSelectedVilla(e.target.value)}
                  className="form-select"
                >
                  {Object.keys(villaData).map(villa => (
                    <option key={villa} value={villa}>{villa}</option>
                  ))}
                </select>
                <div className="villa-info">
                  <span className="villa-price">
                    {villaData[selectedVilla as keyof typeof villaData]?.price}/malam
                  </span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Check-in</label>
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Check-out</label>
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Jumlah Tamu</label>
                <select 
                  value={guests} 
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="form-select"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} orang</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Permintaan Khusus (Opsional)</label>
                <textarea 
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Dekorasi romantis, makanan khusus, transportation, dll..."
                  className="form-control"
                  rows={3}
                />
              </div>

              <div className="exclusive-features">
                <h4>🎯 Exclusive Features</h4>
                <div className="features-grid">
                  <span>🤖 AI Concierge</span>
                  <span>🎮 VR Lounge</span>
                  <span>🚁 Drone Service</span>
                  <span>🛰️ Starlink Internet</span>
                </div>
              </div>
            </div>

            <div className="whatsapp-modal-footer">
              <button 
                onClick={handleWhatsAppClick}
                className="whatsapp-send-btn"
              >
                <i className="fab fa-whatsapp"></i>
                Kirim ke WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
