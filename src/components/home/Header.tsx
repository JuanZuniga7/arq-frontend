"use server";
import Link from "next/link";
import { SlBookOpen } from "react-icons/sl";

export default async function Header() {
  return (
    <header className="w-screen h-12 flex items-center justify-between px-5">
      <Link href="/" className="flex items-center gap-2">
        <SlBookOpen className="text-2xl text-indigo-600" />
        <h1 className="text-xl text-indigo-600 font-bold">Inicio</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-gray-500 px-2 py-0.5 rounded-xl font-light hover:bg-indigo-100">
          Iniciar sesión
        </Link>
        <Link href="/register" className="text-gray-500 px-2 py-0.5 rounded-xl font-light hover:bg-indigo-100">
          Registrarse
        </Link>
      </div>
    </header>
  );
}
