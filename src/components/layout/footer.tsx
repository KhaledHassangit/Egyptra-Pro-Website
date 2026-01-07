import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">

                    {/* Main Destination Column */}
                    <div>
                        <h3 className="text-base font-semibold mb-4">Main Destination</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                        </ul>
                    </div>

                    {/* Plan Your Trip Column */}
                    <div>
                        <h3 className="text-base font-semibold mb-4">Plan Your Trip</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-base font-semibold mb-4">Quick links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sharm El-sheikh</Link></li>
                        </ul>
                    </div>

                    {/* Logo Column */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-32 h-32 bg-white rounded-xl p-3">
                            <Image
                                src="/Logo.png"
                                alt="Egyptra Pro Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Social Media */}
                <div className="border-t border-blue-800 pt-6">
                    <div className="flex justify-center items-center space-x-6">
                        <h4 className="text-sm font-medium">Social media</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
