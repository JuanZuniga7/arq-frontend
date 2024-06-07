'use server';
import Header from "@/components/home/Header";
import Link from "next/link";
import { handleSubmit } from '@/actions/register';

export default async function Register(){

    return(
        <>
            <Header/>
            <main className="flex items-center justify-center w-full h-[90vh]">
                <form action={handleSubmit} className="w-[30%] h-fit rounded-2xl flex flex-col items-center gap-10">
                    <h2 className="text-indigo-600 font-bold text-5xl">
                        Registrate
                    </h2>
                    <div className="grid grid-cols-2 gap-5 w-full text-gray-500">
                        <input name="first_name" type="text" placeholder="Nombre" className="border-b-2 px-2 py-1 outline-none bg-transparent" required/>
                        <input name="last_name" type="text" placeholder="Apellido" className="border-b-2 px-2 py-1 outline-none bg-transparent" required/>
                        <input name="email" type="email" placeholder="Correo" className="border-b-2 px-2 py-1 outline-none col-span-2 bg-transparent" required/>
                        <input name="password" type="password" placeholder="Contraseña" className="border-b-2 px-2 py-1 outline-none bg-transparent" required/>
                        <input name="password_confirmation" type="password" placeholder="Confirmar contraseña" className="border-b-2 px-2 py-1 outline-none bg-transparent" required/>
                        <div className="flex items-center gap-2">
                            <input name="terms" type="checkbox" className="checked:accent-indigo-500" required/> Acepto los términos y condiciones
                        </div>
                        <select name="role" className="border-b-2 px-2 py-1 outline-none bg-transparent" required>
                            <option value={2}>Profesor</option>
                            <option value={3}>Estudiante</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-indigo-600 text-white py-2 px-5 rounded-lg w-[30%]">
                        Registrarse
                    </button>
                    <Link href="/login">
                        <span className="text-indigo-600 cursor-pointer">
                            ¿Ya tienes una cuenta? Inicia sesión
                        </span>
                    </Link>
                </form>
            </main>
        </>
    )
}