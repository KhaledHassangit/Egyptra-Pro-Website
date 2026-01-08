import Container from '@/util/Container'
import SectionHeader from '@/util/SectionHeader'
import { Wallet, CreditCard, CheckCircle } from 'lucide-react'



const FlexiblePayment = () => {
    const options = [
        {
            icon: Wallet,
            title: 'Cash on Spot',
            description: 'Book online and pay cash on arrival. No payment required.'
        },
        {
            icon: CreditCard,
            title: 'Secure Payment Link',
            description: 'Protected online payment with instant confirmation.'
        },
        {
            icon: CheckCircle,
            title: 'No Prepayment',
            description: 'Book now, pay later. Cancel any time!'
        }
    ]

    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <SectionHeader 
                        title="Flexible Payment Options" 
                        description="Discover our most loved tours and unforgettable experiences in Egypt" 
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {options.map((option, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white hover:shadow-lg transition-shadow text-center group"
                            style={{ 
                                width: "392px", 
                                height: "393px",
                                borderColor: "#D5B18A80",
                                borderWidth: "1px",
                                borderStyle: "solid"
                            }}
                        >
                            <div 
                                className="mb-6 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                                style={{ 
                                    width: "64px", 
                                    height: "64px",
                                    backgroundColor: "#D0A87D"
                                }}
                            >
                                <option.icon size={32} />
                            </div>
                            <h3 
                                className="mb-3"
                                style={{ 
                                    color: "#000000", 
                                    fontSize: "24px", 
                                    fontWeight: "500" 
                                }}
                            >
                                {option.title}
                            </h3>
                            <p 
                                className="text-center"
                                style={{ 
                                    color: "#5D5D5D", 
                                    fontSize: "24px", 
                                    fontWeight: "300" 
                                }}
                            >
                                {option.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default FlexiblePayment