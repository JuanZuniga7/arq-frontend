'use server';
import Header from "@/components/home/Header";
import { handleSubmit } from "@/actions/login";
import Link from "next/link";

export default async function Login() {

    return(
        <>
            <Header/>
            <main className="flex items-center justify-center w-full h-full">
                <form action={handleSubmit} className="w-[30%] h-fit rounded-2xl flex flex-col items-center gap-10">
                    <h2 className="text-indigo-600 font-bold text-5xl">
                        Inicia sesión
                    </h2>
                    <div className="grid grid-cols-2 gap-5 w-full text-gray-500">
                        <input name="email" type="email" placeholder="Correo" className="border-b-2 px-2 py-1 outline-none bg-transparent" required/>
                        <input name="password" type="password" placeholder="Contraseña" className="border-b-2 px-2 py-1 outline-none bg-transparent" required/>
                    </div>
                    <button type="submit" className="bg-indigo-600 text-white py-2 px-5 rounded-lg w-[30%]">
                        Iniciar sesión
                    </button>
                    <Link href="/register">
                        <span className="text-indigo-600 cursor-pointer">
                            ¿Aun no tienes una cuenta? Registrate
                        </span>
                    </Link>
                </form>
            </main>
        </>
    )
}