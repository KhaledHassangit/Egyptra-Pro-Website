// components/NavDropdown.tsx
'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavDropdownProps {
  title: string;
  items: { name: string; href: string }[];
  className?: string;
}

export function NavDropdown({ title, items, className = '' }: NavDropdownProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={`flex items-center space-x-1 px-0 py-5 h-auto hover:bg-transparent ${className}`}
          style={{ color: '#364153' }}
        >
          <span>{title}</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-48"
        sideOffset={8}
        avoidCollisions={true}
        collisionPadding={20}
      >
        {items.map((item) => (
          <DropdownMenuItem 
            key={item.name} 
            asChild
            className="cursor-pointer py-2.5 px-3"
          >
            <Link 
              href={item.href}
              className="w-full text-sm hover:text-primary transition-colors"
              style={{ color: '#000000' }}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}