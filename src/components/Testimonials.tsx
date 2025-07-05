'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    age: 34,
    location: "Los Angeles, CA",
    rating: 5,
    text: "Dr. Blake helped me overcome my anxiety in ways I never thought possible. Her approach is both professional and incredibly warm. I finally feel like myself again.",
    service: "Anxiety Treatment",
    duration: "6 months"
  },
  {
    id: 2,
    name: "Michael R.",
    age: 28,
    location: "Beverly Hills, CA",
    rating: 5,
    text: "After struggling with relationship issues for years, Dr. Blake's counseling gave me the tools and confidence to build healthier connections. Her insights are life-changing.",
    service: "Relationship Counseling",
    duration: "8 months"
  },
  {
    id: 3,
    name: "Jennifer L.",
    age: 42,
    location: "Santa Monica, CA",
    rating: 5,
    text: "Dr. Blake's trauma therapy approach is gentle yet effective. She created a safe space for me to heal from past experiences. I'm grateful for her expertise and compassion.",
    service: "Trauma Recovery",
    duration: "12 months"
  },
  {
    id: 4,
    name: "David K.",
    age: 31,
    location: "West Hollywood, CA",
    rating: 5,
    text: "The virtual sessions are just as effective as in-person. Dr. Blake's flexibility and understanding made therapy accessible during a difficult time in my life.",
    service: "Virtual Therapy",
    duration: "4 months"
  },
  {
    id: 5,
    name: "Amanda T.",
    age: 29,
    location: "Venice, CA",
    rating: 5,
    text: "Dr. Blake's stress management techniques are practical and easy to implement. I've learned to handle work pressure without it affecting my mental health.",
    service: "Stress Management",
    duration: "5 months"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-section-title-mobile md:text-section-title font-light text-slate-900 mb-4">
            What My Clients Say
          </h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from people who have transformed their lives through therapy
          </p>
        </motion.div>

        {/* Testimonials Carousel - Centered as a unit */}
        <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full"
          >
            {/* Main Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="testimonial-card relative text-left border border-[#2DD4BF]/30 shadow-2xl p-10 md:p-12 mb-10"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-r from-[#2DD4BF] to-[#0F766E] rounded-full flex items-center justify-center shadow-lg">
                <Quote size={28} className="text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h4 className="font-semibold text-slate-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-600">
                    {testimonials[currentIndex].age} • {testimonials[currentIndex].location}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="time-badge">
                      {testimonials[currentIndex].service}
                    </span>
                    <span className="text-sm text-slate-500">
                      {testimonials[currentIndex].duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Navigation Arrows - vertically centered with card */}
            <button
              onClick={prevTestimonial}
              className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 border border-[#2DD4BF]/30 z-10"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 border border-[#2DD4BF]/30 z-10"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                    index === currentIndex
                      ? 'bg-[#2DD4BF] border-[#0F766E] scale-125'
                      : 'bg-gray-300 border-gray-400 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Centered and same width as CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 mb-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-left w-full max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2DD4BF] mb-2">500+</div>
            <div className="text-slate-600">Clients Helped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2DD4BF] mb-2">5.0</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2DD4BF] mb-2">8+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2DD4BF] mb-2">95%</div>
            <div className="text-slate-600">Success Rate</div>
          </div>
        </motion.div>

        {/* CTA Section - visually grouped, smaller button, modern look */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto mt-2"
        >
          <div className="bg-gradient-to-r from-[#F8FAFC] to-[#E0F2FE] rounded-2xl p-8 border border-[#2DD4BF]/20 shadow-lg flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3 text-center">
              Ready to Start Your Journey?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-center">
              Join hundreds of others who have transformed their lives through therapy. 
              Your first consultation is completely free and confidential.
            </p>
            <a href="#contact" className="btn-cta text-base py-3 px-8 rounded-lg shadow-md hover:scale-105 transition-transform">
              Book Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 