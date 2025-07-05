'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 px-4 pt-16 pb-6 w-full flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
          {/* Practice Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white !text-white mb-2">
              Dr. Serena Blake, PsyD
            </h3>
            <p className="text-slate-200 leading-relaxed text-base md:text-lg">
              Licensed Clinical Psychologist providing compassionate, evidence-based therapy 
              for individuals seeking healing and personal growth in Los Angeles.
            </p>
            <div className="flex items-center justify-center pt-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white/30">
                <span className="text-lg font-bold tracking-widest text-white">SB</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h4 className="text-xl md:text-2xl font-bold mb-2 text-white !text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <MapPin size={16} className="text-teal-400" />
                <span className="text-slate-100 text-sm sm:text-base">
                  1287 Maplewood Drive, Los Angeles, CA 90026
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone size={16} className="text-teal-400" />
                <span className="text-slate-100 text-sm sm:text-base">
                  (323) 555-0192
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail size={16} className="text-teal-400" />
                <span className="text-slate-100 text-sm sm:text-base">
                  serena@blakepsychology.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h4 className="text-xl md:text-2xl font-bold mb-2 text-white !text-white">Office Hours</h4>
            <div className="space-y-2 text-slate-100 text-sm sm:text-base">
              <div>
                <span className="font-semibold text-white">In-person:</span><br />
                Tuesday & Thursday<br />
                10 AM – 6 PM
              </div>
              <div className="pt-2">
                <span className="font-semibold text-white">Virtual:</span><br />
                Monday, Wednesday & Friday<br />
                1 PM – 5 PM
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-14 pt-8 text-center"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-slate-200 text-sm">
              © 2024 Dr. Serena Blake Psychology. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#about" className="text-slate-200 hover:text-white transition-colors font-medium">About</a>
              <a href="#services" className="text-slate-200 hover:text-white transition-colors font-medium">Services</a>
              <a href="#contact" className="text-slate-200 hover:text-white transition-colors font-medium">Contact</a>
            </div>
          </div>
         
        </motion.div>
      </div>
    </footer>
  );
}
