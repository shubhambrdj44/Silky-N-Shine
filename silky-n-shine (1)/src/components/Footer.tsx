import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="text-3xl font-serif font-bold tracking-tighter mb-6 block">
              SILKY N <span className="gold-text-gradient">SHINE</span>
            </a>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Elevating the beauty salon experience in Faridabad. We specialize in luxury bridal and grooming services with a touch of elegance.
            </p>
          </div>
          
          <div>
            <h4 className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-luxury-gold transition-colors text-sm uppercase tracking-wider">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors text-sm uppercase tracking-wider">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Silky N Shine. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            Designed for Perfection
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
