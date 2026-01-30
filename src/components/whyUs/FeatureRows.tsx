// FeatureRows.tsx
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
        <section className="py-12 sm:py-16 lg:py-20" aria-labelledby="features-heading">
            <Container>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    <div className="order-2 lg:order-1 relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] w-full overflow-hidden shadow-xl ">
                        <Image
                            src="/images/dest1.png"
                            alt="Coastal landscape"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gray-200 -z-10" />
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-12">
                        {features.map((item, index) => (
                            <article key={index} className="flex gap-3 sm:gap-4">
                                <div className="flex-shrink-0">
                                    <div 
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded flex items-center justify-center text-white transition-transform group-hover:scale-110" 
                                        style={{ backgroundColor: '#D0A87D', borderRadius: '4px' }}
                                    >
                                        <item.icon size={20} className="sm:w-6 sm:h-6" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 
                                        className="font-medium mb-2 text-primary"
                                        style={{ 
                                            fontSize: 'clamp(20px, 4vw, 30px)', 
                                            fontWeight: '500',
                                            lineHeight: '1.3'
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p 
                                        className="leading-relaxed"
                                        style={{ 
                                            fontSize: 'clamp(16px, 2.5vw, 20px)', 
                                            fontWeight: '300', 
                                            color: '#080808CC',
                                            lineHeight: '1.5'
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FeatureRows