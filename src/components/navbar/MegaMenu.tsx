// components/MegaMenu.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MegaMenuProps {
  title: string;
  data: Record<string, { name: string; href: string }[]>;
  className?: string;
}

export function MegaMenu({ title, data, className = '' }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover modal={false} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          className={`flex items-center space-x-1 px-0 py-5 h-auto hover:bg-transparent ${className}`}
          style={{ color: '#364153' }}
        >
          <span>{title}</span>
          <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-screen max-w-4xl p-6" 
        align="start"
        sideOffset={8}
        avoidCollisions={true}
        collisionPadding={20}
      >
        <div className="grid grid-cols-2 gap-8">
          {Object.entries(data).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-600 hover:text-primary text-sm hover:underline transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}