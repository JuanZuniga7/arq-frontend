'use server';
import Image from "next/image";
import Header from "@/components/app/Header";
import notfound from '@/assets/image/notfound.jpg';
import { getSession } from "@/utils/lib";
import { redirect } from "next/navigation";
import ISubject from "@/utils/types/Subjects.type";
import { getSubject } from "@/actions/idsubject";

export default async function App({params}:any){
    const session = await getSession();
    if(!session) return redirect('/login');

    const subject:ISubject = await getSubject(parseInt(params.id));
return(
        <>
            <Header/>
            <main className="w-[80%] h-full grid grid-cols-4 gap-5 py-2">
                <aside className="w-full h-full border-2 rounded-l-2xl overflow-hidden flex flex-col items-center gap-2">
                    <Image src={notfound} alt="notfound" width={500} height={200} className="w-full h-[30%]"/>
                    <h4 className="text-2xl font-bold">{subject.name}</h4>
                    <p className="text-lg">{subject.description}</p>
                    <p>
                        <span>Profesor: </span>
                        <span className="italic">{subject.teacherName}</span>
                    </p>
                </aside>
                <section className="w-full h-full border-2 col-span-3 rounded-r-2xl p-5 flex flex-col gap-5">
                    <h5 className="text-xl font-semibold">Materiales disponibles</h5>
                    <ul className="grid grid-cols-3 gap-4">
                        {subject && subject.contents.map((material, index) => (
                            <li key={index} className="w-fit text-base flex items-center px-5 py-0.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 cursor-pointer">
                                {material.name}.
                                {material.documentType}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    )
};