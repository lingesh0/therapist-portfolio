'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  agreeToContact?: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us what brings you here';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agreeToContact: false
      });
      setSubmitSuccess(false);
    }, 5000);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: "1287 Maplewood Drive, Los Angeles, CA 90026"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(323) 555-0192"
    },
    {
      icon: Mail,
      title: "Email",
      details: "serena@blakepsychology.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "In-person: Tue & Thu, 10 AM&ndash;6 PM\nVirtual: Mon, Wed & Fri, 1 PM&ndash;5 PM"
    }
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-3 text-center"
        >
          Get Started Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-14 text-center"
        >
          Ready to begin your journey toward healing and growth? Reach out for a free consultation.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl px-10 md:px-16 py-10 md:py-16 border border-slate-200 text-left flex flex-col gap-10 min-h-[420px] md:min-h-[500px] w-full max-w-xl mx-auto"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-5 md:gap-6">
                    <div className="w-11 h-11 bg-blue-100 text-blue-700 flex items-center justify-center rounded-xl text-lg">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-0.5">{info.title}</h4>
                      <p className="text-slate-600 whitespace-pre-line text-base">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* What to Expect */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl px-8 md:px-12 py-6 md:py-8 mt-2 shadow-sm">
              <h4 className="font-semibold text-blue-800 mb-3">What to Expect</h4>
              <ul className="space-y-2 text-blue-900 text-base pl-2">
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>Free 15-minute consultation to discuss your needs</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>Flexible scheduling for in-person and virtual sessions</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>Secure, confidential, and HIPAA-compliant care</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 bg-blue-400 rounded-full inline-block"></span>Personalized treatment plans tailored to your goals</li>
              </ul>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl px-10 md:px-16 py-10 md:py-16 border border-slate-200 w-full max-w-2xl mx-auto min-h-[600px] flex flex-col justify-center"
          >
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 mx-auto rounded-full flex items-center justify-center mb-4 text-3xl">✓</div>
                <h4 className="text-2xl font-semibold text-green-700 mb-2">Thank you!</h4>
                <p className="text-green-600">Your message has been sent. I&apos;ll be in touch soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name */}
                <div>
                  <label className="block text-base font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`form-input${errors.name ? ' form-input-error' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-base font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`form-input${errors.phone ? ' form-input-error' : ''}`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                </div>
                {/* Email */}
                <div>
                  <label className="block text-base font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`form-input${errors.email ? ' form-input-error' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
                {/* Message */}
                <div>
                  <label className="block text-base font-medium mb-1">What brings you here? *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`form-input${errors.message ? ' form-input-error' : ''}`}
                    placeholder="Tell me a bit about what you&apos;re looking for..."
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                </div>
                {/* Preferred Time */}
                <div>
                  <label className="block text-base font-medium mb-1">Preferred time to reach you</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
                {/* Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={formData.agreeToContact}
                    onChange={(e) => handleInputChange('agreeToContact', e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label className="text-sm">I agree to be contacted by Dr. Blake *</label>
                </div>
                {errors.agreeToContact && (
                  <p className="text-sm text-red-500 mt-1">{errors.agreeToContact}</p>
                )}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04, backgroundColor: '#2563eb' }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2.5 px-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition text-base font-semibold shadow-md"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                <p className="text-center text-xs text-slate-500 mt-2">
                  Your information is secure and confidential.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
