import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
            Contact
          </h2>
          <p className="mt-4 text-lg text-primary-800 dark:text-gray-300">Get in touch with me</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 
                          transition-all duration-300 animate-float border border-primary-100 dark:border-gray-700">
              <div className="space-y-8">
                <div className="flex items-center group cursor-pointer">
                  <div className="p-3 bg-primary-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary-200 
                                dark:group-hover:bg-gray-600 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-gray-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-900 dark:text-gray-100">Email</h3>
                    <a href="mailto:kalpanag124@gmail.com" 
                       className="text-primary-700 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors">
                      kalpanag124@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group cursor-pointer">
                  <div className="p-3 bg-primary-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary-200 
                                dark:group-hover:bg-gray-600 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary-600 dark:text-gray-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-900 dark:text-gray-100">Phone</h3>
                    <a href="tel:+917569598341" 
                       className="text-primary-700 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-500 transition-colors">
                      7569598341
                    </a>
                  </div>
                </div>

                <div className="flex items-center group cursor-pointer">
                  <div className="p-3 bg-primary-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary-200 
                                dark:group-hover:bg-gray-600 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-gray-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-900 dark:text-gray-100">Location</h3>
                    <p className="text-primary-700 dark:text-gray-400">Vijayawada, AP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6 animate-scale-in
                         border border-primary-100 dark:border-gray-700">
            {status === 'success' && (
              <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4 
                            flex items-center text-green-700 dark:text-green-300 animate-fade-in">
                <CheckCircle className="w-5 h-5 mr-2" />
                Message sent successfully!
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg p-4 
                            flex items-center text-red-700 dark:text-red-300 animate-fade-in">
                <AlertCircle className="w-5 h-5 mr-2" />
                Failed to send message. Please try again.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-900 dark:text-gray-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border-primary-200 dark:border-gray-700 
                          shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                          ${errors.name ? 'border-red-300' : ''}`}
                disabled={status === 'loading'}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fade-in">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-900 dark:text-gray-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border-primary-200 dark:border-gray-700 
                          shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                          ${errors.email ? 'border-red-300' : ''}`}
                disabled={status === 'loading'}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fade-in">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-900 dark:text-gray-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`mt-1 block w-full rounded-lg border-primary-200 dark:border-gray-700 
                          shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                          ${errors.message ? 'border-red-300' : ''}`}
                disabled={status === 'loading'}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fade-in">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg
                        text-white bg-gradient-to-r from-primary-600 to-accent-500
                        hover:from-primary-700 hover:to-accent-600 transform hover:scale-105
                        transition-all duration-300 ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              <Send size={20} className={`mr-2 ${status === 'loading' ? 'animate-pulse' : ''}`} />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;