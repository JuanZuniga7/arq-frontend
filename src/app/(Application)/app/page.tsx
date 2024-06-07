'use server';
import Header from "@/components/app/Header";
import { getSubjects } from "@/actions/app";
import ISubject from "@/utils/types/Subjects.type";
import Section from '@/components/app/Section';

export default async function App(){

    const subjects:ISubject[] = await getSubjects();

    return(
        <>
            <Header/>
            <main className="w-[70%] h-full flex flex-col">
                <Section title="Materias" subjects={subjects}/>
            </main>
        </>
    )
}