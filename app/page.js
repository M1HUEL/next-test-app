'use client'

import {useSession, signIn, signOut} from "next-auth/react";

import {useRouter} from "next/router";

export default function Home({session, status}) {

    const {data: session, status} = useSession()

    function handleSignIn() {
        signIn('github')
            .then(() => {
                const router = useRouter();
                router.push('/dashboard'); // Redirige a la página de dashboard después de iniciar sesión
            })
            .catch((err) => {
                console.log(err);
            });
    }

    if (status === "loading") {
        return <div className="min-h-screen flex flex-col items-center justify-center p-12">
            <p>Loading...</p>
        </div>
    }

    return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
                    {
                        status === "authenticated" ? <div className="flex flex-col space-y-6">
                            <h1 className="font-black text-6xl">Welcome</h1>
                            <p className="text-2xl">Has been initialization a session</p>

                            <div className="flex flex-col space-y-3">
                                <p>{session.user.name}</p>
                                <span>{session.user.email}</span>
                                <img src={session.user.image} alt="profile-picture"/>
                            </div>

                            <button placeholder="Register" className="py-4 cursor-pointer text-white bg-black" onClick={() => {
                                signOut()
                            }}>Sign out</button>
                        </div> : <div className="flex flex-col space-y-6">
                            <h1 className="font-black text-6xl">You need an account</h1>
                            <p className="text-2xl">Please, try to register a new account with this form</p>

                            <div className="flex flex-col space-y-6">
                                <div className="flex flex-col space-y-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" placeholder="midomain@domain.com"
                                           className="px-6 py-4 bg-gray-100"/>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label htmlFor="password">Password</label>
                                    <input type=" password" placeholder="yourpassword" className="px-6 py-4 bg-gray-100"/>
                                </div>
                            </div>

                            <button placeholder="Register" className="py-4 cursor-pointer text-white bg-black" onClick={handleSignIn}>Register</button>
                        </div>
                    }
                </div>
            </main>
    )
}
