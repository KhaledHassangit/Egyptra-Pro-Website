import Container from '@/util/Container'
import { Check, X } from 'lucide-react'
import React from 'react'
import SectionHeader from '@/util/SectionHeader'

const CompareSave = () => {
    const rows = [
        { 
            feature: 'Direct Local Prices', 
            egyptra: { icon: true, text: 'No Commission' }, 
            others: { icon: false, text: '15-30% Commission' } 
        },
        { 
            feature: '24/7 Support', 
            egyptra: { icon: true, text: 'Direct Team' }, 
            others: { icon: false, text: 'Limited Hours' } 
        },
        { 
            feature: 'Payment Options', 
            egyptra: { icon: true, text: 'Cash on Spot Available' }, 
            others: { icon: false, text: 'Prepayment Required' } 
        },
        { 
            feature: 'Cancellation Policy', 
            egyptra: { icon: true, text: 'Full Refund (12h)' }, 
            others: { icon: false, text: 'Partial/No Refund' } 
        },
        { 
            feature: 'Languages', 
            egyptra: { icon: true, text: '20+ Languages' }, 
            others: { icon: false, text: '2-5 Languages' } 
        },
        { 
            feature: 'Tour Variety', 
            egyptra: { icon: true, text: '1000+ Options' }, 
            others: { icon: false, text: 'Limited Selection' } 
        },
        { 
            feature: 'Experience', 
            egyptra: { icon: true, text: '20 Years' }, 
            others: { icon: false, text: 'Variable' } 
        },
        { 
            feature: 'Group Prices for Individuals', 
            egyptra: { icon: true, text: 'Always' }, 
            others: { icon: false, text: 'Groups Only' } 
        },
    ]

    const getIcon = (value: any) => {
        return (
            <div 
                className="flex items-center justify-center text-white flex-shrink-0"
                style={{ 
                    width: "30px", 
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: value.icon ? "#00C950" : "#FB2D36"
                }}
            >
                {value.icon ? <Check size={16} /> : <X size={18} />}
            </div>
        )
    }

    return (
        <section className="py-20 ">
            <Container>
                <div className="text-center mb-16">
                    <SectionHeader 
                        title="Compare & Save" 
                        description="Discover our most loved tours and unforgettable experiences in Egypt" 
                    />
                </div>
                {/* Responsive wrapper */}
                <div className="w-full max-w-[1220px] mx-auto overflow-x-auto">
                    <div 
                        className="bg-white overflow-hidden"
                        style={{ 
                            minWidth: "1000px",
                            border: "1px solid var(--color-primary)",
                            borderRadius: "4px"
                        }}
                    >
                        {/* Header */}
                        <div 
                            className="grid grid-cols-3"
                            style={{ backgroundColor: "#0373DE1A" }}
                        >
                            <div 
                                className="flex items-center font-bold px-4"
                                style={{ 
                                    color: "var(--color-primary)",
                                    fontWeight: "700",
                                    borderRight: "1px solid var(--color-primary)",
                                    height: "73px"
                                }}
                            >
                                <span className="whitespace-nowrap text-sm sm:text-base md:text-lg 
                                lg:text-xl xl:text-[20px] ms-12">
                                    Features
                                </span>
                            </div>
                            <div 
                                className="flex items-center font-bold px-4"
                                style={{ 
                                    color: "var(--color-primary)",
                                    fontWeight: "700",
                                    borderRight: "1px solid var(--color-primary)",
                                    height: "73px"
                                }}
                            >
                                <span className="whitespace-nowrap text-sm sm:text-base
                                 md:text-lg lg:text-xl xl:text-[20px] ms-12">
                                    Egyptra Travel
                                </span>
                            </div>
                            <div 
                                className="flex items-center font-bold px-4"
                                style={{ 
                                    color: "var(--color-primary)",
                                    fontWeight: "700",
                                    height: "73px"
                                }}
                            >
                                <span className="whitespace-nowrap text-sm sm:text-base 
                                md:text-lg lg:text-xl xl:text-[20px] ms-12">
                                    Other Agencies
                                </span>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="relative">
                            {/* Vertical lines */}
                            <div className="absolute inset-0 grid grid-cols-3 pointer-events-none z-20">
                                <div style={{ borderRight: "1px solid var(--color-primary)" }}></div>
                                <div style={{ borderRight: "1px solid var(--color-primary)" }}></div>
                                <div></div>
                            </div>
                            
                            {/* Content rows */}
                            {rows.map((row, index) => (
                                <div 
                                    key={index} 
                                    className="group relative"
                                >
                                    <div 
                                        className="grid grid-cols-3 relative z-10"
                                        style={{ 
                                            borderBottom: index !== rows.length - 1 ? "1px solid var(--color-primary)" : "none",
                                            minHeight: "75px"
                                        }}
                                    >
                                        <div 
                                            className="flex items-center px-4"
                                            style={{ 
                                                color: "#4B4B4B",
                                                fontWeight: "400"
                                            }}
                                        >
                                            <span className="whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] ms-12">
                                                {row.feature}
                                            </span>
                                        </div>
                                        
                                        {/* Second column - Egyptra - with fixed grid layout */}
                                        <div 
                                            className="flex items-center justify-center px-4"
                                        >
                                            <div className="grid grid-cols-[30px_1fr] gap-3 items-center w-full max-w-[300px]">
                                                {/* Icon - fixed position in first column */}
                                                <div className="flex justify-center">
                                                    {getIcon(row.egyptra)}
                                                </div>
                                                {/* Text - aligned with icon */}
                                                <span 
                                                    style={{ 
                                                        color: "#4B4B4B",
                                                        fontWeight: "400"
                                                    }}
                                                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] whitespace-nowrap"
                                                >
                                                    {row.egyptra.text}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div 
                                            className="flex items-center justify-center px-4"
                                        >
                                            <div className="grid grid-cols-[30px_1fr] gap-3 items-center w-full max-w-[300px]">
                                                {/* Icon - fixed position in first column */}
                                                <div className="flex justify-center">
                                                    {getIcon(row.others)}
                                                </div>
                                                {/* Text - aligned with icon */}
                                                <span 
                                                    style={{ 
                                                        color: "#4B4B4B",
                                                        fontWeight: "400"
                                                    }}
                                                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] whitespace-nowrap"
                                                >
                                                    {row.others.text}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hover background */}
                                    <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CompareSave