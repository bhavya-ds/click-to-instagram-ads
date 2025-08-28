import React from 'react';
import { motion } from 'framer-motion';

const ThirdFold = () => {
  return (
    <section id="third-fold" className="relative w-screen min-h-[80vh] bg-white font-inter third-fold-bg overflow-visible mt-[100px] pt-16 pb-16 px-[5%] mb-16 z-[20]">
      {/* SECTION START BOUNDARY - Clear separation */}
      <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
      
      {/* Clear Visual Separator - Top Boundary */}
      <div className="absolute top-0 left-0 right-0 h-[160px] z-[5] pointer-events-none">
        {/* Main Separator Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[8px] bg-gradient-to-r from-transparent via-[#4EC84E] to-transparent opacity-90"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          <div className="w-4 h-4 bg-[#4EC84E] rounded-full opacity-95"></div>
          <div className="w-3 h-3 bg-[#4EC84E] rounded-full opacity-80"></div>
          <div className="w-2 h-2 bg-[#4EC84E] rounded-full opacity-60"></div>
        </div>
        
        {/* Background Cut */}
        <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-white to-transparent"></div>
        
        {/* Additional Visual Break */}
        <div className="absolute top-20 left-0 right-0 h-[60px] bg-gradient-to-b from-white to-transparent"></div>
        
        {/* Section Divider */}
        <div className="absolute top-40 left-0 right-0 h-[40px] bg-gradient-to-b from-[#F8FDF8] to-transparent"></div>
      </div>

      {/* Background Grid Pattern - Distinct from second fold */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25]" style={{
        backgroundImage: `
          linear-gradient(rgba(78, 200, 78, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 200, 78, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Background Gradient Bloom - Distinct positioning */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[400px] opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(78, 200, 78, 0.08) 0%, rgba(71, 182, 71, 0.06) 30%, rgba(58, 154, 58, 0.04) 60%, transparent 100%)',
          filter: 'blur(120px)',
          transform: 'translateX(-20%) translateY(-30%)'
        }}
      ></div>

      {/* Subtle Background Tint - Grey/20 with hint of green */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFFFD] to-[#F8FDF8] opacity-60"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto mt-[60px]">
        
        {/* Section Indicator - Clear fold separation */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-4 bg-white border-2 border-[#4EC84E] rounded-full px-8 py-3 shadow-lg">
            <div className="w-3 h-3 bg-[#4EC84E] rounded-full"></div>
            <span className="text-[16px] font-semibold text-[#4EC84E]">SECTION 3</span>
            <div className="w-3 h-3 bg-[#4EC84E] rounded-full"></div>
          </div>
        </motion.div>

        {/* Typography Section - Clean start for third fold */}
        <div className="text-center mb-16">
          {/* Main Heading - Clean, no overlapping elements */}
          <motion.h2 
            className="text-[42px] font-bold leading-[115%] mb-8 text-[#0F0F0F] max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            What Happens in the First 60 Seconds After Someone Clicks
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            className="text-[20px] text-[#5B5B5C] mb-8 font-medium leading-[140%] max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            While your competitors send clicks into the void, here's what we're doing in real-time.
          </motion.p>

          {/* Introduction Copy */}
          <motion.p 
            className="text-[16px] text-[#424242] leading-[160%] max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Every second counts when someone shows interest. Our system springs into action the moment they click 'Send Message' - qualifying, engaging, and nurturing leads while they're still hot.
          </motion.p>
        </div>

        {/* Timeline Visual Container - Clean separation */}
        <motion.div 
          className="w-full max-w-[1000px] mx-auto relative mt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Glassmorphic Timeline Container - Evolved styling */}
          <div 
            className="w-full h-[350px] p-10 rounded-[24px] relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(253, 255, 253, 0.95) 0%, rgba(237, 250, 237, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(78, 200, 78, 0.12)',
              border: '1px solid rgba(78, 200, 78, 0.15)'
            }}
          >
            {/* Background Pattern - Evolved */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}></div>

            {/* Progress Connection Line - Curved and flowing */}
            <div 
              className="absolute top-[85%] left-[12.5%] w-[75%] h-[3px] z-[1]"
              style={{
                background: 'linear-gradient(90deg, rgba(136, 218, 136, 0.7) 0%, rgba(78, 200, 78, 0.7) 100%)',
                borderRadius: '2px'
              }}
            ></div>

            {/* Timeline Grid - Horizontal layout for distinction */}
            <div className="grid grid-cols-4 gap-5 h-full relative z-[2]">
              
              {/* Time Block 1: 0-5 Seconds */}
              <motion.div 
                className="flex flex-col items-center justify-between text-center p-5 min-h-[280px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Time Badge - Evolved styling */}
                <div className="bg-white border border-primary-500 rounded-[20px] px-3 py-1.5 mb-5 shadow-sm">
                  <span className="text-[12px] font-medium text-primary-600">0-5s</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-[18px] font-bold text-[#0F0F0F] mb-3 leading-[120%]">
                    Instant Response
                  </h3>
                  <p className="text-[14px] text-[#424242] leading-[140%] max-w-[200px]">
                    AI analyzes the ad source and sends a personalized greeting based on their journey.
                  </p>
                </div>

                {/* Visual Element - Enhanced glow */}
                <div 
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center mt-6"
                  style={{
                    background: 'linear-gradient(135deg, #4EC84E 0%, #47B647 100%)',
                    boxShadow: '0 4px 20px rgba(78, 200, 78, 0.4)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
              </motion.div>

              {/* Time Block 2: 5-20 Seconds */}
              <motion.div 
                className="flex flex-col items-center justify-between text-center p-5 min-h-[280px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Time Badge */}
                <div className="bg-white border border-primary-500 rounded-[20px] px-3 py-1.5 mb-5 shadow-sm">
                  <span className="text-[12px] font-medium text-primary-600">5-20s</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-[18px] font-bold text-[#0F0F0F] mb-3 leading-[120%]">
                    Smart Qualification
                  </h3>
                  <p className="text-[14px] text-[#424242] leading-[140%] max-w-[200px]">
                    Chatbot asks intelligent questions to understand their needs and budget.
                  </p>
                </div>

                {/* Visual Element */}
                <div 
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center mt-6"
                  style={{
                    background: 'linear-gradient(135deg, #47B647 0%, #3A9A3A 100%)',
                    boxShadow: '0 4px 20px rgba(78, 200, 78, 0.4)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3s-3-1-3-3a3 3 0 0 1 3-3zM12 17.5c2.5 0 4.5-1.5 4.5-3.5S14.5 10.5 12 10.5s-4.5 1.5-4.5 3.5S9.5 17.5 12 17.5z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
              </motion.div>

              {/* Time Block 3: 20-45 Seconds */}
              <motion.div 
                className="flex flex-col items-center justify-between text-center p-5 min-h-[280px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Time Badge */}
                <div className="bg-white border border-primary-500 rounded-[20px] px-3 py-1.5 mb-5 shadow-sm">
                  <span className="text-[12px] font-medium text-primary-600">20-45s</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-[18px] font-bold text-[#0F0F0F] mb-3 leading-[120%]">
                    Data Capture
                  </h3>
                  <p className="text-[14px] text-[#424242] leading-[140%] max-w-[200px]">
                    Key information flows to your CRM while the conversation stays natural.
                  </p>
                </div>

                {/* Visual Element */}
                <div 
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center mt-6"
                  style={{
                    background: 'linear-gradient(135deg, #3A9A3A 0%, #2D7A2D 100%)',
                    boxShadow: '0 4px 20px rgba(78, 200, 78, 0.4)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                  </svg>
                </div>
              </motion.div>

              {/* Time Block 4: 45-60 Seconds */}
              <motion.div 
                className="flex flex-col items-center justify-between text-center p-5 min-h-[280px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Time Badge */}
                <div className="bg-white border border-primary-500 rounded-[20px] px-3 py-1.5 mb-5 shadow-sm">
                  <span className="text-[12px] font-medium text-primary-600">45-60s</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-[18px] font-bold text-[#0F0F0F] mb-3 leading-[120%]">
                    Human Handoff
                  </h3>
                  <p className="text-[14px] text-[#424242] leading-[140%] max-w-[200px]">
                    Qualified leads get transferred to your team with full context and conversation history.
                  </p>
                </div>

                {/* Visual Element */}
                <div 
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center mt-6"
                  style={{
                    background: 'linear-gradient(135deg, #2D7A2D 0%, #1F5A1F 100%)',
                    boxShadow: '0 4px 20px rgba(78, 200, 78, 0.4)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.99 2.5V20h-2v-8.5l-1.99-2.5C8.54 8.37 7.8 8 7 8H5.46c-.8 0-1.54.37-2.01 1L.96 16.63A1.5 1.5 0 0 0 2.5 18H5v6h2v-6h2v6h2v-6h2v6h2v-6h2z"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Closing Statement - Enhanced styling */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <p className="text-[18px] font-semibold text-[#0F0F0F] leading-[140%]">
            Most leads go cold in 5 minutes. We capture them in 60 seconds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThirdFold;
