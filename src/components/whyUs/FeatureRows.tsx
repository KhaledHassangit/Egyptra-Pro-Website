import Container from '@/util/Container'
import { Zap, Headphones, Crown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FeatureRows = () => {
    const features = [
        {
            icon: Zap,
            title: 'Instant Confirmation',
            description: 'Modern travel technology with automated booking management system. Get instant email confirmation for your bookings.'
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Direct support team available 24 hours on WhatsApp +201000000000. Real person real customer support before, during and after your tour. Have a change? Missing - just need a WhatsApp voice note!'
        },
        {
            icon: Crown,
            title: 'Premium Experience',
            description: 'Luxury fleets, best dining & socializing spots with certified instructors. Comfort transportation with smooth pick-up and drop-off from all hotels.'
        }
    ]

    return (
        <section className="py-20 ">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left Column: Image */}
                    <div className="order-2 lg:order-1 relative h-full min-h-[500px] lg:min-h-full w-full overflow-hidden shadow-xl">
                        <Image
                            src="/images/dest1.png"
                            alt="Coastal landscape"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gray-200 -z-10" />
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center space-y-12">
                        {features.map((item, index) => (
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
                </div>
            </Container>
        </section>
    )
}

export default FeatureRows