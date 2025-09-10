import { fetchArticleById } from "@/services/articleAPI";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article = await fetchArticleById(id);

    return {
        title: article.title,
        description: article.summary,
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article = await fetchArticleById(id);

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-500 mb-6">{article.summary}</p>
            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </main>
    );
}
