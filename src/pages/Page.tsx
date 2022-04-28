import React from "react";
import { Link } from "react-router-dom";

const Page: React.FC<{children: React.ReactNode}> = ({children}) => (
    <>
        <header className="w-full bg-stone-500 p-4 text-white mb-4">
            <Link to="/" className="hover:underline">
                <h1>Link</h1>
            </Link>
        </header>
        <main className="w-full flex justify-center">
            <div className="max-w-prose">
                {children}
            </div>
        </main>
    </>
);

export default Page;