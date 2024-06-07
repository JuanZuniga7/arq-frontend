'use server';
import Link from "next/link";
import { GiBookshelf } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import Image from "next/image";
import fondo from "../../../public/fondo.svg"
import ejem from "../../../public/ejem.svg"
import pageEntrarMateria from "../../../public/Entrar Materia.svg"

export default async function Inicio() {
    return (
        <>
            <section style={{ backgroundImage: `url(${fondo.src})` }} className="flex w-full h-[800px] bg-no-repeat bg-cover bg-bottom ">
                <div className="w-2/4 h-full pt-[10%] pl-32  font-charlie  text-[#FFFFFF]">
                    <h1 className="text-[44px] font-bold mb-[8px] pr-[80px]">Reunimos todas tus tareas, materias, notas y todo el material de estudio que necesites</h1>
                    <p className="text-[20px] mb-[24px]">Mantenga todo en el mismo lugar</p>

                    <div className="flex gap-3">
                        <span><input type="text" placeholder="Email" className="py-[11.2px] px-[12px] rounded-md text-black" /></span>
                        <button className="py-[11.2px] px-[12px] rounded-md bg-[#0065FF]">Registrate,¡es gratis!</button>
                    </div>
                </div>
                <div className="w-2/4 h-full">
                    <Image src={ejem} alt="ejemplo imagen" height={900} className="absolute top-[-7%]" />
                </div>
            </section>
            <section className="w-screen h-[1000px] font-charlie pt-[30px] pl-[98px]">
                <div className="w-[42%] mb-[44px]">
                    <h2 className="font-bold text-[36px]">Un generador de productividad</h2>
                    <p className="text-[20px]">Sencillo, flexible y potente. Todo lo que necesitas son tableros, listas y tarjetas para poder ver de forma clara quién está haciendo qué y las tareas pendientes. Más información en <a href="#" className="text-">nuestra guía de inicio</a>.</p>
                </div>
                <div className="flex w-screen h-[1000px] my-30 gap-16">

                    <ul className="w-[18%]">
                        <li className="mb-10 p-[16px] border-l-4 border-[#00C7E5] rounded-md  bg-opacity-15 shadow-md">
                            <h3 className="font-bold">Tarjetas</h3>
                            <p>Las tarjetas mantienen cada asignatura organizada y ayudan a que el trabajo avance. Podrás verlo todo de un solo vistazo, desde las tareas pendientes hasta las que ya están terminadas.</p>
                        </li>
                        <li className="mb-10">
                            <h3 className="font-bold">Listas</h3>
                            <p>Las diferentes fases de una tarea educativa. Empieza con algo sencillo como Pendiente, En curso o Listo, o crea un flujo de trabajo a medida de las necesidades o priorizacion de la tarea.</p>
                        </li>
                        <li className="mb-10">
                            <h3 className="font-bold">Agenda</h3>
                            <p>Una agenda donde está organizada cada tarea de cada materia. Esto te permite tener una visión clara y estructurada de todo lo que necesitas hacer y cuándo debes hacerlo.</p>
                        </li>
                    </ul>

                    <div className="w-[60%] h-[60%]">
                        <Image src={pageEntrarMateria} alt="imagen entrar materia" />
                    </div>
                </div>
            </section>
        </>
    )
}