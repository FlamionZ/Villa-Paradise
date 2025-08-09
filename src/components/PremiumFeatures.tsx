'use client';

const premiumFeatures = [
  {
    icon: "fas fa-robot",
    title: "AI Concierge 24/7",
    description: "Asisten virtual berbasis AI yang siap membantu kebutuhan Anda kapan saja dengan teknologi voice recognition",
    highlight: "Eksklusif"
  },
  {
    icon: "fas fa-vr-cardboard",
    title: "Virtual Reality Tour",
    description: "Jelajahi villa dengan teknologi VR sebelum check-in. Nikmati pengalaman immersive dari kamar Anda",
    highlight: "Pertama di Bali"
  },
  {
    icon: "fas fa-drone",
    title: "Drone Photography Service",
    description: "Layanan foto dan video drone profesional untuk menangkap momen spesial Anda dari udara",
    highlight: "Gratis"
  },
  {
    icon: "fas fa-leaf",
    title: "Smart Eco System",
    description: "Villa ramah lingkungan dengan panel surya, sistem air hujan, dan taman vertikal hidroponik",
    highlight: "Green Certified"
  },
  {
    icon: "fas fa-gamepad",
    title: "Gaming Room & VR Lounge",
    description: "Ruang gaming dengan konsol terbaru, VR setup, dan streaming setup untuk content creator",
    highlight: "Gamer Paradise"
  },
  {
    icon: "fas fa-car-side",
    title: "Tesla Model S Complimentary",
    description: "Kendaraan Tesla Model S tersedia gratis untuk tamu Presidential Suite dengan autopilot feature",
    highlight: "Luxury Exclusive"
  },
  {
    icon: "fas fa-microscope",
    title: "Private Chef Laboratory",
    description: "Dapur molekuler dengan chef bersertifikat Michelin untuk pengalaman kuliner yang tak terlupakan",
    highlight: "Michelin Experience"
  },
  {
    icon: "fas fa-satellite-dish",
    title: "Starlink Internet",
    description: "Internet satelit berkecepatan tinggi 1Gbps untuk remote work, streaming 8K, dan video conference",
    highlight: "Ultra High Speed"
  },
  {
    icon: "fas fa-spa",
    title: "Cryotherapy & Hyperbaric",
    description: "Chamber terapi dingin dan oksigen bertekanan tinggi untuk recovery dan wellness optimal",
    highlight: "Medical Grade"
  }
];

export default function PremiumFeatures() {
  return (
    <section className="premium-features">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Fitur Eksklusif</span>
          <h2 className="section-title">Pengalaman Yang Tidak Ada Duanya</h2>
          <p className="section-description">
            Villa Paradise menghadirkan teknologi dan layanan premium yang tidak akan Anda temukan di tempat lain
          </p>
        </div>
        
        <div className="premium-grid">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="premium-card">
              <div className="premium-highlight">
                {feature.highlight}
              </div>
              <div className="premium-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="premium-title">{feature.title}</h3>
              <p className="premium-description">{feature.description}</p>
              <div className="premium-glow"></div>
            </div>
          ))}
        </div>
        
        <div className="premium-cta">
          <div className="premium-cta-content">
            <h3>Rasakan Kemewahan Masa Depan</h3>
            <p>Jadilah yang pertama merasakan pengalaman villa dengan teknologi terdepan di Indonesia</p>
            <button className="btn btn-primary premium-btn">
              <i className="fas fa-crown"></i>
              Reservasi Premium Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
