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
      <nav className="hidden md:block md:bg-white md:border-b md:border-gray-200 w-full">
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 w-full">
          {/* Logo Section */}
          <button 
            onClick={handleLogoClick}
            className="cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
          >
            {/* Using `fill` + object-contain (instead of fixed width/height on the
               Image) keeps the logo's real aspect ratio intact so it no longer
               gets stretched/squashed. Only the wrapper box size below controls
               how big the logo appears. */}
            <div className="relative w-[230px] h-[84px]">
              <Image
                src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
                alt="PSI Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </button>

          {/* Menu Items + Search */}
          <div className="flex items-center gap-8 ml-auto">
            <button
              onClick={() => handleTabClick('beranda')}
              className={`text-[15px] font-normal whitespace-nowrap transition-colors ${
                activeTab === 'beranda'
                  ? 'text-[#2F2F2F]'
                  : 'text-[#CE0000]'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => handleTabClick('struktur-pengurus')}
              className={`text-[15px] font-normal whitespace-nowrap transition-colors flex items-center gap-1 ${
                activeTab === 'struktur-pengurus'
                  ? 'text-[#2F2F2F]'
                  : 'text-[#CE0000]'
              }`}
            >
              Struktur Pengurus
              <span className="text-xs">∨</span>
            </button>
            <button
              onClick={() => handleTabClick('agenda-absensi')}
              className={`text-[15px] font-normal whitespace-nowrap transition-colors ${
                activeTab === 'agenda-absensi'
                  ? 'text-[#2F2F2F]'
                  : 'text-[#CE0000]'
              }`}
            >
              Agenda & Absensi
            </button>
            <button className="text-[#2F2F2F] hover:opacity-70 transition-opacity flex-shrink-0 ml-4">
              <Search size={19} strokeWidth={2} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Static flow */}
      <nav className="md:hidden bg-white border-b border-gray-200 w-full h-20 flex items-center justify-between px-4">
        {/* Logo Mobile */}
        <button 
          onClick={handleLogoClick}
          className="cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 relative w-36 h-14"
        >
          <Image
            src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
            alt="PSI Logo"
            fill
            priority
            className="object-contain object-left"
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
