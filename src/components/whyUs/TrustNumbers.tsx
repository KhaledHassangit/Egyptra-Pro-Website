import Container from '@/util/Container'
import SectionHeader from '@/util/SectionHeader'
import { stats } from '@/constants/data'

const TrustNumbers = () => {


    return (
        <section
            className="py-12 sm:py-16 bg-gray-50/30"
            aria-labelledby="trust-numbers-heading"
        >
            <Container>
                <header className="mb-8 sm:mb-12 px-4 sm:px-6 lg:px-0">
                    <SectionHeader
                        title="Trust The Numbers"
                        description="Discover our most loved tours and unforgettable experiences in Egypt"
                    />
                </header>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-0"
                    role="list"
                >
                    {stats.map((stat, index) => (
                        <article
                            key={stat.id}
                            className="group mx-auto  flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl  hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/20"
                            role="listitem"
                            tabIndex={0}
                            aria-labelledby={`stat-${stat.id}-value stat-${stat.id}-label`}
                        >
                            <div
                                className="p-2.5 sm:p-3 bg-[#0373DE1A] rounded-xl text-primary transition-transform group-hover:scale-110"
                                aria-hidden="true"
                            >
                                <stat.icon
                                    size={20}
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    color='#0373DE'
                                    strokeWidth={2}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3
                                    id={`stat-${stat.id}-value`}
                                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary leading-tight mb-1"
                                >
                                    {stat.value}
                                </h3>
                                <p
                                    id={`stat-${stat.id}-label`}
                                    className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed"
                                >
                                    {stat.label}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Additional accessibility info */}
                <div className="sr-only" role="status" aria-live="polite">
                    Our platform offers 1000+ tours and activities, serving over 1 million satisfied customers with 100K+ reviews in 20+ languages
                </div>
            </Container>
        </section>
    )
}

export default TrustNumbers