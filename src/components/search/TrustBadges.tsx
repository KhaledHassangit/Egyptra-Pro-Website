// TrustBadges.tsx
import { BadgeDollarSign, Award, ShieldCheck, CalendarCheck } from "lucide-react";

const TrustBadges = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-full text-[#0373DE]">
                    <BadgeDollarSign size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                    <h4 
                        className="font-bold text-gray-900"
                        style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                    >
                        No Hidden Costs
                    </h4>
                    <p 
                        className="text-gray-500"
                        style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}
                    >
                        Transparent pricing
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 sm:p-3 rounded-full text-green-600">
                    <Award size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                    <h4 
                        className="font-bold text-gray-900"
                        style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                    >
                        Best Price Guarantee
                    </h4>
                    <p 
                        className="text-gray-500"
                        style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}
                    >
                        Lowest prices guaranteed
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-yellow-50 p-2 sm:p-3 rounded-full text-yellow-600">
                    <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                    <h4 
                        className="font-bold text-gray-900"
                        style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                    >
                        Top Rated
                    </h4>
                    <p 
                        className="text-gray-500"
                        style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}
                    >
                        Verified reviews
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-2 sm:p-3 rounded-full text-purple-600">
                    <CalendarCheck size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                    <h4 
                        className="font-bold text-gray-900"
                        style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                    >
                        Flexible Policy
                    </h4>
                    <p 
                        className="text-gray-500"
                        style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}
                    >
                        Free cancellation available
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TrustBadges