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
      <nav className={`hidden md:block md:bg-white md:border-b md:border-gray-200 w-full`}
      >
        <div className="flex pl-12 pr-12 py-3 items-center justify-between gap-8 max-w-full mx-auto w-full relative">
          {/* Logo Section with Subtitle */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <div className="w-40 aspect-video overflow-hidden relative">
              <Image
                src="https://res.cloudinary.com/dyromez82/image/upload/v1783281334/Artboard_25_300x_cgubub.png"
                alt="PSI Logo"
                width={280}
                height={140}
                className="object-contain object-left h-full w-auto"
              />
            </div>
            <div className="text-sm text-gray-700 leading-tight">
              <div className="font-semibold">PSI</div>
              <div className="text-xs">Partai Super Tbk.</div>
            </div>
          </button>

          {/* Menu Items */}
          <div className="flex items-center gap-6 ml-auto">
            <button
              onClick={() => handleTabClick('beranda')}
              className={`font-semibold text-base whitespace-nowrap transition-colors ${
                activeTab === 'beranda'
                  ? 'text-black hover:text-gray-800'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => handleTabClick('struktur-pengurus')}
              className={`font-semibold text-base whitespace-nowrap transition-colors ${
                activeTab === 'struktur-pengurus'
                  ? 'text-black hover:text-gray-800'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Struktur Pengurus
            </button>
            <button
              onClick={() => handleTabClick('agenda-absensi')}
              className={`font-semibold text-base whitespace-nowrap transition-colors ${
                activeTab === 'agenda-absensi'
                  ? 'text-black hover:text-gray-800'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Agenda & Absensi
            </button>
          </div>

          {/* Search Icon */}
          <button className="text-black hover:text-gray-700 flex-shrink-0 transition-colors ml-4">
            <Search size={22} />
          </button>
        </div>
      </nav>


    </>
  );
}

export function MobileNavbar({ activeTab = 'beranda', onTabChange }: NavbarProps) {
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
      {/* Mobile Navbar - Fixed */}
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
          className="md:hidden fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-[75vw] bg-red-600 z-[9999] flex flex-col">
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
