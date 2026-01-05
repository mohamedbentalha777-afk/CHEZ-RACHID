
import { Language, TranslationStrings } from './types';

export const translations: Record<Language, TranslationStrings> = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navMenu: 'Menu',
    navLocation: 'Find Us',
    navContact: 'Contact',
    heroSlogan: 'Authentic Saharan Taste at the Heart of Foum Zguid',
    heroCTA: 'View Our Menu',
    aboutTitle: 'About Restaurant Chez Rachid',
    aboutText: 'Welcome to Restaurant Chez Rachid, your essential stop in Foum Zguid. Whether you are a local, a traveler heading to the desert, or a truck driver on a long journey, we welcome you with traditional Moroccan hospitality and the freshest local ingredients.',
    menuTitle: 'Our Traditional Menus',
    locationTitle: 'Where to Find Us',
    locationDesc: 'Located strategically in the heart of Foum Zguid.',
    locationDirections: 'Right next to the main Roundabout (Rompa) on the road towards Lbosta.',
    locationHighlight: 'A perfect stop for tourists and locals alike!',
    locationCallToAction: 'Follow the road to Lbosta - We are right there!',
    contactTitle: 'Get in Touch',
    contactWhatsApp: 'WhatsApp Now',
    footerRights: 'All rights reserved.'
  },
  fr: {
    navHome: 'Accueil',
    navAbout: 'À Propos',
    navMenu: 'Menu',
    navLocation: 'Localisation',
    navContact: 'Contact',
    heroSlogan: 'Le Goût Authentique du Sahara au Cœur de Foum Zguid',
    heroCTA: 'Voir le Menu',
    aboutTitle: 'À Propos de Chez Rachid',
    aboutText: 'Bienvenue au Restaurant Chez Rachid, votre étape incontournable à Foum Zguid. Que vous soyez un habitant local, un voyageur vers le désert ou un chauffeur de passage, nous vous accueillons avec une hospitalité marocaine authentique et des saveurs locales.',
    menuTitle: 'Nos Menus Traditionnels',
    locationTitle: 'Où nous trouver',
    locationDesc: 'Situé stratégiquement au cœur de Foum Zguid.',
    locationDirections: 'Juste à côté du rond-point principal (Rompa) sur la route de Lbosta.',
    locationHighlight: 'L’arrêt parfait pour les touristes et les locaux !',
    locationCallToAction: 'Prenez la route de Lbosta - Nous sommes juste là !',
    contactTitle: 'Contactez-nous',
    contactWhatsApp: 'Contactez-nous sur WhatsApp',
    footerRights: 'Tous droits réservés.'
  },
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navMenu: 'المنيو',
    navLocation: 'الموقع',
    navContact: 'اتصل بنا',
    heroSlogan: 'مذاق الصحراء الحقيقي في قلب فم زكيد',
    heroCTA: 'شاهد القائمة',
    aboutTitle: 'حول مطعم عند رشيد',
    aboutText: 'مرحباً بكم في مطعم عند رشيد، محطتكم الأساسية في فم زكيد. سواء كنتم من سكان المنطقة، أو سياحاً متوجهين للصحراء، أو سائقين عابرين، نرحب بكم بكرم الضيافة المغربية التقليدية وألذ الأطباق المحلية.',
    menuTitle: 'قوائمنا التقليدية',
    locationTitle: 'أين تجدنا',
    locationDesc: 'موقع استراتيجي في قلب فم زكيد.',
    locationDirections: 'بجانب المدارة الكبرى (الرومبا) على الطريق المتجه نحو لبوسطة.',
    locationHighlight: 'محطة مثالية للمسافرين والزوار!',
    locationCallToAction: 'اتبع طريق لبوسطة - نحن هناك تماماً!',
    contactTitle: 'تواصل معنا',
    contactWhatsApp: 'تواصل معنا عبر واتساب',
    footerRights: 'جميع الحقوق محفوظة.'
  }
};

export const menuData = [
  {
    id: 1,
    title: { en: 'Menu 1', fr: 'Menu 1', ar: 'القائمة 1' },
    items: {
      en: ['Chicken Skewers', 'Salad', 'Fries', 'Water'],
      fr: ['Brochette poulet', 'Salade', 'Frites', 'L’eau'],
      ar: ['بروشيت دجاج', 'سلطة', 'فريط', 'ماء']
    }
  },
  {
    id: 2,
    title: { en: 'Menu 2', fr: 'Menu 2', ar: 'القائمة 2' },
    items: {
      en: ['Beef Skewers', 'Salad', 'Fries', 'Water'],
      fr: ['Brochette bœuf', 'Salade', 'Frites', 'L’eau'],
      ar: ['بروشيت لحم بقر', 'سلطة', 'فريط', 'ماء']
    }
  },
  {
    id: 3,
    title: { en: 'Menu 3', fr: 'Menu 3', ar: 'القائمة 3' },
    items: {
      en: ['Minced Meat Tagine', 'Salad', 'Fries', 'Water'],
      fr: ['Tajine viande hachée', 'Salade', 'Frites', 'L’eau'],
      ar: ['طاجين كفتة', 'سلطة', 'فريط', 'ماء']
    }
  },
  {
    id: 4,
    title: { en: 'Menu 4', fr: 'Menu 4', ar: 'القائمة 4' },
    items: {
      en: ['Lemon Chicken Tagine', 'Salad', 'Water'],
      fr: ['Tajine poulet citron', 'Salade', 'L’eau'],
      ar: ['طاجين دجاج بالحامض', 'سلطة', 'ماء']
    }
  },
  {
    id: 5,
    title: { en: 'Menu 5', fr: 'Menu 5', ar: 'القائمة 5' },
    items: {
      en: ['Lamb Cutlets', 'Salad', 'Fries', 'Water'],
      fr: ['Côtelette d’agneau', 'Salade', 'Frites', 'L’eau'],
      ar: ['ريش غنم', 'سلطة', 'فريط', 'ماء']
    }
  }
];

export const extraMenu = {
  tacos: {
    title: { en: 'Tacos Menu', fr: 'Menu Tacos', ar: 'قائمة الطاكوس' },
    items: {
      en: ['Turkey Tacos', 'Minced Meat Tacos'],
      fr: ['Tacos dinde', 'Tacos viande hachée'],
      ar: ['طاكوس بيبي', 'طاكوس كفتة']
    }
  },
  drinks: {
    title: { en: 'Beverages', fr: 'Les Boissons', ar: 'المشروبات' },
    items: {
      en: ['Orange Juice', 'Avocado Juice', 'Banana Juice', 'Apple Juice', 'Lemon Juice', 'Soda', 'Water', 'Sparkling Water', 'Coffee', 'Traditional Saharan Mint Tea'],
      fr: ['Jus d’orange', 'Jus avocat', 'Jus banane', 'Jus pomme', 'Jus citron', 'Soda', 'Eau normale', 'Eau gazeuse', 'Café', 'Thé à la menthe sahraoui traditionnel'],
      ar: ['عصير برتقال', 'عصير لافوكا', 'عصير بنان', 'عصير تفاح', 'عصير حامض', 'مونادا', 'ماء عادي', 'ماء غازي', 'قهوة', 'أتاي صحراوي تقليدي']
    }
  }
};
