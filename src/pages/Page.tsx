import React from "react";
import { Link } from "react-router-dom";

const Page: React.FC<{children: React.ReactNode}> = ({children}) => (
    <>
        <header className="w-full bg-stone-500 p-4 text-white mb-4">
            <Link to="/">
                <img src="/src/img/linkAheadLogo.png" className="h-12 object-contain"/>
                <h1>Link Ahead</h1>
            </Link>
        </header>
        <main className="w-full flex justify-center">
            <div className="max-w-sm">
                {children}
            </div>
        </main>
    </>
);

export default Page;