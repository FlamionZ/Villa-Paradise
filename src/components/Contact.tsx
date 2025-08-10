'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    checkin: '',
    checkout: '',
    message: ''
  });

  const [notification, setNotification] = useState<{ message: string; type: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.roomType || !formData.checkin || !formData.checkout) {
      showNotification('Mohon lengkapi semua field yang diperlukan.', 'error');
      return;
    }

    if (!validateEmail(formData.email)) {
      showNotification('Mohon masukkan email yang valid.', 'error');
      return;
    }

    // In a real application, you would send this to a server
    showNotification('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.', 'success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      roomType: '',
      checkin: '',
      checkout: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-header">
              <span className="section-subtitle">Kontak Kami</span>
              <h2 className="section-title">Hubungi Dieng Villa Luxury</h2>
            </div>
            <p>Siap untuk merasakan pengalaman villa mewah yang tak terlupakan? Hubungi kami sekarang untuk reservasi atau informasi lebih lanjut.</p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Alamat</h4>
                  <p>Jl. Pantai Indah No. 123<br/>Seminyak, Bali 80361</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4>Telepon</h4>
                  <p>+62 361 123 4567<br/>+62 812 3456 7890</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@villaparadise.com<br/>reservation@villaparadise.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit} suppressHydrationWarning>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Nama Lengkap" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  suppressHydrationWarning
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  suppressHydrationWarning
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Nomor Telepon" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  suppressHydrationWarning
                />
              </div>
              <div className="form-group">
                <select 
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  required
                  suppressHydrationWarning
                >
                  <option value="">Pilih Jenis Kamar</option>
                  <option value="deluxe">Deluxe Villa</option>
                  <option value="ocean">Ocean View Villa</option>
                  <option value="presidential">Presidential Suite</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="date" 
                    name="checkin"
                    placeholder="Check-in" 
                    value={formData.checkin}
                    onChange={handleInputChange}
                    required
                    suppressHydrationWarning
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="date" 
                    name="checkout"
                    placeholder="Check-out" 
                    value={formData.checkout}
                    onChange={handleInputChange}
                    required
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Pesan Tambahan"
                  value={formData.message}
                  onChange={handleInputChange}
                  suppressHydrationWarning
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" suppressHydrationWarning>Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div 
          className="notification"
          style={{
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: notification.type === 'success' ? '#27ae60' : '#e74c3c',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            zIndex: 10000,
            maxWidth: '400px',
            transform: 'translateX(0)',
            transition: 'transform 0.3s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
            <span>{notification.message}</span>
            <button 
              onClick={() => setNotification(null)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                padding: 0,
                width: '25px',
                height: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
