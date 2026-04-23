import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-12 px-8 flex items-center justify-center overflow-hidden h-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] mb-2 font-semibold">
            Silky N Shine Salon
          </h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
            Enhancing Your <br/> <span className="gold-text-gradient">Natural Beauty</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-xs mx-auto font-light italic mb-8">
            "Luxury treatments for the modern queen."
          </p>
          
          <div className="flex flex-col gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="px-8 py-3 gold-gradient text-black font-bold uppercase tracking-widest text-xs rounded-lg shadow-gold transition-all"
            >
              Book Appointment
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
