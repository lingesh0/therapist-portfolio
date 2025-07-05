'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

export default function About() {
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
        duration: 0.6
      }
    }
  };

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients Helped",
      color: "from-[#2DD4BF] to-[#0F766E]"
    },
    {
      icon: Clock,
      number: "8+",
      label: "Years Experience",
      color: "from-[#2563EB] to-[#60A5FA]"
    },
    {
      icon: Award,
      number: "5.0",
      label: "Average Rating",
      color: "from-[#0F766E] to-[#2DD4BF]"
    },
    {
      icon: Heart,
      number: "95%",
      label: "Success Rate",
      color: "from-[#60A5FA] to-[#2563EB]"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white section-center section-spacing">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8 text-left items-start">
            <div>
              <h2 className="text-section-title-mobile md:text-section-title font-light text-slate-900 mb-6 section-header text-left">
                Meet Dr. Serena Blake
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I&apos;m a licensed clinical psychologist with over 8 years of experience helping adults 
                navigate life&apos;s challenges. My approach combines evidence-based therapeutic techniques 
                with genuine compassion and understanding.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I specialize in anxiety disorders, relationship counseling, and trauma recovery. 
                Whether you&apos;re struggling with overwhelming stress, relationship difficulties, 
                or healing from past experiences, I provide a safe, non-judgmental space for you 
                to explore, heal, and grow.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                My practice is built on the belief that everyone deserves to live a fulfilling, 
                meaningful life. I&apos;m committed to helping you develop the tools and insights 
                needed to create lasting positive change.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 text-left">Education & Credentials</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>PsyD in Clinical Psychology</strong><br />
                    <span className="text-sm">Pepperdine University, 2016</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Licensed Clinical Psychologist</strong><br />
                    <span className="text-sm">California Board of Psychology</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Certified in EMDR Therapy</strong><br />
                    <span className="text-sm">Trauma-focused treatment approach</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Member, American Psychological Association</strong><br />
                    <span className="text-sm">Committed to ongoing professional development</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Photo & Stats */}
          <motion.div variants={itemVariants} className="space-y-8 flex flex-col items-center">
            {/* Profile Photo */}
            <div className="relative flex flex-col items-center">
              <div className="relative z-10 mb-6">
                <div className="w-40 h-40 bg-gradient-to-br from-[#2DD4BF] to-[#0F766E] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-5xl font-bold text-white">SB</span>
                </div>
                <p className="text-lg font-medium text-slate-700 mt-2">Dr. Serena Blake</p>
                <p className="text-sm text-slate-500">Professional headshot</p>
              </div>
              {/* Floating Experience Card - now above stats grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 mb-6 flex items-center gap-3 w-56 justify-center"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-lg flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">8+ Years</div>
                  <div className="text-xs text-slate-600">Experience</div>
                </div>
              </motion.div>
            </div>
            {/* Stats Grid - single row, balanced boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="professional-card flex flex-col items-center justify-center h-32 min-w-[120px]"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-2`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 section-center"
        >
          <div className="text-center mb-12">
            <h3 className="text-responsive-lg font-light text-slate-900 mb-4 section-header">
              My Therapeutic Approach
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              I believe in creating a collaborative, evidence-based therapeutic relationship 
              that empowers you to make meaningful changes in your life.
            </p>
          </div>

          <div className="card-grid">
            <div className="professional-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2DD4BF] to-[#0F766E] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-3">Compassionate Care</h4>
              <p className="text-slate-600">
                I provide a warm, non-judgmental environment where you feel safe to explore 
                your thoughts, feelings, and experiences.
              </p>
            </div>

            <div className="professional-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-3">Evidence-Based</h4>
              <p className="text-slate-600">
                My therapeutic approaches are grounded in scientific research and proven 
                to be effective for lasting positive change.
              </p>
            </div>

            <div className="professional-card text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0F766E] to-[#2DD4BF] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-3">Collaborative</h4>
              <p className="text-slate-600">
                We work together as a team, with you as the expert on your own experience 
                and me providing guidance and support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 