// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/util/Container';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Destinations', href: '#destinations' },
        { name: 'Trips', href: '#trips' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <nav className="bg-primary">
            <div className="mt-4">
                <Container className="rounded-[20px] bg-white   z-50">
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="relative w-12 h-12">
                                    <Image
                                        src="/Logo.png" // Make sure you have this logo in your /public folder
                                        alt="Egyptra Pro Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* <span className="font-bold text-xl text-primary hidden sm:block">EGYPTRA PRO</span> */}
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="bg-primary hover:bg-primary/90 text-white">Book Now</Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-foreground hover:text-primary focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white  absolute w-full left-0 top-20 shadow-lg">
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