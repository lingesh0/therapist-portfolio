'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Star, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen hero-gradient section-center section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#2DD4BF]/10 to-[#0F766E]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#2563EB]/10 to-[#60A5FA]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="section-center max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-responsive-xl font-bold text-slate-900 mb-6 leading-tight section-header"
          >
            Therapy that helps you{' '}
            <span className="text-gradient">thrive</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-responsive-md text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Dr. Serena Blake, PsyD • Clinical Psychologist in Los Angeles
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Specialized in anxiety, relationships, and trauma recovery. 
            Compassionate, evidence-based therapy for adults seeking meaningful change.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="btn-group mb-6"
          >
            <button
              onClick={scrollToContact}
              className="btn-cta"
            >
              <Calendar size={20} className="mr-2" />
              Book Free Consultation
            </button>
            <a
              href="#about"
              className="btn-secondary"
            >
              Learn More About Me
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="trust-indicators"
          >
            <div className="flex items-center space-x-2">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span>5.0 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-[#2DD4BF]" />
              <span>Los Angeles Office</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-[#2DD4BF]" />
              <span>Virtual & In-Person</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="card-grid mt-10"
        >
          <div className="professional-card card-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2DD4BF] to-[#0F766E] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Free Consultation</h3>
            <p className="text-slate-600 text-sm">15-minute initial session to discuss your needs</p>
          </div>

          <div className="professional-card card-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Evidence-Based</h3>
            <p className="text-slate-600 text-sm">Proven therapeutic approaches for lasting change</p>
          </div>

          <div className="professional-card card-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#0F766E] to-[#2DD4BF] rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Flexible Options</h3>
            <p className="text-slate-600 text-sm">In-person or virtual sessions to fit your schedule</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 