import { Button } from "@/components/ui/button";

export function ExclusiveDealsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <div className="bg-primary rounded-2xl overflow-hidden h-80 md:h-96 relative">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-3xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Exclusive Egypt Deals</h3>
              <p className="text-blue-100 text-lg">Save Up to 40% on select tours</p>
            </div>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary min-w-[150px]">Explore Tours</Button>
          </div>
        </div>
      </div>
    </section>
  );
}