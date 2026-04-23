import React, { useState } from 'react';
import { motion } from 'motion/react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    'Bridal Makeup',
    'Engagement Makeup',
    'Party Makeup',
    'Facial Treatment',
    'Hair Services',
    'Pre-Bridal Package',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service, date, time, message } = formData;
    const text = `Hello, I want to book an appointment at Silky N Shine.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nMessage: ${message}`;
    window.open(`https://wa.me/918447414614?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="booking" className="p-8 h-full flex flex-col justify-center">
      <div className="relative z-10">
        <h2 className="text-3xl font-serif font-bold text-center mb-2">Book <span className="gold-text-gradient">Experience</span></h2>
        <p className="text-gray-500 text-center mb-8 uppercase tracking-widest text-[9px] font-bold">
          Quick confirmation via WhatsApp
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold ml-1">Name</label>
            <input 
              type="text" 
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-sm text-white outline-none focus:border-luxury-gold"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold ml-1">Service</label>
            <select 
              name="service"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-sm text-white outline-none focus:border-luxury-gold appearance-none"
              onChange={handleChange}
              value={formData.service}
            >
              <option value="" disabled className="bg-black text-white">Select Service</option>
              {services.map((s, i) => <option key={i} value={s} className="bg-black text-white">{s}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold ml-1">Date</label>
              <input type="date" name="date" required className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-xs text-white [color-scheme:dark]" onChange={handleChange} />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold ml-1">Time</label>
              <input type="time" name="time" required className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-xs text-white [color-scheme:dark]" onChange={handleChange} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 gold-gradient text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-gold mt-4"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
