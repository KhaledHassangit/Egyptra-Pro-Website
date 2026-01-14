import { items } from '@/constants/data'
import Container from '@/util/Container'
import SectionHeader from '@/util/SectionHeader'
import Image from 'next/image'

const SafetySecurity = () => {
   

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="safety-heading">
            <Container>
                <header className="text-center mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-0">
                    <SectionHeader
                        title="Your Safety & Security"
                        description="Discover our most loved tours and unforgettable experiences in Egypt"
                    />
                </header>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {items.map((item, index) => (
                        <article 
                            key={index} 
                            className="group relative h-64 sm:h-72 md:h-80 lg:h-72 xl:h-72 w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                                <h3 className="text-base sm:text-lg font-semibold mb-1">{item.title}</h3>
                                <p className="text-xs sm:text-sm opacity-90">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default SafetySecurity