
import { notFound } from "next/navigation";

// Define the valid page types to identify valid routes? 
// Or we can just be permissive and split on the last underscore.
// For this placeholder, let's be permissive but robust.

export default async function DynamicLanguagePage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { slug } = await params;
    const query = await searchParams;

    // Attempt to extract language suffix (e.g., "_ar", "_en", "_fr", etc.)
    // We assume the format is [page_type]_[lang]
    const lastUnderscoreIndex = slug.lastIndexOf("_");

    let pageType = slug;
    let lang = "en"; // Default fallback if no underscore found (or maybe we should 404?)

    if (lastUnderscoreIndex !== -1) {
        pageType = slug.substring(0, lastUnderscoreIndex);
        lang = slug.substring(lastUnderscoreIndex + 1);
    } else {
        // If no language suffix is found, we might want to 404 or treat it as default lang.
        // However, the prompt specifically asks for patterns like "category_products_ar".
        // Let's display it as-is for now to be safe.
    }

    // Prettier display name
    const title = pageType.split("-").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ").replace(/_/g, " ");

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 capitalize">
                    {title}
                </h1>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                    <p className="font-bold text-blue-700">Dynamic Route Debug Info:</p>
                    <ul className="list-disc list-inside text-blue-600 mt-2 space-y-1">
                        <li><strong>Raw Slug:</strong> {slug}</li>
                        <li><strong>Detected Page Type:</strong> {pageType}</li>
                        <li><strong>Detected Language:</strong> {lang}</li>
                    </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-green-700">Query Parameters:</p>
                    {Object.keys(query).length > 0 ? (
                        <ul className="list-disc list-inside text-green-600 mt-2 space-y-1">
                            {Object.entries(query).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key}:</strong> {JSON.stringify(value)}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-green-600 italic">No query parameters provided.</p>
                    )}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">Content Placeholder</h2>
                    <p className="text-gray-600">
                        This is a placeholder for the <strong>{pageType}</strong> page in <strong>{lang}</strong>.
                        <br />
                        Actual UI/UX and API integrations will be implemented later.
                    </p>
                </div>
            </div>
        </div>
    );
}
