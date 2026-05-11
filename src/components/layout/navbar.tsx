// components/Navbar.tsx
'use client';

import { useState } from 'react';
import { Check, ChevronDown, Menu, Search, User, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Container from '@/util/Container';
import Logo from '@/util/Logo';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Image from 'next/image';
import { MegaMenu } from '../navbar/MegaMenu';
import { NavDropdown } from '../navbar/NavDropdown';
import { IconWithBadge } from '../navbar/IconWithBadge';
import { MobileMenu } from '../navbar/MobileMenu';
import { currencies, destinationsData, languages, tourCategoryData, travelGuideData } from '@/constants/data';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectors, setSelectors] = useState({ language: 'EN', currency: 'USD' });

    const handleSelectorClick = (type: 'language' | 'currency', value: string) => {
        setSelectors(prev => ({ ...prev, [type]: value }));
    };

    const getCurrentLanguageFlag = () => {
        const lang = languages.find(l => l.code === selectors.language);
        return lang ? lang.flag : 'gb';
    };

    const getCurrentCurrencySymbol = () => {
        const currency = currencies.find(c => c.code === selectors.currency);
        return currency ? currency.symbol : '$';
    };

    return (
        <>
            <nav className="w-full bg-white shadow-sm relative z-40">
                <Container size='xl'>
                    <div className="flex justify-between items-center h-16 md:h-20">
                        <div className="flex items-center space-x-2 md:space-x-4">
                            <div className="lg:hidden">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setMobileMenuOpen(true)}
                                    style={{ color: '#364153' }}
                                >
                                    <Menu size={24} />
                                </Button>
                            </div>

                            <Logo width={12} height={12} />
                        </div>

                        <div className="hidden lg:flex flex-1 justify-end xl:justify-center items-center pl-2 pr-4 xl:px-4">
                            <div className="flex items-center space-x-2 xl:space-x-6 2xl:space-x-8">
                                <MegaMenu
                                    title="Destinations"
                                    data={destinationsData}
                                    className="text-sm xl:text-base font-bold"
                                />
                                <NavDropdown
                                    title="Tour Category"
                                    items={tourCategoryData}
                                    className="text-sm xl:text-base font-bold"
                                />
                                <NavDropdown
                                    title="Travel Guide"
                                    items={travelGuideData}
                                    className="text-sm xl:text-base font-bold"
                                />
                                <Link href="/why_us">
                                    <Button
                                        variant="ghost"
                                        className="px-0 py-5 h-auto hover:bg-transparent text-sm xl:text-base font-bold"
                                        style={{ color: '#364153' }}
                                    >
                                        Why Us
                                    </Button>
                                </Link>
                                <Link href="/contact_us">
                                    <Button
                                        variant="ghost"
                                        className="px-0 py-5 h-auto hover:bg-transparent text-sm xl:text-base font-bold"
                                        style={{ color: '#364153' }}
                                    >
                                        Contact
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-1 md:space-x-2 xl:space-x-4">
                            <div
                                className="hidden sm:flex items-center"
                                style={{
                                    backgroundColor: '#F9FAFB',
                                    borderRadius: '14px',
                                    padding: '4px'
                                }}
                            >
                                <div className="flex items-center space-x-1 px-2 py-2 xl:px-3">
                                    <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="p-0 h-auto hover:bg-transparent flex items-center space-x-1"
                                                style={{ color: '#364153' }}
                                            >
                                                <Image
                                                    src={`https://flagicons.lipis.dev/flags/4x3/${getCurrentLanguageFlag()}.svg`}
                                                    alt={selectors.language}
                                                    width={20}
                                                    height={15}
                                                    className="rounded-sm"
                                                />
                                                <span className="hidden xl:inline text-sm">{selectors.language}</span>
                                                <ChevronDown className="h-3 w-3" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            sideOffset={8}
                                            avoidCollisions={true}
                                            collisionPadding={20}
                                            className="w-40 max-h-60 overflow-y-auto"
                                        >
                                            {languages.map((lang) => (
                                                <DropdownMenuItem
                                                    key={lang.code}
                                                    onClick={() => handleSelectorClick('language', lang.code)}
                                                    className="flex items-center justify-between py-2 px-3 cursor-pointer"
                                                >
                                                    <div className="flex items-center space-x-3">
                                                        <Image
                                                            src={`https://flagicons.lipis.dev/flags/4x3/${lang.flag}.svg`}
                                                            alt={lang.name}
                                                            width={20}
                                                            height={15}
                                                            className="rounded-sm"
                                                        />
                                                        <span className="text-sm" style={{ color: '#000000' }}>{lang.name}</span>
                                                    </div>
                                                    {selectors.language === lang.code && (
                                                        <Check className="h-4 w-4" style={{ color: '#364153' }} />
                                                    )}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                <Separator orientation="vertical" className="h-6" style={{ backgroundColor: '#D1D5DC' }} />

                                <div className="px-2 py-2 xl:px-3">
                                    <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="p-0 h-auto hover:bg-transparent flex items-center space-x-1"
                                                style={{ color: '#364153' }}
                                            >
                                                <span>{getCurrentCurrencySymbol()}</span>
                                                <span className="hidden xl:inline text-sm">{selectors.currency}</span>
                                                <ChevronDown className="h-3 w-3" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            sideOffset={8}
                                            avoidCollisions={true}
                                            collisionPadding={20}
                                            className="w-48"
                                        >
                                            {currencies.map((curr) => (
                                                <DropdownMenuItem
                                                    key={curr.code}
                                                    onClick={() => handleSelectorClick('currency', curr.code)}
                                                    className="flex items-center justify-between py-2 px-3 cursor-pointer text-nowrap"
                                                >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-sm font-medium" style={{ color: '#000000' }}>
                                                            {curr.symbol}
                                                        </span>
                                                        <span className="text-sm" style={{ color: '#000000' }}>
                                                            {curr.code}  {curr.name}
                                                        </span>
                                                    </div>
                                                    {selectors.currency === curr.code && (
                                                        <Check className="h-4 w-4" style={{ color: '#364153' }} />
                                                    )}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>

                            <IconWithBadge
                                icon={Heart}
                                badgeVariant="default"
                                badgeContent="2"
                                badgeColor="#EF4444" 

                            />
                            <IconWithBadge
                                icon={ShoppingCart}
                                badgeVariant="default"
                                badgeContent="3"
                            />
                            <Link href="/auth/customer_login">
                                <Button variant="ghost" size="icon" style={{ color: '#364153' }}>
                                    <User className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/search">
                                <Button variant="ghost" size="icon" style={{ color: '#364153' }}>
                                    <Search className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </nav>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                destinationsData={destinationsData}
                tourCategoryData={tourCategoryData}
                travelGuideData={travelGuideData}
            />
        </>
    );
}