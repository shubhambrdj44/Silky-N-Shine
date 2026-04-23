/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto bento-grid">
          {/* Column 1: Hero & About */}
          <div className="lg:grid-row-span-2 space-y-6">
            <div className="bento-card bg-luxury-red/20 group">
              <Hero />
            </div>
            <div className="bento-card">
              <About />
            </div>
          </div>

          {/* Column 2: Services & Gallery */}
          <div className="space-y-6">
            <div className="bento-card">
              <Services />
            </div>
            <div className="bento-card">
              <Gallery />
            </div>
          </div>

          {/* Column 3: Booking & Contact */}
          <div className="lg:grid-row-span-2 space-y-6">
            <div className="bento-card h-full">
              <BookingForm />
            </div>
            <div className="bento-card">
              <Contact />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

