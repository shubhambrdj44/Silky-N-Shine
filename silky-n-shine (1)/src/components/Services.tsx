import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BRIDAL_PACKAGES, 
  PRE_BRIDAL_PACKAGES, 
  FACIAL_SERVICES, 
  CLEAN_UP, 
  WAXING, 
  HAIR_SERVICES, 
  MAKEUP_OTHER, 
  SPECIAL_OFFERS,
  OTHER_SERVICES
} from '../types';
import { Check, Scissors, Sparkles, User, Waves, Zap, Star } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('bridal');

  const tabs = [
    { id: 'bridal', name: 'Bridal', icon: HeartIcon },
    { id: 'facial', name: 'Facial', icon: Sparkles },
    { id: 'hair', name: 'Hair', icon: Scissors },
    { id: 'makeup', name: 'Makeup', icon: User },
    { id: 'body', name: 'Body', icon: Zap },
  ];

  return (
    <section id="services" className="p-8 h-full bg-transparent relative">
      <div className="mb-10">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-luxury-gold uppercase tracking-[0.4em] font-semibold mb-2 text-[10px]"
        >
          Treatments
        </motion.h3>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-serif font-bold mb-6"
        >
          Service <span className="gold-text-gradient italic">Menu</span>
        </motion.h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                activeTab === tab.id 
                ? 'gold-gradient text-black shadow-none' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon size={12} />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'bridal' && (
                <div className="space-y-16">
                  <div>
                    <h4 className="text-2xl font-serif text-luxury-gold mb-8 italic border-b border-luxury-gold/20 pb-2">Bridal Masterpieces</h4>
                    <div className="grid md:grid-cols-3 gap-8">
                      {BRIDAL_PACKAGES.map((pkg, i) => (
                        <PriceCard key={i} title={pkg.name} price={pkg.price} items={pkg.items} highlight={i === 2} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-luxury-gold mb-8 italic border-b border-luxury-gold/20 pb-2">Pre-Bridal Rituals</h4>
                    <div className="grid md:grid-cols-3 gap-8">
                      {PRE_BRIDAL_PACKAGES.map((pkg, i) => (
                        <PriceCard key={i} title={pkg.name} price={pkg.price} items={pkg.items} />
                      ))}
                    </div>
                  </div>
                  <div className="glass p-8 rounded-3xl border-luxury-red/30">
                    <h4 className="text-xl font-serif text-luxury-red mb-6 flex items-center gap-3">
                      <Star className="fill-current" size={20} />
                      Exclusive Offers
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {SPECIAL_OFFERS.map((offer, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-200 font-medium">
                          <Check className="text-luxury-gold shrink-0" size={18} />
                          {offer}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'facial' && (
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h4 className="text-2xl font-serif text-luxury-gold mb-6 border-b border-luxury-gold/20 pb-2">Signature Facials</h4>
                    <div className="space-y-4">
                      {FACIAL_SERVICES.map((service) => (
                        <MenuItem key={service.id} name={service.name} price={service.price} />
                      ))}
                      <p className="text-xs text-luxury-gold/60 mt-4 italic font-medium">Note: Machine Add-ons are an additional ₹200/-</p>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <h4 className="text-2xl font-serif text-luxury-gold mb-6 border-b border-luxury-gold/20 pb-2">Revitalizing Clean-ups</h4>
                    <div className="space-y-4">
                      {CLEAN_UP.map((service) => (
                        <MenuItem key={service.id} name={service.name} price={service.price} />
                      ))}
                      <p className="text-xs text-luxury-gold/60 mt-4 italic font-medium">Note: Machine Add-ons are an additional ₹200/-</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hair' && (
                <div className="grid md:grid-cols-2 gap-12">
                  {HAIR_SERVICES.map((cat, i) => (
                    <div key={i} className="space-y-6">
                      <h4 className="text-2xl font-serif text-luxury-gold mb-4 border-b border-luxury-gold/20 pb-2">{cat.category}</h4>
                      <div className="space-y-4">
                        {cat.items.map((item, j) => (
                          <MenuItem key={j} name={item.name} price={item.price} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'makeup' && (
                <div className="max-w-4xl mx-auto space-y-12">
                   <div className="grid md:grid-cols-1 gap-8">
                    <div className="space-y-8">
                      <h4 className="text-2xl font-serif text-luxury-gold mb-6 border-b border-luxury-gold/20 pb-2">Makeup Services</h4>
                      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                        {MAKEUP_OTHER.map((service) => (
                          <MenuItem key={service.id} name={service.name} price={service.price} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'body' && (
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h4 className="text-2xl font-serif text-luxury-gold mb-6 border-b border-luxury-gold/20 pb-2">Body & Wellness</h4>
                    <div className="space-y-4">
                      {OTHER_SERVICES.map((service) => (
                        <MenuItem key={service.id} name={service.name} price={service.price} />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-8">
                    <h4 className="text-2xl font-serif text-luxury-gold mb-6 border-b border-luxury-gold/20 pb-2">Luxury Waxing</h4>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin">
                      {WAXING.map((service) => (
                        <MenuItem key={service.id} name={service.name} price={service.price} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
    </section>
  );
};

// Helper Components
const HeartIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const PriceCard: React.FC<{ title: string, price: string, items: string[], highlight?: boolean }> = ({ title, price, items, highlight = false }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-8 rounded-3xl border ${highlight ? 'border-luxury-gold bg-luxury-gold/5' : 'border-white/10 glass'} h-full flex flex-col`}
  >
    <h5 className="text-white text-sm uppercase tracking-widest font-bold mb-2">{title}</h5>
    <div className="text-3xl font-serif font-bold text-luxury-gold mb-8">{price}</div>
    <ul className="space-y-4 mb-8 flex-grow">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
          <Check className="text-luxury-gold shrink-0" size={16} />
          {item}
        </li>
      ))}
    </ul>
    <a href="#booking" className={`w-full text-center py-3 rounded-xl uppercase tracking-widest font-bold text-xs transition-all ${highlight ? 'gold-gradient text-black' : 'border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-black'}`}>
      Book Package
    </a>
  </motion.div>
);

const MenuItem: React.FC<{ name: string, price: string }> = ({ name, price }) => (
  <div className="group flex justify-between items-end gap-4">
    <div className="text-gray-300 font-medium group-hover:text-luxury-gold transition-colors duration-300">{name}</div>
    <div className="flex-grow border-b border-white/10 border-dotted mb-1 group-hover:border-luxury-gold/40 transition-colors"></div>
    <div className="text-luxury-gold font-bold font-serif">{price}</div>
  </div>
);

export default Services;
