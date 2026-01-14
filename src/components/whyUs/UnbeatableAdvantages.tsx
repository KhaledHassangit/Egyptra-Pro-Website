import { advantages } from '@/constants/data'
import Container from '@/util/Container'
import SectionHeader from '@/util/SectionHeader'
import Image from 'next/image'

const UnbeatableAdvantages = () => {

    return (
        <section className="py-12 sm:py-16 lg:py-20" aria-labelledby="advantages-heading">
            <Container>
                <header className="text-center mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-0">
                    <SectionHeader 
                        title='Unbeatable Advantages' 
                        description='Discover our most loved tours and unforgettable experiences in Egypt' 
                    />
                </header>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-12">
                        {advantages.map((item, index) => (
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

                    {/* Right Column: Image */}
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] w-full overflow-hidden shadow-xl ">
                        <Image
                            src="/images/dest3.jpg"
                            alt="Hiker on a bridge"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
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