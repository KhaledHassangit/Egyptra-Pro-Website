export function TourDetailsSkeleton() {
    return (
        <section className="min-h-screen bg-gray-50">
            <div className="relative h-[400px] md:h-[500px] w-full bg-gray-200 animate-pulse"></div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                            <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3"></div>
                            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}