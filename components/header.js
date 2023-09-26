'use client'

import {useSession, signIn, signOut} from "next-auth/react";

import Link from "next/link";

import {useState, useEffect} from "react";

import {MdOutlineDarkMode, MdOutlineLightMode, MdOutlineSearch} from "react-icons/md"
import {BiLeftArrowAlt, BiLogOutCircle} from "react-icons/bi"

const navigation = [
    {name: "Tienda", link: "/shop"},
    {name: "Noticias", link: "/news"},
    {name: "Nosotros", link: "/about"},
    {name: "Blog", link: "/blog"},
    {name: "Suscripciones", link: "/subscriptions"},
]

export default function header() {

    const [darkMode, setDarkMode] = useState(false);

    const [isSearching, setIsSearching] = useState(false);

    const {data: session, status} = useSession();

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setDarkMode(true);
        }
    };

    return (
        <header className="px-4 py-6 transition-all duration-500 dark:text-white dark:bg-black">
            {
                isSearching === false ? <div className="flex flex-row items-center justify-evenly">
                        <div>
                            <p className="uppercase font-semibold px-6 py-2 cursor-default rounded-md text-white bg-black border-2 border-transparent transition-colors duration-500 hover:bg-white hover:text-black hover:cursor-pointer hover:border-black">Next
                                Blog</p>
                        </div>
                        <div>
                            <ul className="flex flex-row items-center space-x-6">
                                {
                                    navigation.map(({name, link}, index) => {
                                        return (
                                            <li key={index}
                                                className="cursor-pointer font-normal text-sm leading-6 underline-offset-4 decoration-2 hover:underline">
                                                <Link href={link}>{name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="flex flex-row items-center space-x-3">
                            <div className="flex flex-row items-center space-x-3">
                                <div>
                                    {
                                        session ? <><img
                                                src={session.user.image}
                                                className="w-11 h-11 cursor-pointer rounded-full object-cover"
                                                alt={session.user.name}
                                            />
                                            </>
                                            :
                                            null
                                    }
                                    {
                                        session ?
                                            null
                                            : <button className="p-2 cursor-pointer text-white bg-black hover:bg-black/80 dark:text-black dark:bg-white dark:hover:bg-gray-200"
                                                      onClick={() => {
                                                          signIn("github");
                                                      }}>Iniciar sesión | Crear cuenta
                                            </button>
                                    }
                                </div>
                                {/* Dark Mode button */}
                                <div
                                    className={`p-2 cursor-pointer rounded-full transition-colors duration-500 ${darkMode ? "text-black bg-white hover:text-black hover:bg-gray-200" : "bg-gray-200 hover:text-white hover:bg-black"}`}
                                    onClick={() => {
                                        setDarkMode(true);
                                        toggleDarkMode();

                                        if (darkMode) {
                                            setDarkMode(false);
                                        }
                                    }}>
                                    {
                                        setDarkMode ? <><MdOutlineDarkMode/></> : <><MdOutlineLightMode/></>
                                    }
                                </div>

                                {/* Search button */}
                                <div
                                    className="p-2 cursor-pointer rounded-full transition-colors duration-500 bg-gray-200 hover:text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200"
                                    onClick={() => {
                                        setIsSearching(true);
                                    }}
                                >
                                    <MdOutlineSearch/>
                                </div>
                                {/* Logout button if session is active */}
                                {
                                    session ?
                                        <div
                                            className="p-2 cursor-pointer rounded-full transition-colors duration-500 bg-gray-200 hover:text-white hover:bg-black"
                                            onClick={() => {
                                                signOut();
                                            }}>
                                            <BiLogOutCircle/>
                                        </div>
                                        : null
                                }
                            </div>
                        </div>

                    </div> :
                    <div className="flex flex-row justify-center transition-all duration-500">
                        <div className="flex flex-row justify-center text-center">
                            <input type="search" className="p-2 w-full bg-gray-200 ring-0 outline-none text-sm dark:bg-white"
                                   placeholder="Buscar algo..."/>
                            <div
                                className="flex flex-col justify-center items-center px-4 cursor-pointer text-white bg-black border-2 border-transparent hover:border-black transition-colors duration-500 hover:text-black hover:bg-white dark:text-white dark:bg-black"
                                onClick={() => {
                                    setIsSearching(false);
                                }}>
                                <BiLeftArrowAlt className="w-6 h-6"/>
                            </div>
                        </div>
                    </div>
            }
        </header>
    )
}