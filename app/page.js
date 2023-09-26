'use client'

import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import News from "@/components/news";

import {useState, useEffect} from "react";

import {initializeTheme} from "@/utils/theme";

export default function Home() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        initializeTheme();
        setDarkMode(document.documentElement.classList.contains("dark"));
    }, []);

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-16 transition-colors duration-500 ${darkMode ? "dark:text-white dark:bg-black" : null}`}>
            <div className="z-10 max-w-7xl w-full flex flex-col space-y-6 lg:flex">
                <h1 className="font-black text-6xl">Home</h1>
                <p>En Next Blog, estamos comprometidos a brindarte las últimas noticias y actualizaciones sobre una
                    amplia variedad de temas que te interesan. Nuestro objetivo es mantenerte informado y entretenido
                    mientras exploras historias fascinantes, análisis perspicaces y tendencias emergentes.</p>

                <div className="flex flex-col space-y-12">
                    <Features/>
                    <Testimonials/>
                    <News/>
                </div>
            </div>
        </main>
    )
}
