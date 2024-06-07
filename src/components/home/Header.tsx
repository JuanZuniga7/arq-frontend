'use server';
import Link from "next/link";
import { GiBookshelf } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";

export default async function Header(){
    return(
        <header className="h-14 w-screen py-2 flex items-center justify-between text-gray-500">
            <Link href="/" className="flex items-center gap-1 hover:bg-indigo-50 px-2 py-1 rounded-xl">
                <GiBookshelf size={28} />
                <h1 className="text-lg font-bold">Project</h1>
            </Link>
            <div className="flex items-center gap-1 px-2 py-1">
                <Link href="/login" className="hover:bg-indigo-50 px-2 py-1 rounded-xl flex gap-1 items-center">
                    <IoMdLogIn size={18} />
                    <span>Login</span>
                </Link>
                <Link href="/register" className="hover:bg-indigo-50 px-2 py-1 rounded-xl flex gap-1 items-center">
                    <FiUserPlus size={18} />
                    <span>Register</span>
                </Link>
            </div>
        </header>
    )
}