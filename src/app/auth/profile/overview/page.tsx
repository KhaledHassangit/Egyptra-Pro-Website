"use client";

import { Calendar, Heart, MapPin, TrendingUp } from 'lucide-react';

const stats = [
    {
        icon: Calendar,
        label: 'Total Bookings',
        value: '3',
        bgColor: 'bg-blue-50',
        iconColor: 'text-[#0373DE]',
    },
    {
        icon: Heart,
        label: 'Wishlist Items',
        value: '3',
        bgColor: 'bg-red-50',
        iconColor: 'text-red-500',
    },
    {
        icon: MapPin,
        label: 'Member Since',
        value: 'Jan 2026',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-500',
    },
    {
        icon: TrendingUp,
        label: 'Total Spent',
        value: '11400 EGP',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-500',
    },
];

export default function OverviewPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-1">
                <h2 className="text-[#101828] text-[30px] font-bold leading-[36px]">Overview</h2>
                <p className="text-[#4A5565] text-base font-normal leading-[24px]">View your dashboard</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={index}
                            className="w-full aspect-[280/170] bg-white rounded-[14px] border-[0.8px] border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-center"
                        >
                            <div className="flex flex-col gap-4">
                                <div
                                    className={`w-[50px] h-[50px] ${stat.bgColor} rounded-xl flex items-center justify-center`}
                                >
                                    <Icon className={`w-7 h-7 ${stat.iconColor}`} strokeWidth={1.5} />
                                </div>

                                <div className="space-y-6">
                                    <p className="text-[#667085] text-sm font-medium">{stat.label}</p>
                                    <p className="text-[#0A0D14] text-xl font-bold leading-none tracking-tight">{stat.value}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}