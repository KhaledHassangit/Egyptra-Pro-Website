
export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-lg text-gray-500">
                    <p>
                        [Privacy Policy Content Placeholder]
                        <br />
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
}
