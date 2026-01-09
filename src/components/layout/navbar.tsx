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
    const isWhyUsPage = pathname === '/why_us';
    const isCustomerPage = pathname === '/customer_login'; 

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Destinations', href: '#destinations' },
        { name: 'Trips', href: '#trips' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <nav className={cn(
            "w-full z-50 transition-all duration-300", 
            isWhyUsPage ? "bg-white text-white" : 
            isCustomerPage ? "bg-primary text-white" : // Add customer page styling
            "bg-primary"
        )}>
            <div className={cn(isWhyUsPage ? "py-4" : "mt-4")}>
                <Container className={cn(
                    "transition-all duration-300", 
                    isWhyUsPage ? "bg-transparent text-white" : 
                    isCustomerPage ? "bg-primary z-50" : // Customer page: primary bg, no rounded corners
                    "rounded-[20px] bg-white z-50"
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
                                        "transition-colors font-medium",
                                        // Adjust text color based on background
                                        isWhyUsPage ? "text-[#00000080] hover:text-black" : 
                                        isCustomerPage ? "text-white hover:text-gray-200" : // White text for customer page
                                        "text-[#00000080] hover:text-black"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className={cn(
                                "text-white", 
                                isWhyUsPage ? "bg-white text-primary hover:bg-white/90" : 
                                isCustomerPage ? "bg-white text-primary hover:bg-gray-100" : // White button for customer page
                                "bg-primary hover:bg-primary/90"
                            )}>
                                Book Now
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={cn(
                                    "focus:outline-none", 
                                    isWhyUsPage ? "text-white" : 
                                    isCustomerPage ? "text-white" : // White icon for customer page
                                    "text-foreground hover:text-primary"
                                )}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white absolute w-full left-0 top-20 shadow-lg">
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