import { motion } from 'motion/react';

const galleryImages = [
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800", // Eye Art
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800", // Manicure Service
];

const Gallery = () => {
  return (
    <section id="gallery" className="p-8 h-full bg-transparent">
      <div className="mb-8">
        <h3 className="text-luxury-gold uppercase tracking-[0.4em] font-semibold mb-2 text-[10px]">Portfolio</h3>
        <h2 className="text-2xl font-serif font-bold italic">Gallery <span className="not-italic">Highlights</span></h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {galleryImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer border border-white/5 ${i === 0 ? 'col-span-2 aspect-video' : ''}`}
          >
            <img 
              src={src} 
              alt={`Salon Work ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
