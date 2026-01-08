import Container from '@/util/Container'
import SectionHeader from '@/util/SectionHeader'
import { DollarSign, ShieldCheck, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const UnbeatableAdvantages = () => {
    const advantages = [
        {
            icon: DollarSign,
            title: 'Best Price Guarantee',
            description: 'Direct local deals with no commission added. Get exclusive prices on group mixed tours guaranteed the most competitive prices in Egypt!'
        },
        {
            icon: ShieldCheck,
            title: '100% Secure & Flexible',
            description: 'Licensed Category A company. Multiple payment options including cash on spot, secure payment links, and no prepayment needed.'
        },
        {
            icon: BadgeCheck,
            title: 'Local Expertise',
            description: 'All guides are licensed Egyptologists with 5+ years experience. Discover hidden gems only locals know.'
        }
    ]

    return (
        <section className="py-20">
            <Container>
                <div className="text-center mb-16">
                    <SectionHeader title='Unbeatable Advantages' description='Discover our most loved tours and unforgettable experiences in Egypt' />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center space-y-12">
                        {advantages.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded flex items-center justify-center text-white" style={{ backgroundColor: '#D0A87D', borderRadius: '4px' }}>
                                        <item.icon size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary" style={{ fontSize: '30px', fontWeight: '500' }}>{item.title}</h3>
                                    <p className="leading-relaxed" style={{ fontSize: '24px', fontWeight: '300', color: '#080808CC' }}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-full min-h-[500px] lg:min-h-full w-full overflow-hidden shadow-xl">
                        <Image
                            src="/images/dest3.jpg"
                            alt="Hiker on a bridge"
                            fill
                            className="object-cover"
                        />
                        {/* Fallback color if image fails loading */}
                        <div className="absolute inset-0 bg-gray-200 -z-10" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default UnbeatableAdvantages