// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/util/Container';
import { cn } from '@/lib/utils';
import Logo from '@/util/Logo';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
    // Define special page cases
    const isCustomerPage = pathname === '/customer_login'; 
    const isHomePage = pathname === '/';
    
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Destinations', href: '#destinations' },
        { name: 'Trips', href: '#trips' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <nav className={cn(
            "w-full z-50 transition-all duration-300 relative", // Added relative positioning
            "bg-white", // Default: why_us styling
            isCustomerPage && "bg-primary", // Override for customer page
            isHomePage && "bg-primary" // Override for home page
        )}>
            <div className={cn(isHomePage && "mt-4")}>
                <Container className={cn(
                    "transition-all duration-300 bg-transparent", // Default: why_us styling
                    isCustomerPage && "bg-primary", // Override for customer page
                    isHomePage && "rounded-[20px] bg-white" // Override for home page
                )}>
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo */}
                       <Logo width={12} hight={12}/>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "transition-colors font-medium text-[#00000080] hover:text-black", // Default: why_us styling
                                        (isCustomerPage || isHomePage) && "text-white hover:text-gray-200" // Override for customer and home pages
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className={cn(
                                "bg-white text-primary hover:bg-white/90", // Default: why_us styling
                                (isCustomerPage || isHomePage) && "bg-primary hover:bg-primary/90 text-white" // Override for customer and home pages
                            )}>
                                Book Now
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={cn(
                                    "focus:outline-none text-white", // Default: why_us styling
                                    !(isCustomerPage || isHomePage) && "text-foreground hover:text-primary" // Override for non-customer, non-home pages
                                )}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu - Fixed positioning to prevent height increase */}
            {isOpen && (
                <div className="md:hidden bg-white absolute w-full left-0 top-full shadow-lg z-50">
                    <Container>
                        <div className="pt-2 pb-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Book Now</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    );
}