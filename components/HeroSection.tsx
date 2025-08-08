"use client";

import React, { useEffect, useState } from 'react';
import "../app/globals.css";
interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden  to-gray-100 ${className}`}>

      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0  transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />
        <div className="absolute inset-0 " />
      </div>

      
       <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          }}
        />
      </div> 

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
      
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="block bg-gradient-to-r from-zinc-300 to-gray-400 bg-clip-text text-transparent">Dimension is the new</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            standard for collaboration
            </span>

            
           
          </h1>
             <span className="text-gray-300 font-medium">Chat, code, cloud, deployments, and more.</span>
            <br/>
          <div className="flex flex-col sm:flex-row items-center justify-evenly  mt-4">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full sm:w-64 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-indigo-900 text-black placeholder-black focus:outline-none opacity-50"
  />
  <div className="relative w-32 h-32 flex items-center justify-center">
 
  <span className="absolute w-35 h-[63px] rounded-xl border border-pink-400 opacity-30 animate-pulse" />
  <span className="absolute w-40 h-[78px] rounded-xl border border-purple-500 opacity-20 animate-pulse" />
 
  <div className="card-wrapper h-[50px] w-[150px]">
    <div className="card-content to-yellow-20 flex items-center justify-center  text-xs">
      <div className="max-w-[60%] text-center"><a href="" className="font-semibold" target="_blank">Join Waitlist</a></div>
    </div>
    </div>
  </div>
</div>
</div>

        
       
      </div>

    

     

       

        

        

       


    
    </section>
  );
};

export default Hero;