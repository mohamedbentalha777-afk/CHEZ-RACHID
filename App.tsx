
import React, { useState, useEffect } from 'react';
import { translations, menuData, extraMenu } from './translations';
import { Language, Page } from './types';
import { 
  MapPin, 
  Phone, 
  Menu as MenuIcon, 
  Info, 
  Home as HomeIcon, 
  Navigation, 
  MessageCircle, 
  Globe,
  UtensilsCrossed,
  Clock,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const WhatsAppBtn = () => (
    <a 
      href="https://wa.me/212666968428" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 sahara-gradient p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 text-white font-bold group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm">
        {t.contactWhatsApp}
      </span>
      <MessageCircle size={28} />
    </a>
  );

  const Navbar = () => (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center" dir={isRTL ? 'rtl' : 'ltr'}>
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate('home')}
        >
          <div className="w-10 h-10 sahara-gradient rounded-lg flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform">
            <UtensilsCrossed size={22} />
          </div>
          <span className="font-bold text-xl tracking-tight text-stone-800">CHEZ RACHID</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-stone-600">
          <button onClick={() => navigate('home')} className={`hover:text-amber-600 transition ${currentPage === 'home' ? 'text-amber-600' : ''}`}>{t.navHome}</button>
          <button onClick={() => navigate('menu')} className={`hover:text-amber-600 transition ${currentPage === 'menu' ? 'text-amber-600' : ''}`}>{t.navMenu}</button>
          <button onClick={() => navigate('about')} className={`hover:text-amber-600 transition ${currentPage === 'about' ? 'text-amber-600' : ''}`}>{t.navAbout}</button>
          <button onClick={() => navigate('location')} className={`hover:text-amber-600 transition ${currentPage === 'location' ? 'text-amber-600' : ''}`}>{t.navLocation}</button>
          <button onClick={() => navigate('contact')} className={`hover:text-amber-600 transition ${currentPage === 'contact' ? 'text-amber-600' : ''}`}>{t.navContact}</button>
        </div>

        <div className="flex items-center gap-2">
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as Language)}
            className="bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full text-sm font-bold border-none outline-none focus:ring-2 focus:ring-amber-500 appearance-none cursor-pointer"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
          <Globe size={18} className="text-stone-400" />
        </div>
      </div>
    </nav>
  );

  const Home = () => (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/163/1600/900" 
            alt="Sahara vibes" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl" dir={isRTL ? 'rtl' : 'ltr'}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            {isRTL ? 'مطعم عند رشيد' : 'Restaurant Chez Rachid'}
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto italic">
            {t.heroSlogan}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('menu')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition transform"
            >
              {t.heroCTA}
            </button>
            <button 
              onClick={() => navigate('location')}
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition shadow-xl"
            >
              {t.navLocation}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Location Info */}
      <section className="py-16 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
            <div className="w-14 h-14 sahara-gradient rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800">Foum Zguid</h3>
            <p className="text-stone-600">{t.locationDirections}</p>
          </div>
          <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <Clock size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800">Non-Stop Service</h3>
            <p className="text-stone-600">Always ready for travelers, tourists and truck drivers.</p>
          </div>
          <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
            <div className="w-14 h-14 sahara-gradient rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <Navigation size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800">Strategic Stop</h3>
            <p className="text-stone-600">{t.locationHighlight}</p>
          </div>
        </div>
      </section>
    </div>
  );

  const Menu = () => (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fadeIn" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">{t.menuTitle}</h2>
        <div className="w-24 h-1.5 sahara-gradient mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData.map((menu) => (
          <div key={menu.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100 hover:-translate-y-2 transition duration-300">
            <div className="h-48 overflow-hidden relative">
              <img src={`https://picsum.photos/id/${100 + menu.id}/600/400`} alt={menu.title[lang]} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-2xl font-bold">{menu.title[lang]}</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {menu.items[lang].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-700 font-medium">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Extra Menus */}
        <div className="bg-stone-800 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-amber-500 text-3xl font-bold mb-6">{extraMenu.tacos.title[lang]}</h3>
              <ul className="space-y-4">
                {extraMenu.tacos.items[lang].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-100 text-lg font-medium">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-stone-400 text-sm">Deliciously Grilled</div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-3xl overflow-hidden shadow-xl border border-amber-200 lg:col-span-2">
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-stone-800 text-3xl font-bold mb-6">{extraMenu.drinks.title[lang]}</h3>
              <ul className="grid grid-cols-1 gap-3">
                {extraMenu.drinks.items[lang].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-700 font-medium">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img src="https://picsum.photos/id/431/400/400" alt="Drinks" className="rounded-2xl shadow-lg w-full max-w-xs object-cover aspect-square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fadeIn" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-stone-800 mb-6">{t.aboutTitle}</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            {t.aboutText}
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Our strategic location at the entrance of the city makes us the perfect point to refuel before heading into the vast Moroccan Sahara. Enjoy a warm welcome from Rachid and the whole team!
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://picsum.photos/id/10/800/600" 
            alt="Interior" 
            className="rounded-3xl shadow-2xl relative z-10"
          />
          <div className="absolute -top-6 -right-6 w-32 h-32 sahara-gradient rounded-full -z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-stone-200 rounded-3xl -z-0"></div>
        </div>
      </div>
    </div>
  );

  const Location = () => (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fadeIn" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-stone-800 mb-4">{t.locationTitle}</h2>
        <p className="text-xl text-stone-600">{t.locationDesc}</p>
      </div>
      
      <div className="bg-white p-4 rounded-3xl shadow-2xl border border-stone-100 overflow-hidden mb-12">
        {/* Placeholder for Map with clear visual cues */}
        <div className="bg-stone-200 w-full aspect-video rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group">
          <img src="https://picsum.photos/id/442/1200/600?grayscale" alt="Map View" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur shadow-2xl rounded-2xl max-w-lg border-2 border-amber-500">
             <MapPin size={48} className="text-amber-600 mx-auto mb-4 animate-bounce" />
             <h3 className="text-2xl font-bold text-stone-800 mb-2">Foum Zguid Roundabout</h3>
             <p className="text-stone-700 font-semibold mb-4 text-lg">
                📍 {t.locationDirections}
             </p>
             <div className="text-stone-600 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                {t.locationCallToAction}
             </div>
             <p className="mt-4 text-xs text-stone-400">Search "Restaurant Chez Rachid Foum Zguid" on Google Maps for precise navigation.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-amber-600 text-white p-8 rounded-3xl shadow-xl flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <ArrowRight size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-1">Coming from the City Center?</h4>
            <p className="opacity-90">Look for the "Rompa" (Roundabout). We are on the road to Lbosta.</p>
          </div>
        </div>
        <div className="bg-stone-800 text-white p-8 rounded-3xl shadow-xl flex items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
            <Phone size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-1">Lost? Call us!</h4>
            <p className="opacity-90">+212 666 968 428</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Contact = () => (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fadeIn" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-stone-800 mb-8">{t.contactTitle}</h2>
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 sahara-gradient rounded-full flex items-center justify-center text-white shadow-xl">
              <Phone size={40} />
            </div>
            <div className="text-center">
              <p className="text-stone-500 uppercase tracking-widest text-sm mb-2">WhatsApp & Phone</p>
              <a 
                href="tel:+212666968428" 
                className="text-3xl md:text-4xl font-bold text-stone-800 hover:text-amber-600 transition"
              >
                +212 666 968 428
              </a>
            </div>
            <div className="w-full h-px bg-stone-100 my-4"></div>
            <a 
              href="https://wa.me/212666968428" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg transition transform hover:scale-105"
            >
              <MessageCircle size={24} />
              {t.contactWhatsApp}
            </a>
            <p className="text-stone-500 mt-4 italic">
              Nous parlons Français, English & Arabic
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {currentPage === 'home' && <Home />}
        {currentPage === 'menu' && <Menu />}
        {currentPage === 'about' && <About />}
        {currentPage === 'location' && <Location />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 px-4 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left" dir={isRTL ? 'rtl' : 'ltr'}>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Chez Rachid</h4>
            <p className="text-sm max-w-xs mx-auto md:mx-0">Traditional Saharan hospitality in the heart of Foum Zguid. A family atmosphere for all travelers.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('menu')} className="hover:text-white transition">Menu</button></li>
              <li><button onClick={() => navigate('location')} className="hover:text-white transition">Location</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-white transition">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Visit Us</h4>
            <p className="text-sm">Foum Zguid, Route Lbosta</p>
            <p className="text-sm mt-2">+212 666 968 428</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Restaurant Chez Rachid. {t.footerRights}</p>
        </div>
      </footer>

      <WhatsAppBtn />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default App;
