// components/TopBar.js
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="flex justify-center mt-10 ">
            <Link href="https://techcrunch.com/2024/04/24/anon-is-building-an-automated-authentication-layer-for-the-gen-ai-age/">
                <div className="flex bg-gray-800 text-white text-center text-sm h-12 justify-center items-center font-extralight max-w-fit px-40 rounded-md py-4">
                    Announcing our $6.5mm fundraise, led by Union Square Ventures and Abstract Ventures
                </div>
            </Link>
        </div>
    );
}
