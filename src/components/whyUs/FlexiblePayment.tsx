// FlexiblePayment.tsx
import { options } from '@/constants/data'
import Container from '@/util/Container'
import SectionHeader from '@/util/SectionHeader'

const FlexiblePayment = () => {
    

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="payment-heading">
            <Container>
                <header className="text-center mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-0">
                    <SectionHeader 
                        title="Flexible Payment Options" 
                        description="Discover our most loved tours and unforgettable experiences in Egypt" 
                    />
                </header>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                    {options.map((option, index) => (
                        <article 
                            key={index} 
                            className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 text-center group w-full max-w-sm sm:max-w-none"
                            style={{ 
                                borderColor: "#D5B18A80",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                minHeight: "320px"
                            }}
                        >
                            <div 
                                className="mb-4 sm:mb-6 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                                style={{ 
                                    width: "56px", 
                                    height: "56px",
                                    backgroundColor: "#D0A87D"
                                }}
                            >
                                <option.icon size={28} className="sm:w-8 sm:h-8" />
                            </div>
                            <h3 
                                className="mb-3 text-center"
                                style={{ 
                                    color: "#000000", 
                                    fontSize: 'clamp(18px, 3vw, 24px)', 
                                    fontWeight: "500",
                                    lineHeight: '1.3'
                                }}
                            >
                                {option.title}
                            </h3>
                            <p 
                                className="text-center"
                                style={{ 
                                    color: "#5D5D5D", 
                                    fontSize: 'clamp(14px, 2.5vw, 18px)', 
                                    fontWeight: "300",
                                    lineHeight: '1.5'
                                }}
                            >
                                {option.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default FlexiblePayment