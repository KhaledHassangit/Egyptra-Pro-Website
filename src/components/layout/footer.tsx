import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="relative w-16 h-16 bg-white rounded-lg p-1">
                            <Image
                                src="/Logo.png"
                                alt="Egyptra Pro Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            Discover Egypt&apos;s best kept secrets with Egyptra Pro. Unmatched quality, best prices, and memories that last a lifetime.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-200 hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
                            <li><Link href="#about" className="text-gray-200 hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
                            <li><Link href="#destinations" className="text-gray-200 hover:text-white hover:translate-x-1 transition-all inline-block">Destinations</Link></li>
                            <li><Link href="#trips" className="text-gray-200 hover:text-white hover:translate-x-1 transition-all inline-block">Popular Trips</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Support</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-200 hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
                            <li><Link href="#" className="text-gray-200 hover:text-white hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-200 hover:text-white hover:translate-x-1 transition-all inline-block">Terms & Conditions</Link></li>
                            <li><Link href="#" className="text-gray-200 hover:text-white hover:translate-x-1 transition-all inline-block">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Actions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-secondary" />
                                <span className="text-gray-200">+20 123 456 7890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-secondary" />
                                <span className="text-gray-200">info@egyptrapro.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin size={18} className="text-secondary" />
                                <span className="text-gray-200">Hurghada, Red Sea, Egypt</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Egyptra Pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}