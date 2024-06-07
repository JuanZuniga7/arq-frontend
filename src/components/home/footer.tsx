import Image from "next/image"
import logo from "../../../public/logo.svg"


export default function Footer(){

    return(
   
        <footer className="m-[auto] pt-[60px] pb-[70px] bg-[#172b4d] w-screen text-[#FFFFFF] font-charlie mt-[30px]">
            <ul className="flex space-x-10 justify-around">
                <li>
                    <Image src={logo} alt="logo" style={{ filter: 'invert(1)' }} className="mb-[25px] mr-[40px]"/>
                    <span className="text-[20px]"><a href="">Inicia seccion</a></span>
                </li>
                <li>
                    <a href="">
                        <h3 className="mb-[10px] font-bold">Sobre Nosotros</h3>
                        <span>Que hay detras?</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h3 className="mb-[10px] font-bold">Informacion</h3>
                        <span>Tutoriales para el uso de la herramienta.</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h3 className="mb-[10px] font-bold">Aplicaciones</h3>
                        <span>Descarga Nuestra herramienta para escritorio o mobil.</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h3 className="mb-[10px] font-bold">Contactanos</h3>
                        <span>Necesitas ayuda, sobre como empezar a utilizar la herramienta?</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}