import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Star, Award, ChevronLeft, ChevronRight, Expand } from 'lucide-react';

// Constants et données
const SITE_DATA = {
  company: {
    name: 'BAFAGA',
    description: 'Votre partenaire de confiance pour tous vos projets de services en Côte d\'Ivoire.',
    phone: '+225 07 09 85 72 14',
    email: 'bafagaservices@gmail.com',
    address: 'Abidjan, Côte d\'Ivoire'
  },
  
  services: [
    {
      id: 'btp',
      title: 'BTP & Construction',
      description: 'Construction, rénovation, maçonnerie et tous travaux de bâtiment',
      icon: '🏗️'
    },
    {
      id: 'decoration',
      title: 'Décoration Intérieure',
      description: 'Aménagement, design d\'intérieur et décoration sur mesure',
      icon: '🎨'
    },
    {
      id: 'menage',
      title: 'Services de Ménage',
      description: 'Nettoyage résidentiel et commercial, entretien régulier',
      icon: '🧹'
    },
    {
      id: 'jardinage',
      title: 'Jardinage & Espaces Verts',
      description: 'Entretien de jardins, paysagisme et aménagement extérieur',
      icon: '🌿'
    },
    {
      id: 'transport',
      title: 'Transport & Livraison',
      description: 'Services de transport, déménagement et livraison',
      icon: '🚛'
    }
  ],

  stats: [
    { number: '500+', label: 'Clients satisfaits' },
    { number: '5', label: 'Services disponibles' },
    { number: '7j/7j', label: 'Disponibilité' },
    { number: '100%', label: 'Satisfaction' }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Marie Kouassi',
      service: 'Décoration',
      text: 'Excellent travail de décoration. Mon salon a été transformé au-delà de mes attentes !',
      rating: 5
    },
    {
      id: 2,
      name: 'Jean-Claude Brou',
      service: 'BTP',
      text: 'Construction de ma terrasse réalisée dans les délais. Équipe professionnelle.',
      rating: 5
    },
    {
      id: 3,
      name: 'Fatou Traoré',
      service: 'Ménage',
      text: 'Service de ménage impeccable. Je recommande vivement Bafaga !',
      rating: 5
    }
  ],

  gallery: [
    {
      id: 1,
      title: 'Construction moderne',
      category: 'BTP',
      imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591?w=500&h=400&fit=crop',
      description: 'Projet de construction résidentielle à Cocody'
    },
    {
      id: 2,
      title: 'Salon élégant',
      category: 'Décoration',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
      description: 'Décoration intérieure moderne et raffinée'
    },
    {
      id: 3,
      title: 'Jardin paysager',
      category: 'Jardinage',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop',
      description: 'Aménagement paysager avec piscine'
    },
    {
      id: 4,
      title: 'Bureau moderne',
      category: 'Décoration',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop',
      description: 'Aménagement d\'espace de travail'
    },
    {
      id: 5,
      title: 'Villa contemporaine',
      category: 'BTP',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop',
      description: 'Construction de villa haut de gamme'
    },
    {
      id: 6,
      title: 'Cuisine équipée',
      category: 'Décoration',
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
      description: 'Rénovation complète de cuisine'
    }
  ],

  navigation: [
    { id: 'accueil', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'galerie', label: 'Galerie' },
    { id: 'apropos', label: 'À propos' },
    { id: 'contact', label: 'Contact' }
  ]
};

// Hook personnalisé pour la gestion du scroll
const useScrollDetection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};

// Composant Header
const Header = ({ isScrolled, isMenuOpen, setIsMenuOpen }) => (
  <header className={`header-bafaga ${isScrolled ? 'scrolled' : ''}`}>
    <div className="container-custom">
      <div className="nav-container">
        <div className="logo-bafaga">{SITE_DATA.company.name}</div>
        
        <nav className="desktop-nav">
          {SITE_DATA.navigation.map(item => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {isMenuOpen && (
      <div className="mobile-nav">
        <nav className="mobile-nav-links">
          {SITE_DATA.navigation.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    )}
  </header>
);

// Composant Hero Section
const HeroSection = ({ setIsMenuOpen }) => (
  <section id="accueil" className="hero-section">
    <div className="container-custom">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Vos projets, 
            <span className="text-gradient block"> notre expertise</span>
          </h1>
          <p className="hero-subtitle">
            BAFAGA vous accompagne dans tous vos projets : BTP, décoration, ménage, jardinage et transport. 
            Une équipe professionnelle à votre service en Côte d'Ivoire.
          </p>
          <div className="hero-buttons">
            <a 
              href="#services"
              className="btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Découvrir nos services
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Nous contacter
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&crop=center" 
            alt="Équipe BAFAGA au travail"
            className="hero-main-image"
          />
        </div>
      </div>
    </div>
  </section>
);

// Composant Stats Section
const StatsSection = () => (
  <section className="stats-section">
    <div className="container-custom">
      <div className="stats-grid">
        {SITE_DATA.stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Composant Services Section
const ServicesSection = () => (
  <section id="services" className="services-section">
    <div className="container-custom">
      <div className="section-header">
        <h2 className="section-title">Nos Services</h2>
        <p className="section-subtitle">
          Découvrez notre gamme complète de services professionnels adaptés à vos besoins
        </p>
      </div>

      <div className="services-grid">
        {SITE_DATA.services.map((service, index) => (
          <div key={service.id} className="service-card">
            <div className="service-icon-container">
              {service.icon}
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                En savoir plus
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Composant Gallery Section
const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['Tous', ...new Set(SITE_DATA.gallery.map(item => item.category))];
  
  const filteredGallery = selectedCategory === 'Tous' 
    ? SITE_DATA.gallery 
    : SITE_DATA.gallery.filter(item => item.category === selectedCategory);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredGallery.length
      : (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
    
    setCurrentImageIndex(newIndex);
    setLightboxImage(filteredGallery[newIndex]);
  };

  return (
    <section id="galerie" className="gallery-section">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">Notre Galerie</h2>
          <p className="section-subtitle">
            Découvrez quelques-unes de nos réalisations
          </p>
        </div>

        {/* Filtres */}
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille d'images */}
        <div className="gallery-grid">
          {filteredGallery.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image, index)}
            >
              <img 
                src={image.imageUrl} 
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-category">{image.category}</p>
                </div>
                <div className="gallery-expand">
                  <Expand size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={24} />
              </button>
              
              <button 
                className="lightbox-nav lightbox-prev" 
                onClick={() => navigateLightbox('prev')}
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="lightbox-image-container">
                <img 
                  src={lightboxImage.imageUrl} 
                  alt={lightboxImage.title}
                  className="lightbox-image"
                />
                <div className="lightbox-info">
                  <h3>{lightboxImage.title}</h3>
                  <p>{lightboxImage.description}</p>
                </div>
              </div>
              
              <button 
                className="lightbox-nav lightbox-next" 
                onClick={() => navigateLightbox('next')}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Composant About Section
const AboutSection = () => (
  <section id="apropos" className="about-section">
    <div className="container-custom">
      <div className="about-grid">
        <div className="about-content">
          <h2 className="section-title">À propos de {SITE_DATA.company.name}</h2>
          <p className="about-text">
            Depuis notre création, BAFAGA s'est imposée comme une référence dans le domaine des services 
            multi-techniques en Côte d'Ivoire. Notre équipe de professionnels expérimentés met son 
            savoir-faire au service de vos projets.
          </p>
          <p className="about-text">
            Que ce soit pour des travaux de construction, de la décoration d'intérieur, du ménage, 
            l'entretien de vos espaces verts ou des services de transport, nous garantissons un 
            travail de qualité et un service client exceptionnel.
          </p>
          <div className="feature-highlight">
            <div className="feature-icon">
              <Award size={24} />
            </div>
            <div className="feature-text">
              <h4>Qualité garantie</h4>
              <p>Satisfaction client à 100%</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="about-image-placeholder">🏆</div>
        </div>
      </div>
    </div>
  </section>
);

// Composant Testimonials Section
const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="container-custom">
      <div className="section-header">
        <h2 className="section-title">Ce que disent nos clients</h2>
        <p className="section-subtitle">La satisfaction de nos clients est notre priorité</p>
      </div>

      <div className="testimonials-grid">
        {SITE_DATA.testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating-stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="star-icon" />
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <div className="author-name">{testimonial.name}</div>
              <div className="author-service">{testimonial.service}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Composant Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Données du formulaire:', formData);
    alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
    
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">Prêt à démarrer votre projet ? Parlons-en !</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Informations de contact</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-details">
                  <div className="contact-type">Téléphone</div>
                  <div className="contact-value">
                    <a href={`tel:${SITE_DATA.company.phone}`}>
                      {SITE_DATA.company.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <div className="contact-type">Email</div>
                  <div className="contact-value">
                    <a href={`mailto:${SITE_DATA.company.email}`}>
                      {SITE_DATA.company.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-details">
                  <div className="contact-type">Adresse</div>
                  <div className="contact-value">{SITE_DATA.company.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-subtitle">Demande de devis gratuit</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  className="form-input"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  className="form-input"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <select 
                name="service"
                className="form-input form-select" 
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionner un service</option>
                {SITE_DATA.services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
              <textarea
                rows={4}
                name="message"
                placeholder="Décrivez votre projet"
                className="form-input form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="form-submit-btn">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant Footer
const Footer = () => (
  <footer className="footer-section">
    <div className="container-custom">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-brand">{SITE_DATA.company.name}</div>
          <p className="footer-description">
            {SITE_DATA.company.description}
          </p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-list">
            {SITE_DATA.services.map(service => (
              <li key={service.id}>{service.title}</li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-list">
            <li>
              <a href={`tel:${SITE_DATA.company.phone}`}>
                {SITE_DATA.company.phone}
              </a>
            </li>
            <li>
              <a 
                href={`mailto:${SITE_DATA.company.email}`} 
                className="email-link"
              >
                {SITE_DATA.company.email}
              </a>
            </li>
            <li>{SITE_DATA.company.address}</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Suivez-nous</h4>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">📱</a>
            <a href="#" className="social-link" aria-label="Instagram">📧</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 {SITE_DATA.company.name}. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

// Composant principal
const BafagaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollDetection();

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <HeroSection setIsMenuOpen={setIsMenuOpen} />
      <StatsSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      <style jsx>{`
        /* Styles existants + nouveaux styles pour la galerie */
        .header-bafaga {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .header-bafaga.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .container-custom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }

        .logo-bafaga {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1e40af;
          letter-spacing: -0.02em;
        }

        .desktop-nav {
          display: none;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #1e40af;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #1e40af, #3b82f6);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          color: #374151;
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 1rem;
        }

        .hero-section {
          padding: 8rem 0 4rem;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          overflow: hidden;
          position: relative;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e2e8f0" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .block {
          display: block;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #1e40af;
          padding: 1rem 2rem;
          border: 2px solid #1e40af;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #1e40af;
          color: white;
          transform: translateY(-2px);
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-main-image {
          width: 100%;
          max-width: 500px;
          height: 400px;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .hero-main-image:hover {
          transform: scale(1.02);
        }

        .hero-image-placeholder {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #ddd6fe, #c7d2fe);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .stats-section {
          padding: 4rem 0;
          background: #1e40af;
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.125rem;
          opacity: 0.9;
        }

        .services-section {
          padding: 6rem 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1e40af, #3b82f6);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .service-icon-container {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ddd6fe, #c7d2fe);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #1e40af;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #3b82f6;
        }

        /* Styles pour la galerie */
        .gallery-section {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid #e2e8f0;
          background: white;
          color: #64748b;
          border-radius: 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          border-color: #1e40af;
          background: #1e40af;
          color: white;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
          aspect-ratio: 4/3;
        }

        .gallery-item:hover {
          transform: scale(1.03);
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-info {
          color: white;
        }

        .gallery-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .gallery-category {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .gallery-expand {
          color: white;
          background: rgba(255,255,255,0.2);
          padding: 0.5rem;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        /* Styles pour le lightbox */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-image-container {
          position: relative;
          max-width: 100%;
          max-height: 100%;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 0.5rem;
        }

        .lightbox-info {
          position: absolute;
          bottom: -60px;
          left: 0;
          right: 0;
          color: white;
          text-align: center;
        }

        .lightbox-info h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .lightbox-info p {
          opacity: 0.8;
        }

        .lightbox-close {
          position: absolute;
          top: -60px;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          padding: 0.75rem;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          padding: 1rem;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .lightbox-prev {
          left: -80px;
        }

        .lightbox-next {
          right: -80px;
        }

        .about-section {
          padding: 6rem 0;
          background: white;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-text {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #64748b;
          margin-bottom: 1.5rem;
        }

        .feature-highlight {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1rem;
          border-left: 4px solid #1e40af;
        }

        .feature-icon {
          color: #1e40af;
        }

        .feature-text h4 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .feature-text p {
          color: #64748b;
        }

        .about-image-placeholder {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          margin: 0 auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .testimonials-section {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
        }

        .rating-stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }

        .star-icon {
          color: #fbbf24;
          fill: currentColor;
        }

        .testimonial-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #374151;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .testimonial-author {
          border-top: 1px solid #f1f5f9;
          padding-top: 1rem;
        }

        .author-name {
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .author-service {
          color: #64748b;
          font-size: 0.875rem;
        }

        .contact-section {
          padding: 6rem 0;
          background: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2rem;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ddd6fe, #c7d2fe);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e40af;
        }

        .contact-type {
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.25rem;
        }

        .contact-value {
          color: #64748b;
        }

        .contact-value a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-value a:hover {
          color: #1e40af;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-input {
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: #1e40af;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-btn {
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .form-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
        }

        .footer-section {
          background: #1e293b;
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: #3b82f6;
        }

        .footer-description {
          color: #94a3b8;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 0.5rem;
          color: #94a3b8;
        }

        .footer-list a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-list a:hover {
          color: #3b82f6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #3b82f6;
          transform: translateY(-2px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #374151;
          color: #94a3b8;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .lightbox-nav {
            display: none;
          }
          
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BafagaWebsite;