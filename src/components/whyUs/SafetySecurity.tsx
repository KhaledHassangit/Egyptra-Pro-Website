import Container from '@/util/Container'
import SectionHeader from '@/util/SectionHeader'
import Image from 'next/image'
import React from 'react'

const SafetySecurity = () => {
    const items = [
        {
            title: 'Licensed Category ',
            description: 'Official Egyptian Tourism Authority',
            image: '/images/1.jpg'
        },
        {
            title: 'Fully Insured',
            description: 'Complete coverage for your peace ',
            image: '/images/2.jpg'
        },
        {
            title: 'Secure Payments',
            description: 'Protected transactions & data ',
            image: '/images/3.jpg'
        },
        {
            title: 'Verified Company',
            description: '20 years of trusted operations',
            image: '/images/4.png'
        }
    ]

    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <SectionHeader
                        title="Your Safety & Security"
                        description="Discover our most loved tours and unforgettable experiences in Egypt"
                    />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="group relative h-[290px] w-[290px] rounded-[4px] overflow-hidden cursor-pointer">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                <p className="text-sm opacity-90">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default SafetySecurity
