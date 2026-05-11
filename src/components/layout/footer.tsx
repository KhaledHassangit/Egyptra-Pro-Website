import Link from "@/components/shared/link";
import Container from "@/util/Container";
import {
    Instagram,
    MapPin,
    Calendar,
    Headphones,
    Info,
    Navigation,
    Compass,
    Map,
    Tag,
    ShoppingBag,
    CreditCard,
    HelpCircle,
    Phone,
    Star,
    FileText,
    Shield,
    User,
    CheckCircle,
    Award,
    Plane,
    Building,
    Pyramid,
    Castle,
    Sun,
    Palmtree,
    Youtube,
    Twitter,
    Facebook,
    Globe
} from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#0A1628] text-white pt-12 pb-6">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">

                    <div>
                        <div className="flex items-center mb-4">
                            <MapPin size={20} className="mr-2 text-primary" />
                            <h3 className="text-base font-semibold">Main Destinations</h3>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-center group">
                                <Plane size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/destination-tours?location=sharm-el-sheikh" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Sharm El Sheikh</Link>
                            </li>
                            <li className="flex items-center group">
                                <Palmtree size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/destination-tours?location=hurghada" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Hurghada</Link>
                            </li>
                            <li className="flex items-center group">
                                <Pyramid size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/destination-tours?location=cairo" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Cairo</Link>
                            </li>
                            <li className="flex items-center group">
                                <Castle size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/destination-tours?location=luxor" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Luxor</Link>
                            </li>
                            <li className="flex items-center group">
                                <Sun size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/destination-tours?location=marsa-alam" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Marsa Alam</Link>
                            </li>
                            <li className="flex items-center group">
                                <Navigation size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/destination-tours" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">All Destinations</Link>
                            </li>
                            <li className="flex items-center group">
                                <Compass size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/destination-tours" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Discover Tours and Activities</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <Calendar size={20} className="mr-2 text-primary" />
                            <h3 className="text-base font-semibold">Plan Your Trip</h3>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-center group">
                                <FileText size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/why_us" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Egypt Travel Guide</Link>
                            </li>
                            <li className="flex items-center group">
                                <Compass size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/destination-tours" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Discover Egypt</Link>
                            </li>
                            <li className="flex items-center group">
                                <Map size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/contact_us" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Discovery Map</Link>
                            </li>
                            <li className="flex items-center group">
                                <Tag size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/category-products/safari" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Tours by Category</Link>
                            </li>
                            <li className="flex items-center group">
                                <ShoppingBag size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/contact_us" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Shopping Guide</Link>
                            </li>
                            <li className="flex items-center group">
                                <CreditCard size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/contact_us" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Book Directly</Link>
                            </li>
                            <li className="flex items-center group">
                                <HelpCircle size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/faq" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Frequently Asked Questions</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <Headphones size={20} className="mr-2 text-primary" />
                            <h3 className="text-base font-semibold">Customer Support</h3>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-center group">
                                <Info size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">About Egyptra</Link>
                            </li>
                            <li className="flex items-center group">
                                <Phone size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/contact_us" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Contact Us</Link>
                            </li>
                            <li className="flex items-center group">
                                <Star size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Customer Reviews</Link>
                            </li>
                            <li className="flex items-center group">
                                <FileText size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Travel Blog</Link>
                            </li>
                            <li className="flex items-center group">
                                <FileText size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/terms" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Terms & Conditions</Link>
                            </li>
                            <li className="flex items-center group">
                                <Shield size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/privacy" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Privacy Policy</Link>
                            </li>
                            <li className="flex items-center group">
                                <User size={16} className="mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                                <Link href="/auth/customer_login" className="text-[#D1D5DC] hover:text-white text-sm transition-colors group-hover:translate-x-1 inline-block">Agent Portal</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <h3 className="text-base font-semibold">About Egyptra</h3>
                        </div>
                        <p className="text-[#D1D5DC] text-sm mb-6 flex items-start">
                            Discover Egypt's top-ranked experiences with Egyptra, trusted by 100,000+ happy travelers. Enjoy all-inclusive pricing with transfers and no hidden costs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 ">
                            <Link href="/why_us" className="footer-btn box-shadow text-[10px] font-bold py-2.5 px-4 rounded transition-all duration-300 text-white h-[50px] text-center flex items-center justify-center bg-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1">
                                Why Choose US
                            </Link>
                            <Link href="/destination-tours?location=hurghada" className="footer-2nd-btn box-shadow text-white text-[10px] h-[50px] font-bold py-2.5 px-4 rounded transition-all duration-300 text-center flex items-center justify-center bg-secondary hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-1">
                                TOP RATED IN HURGHADA
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/20 my-6"></div>

                <div className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col gap-3" >
                            <span className="text-sm font-bold">Follow Us</span>
                            <div className="flex items-center space-x-3 mb-4 md:mb-0">
                                <div className="w-10 h-10 bg-[#4A5565] rounded-[10px] border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#5A6575] hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                    <Facebook size={18} className="text-[#D1D5DC]" />
                                </div>

                                <div className="w-10 h-10 bg-[#4A5565] rounded-[10px] border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#5A6575] hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                    <Twitter size={18} className="text-[#D1D5DC]" />
                                </div>

                                <div className="w-10 h-10 bg-[#4A5565] rounded-[10px] border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#5A6575] hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                    <Instagram size={18} className="text-[#D1D5DC]" />
                                </div>

                                <div className="w-10 h-10 bg-[#4A5565] rounded-[10px] border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#5A6575] hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                    <Youtube size={18} className="text-[#D1D5DC]" />
                                </div>

                                <div className="w-10 h-10 bg-[#4A5565] rounded-[10px] border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#5A6575] hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D1D5DC]">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="currentColor" />
                                    </svg>
                                </div>

                                <div className="w-10 h-10 bg-[#4A5565] rounded-[10px] border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#5A6575] hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D1D5DC]">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center space-x-2 text-center">
                            <Link href="/" className="text-[#99A1AF] hover:text-white text-sm transition-colors ">Sitemap</Link>
                            <span className="text-[#99A1AF]">|</span>
                            <Link href="/privacy" className="text-[#99A1AF] hover:text-white text-sm transition-colors ">Privacy Policy</Link>
                            <span className="text-[#99A1AF]">|</span>
                            <Link href="/terms" className="text-[#99A1AF] hover:text-white text-sm transition-colors ">Terms & Conditions</Link>
                            <span className="text-[#99A1AF]">|</span>
                            <Link href="/contact_us" className="text-[#99A1AF] hover:text-white text-sm transition-colors ">Contact us</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 my-6"></div>

                <div className="text-center text-[#99A1AF] text-sm">
                    © 2026 Egyptra Travel. All rights reserved.                 
                </div>
            </Container>
        </footer>
    );
}