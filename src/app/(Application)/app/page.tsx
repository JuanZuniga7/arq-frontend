'use server';
import Header from "@/components/app/Header";
import { getSession } from "@/utils/lib";
import { redirect } from "next/navigation";
import Section from "@/components/app/Section";
import ISubject from "@/utils/types/Subjects.type";
import { agent } from "@/api/agent.api";

export default async function App(){

    const session = await getSession();
    const subjects:ISubject[] = await agent('/Subjects').then(res =>{ return res.data }).catch(err => console.error(err));

    return(
        <>
            <Header/>
            <main className="w-[60%] h-full flex flex-col mt-10">
                <Section title="Mis materias" subjects={subjects}/>
            </main>
        </>
    )
}