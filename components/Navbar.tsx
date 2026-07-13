'use client';

import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Navbar({ activeTab = 'beranda', onTabChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    handleTabClick('beranda');
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block md:bg-white md:border-b md:border-gray-200 w-full h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6">
          {/* Logo Section */}
          <button 
            onClick={handleLogoClick}
            className="cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 md:static md:w-auto md:h-12 md:overflow-visible"
          >
            <Image
              src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
              alt="PSI Logo"
              width={280}
              height={140}
              className="md:object-contain md:object-left md:h-full md:w-auto"
            />
          </button>

          {/* Menu Items */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleTabClick('beranda')}
              className={`text-[14px] font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                activeTab === 'beranda'
                  ? 'text-black hover:text-gray-800'
                  : 'text-[#ED1C24] hover:text-[#ED1C24]'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => handleTabClick('struktur-pengurus')}
              className={`text-[14px] font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                activeTab === 'struktur-pengurus'
                  ? 'text-black hover:text-gray-800'
                  : 'text-[#ED1C24] hover:text-[#ED1C24]'
              }`}
            >
              Struktur Pengurus
            </button>
            <button
              onClick={() => handleTabClick('agenda-absensi')}
              className={`text-[14px] font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                activeTab === 'agenda-absensi'
                  ? 'text-black hover:text-gray-800'
                  : 'text-[#ED1C24] hover:text-[#ED1C24]'
              }`}
            >
              Agenda & Absensi
            </button>
          </div>

          {/* Search Icon */}
          <button className="text-black hover:text-gray-700 flex-shrink-0 transition-colors w-5 h-5 ml-2">
            <Search strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile Navbar - Static flow */}
      <nav className="md:hidden bg-white border-b border-gray-200 w-full h-24 flex items-center justify-between px-3">
        {/* Logo Mobile - Cropped */}
        <button 
          onClick={handleLogoClick}
          className="cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 w-40 aspect-video overflow-hidden relative"
        >
          <Image
            src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
            alt="PSI Logo"
            width={350}
            height={175}
            className="object-contain object-left h-full w-auto"
          />
        </button>

        {/* Mobile Menu Icons - Right side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="text-black stroke-[2.5] w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
            <Search size={22} strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black stroke-[2.5] w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <Menu size={22} strokeWidth={2.5} />
          </button>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-[75vw] bg-red-600 z-50 flex flex-col">
          {/* Close Button - Top Right */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="self-end p-6 text-white hover:text-gray-200 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Menu Items - Vertical */}
          <div className="flex flex-col gap-6 px-6 py-4">
            <button
              onClick={() => handleTabClick('beranda')}
              className={`text-left text-xl font-bold transition-colors ${
                activeTab === 'beranda'
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => handleTabClick('struktur-pengurus')}
              className={`text-left text-xl font-bold transition-colors ${
                activeTab === 'struktur-pengurus'
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Struktur Pengurus
            </button>
            <button
              onClick={() => handleTabClick('agenda-absensi')}
              className={`text-left text-xl font-bold transition-colors ${
                activeTab === 'agenda-absensi'
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Agenda & Absensi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
