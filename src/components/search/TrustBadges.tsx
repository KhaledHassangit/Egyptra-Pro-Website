import { BadgeDollarSign, Award, ShieldCheck, CalendarCheck } from "lucide-react";

const TrustBadges = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 py-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full text-[#0373DE]">
                    <BadgeDollarSign size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900">No Hidden Costs</h4>
                    <p className="text-xs text-gray-500">Transparent pricing</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-full text-green-600">
                    <Award size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900">Best Price Guarantee</h4>
                    <p className="text-xs text-gray-500">Lowest prices guaranteed</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-yellow-50 p-2 rounded-full text-yellow-600">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900">Top Rated</h4>
                    <p className="text-xs text-gray-500">Verified reviews</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-2 rounded-full text-purple-600">
                    <CalendarCheck size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900">Flexible Policy</h4>
                    <p className="text-xs text-gray-500">Free cancellation available</p>
                </div>
            </div>
        </div>)
}

export default TrustBadges