export const WHATSAPP_NUMBER = '201145719580';
export const WHATSAPP_DISPLAY = '01145719580';

export const PHONE_NUMBERS = {
  branch1: '01080599491',
  branch2: '01092632010',
  footer: '01016405157'
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/Lymphedem/',
  facebookCenter: 'https://www.facebook.com/p/%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%AF%D9%83%D8%AA%D9%88%D8%B1%D8%A9-%D8%A7%D8%B9%D8%AA%D9%85%D8%A7%D8%AF-%D8%B9%D9%84%D8%A7%D9%85-lymphatic-clinic-100089553653035/',
  instagram: 'https://www.instagram.com/lymphatic_center/',
  tiktok: 'https://www.tiktok.com/@dr.eatmad.allam',
  youtube: 'https://www.youtube.com/watch?v=-5FU7DVfOyM'
};

export const EMAIL = 'eatmadashref5@yahoo.com';

export const LOCATIONS = {
  nasrCity: 'https://maps.app.goo.gl/K9wV8pniyU2xcVeR7',
  haram: 'https://maps.app.goo.gl/K9wV8pniyU2xcVeR7'
};

export const IMAGES = {
  logo: 'https://i.ibb.co/LDYtPj8S/Logo.png',
  hero: 'https://i.ibb.co/pjJBmrKF/Hero-Section-Picture.png',
  doctorAbout: 'https://i.ibb.co/zW8d434L/Doctor-Picture.png',
  doctorWhy: 'https://i.ibb.co/ZzCVbhWq/Doctor.png',
  service1: 'https://i.ibb.co/Pssm7ccy/Servece-1.png',
  service2: 'https://i.ibb.co/VcJx8ZrD/Servece-2.png',
  service3: 'https://i.ibb.co/yBQWF0nb/Servece-3.png',
  beforeAfter: [
    'https://i.ibb.co/HT40nV9Q/Before-After-1.png',
    'https://i.ibb.co/Hph9PkJw/Before-After-2.png',
    'https://i.ibb.co/bgtkSszN/Before-After-3.png',
    'https://i.ibb.co/4nJWCYnX/Before-After-4.png',
    'https://i.ibb.co/4w0Nh8vd/Before-After-5.png'
  ]
};

export const VIDEOS = [
  'https://www.facebook.com/reel/2100704340505158',
  'https://www.facebook.com/reel/969813065661673',
  'https://www.facebook.com/reel/1588422528973139'
];

export const openWhatsApp = (message = '') => {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  window.open(`https://wa.me/${WHATSAPP_NUMBER}${text}`, '_blank');
};

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
