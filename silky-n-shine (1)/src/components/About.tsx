import { motion } from 'motion/react';
import { Sparkles, Star, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="p-8 h-full relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-luxury-gold uppercase tracking-[0.3em] font-semibold mb-4 text-[10px]">Our Story</h3>
        <h2 className="text-2xl font-serif font-bold mb-4 leading-tight">
          Crafting Beauty and <span className="italic underline decoration-luxury-gold/30">Confidence</span>
        </h2>
        <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">
          Silky N Shine is a premium beauty salon offering expert bridal makeup, skincare, hair styling, and luxury beauty treatments. We focus on enhancing natural beauty using high-quality products.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
              <Sparkles className="text-luxury-gold" size={14} />
            </div>
            <span className="text-xs font-serif font-bold text-luxury-gold tracking-wide">Expert Professional Care</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
              <Heart className="text-luxury-gold" size={14} />
            </div>
            <span className="text-xs font-serif font-bold text-luxury-gold tracking-wide">Natural Organic Glow</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/5 aspect-video mb-4">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
            alt="Salon Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
