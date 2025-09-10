import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-sky-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-5xl font-bold text-white z-10 hover:scale-110 transition-transform duration-300">
                    <span>M</span>
                    <span>K</span>
                    <span className="text-2xl">maliki</span>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" passHref className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/article/create" passHref className="text-white hover:text-gray-300">
                            Create Article
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}