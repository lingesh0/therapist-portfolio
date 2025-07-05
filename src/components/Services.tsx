'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Heart, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Anxiety & Stress Management',
    description:
      'Learn practical techniques to manage anxiety, reduce stress, and develop healthy coping mechanisms. We\'ll work together to identify triggers and build resilience for a calmer, more balanced life.',
    color: 'from-teal-500 to-teal-600',
    hover: 'hover:bg-teal-50 hover:shadow-teal-200',
  },
  {
    icon: Heart,
    title: 'Relationship Counseling',
    description:
      'Navigate relationship challenges with improved communication, conflict resolution, and emotional intimacy. Whether you\'re single, dating, or in a long-term relationship, we\'ll explore patterns and build healthier connections.',
    color: 'from-blue-500 to-blue-600',
    hover: 'hover:bg-blue-50 hover:shadow-blue-200',
  },
  {
    icon: Shield,
    title: 'Trauma Recovery',
    description:
      'Heal from past trauma in a safe, supportive environment. Using evidence-based approaches like EMDR and trauma-focused therapy, we\'ll work through painful experiences and help you reclaim your life.',
    color: 'from-slate-600 to-slate-700',
    hover: 'hover:bg-slate-50 hover:shadow-slate-200',
  },
  {
    icon: Brain,
    title: 'Mindfulness & Wellness Coaching',
    description:
      'Develop mindfulness skills and holistic wellness strategies to improve focus, emotional balance, and overall well-being. Personalized coaching for stress reduction and personal growth.',
    color: 'from-green-400 to-teal-500',
    hover: 'hover:bg-green-50 hover:shadow-green-200',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section
      id="services"
      className="min-h-screen bg-[#F9FAFB] font-dm-sans flex items-center justify-center px-6"
    >
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full max-w-6xl"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2563EB] mb-2">Services</h2>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed"
>

</motion.p>


        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 items-stretch">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 32px 0 rgba(45,212,191,0.10)',
                y: -6,
              }}
              whileTap={{ scale: 0.98 }}
              className={`group cursor-pointer bg-white rounded-2xl p-8 shadow-lg border border-slate-100 transition-all duration-300 border-l-4 ${service.color.replace(
                'to-',
                'border-'
              )} ${service.hover} h-full flex flex-col justify-between`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110`}
                >
                  <service.icon size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#2563EB] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>

              {/* Learn More */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a
                  href="#contact"
                  className="flex items-center text-[#2563EB] font-medium underline underline-offset-2 group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
