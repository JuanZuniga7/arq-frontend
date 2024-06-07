'use server';
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { IoMdNotificationsOff } from "react-icons/io";
import { BsNut } from "react-icons/bs";
import { SlUser } from "react-icons/sl";

export default async function Header(){
    return(
        <header className="w-screen h-12 flex items-center justify-between px-5">
            <Link href='/app' className="flex items-center gap-2">
                <SlBookOpen className="text-2xl text-indigo-600"/>
                <h1 className="text-xl text-indigo-600 font-bold">
                    Inicio
                </h1>
            </Link>
            <div className="flex items-center gap-10">
                <form className="flex items-center gap-4 text-gray-500">
                    <label className="w-full bg-indigo-50 flex items-center rounded-xl px-5">
                        <IoSearch className="w-6 h-6"/>
                        <input type="search" placeholder="Buscar" className="px-3 py-1 outline-none bg-transparent rounded-lg"/>
                    </label>
                    <button type="submit" className="bg-indigo-50 p-1.5 rounded-full hover:bg-indigo-200">
                        <IoSearch className="w-5 h-5"/>
                    </button>
                </form>
                <div className="flex items-center gap-3">
                    <figure className="bg-indigo-50 hover:bg-indigo-200 p-1.5 rounded-full cursor-pointer">
                        <IoMdNotificationsOff className="text-2xl text-gray-500 w-5 h-5"/>
                    </figure>
                    <Link href="/app/setting" className="bg-indigo-50 hover:bg-indigo-200 p-1.5 rounded-full cursor-pointer">
                        <BsNut className="text-2xl text-gray-500 w-5 h-5"/>
                    </Link>
                    <Link href="/app/profile" className="bg-indigo-50 hover:bg-indigo-200 p-1.5 rounded-full cursor-pointer">
                        <SlUser className="text-2xl text-gray-500 w-5 h-5"/>
                    </Link>
                </div>
            </div>
        </header>
    )
}