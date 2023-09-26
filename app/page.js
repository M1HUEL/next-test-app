'use client'

import {useSession, signIn, signOut} from "next-auth/react";

import {useRouter} from "next/router";

export default function Home() {

    const {data: session, status} = useSession()

    if (status === "loading") {
        return <div className="min-h-screen flex flex-col items-center justify-center p-12">
            <p>Loading...</p>
        </div>
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
                <h1 className="font-black text-6xl">Home</h1>

                {/* Content goes here*/}
                <div></div>
            </div>
        </main>
    )
}
