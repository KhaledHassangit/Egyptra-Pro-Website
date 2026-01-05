import { Shield, Flame, Star, Clock } from "lucide-react";

export function TrustIndicators() {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full pt-8 pb-16 z-20">
      <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TrustItem
          icon={<Shield className="w-10 h-10 text-secondary" />}
          title="No Hidden Costs"
          desc="All-inclusive with transfers"
        />
        <TrustItem
          icon={<Flame className="w-10 h-10 text-secondary" />}
          title="Best Price Guarantee"
          desc="Unmatched quality & price"
        />
        <TrustItem
          icon={<Star className="w-10 h-10 text-secondary" />}
          title="Top Rated Reviews"
          desc="Real customer videos & reviews"
        />
        <TrustItem
          icon={<Clock className="w-10 h-10 text-secondary" />}
          title="Flexible Policy"
          desc="Cancel 12h | Change 4h before"
        />
      </div>
    </section>
  );
}

function TrustItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="mb-4 p-3 bg-blue-50 rounded-full">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}