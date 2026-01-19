// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown, Heart, ShoppingCart, User, Search, Globe, Check } from 'lucide-react';
import Container from '@/util/Container';
import { cn } from '@/lib/utils';
import Logo from '@/util/Logo';

// shadcn/ui imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// --- Data for Navigation Menus ---
const destinationsData = {
    'Popular Destinations': [
        { name: 'Cairo', href: '#' },
        { name: 'Luxor', href: '#' },
        { name: 'Hurghada', href: '#' },
        { name: 'Sharm El Sheikh', href: '#' },
    ],
    'Red Sea': [
        { name: 'El Gouna', href: '#' },
        { name: 'Marsa Alam', href: '#' },
        { name: 'Soma Bay', href: '#' },
        { name: 'Maadi Bay', href: '#' },
        { name: 'Salh Hasheed', href: '#' },
    ]
};

const tourCategoryData = [
    { name: 'Safari', href: '#' },
    { name: 'Boat Tour', href: '#' },
    { name: 'Diving', href: '#' },
    { name: 'Snorkeling', href: '#' },
    { name: 'Historical', href: '#' },
    { name: 'City Tour', href: '#' },
    { name: 'Cultural', href: '#' },
    { name: 'Multi-day', href: '#' },
];

const travelGuideData = [
    { name: 'Hurghada Guide', href: '#' },
    { name: 'Sharm El Sheikh Guide', href: '#' },
    { name: 'Cairo Guide', href: '#' },
    { name: 'Luxor Guide', href: '#' },
    { name: 'Marsa Alam Guide', href: '#' },
];

// Updated languages with all options from the HTML
const languages = [
    { code: 'EN', name: 'English', flag: 'gb' },
    { code: 'IT', name: 'Italiano', flag: 'it' },
    { code: 'DE', name: 'Deutsch', flag: 'de' },
    { code: 'FR', name: 'Français', flag: 'fr' },
    { code: 'ES', name: 'Español', flag: 'es' },
    { code: 'TR', name: 'Türkçe', flag: 'tr' },
    { code: 'PL', name: 'Polski', flag: 'pl' },
    { code: 'RU', name: 'Русский', flag: 'ru' },
    { code: 'NL', name: 'Nederlands', flag: 'nl' },
    { code: 'PT', name: 'Português', flag: 'pt' },
    { code: 'AR', name: 'العربية', flag: 'sa' },
    { code: 'ZH', name: '中文', flag: 'cn' },
    { code: 'JA', name: '日本語', flag: 'jp' },
    { code: 'KO', name: '한국어', flag: 'kr' },
    { code: 'HI', name: 'हिन्दी', flag: 'in' },
    { code: 'HU', name: 'Magyar', flag: 'hu' },
    { code: 'RO', name: 'Română', flag: 'ro' },
    { code: 'BG', name: 'Български', flag: 'bg' },
    { code: 'CS', name: 'Čeština', flag: 'cz' },
    { code: 'SV', name: 'Svenska', flag: 'se' },
    { code: 'DA', name: 'Dansk', flag: 'dk' },
    { code: 'NO', name: 'Norsk', flag: 'no' },
    { code: 'FI', name: 'Suomi', flag: 'fi' },
    { code: 'EL', name: 'Ελληνικά', flag: 'gr' },
    { code: 'SR', name: 'Српски', flag: 'rs' },
    { code: 'SK', name: 'Slovenčina', flag: 'sk' },
    { code: 'LT', name: 'Lietuvių', flag: 'lt' },
    { code: 'LV', name: 'Latviešu', flag: 'lv' },
    { code: 'ET', name: 'Eesti', flag: 'ee' },
];

// Updated currencies with proper codes
const currencies = [
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£' },
];

// --- Dropdown Component ---
const NavDropdown = ({ title, items }: { title: string; items: { name: string; href: string }[] }) => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost" 
                    className="flex items-center space-x-1 px-0 py-5 h-auto hover:bg-transparent"
                    style={{ color: '#364153', fontWeight: 700 }}
                >
                    <span>{title}</span>
                    <ChevronDown className="h-4 w-4" />
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
                    <DropdownMenuItem key={item.name} asChild>
                        <Link href={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

// --- Mega Menu Component ---
const MegaMenu = ({ title, data }: { title: string; data: typeof destinationsData }) => {
    return (
        <Popover modal={false}>
            <PopoverTrigger asChild>
                <Button 
                    variant="ghost" 
                    className="flex items-center space-x-1 px-0 py-5 h-auto hover:bg-transparent"
                    style={{ color: '#364153', fontWeight: 700 }}
                >
                    <span>{title}</span>
                    <ChevronDown className="h-4 w-4" />
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
                            <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-gray-600 hover:text-primary text-sm">
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
};

// --- Icon with Badge Component ---
const IconWithBadge = ({ 
    icon: Icon, 
    badgeVariant, 
    badgeContent 
}: { 
    icon: React.ElementType;
    badgeVariant: 'default' | 'secondary';
    badgeContent?: string;
}) => {
    return (
        <Button variant="ghost" size="icon" className="relative" style={{ color: '#364153' }}>
            <Icon className="h-5 w-5" />
            {badgeContent && (
                <Badge 
                    variant={badgeVariant} 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    style={badgeVariant === 'secondary' ? { backgroundColor: '#D1D5DC' } : { backgroundColor: '#155DFC' }}
                >
                    {badgeContent}
                </Badge>
            )}
        </Button>
    );
};

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const [selectors, setSelectors] = useState({ language: 'EN', currency: 'USD' });

    const handleMobileDropdownToggle = (name: string) => {
        setOpenMobileDropdown(openMobileDropdown === name ? null : name);
    };

    const handleSelectorClick = (type: 'language' | 'currency', value: string) => {
        setSelectors(prev => ({ ...prev, [type]: value }));
    };

    // Get current language flag
    const getCurrentLanguageFlag = () => {
        const lang = languages.find(l => l.code === selectors.language);
        return lang ? lang.flag : 'gb';
    };

    // Get current currency symbol
    const getCurrentCurrencySymbol = () => {
        const currency = currencies.find(c => c.code === selectors.currency);
        return currency ? currency.symbol : '$';
    };

    return (
        <nav className="w-full bg-white shadow-sm relative z-50">
            <Container>
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Logo width={12} height={12} />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
                        <MegaMenu title="Destinations" data={destinationsData} />
                        <NavDropdown title="Tour Category" items={tourCategoryData} />
                        <NavDropdown title="Travel Guide" items={travelGuideData} />
                        <Button variant="ghost" className="px-0 py-5 h-auto hover:bg-transparent" style={{ color: '#364153', fontWeight: 700 }}>
                            Why Us
                        </Button>
                        <Button variant="ghost" className="px-0 py-5 h-auto hover:bg-transparent" style={{ color: '#364153', fontWeight: 700 }}>
                            Contact
                        </Button>
                    </div>

                    {/* Right Side Icons & Selectors */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Language and Currency Selector Container */}
                        <div 
                            className="flex items-center"
                            style={{ 
                                backgroundColor: '#F9FAFB', 
                                borderRadius: '14px', 
                                padding: '4px'
                            }}
                        >
                            {/* Language Selector */}
                            <div className="flex items-center space-x-1 px-3 py-2">
                                <Globe className="h-4 w-4" style={{ color: '#364153' }} />
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
                                            <span>{selectors.language}</span>
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
                            
                            {/* Separator */}
                            <Separator orientation="vertical" className="h-6" style={{ backgroundColor: '#D1D5DC' }} />
                            
                            {/* Currency Selector */}
                            <div className="px-3 py-2">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <Button 
                                            variant="ghost" 
                                            size="sm" 
                                            className="p-0 h-auto hover:bg-transparent flex items-center space-x-1"
                                            style={{ color: '#364153' }}
                                        >
                                            <span>{getCurrentCurrencySymbol()}</span>
                                            <span>{selectors.currency}</span>
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
                        
                        {/* Icons with Badges */}
                        <IconWithBadge 
                            icon={Heart} 
                            badgeVariant="secondary" 
                            badgeContent="2"
                        />
                        <IconWithBadge 
                            icon={ShoppingCart} 
                            badgeVariant="default" 
                            badgeContent="3"
                        />
                        <Button variant="ghost" size="icon" style={{ color: '#364153' }}>
                            <User className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" style={{ color: '#364153' }}>
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ color: '#364153' }}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu - Using fixed overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t fixed top-16 md:top-20 left-0 right-0 z-40">
                    <Container>
                        <div className="py-4 space-y-2">
                            {/* Mobile Destinations Accordion */}
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
                                        {Object.values(destinationsData).flat().map(item => (
                                            <Link key={item.name} href={item.href} className="block py-1 text-sm text-gray-600">{item.name}</Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Tour Category Accordion */}
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
                                            <Link key={item.name} href={item.href} className="block py-1 text-sm text-gray-600">{item.name}</Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Travel Guide Accordion */}
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
                                            <Link key={item.name} href={item.href} className="block py-1 text-sm text-gray-600">{item.name}</Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Button variant="ghost" className="w-full justify-start p-2 h-auto" style={{ color: '#364153', fontWeight: 700 }}>
                                Why Us
                            </Button>
                            <Button variant="ghost" className="w-full justify-start p-2 h-auto" style={{ color: '#364153', fontWeight: 700 }}>
                                Contact
                            </Button>
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    );
}