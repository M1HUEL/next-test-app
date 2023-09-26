'use client'

import {useSession, signIn, signOut} from "next-auth/react";

export default function Home() {

    const {data: session, status} = useSession()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full flex flex-col space-y-3 lg:flex">
                <h1 className="font-black text-6xl">Home</h1>

                <div className="flex flex-col space-y-3">
                    <p>En Next Blog, estamos comprometidos a brindarte las últimas noticias y actualizaciones sobre una amplia variedad de temas que te interesan. Nuestro objetivo es mantenerte informado y entretenido mientras exploras historias fascinantes, análisis perspicaces y tendencias emergentes.</p>
                </div>
            </div>
        </main>
    )
}
