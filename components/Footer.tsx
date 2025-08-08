'use client';


import React from 'react';
import Link from 'next/link';


const Footer = () => {
 return (

     <footer className="bg-black text-gray-400 py-10 px-6 border-t border-gray-600 relative h-[80vh] -mt-35 z-35 flex items-center">

   
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

        
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/changelog" className="hover:text-white transition">Changelog</Link></li>
            <li><Link href="/docs" className="hover:text-white transition">Documentation</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Discord</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
            <li><a href="mailto:contact@dimension.dev" className="hover:text-white transition">Email</a></li>
          </ul>
        </div>

      
        <div className="md:col-span-3 lg:col-span-1 mt-6 md:mt-0">
          <p className="text-sm text-gray-500 mb-2">© 2025 Realm Software Inc. All rights reserved.</p>
          <div className="space-x-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


