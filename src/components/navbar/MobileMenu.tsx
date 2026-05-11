// components/MobileMenu.tsx
'use client';

import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  destinationsData: Record<string, { name: string; href: string }[]>;
  tourCategoryData: { name: string; href: string }[];
  travelGuideData: { name: string; href: string }[];
}

export function MobileMenu({
  isOpen,
  onClose,
  destinationsData,
  tourCategoryData,
  travelGuideData
}: MobileMenuProps) {
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const handleMobileDropdownToggle = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      <div 
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto overflow-x-hidden border-r border-gray-200 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            style={{ color: '#364153' }}
          >
            <X size={24} />
          </Button>
        </div>

        <div className="p-4 space-y-2">
          <div>
            <Button 
              variant="ghost" 
              onClick={() => handleMobileDropdownToggle('destinations')} 
              className="w-full justify-between p-2 h-auto"
              style={{ color: '#364153', fontWeight: 700 }}
            >
              Destinations
              <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileDropdown === 'destinations' && "rotate-180")} />
            </Button>
            {openMobileDropdown === 'destinations' && (
              <div className="pl-4 pt-2 space-y-1">
                {Object.entries(destinationsData).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="font-medium text-sm text-gray-700 mb-1">{category}</h3>
                    {items.map(item => (
                      <Link key={item.name} href={item.href} className="block py-1 pl-2 text-sm text-gray-600">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <Button 
              variant="ghost" 
              onClick={() => handleMobileDropdownToggle('tourCategory')} 
              className="w-full justify-between p-2 h-auto"
              style={{ color: '#364153', fontWeight: 700 }}
            >
              Tour Category
              <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileDropdown === 'tourCategory' && "rotate-180")} />
            </Button>
            {openMobileDropdown === 'tourCategory' && (
              <div className="pl-4 pt-2 space-y-1">
                {tourCategoryData.map(item => (
                  <Link key={item.name} href={item.href} className="block py-1 text-sm text-gray-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <Button 
              variant="ghost" 
              onClick={() => handleMobileDropdownToggle('travelGuide')} 
              className="w-full justify-between p-2 h-auto"
              style={{ color: '#364153', fontWeight: 700 }}
            >
              Travel Guide
              <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileDropdown === 'travelGuide' && "rotate-180")} />
            </Button>
            {openMobileDropdown === 'travelGuide' && (
              <div className="pl-4 pt-2 space-y-1">
                {travelGuideData.map(item => (
                  <Link key={item.name} href={item.href} className="block py-1 text-sm text-gray-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/why_us" className="w-full">
            <Button variant="ghost" className="w-full justify-start p-2 h-auto" style={{ color: '#364153', fontWeight: 700 }}>
              Why Us
            </Button>
          </Link>
          <Link href="/contact_us" className="w-full">
            <Button variant="ghost" className="w-full justify-start p-2 h-auto" style={{ color: '#364153', fontWeight: 700 }}>
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}