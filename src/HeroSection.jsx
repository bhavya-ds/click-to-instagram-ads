import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white font-inter hero-grid-bg">
      {/* Gradient Bloom Effect - Vercel-inspired */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[800px] opacity-18"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, rgba(236, 72, 153, 0.09) 25%, rgba(249, 115, 22, 0.06) 50%, transparent 100%)',
            filter: 'blur(150px)',
            transform: 'translateX(-50%) translateY(30%)'
          }}
        ></div>
      </div>

      {/* QuickReply Logo */}
      <div className="absolute top-8 left-8 z-10">
        <div className="text-2xl font-bold text-primary-500">QuickReply</div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Meta Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-grey-100 rounded-full text-sm font-medium text-grey-700 mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Meta Partner • 24-hr Turnaround • Works with Any CRM
          </motion.div>

          {/* Main Headline - Vercel-inspired sizing with contrast treatments */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[120%] mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-grey-900">Instagram Ads:</span>
            <br />
            <span className="text-grey-400 opacity-60" style={{ textDecoration: 'line-through', textDecorationColor: '#E02D2D', textDecorationThickness: '2px' }}>Landing Pages</span>
            <span className="text-grey-900"> vs. </span>
            <span className="text-primary-500 font-semibold" style={{ textShadow: '0 0 8px rgba(78, 200, 78, 0.3)' }}>
              Live Chat
              <span className="text-primary-600 ml-2">✓</span>
            </span>
          </motion.h1>

          {/* Subheading - Vercel-inspired sizing */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-grey-600 mb-16 max-w-4xl mx-auto leading-[150%] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="text-grey-600">Your customers send clicks to landing pages. </span>
            <span className="text-primary-500">You'll be having sales conversations that actually convert.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.button 
              className="px-12 py-5 bg-primary-500 hover:bg-primary-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Setup Call
            </motion.button>
            <motion.button 
              className="px-12 py-5 border-2 border-grey-300 text-grey-700 hover:border-primary-500 hover:text-primary-500 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Demo on Instagram
            </motion.button>
          </motion.div>


        </div>
      </div>

      {/* Scroll Down Prompt */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-grey-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-grey-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 