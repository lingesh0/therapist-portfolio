'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "I do not directly accept insurance, but I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Many clients receive partial reimbursement for out-of-network mental health services. I recommend contacting your insurance provider to understand your specific benefits and coverage."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes! I offer both in-person and virtual therapy sessions. Virtual sessions are conducted via secure, HIPAA-compliant Zoom video calls. Many clients find online therapy just as effective as in-person sessions, and it offers the convenience of attending from anywhere you feel comfortable and private."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require 24-hour notice for session cancellations. Sessions cancelled with less than 24-hour notice will be charged the full session fee. I understand that emergencies and unexpected situations can arise, and I'm happy to discuss these circumstances on a case-by-case basis."
  },
  {
    question: "How long does therapy typically take?",
    answer: "The duration of therapy varies depending on your individual needs and goals. Some clients see significant improvement in 8-12 sessions, while others benefit from longer-term therapy. We'll regularly review your progress and discuss your treatment plan to ensure therapy is meeting your needs."
  },
  {
    question: "What can I expect in the first session?",
    answer: "The first session is primarily about getting to know each other and understanding what brings you to therapy. I'll ask about your current concerns, background, and goals. We'll also discuss practical matters like scheduling, fees, and my approach to therapy. There's no pressure to share everything at once - we'll go at your pace."
  },
  {
    question: "How do I know if therapy is right for me?",
    answer: "Therapy can be beneficial for anyone experiencing emotional distress, relationship challenges, life transitions, or simply wanting to understand themselves better. If you're considering therapy, that's often a good sign that it could be helpful. I offer a free 15-minute consultation to help you decide if we're a good fit."
  }
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-section-title-mobile md:text-section-title font-light text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Common questions about therapy, my approach, and what to expect
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item text-left">
              <button
                className="faq-button text-lg font-medium text-slate-900 flex justify-between items-center w-full"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                {faq.question}
                <span className="ml-4">
                  {openIndex === idx ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              <div
                className={`faq-content ${openIndex === idx ? 'max-h-96 py-4' : 'max-h-0'} text-slate-600 text-left`}
                style={{ transition: 'max-height 0.3s ease' }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-responsive-lg font-light text-slate-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              I&apos;m here to help you feel comfortable and informed about starting therapy. 
              Don&apos;t hesitate to reach out with any questions or concerns.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 