'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

export default function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [100, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = (method: 'phone' | 'email') => {
    if (method === 'phone') {
      window.location.href = 'tel:+13235550192';
    } else {
      window.location.href = 'mailto:serena@blakepsychology.com';
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ opacity, y }}
      className="sticky-booking-bar py-1 px-0"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-1 gap-1 min-h-0">
          {/* Left side - Quick info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-slate-700">
                Available for new clients
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-slate-600">
              <Calendar size={14} />
              <span>Free 15-min consultation</span>
            </div>
          </div>
          {/* Center - CTA */}
          <div className="flex-1 md:flex-none md:mx-4 flex justify-center">
            <button
              onClick={scrollToContact}
              className="btn-cta text-sm py-1.5 px-4 rounded-md shadow-md flex items-center"
            >
              <Calendar size={15} className="mr-1" />
              Book Free Consultation
            </button>
          </div>
          {/* Right side - Contact options */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleContact('phone')}
              className="flex items-center space-x-1 px-2 py-1 text-slate-700 hover:text-[#2563EB] transition-colors duration-200 text-xs"
            >
              <Phone size={14} />
              <span>Call</span>
            </button>
            <button
              onClick={() => handleContact('email')}
              className="flex items-center space-x-1 px-2 py-1 text-slate-700 hover:text-[#2563EB] transition-colors duration-200 text-xs"
            >
              <MessageCircle size={14} />
              <span>Email</span>
            </button>
          </div>
          {/* Mobile contact buttons */}
          <div className="flex md:hidden items-center space-x-1">
            <button
              onClick={() => handleContact('phone')}
              className="p-1.5 bg-[#2DD4BF] text-white rounded-full hover:bg-[#0F766E] transition-colors duration-200"
              aria-label="Call now"
            >
              <Phone size={14} />
            </button>
            <button
              onClick={() => handleContact('email')}
              className="p-1.5 bg-[#2563EB] text-white rounded-full hover:bg-[#1D4ED8] transition-colors duration-200"
              aria-label="Send email"
            >
              <MessageCircle size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 