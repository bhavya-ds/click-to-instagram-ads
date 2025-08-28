import React from 'react';
import { motion } from 'framer-motion';

const SecondFold = () => {
  return (
    <section id="second-fold" className="relative w-screen min-h-[200vh] bg-white font-inter second-fold-bg overflow-visible pb-[80px]">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-10 left-10 w-32 h-32 opacity-[0.03]"
          style={{
            background: 'linear-gradient(135deg, #E4405F 0%, #F77737 50%, #FCAF45 100%)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform: 'rotate(45deg)'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-40 h-24 opacity-[0.03]"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)',
            transform: 'rotate(-15deg)'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-28 h-28 opacity-[0.03]"
          style={{
            background: 'linear-gradient(135deg, #4EC84E 0%, #47B647 100%)',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            transform: 'rotate(30deg)'
          }}
        ></div>
      </div>

      {/* Background Gradient Bloom */}
      <div 
        className="absolute bottom-0 right-0 w-[800px] h-[600px] opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(139, 92, 246, 0.08) 0%, rgba(236, 72, 153, 0.06) 30%, rgba(249, 115, 22, 0.04) 60%, transparent 100%)',
          filter: 'blur(180px)',
          transform: 'translateX(20%) translateY(30%)'
        }}
      ></div>
      
      {/* PANE 1 - Text Content (Left Position) */}
      <motion.div 
        className="absolute top-[10%] w-[70%] p-[50px] rounded-[20px] z-[2] glassmorphic-text-pane border-2 border-blue-500"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          left: '10%',
          transform: 'rotate(-2deg)',
          transformOrigin: 'center',
          minHeight: '400px'
        }}
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        {/* Main Heading */}
        <motion.h2 
          className="text-[42px] font-bold leading-[115%] mb-6 text-[#0F0F0F]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0F0F0F]">You're Paying for Clicks. But What About the </span>
          <span className="text-[#4EC84E]">Conversation?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className="text-[18px] text-[#5B5B5C] mb-8 font-medium leading-[140%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Most advertisers stop caring after the click. That's where we start.
        </motion.p>

        {/* Body Copy */}
        <motion.div 
          className="text-[16px] text-[#424242] leading-[160%] max-w-[450px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="mb-5">
            Traditional Instagram ads send clicks to landing pages where 87% of visitors bounce within 10 seconds. You've paid for attention, but lost the conversation.
          </p>
          <p className="mb-5">
            Click-to-message ads keep prospects engaged in Instagram, where they already are. No app switching, no forms, no friction.
          </p>
          <p className="font-medium">
            Here's the difference between losing leads and nurturing them:
          </p>
        </motion.div>
      </motion.div>

      {/* PANE 2 - Timeline Visual (Centered and Bottom Position) */}
      <motion.div 
        className="absolute top-[55%] w-[70%] p-[40px] rounded-[20px] z-[2] glassmorphic-visual-pane border-2 border-red-500"
        style={{
          background: 'rgba(78, 200, 78, 0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(78, 200, 78, 0.15)',
          left: '50%',
          transform: 'translateX(-50%) rotate(3deg)',
          transformOrigin: 'center',
          minHeight: '400px'
        }}
        initial={{ opacity: 0, y: 40, rotate: 3 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <div className="w-full mx-auto">
          <div 
            className="rounded-[20px] p-8 border border-grey-100 relative overflow-hidden min-h-[400px] bg-white"
            style={{
              background: 'linear-gradient(135deg, #F9F9FA 0%, #F2F3F5 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}></div>
            
            {/* Traditional Ad Journey - Top Half */}
            <div className="mb-8 lg:mb-10 relative">
              <div className="flex items-center mb-6">
                <div className="bg-grey-100 rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-grey-600">Traditional Ad Journey</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between min-h-[120px]">
                {/* Step 1: Ad Click */}
                <motion.div 
                  className="flex flex-col items-center text-center w-28 lg:w-32 p-3 lg:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer flex-shrink-0"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(228, 64, 95, 0.2)',
                    y: -2
                  }}
                >
                  <div 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-2 lg:mb-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #E4405F 0%, #F77737 50%, #FCAF45 100%)',
                      boxShadow: '0 0 12px rgba(228, 64, 95, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-primary-500">Click on Instagram</span>
                </motion.div>
                
                {/* Curved Arrow 1 */}
                <div className="flex-1 flex justify-center relative">
                  <svg className="w-12 h-6 lg:w-14 lg:h-7" viewBox="0 0 64 32">
                    <defs>
                      <linearGradient id="traditionalArrow1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#A7A7A8', stopOpacity: 0.3}} />
                        <stop offset="100%" style={{stopColor: '#747475', stopOpacity: 0.8}} />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M5 16 Q32 8 59 16" 
                      stroke="url(#traditionalArrow1)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </svg>
                </div>
                
                {/* Step 2: Leave Platform */}
                <motion.div 
                  className="flex flex-col items-center text-center w-28 lg:w-32 p-3 lg:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer flex-shrink-0"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(255, 163, 0, 0.2)',
                    y: -2
                  }}
                >
                  <div 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-2 lg:mb-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #FFA300 0%, #FF6B35 100%)',
                      boxShadow: '0 0 12px rgba(255, 163, 0, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-orange-500">Leave Instagram</span>
                </motion.div>
                
                {/* Curved Arrow 2 */}
                <div className="flex-1 flex justify-center relative">
                  <svg className="w-12 h-6 lg:w-14 lg:h-7" viewBox="0 0 64 32">
                    <defs>
                      <linearGradient id="traditionalArrow2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#FFA300', stopOpacity: 0.3}} />
                        <stop offset="100%" style={{stopColor: '#747475', stopOpacity: 0.8}} />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M5 16 Q32 8 59 16" 
                      stroke="url(#traditionalArrow2)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </svg>
                </div>
                
                {/* Step 3: Landing Page */}
                <motion.div 
                  className="flex flex-col items-center text-center w-28 lg:w-32 p-3 lg:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer flex-shrink-0"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(116, 116, 117, 0.2)',
                    y: -2
                  }}
                >
                  <div 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-2 lg:mb-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #747475 0%, #5B5B5C 100%)',
                      boxShadow: '0 0 12px rgba(116, 116, 117, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-grey-500">Landing Page</span>
                </motion.div>
                
                {/* Curved Arrow 3 */}
                <div className="flex-1 flex justify-center relative">
                  <svg className="w-12 h-6 lg:w-14 lg:h-7" viewBox="0 0 64 32">
                    <defs>
                      <linearGradient id="traditionalArrow3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#747475', stopOpacity: 0.3}} />
                        <stop offset="100%" style={{stopColor: '#AB2222', stopOpacity: 0.8}} />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M5 16 Q32 8 59 16" 
                      stroke="url(#traditionalArrow3)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />
                  </svg>
                </div>
                
                {/* Step 4: Control Lost */}
                <motion.div 
                  className="flex flex-col items-center text-center w-28 lg:w-32 p-3 lg:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer relative flex-shrink-0"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(171, 34, 34, 0.2)',
                    y: -2
                  }}
                >
                  <div 
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-2 lg:mb-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #AB2222 0%, #8B1A1A 100%)',
                      boxShadow: '0 0 12px rgba(171, 34, 34, 0.3)'
                    }}
                  >
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.364 18.364A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728zM12 8v4m0 4h.01"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-red-500">End of your control</span>
                </motion.div>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-grey-200 mb-8 lg:mb-10"></div>

            {/* QuickReply Ad Journey - Bottom Half */}
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="bg-primary-20 rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-primary-600">QuickReply Ad Journey</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between min-h-[120px]">
                {/* Step 1: Ad Click */}
                <motion.div 
                  className="flex flex-col items-center text-center w-28 lg:w-32 p-3 lg:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer flex-shrink-0"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(78, 200, 78, 0.2)',
                    y: -2
                  }}
                >
                  <div 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-2 lg:mb-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #E4405F 0%, #F77737 50%, #FCAF45 100%)',
                      boxShadow: '0 0 12px rgba(228, 64, 95, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-primary-500">Click on Instagram</span>
                </motion.div>
                
                {/* Curved Arrow 1 */}
                <div className="flex-1 flex justify-center relative">
                  <svg className="w-12 h-6 lg:w-14 lg:h-7" viewBox="0 0 64 32">
                    <defs>
                      <linearGradient id="quickReplyArrow1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#88DA88', stopOpacity: 0.3}} />
                        <stop offset="100%" style={{stopColor: '#4EC84E', stopOpacity: 0.8}} />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M5 16 Q32 24 59 16" 
                      stroke="url(#quickReplyArrow1)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.1 }}
                    />
                  </svg>
                </div>
                
                {/* Step 2: Stay Platform */}
                <motion.div 
                  className="flex flex-col items-center text-center w-28 lg:w-32 p-3 lg:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer flex-shrink-0"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(78, 200, 78, 0.2)',
                    y: -2
                  }}
                >
                  <div 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-2 lg:mb-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #4EC84E 0%, #47B647 100%)',
                      boxShadow: '0 0 12px rgba(78, 200, 78, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-primary-500">Stay on Instagram</span>
                </motion.div>
                
                {/* Curved Arrow 2 */}
                <div className="flex-1 flex justify-center relative">
                  <svg className="w-12 h-6 lg:w-14 lg:h-7" viewBox="0 0 64 32">
                    <defs>
                      <linearGradient id="quickReplyArrow2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#4EC84E', stopOpacity: 0.3}} />
                        <stop offset="100%" style={{stopColor: '#47B647', stopOpacity: 0.8}} />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M5 16 Q32 24 59 16" 
                      stroke="url(#quickReplyArrow2)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.3 }}
                    />
                  </svg>
                </div>
                
                {/* Step 3: Instant Response */}
                <motion.div 
                  className="flex flex-col items-center text-center w-28 lg:w-32 p-3 lg:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer flex-shrink-0"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(78, 200, 78, 0.2)',
                    y: -2
                  }}
                >
                  <div 
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-2 lg:mb-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #47B647 0%, #3A9A3A 100%)',
                      boxShadow: '0 0 12px rgba(71, 182, 71, 0.3)'
                    }}
                  >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-primary-600">Instant Response</span>
                </motion.div>
                
                {/* Curved Arrow 3 */}
                <div className="flex-1 flex justify-center relative">
                  <svg className="w-12 h-6 lg:w-14 lg:h-7" viewBox="0 0 64 32">
                    <defs>
                      <linearGradient id="quickReplyArrow3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#47B647', stopOpacity: 0.3}} />
                        <stop offset="100%" style={{stopColor: '#3A9A3A', stopOpacity: 0.8}} />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M5 16 Q32 24 59 16" 
                      stroke="url(#quickReplyArrow3)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                    />
                  </svg>
                </div>
                
                {/* Step 4: Conversation Begins */}
                <motion.div 
                  className="flex flex-col items-center text-center w-28 lg:w-32 p-3 lg:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer relative flex-shrink-0"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(78, 200, 78, 0.3)',
                    y: -2
                  }}
                >
                  <div 
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-2 lg:mb-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #3A9A3A 0%, #2D7A2D 100%)',
                      boxShadow: '0 0 12px rgba(58, 154, 58, 0.3)'
                    }}
                  >
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-primary-600">Your conversation begins</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* WHIMSICAL CURVED SEPARATOR - Between cards vertically */}
      <div className="absolute top-[42%] left-[45%] w-[300px] h-[60px] z-[3] pointer-events-none">
        <svg width="300" height="60" viewBox="0 0 300 60">
          <defs>
            <linearGradient id="whimsicalSeparator" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#71D371', stopOpacity: 0.4}} />
              <stop offset="50%" style={{stopColor: '#71D371', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#71D371', stopOpacity: 0.4}} />
            </linearGradient>
          </defs>
          <motion.path 
            d="M150 10 Q150 30 150 50" 
            stroke="url(#whimsicalSeparator)" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />
          {/* Downward arrowhead */}
          <motion.polygon 
            points="145,45 150,50 155,45" 
            fill="#71D371"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>
      
      {/* SECTION END BOUNDARY - Clear separation */}
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-b from-white to-transparent pointer-events-none z-[100]"></div>
      
      {/* VISUAL SEPARATION BARRIER - Prevent bleeding */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-transparent pointer-events-none z-[100]"></div>
    </section>
  );
};

export default SecondFold;
