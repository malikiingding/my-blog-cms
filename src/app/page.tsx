import { fetchArticles } from "@/services/articleAPI";
import { Article } from "@/types/article";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default async function Home() {
  const articles: Article[] = await fetchArticles();

  return (
    <main>
      <NavBar />
      
      {/* <div className="bg-sky-300 p-6 text-center h-[70vh] flex flex-col justify-center"> */}
      <div className=" p-6 text-center h-[70vh] flex flex-col justify-center"
      // style={{
      //   backgroundImage: "url('/breadcrumb-bg.jpg.webp')",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}     
      >
        <Image
          src="/breadcrumb-bg.jpg.webp"
          alt="Background"
          fill
          className="object-cover -z-10"
          quality={100}
          priority
          style={{
            objectFit: "cover",
            filter: "blur(10px)",
          }}
        />
        <h1 className="text-5xl lg:text-7xl font-bold text-center text-white">
          Welcome to My Blog
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Here are some of my latest articles.&nbsp;
          <Link href="/article/create" className="hover:underline text-blue-600 mt-4 hover:text-blue-800 inline-block">
            Create New Article
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-sky-200">
        {articles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`}>
            <div className="p-4 border rounded-lg hover:shadow-md transition">
              <h2 className="text-xl font-bold text-blue-600">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{article.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
