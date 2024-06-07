'use server';
import ISubject from "@/utils/types/Subjects.type";
import Link from "next/link";
import Image from "next/image";
import notfound from "@/assets/image/notfound.jpg";

interface Props{
    title: string;
    subjects: ISubject[];
}

export default async function SubjectsSection({title, subjects}: Props){
    return(
        <section className="w-full h-fit px-5 overflow-hidden overflow-y-hidden flex flex-col gap-5">
            <h3 className="text-4xl">{title}</h3>
            <div className="grid grid-cols-4 gap-5 py-2 px-4 text-gray-500">
                {subjects && subjects.map((subject, index) => (
                    <div key={index} className="w-full h-80 bg-indigo-50 flex flex-col items-center rounded-2xl overflow-hidden gap-2">
                        <Image src={notfound} alt="notfound" width={500} height={200} className="w-full h-[60%]"/>
                        <h4 className="text-xl">{subject.name}</h4>
                        <p><span>Profesor: </span><span className="italic">{subject.teacherName}</span></p>
                        {subject.materials.length > 0 ? (
                            <Link href={`/app/subject/${subject.id}`} className="hover:text-indigo-400 border-b-[1px] border-indigo-400" >
                               {subject.materials.length} Materiales
                            </Link>
                        ):(
                            <p>Sin materiales</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}