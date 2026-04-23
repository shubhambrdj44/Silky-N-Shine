import { Phone, MapPin, Clock, Instagram, Youtube, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const businessInfo = [
    { 
      icon: Phone, 
      label: 'Call', 
      value: '+91 8447414614',
      href: 'tel:+918447414614',
      external: false
    },
    { 
      icon: Clock, 
      label: 'Hours', 
      value: '10 AM – 9 PM',
      href: '#',
      external: false
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Silky N Shine, Laxmi Nagar',
      href: 'https://maps.app.goo.gl/rhAr4M4t4DNriMEP8',
      external: true
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/poojamakeover1_/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/c/Poojamakeovers1' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/people/Silky-Shine-Beauty-Salon/100054646111268/' },
  ];

  return (
    <div id="contact" className="p-8 h-full bg-transparent">
      <div className="mb-6">
        <h3 className="text-luxury-gold uppercase tracking-[0.4em] font-semibold mb-2 text-[10px]">Contact</h3>
        <h2 className="text-2xl font-serif font-bold italic">Get in <span className="not-italic text-luxury-gold">Touch</span></h2>
      </div>
      
      <div className="space-y-4 mb-8">
        {businessInfo.map((info, i) => (
          <a 
            key={i} 
            href={info.href} 
            target={info.external ? "_blank" : undefined}
            rel={info.external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center shrink-0 border border-luxury-gold/20 group-hover:bg-luxury-gold/20">
              <info.icon className="text-luxury-gold" size={16} />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">{info.label}</div>
              <div className="text-sm font-medium text-white group-hover:text-luxury-gold transition-colors">{info.value}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t border-white/5">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            whileHover={{ y: -3, scale: 1.1 }}
            href={social.href}
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold hover:border-luxury-gold transition-all"
          >
            <social.icon size={16} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
