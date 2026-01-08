import Container from '@/util/Container'
import { Globe, Users, Star, Flag } from 'lucide-react'
import SectionHeader from '@/util/SectionHeader'

const TrustNumbers = () => {
    const stats = [
        { label: 'Tours & Activities', value: '1000+', icon: Globe },
        { label: 'Satisfied Customers', value: '1M+', icon: Users },
        { label: 'Platform Reviews', value: '100K+', icon: Star },
        { label: 'Languages Supported', value: '20+', icon: Flag },
    ]

    return (
            <Container className="py-16 " >
                <div className="mb-12 ms-4">
                    <SectionHeader 
                        title="Trust The Numbers " 
                        description="Discover our most loved tours and unforgettable experiences in Egypt" 
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors">
                            <div className="p-3 bg-[#0373DE1A] rounded-[17px] text-primary">
                                <stat.icon size={20} color='#0373DE'/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
                                <p className="text-sm text-[#666666] font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
    )
}

export default TrustNumbers