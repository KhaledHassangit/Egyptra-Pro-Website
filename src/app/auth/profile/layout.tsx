"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Container from '@/util/Container';
import PageHero from '@/util/PageHero';
import { cn } from '@/lib/utils';

interface ProfileLayoutProps {
    children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
    const pathname = usePathname();

    const tabs = [
        { name: 'Overview', path: '/auth/profile/overview' },
        { name: 'My Bookings', path: '/auth/profile/bookings' },
        { name: 'Wishlist', path: '/auth/profile/wishlist' },
    ];

    // Find the current active tab
    const activeTab = tabs.find(tab => pathname === tab.path);
    
    // Create breadcrumb items
    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Profile', url: '/auth/profile' },
        { name: activeTab?.name || 'Profile' } 
    ];

    return (
        <section className="min-h-screen">
            <PageHero 
                title="Profile" 
                breadcrumbItems={breadcrumbItems}
            />

            <div className="relative py-20">
                <Container>
                    <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
                        <div className="flex w-full gap-3 md:justify-between min-w-max">
                            {tabs.map((tab) => {
                                const isActive = pathname === tab.path;

                                return (
                                    <Link
                                        key={tab.path}
                                        href={tab.path}
                                        className={cn(
                                            "flex items-center justify-center bg-white border-[#CDCDCD] text-[#4A5565] font-medium transition-all duration-200 whitespace-nowrap",
                                            
                                            "h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px]",
                                            
                                            "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]",
                                            
                                            "px-2 sm:px-3 md:px-4 lg:px-5",
                                            
                                            "rounded-[8px] sm:rounded-[10px] md:rounded-[10px]",
                                            
                                            "w-full md:flex-1",
                                            
                                            "min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px]",
                                            
                                            "border",
                                            
                                            isActive
                                                ? "text-[#0373DE] border-[#0373DE]"
                                                : "hover:border-gray-300 hover:text-gray-700"
                                        )}
                                    >
                                        {tab.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    
                    <div className="md:hidden flex justify-center mt-2">
                        <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                </Container>
            </div>

            <Container className='pb-20'>
                {children}
            </Container>
        </section>
    );
}