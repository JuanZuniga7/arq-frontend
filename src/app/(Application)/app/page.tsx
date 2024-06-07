'use server';
import Header from "@/components/app/Header";
import { getSession } from "@/utils/lib";
import { redirect } from "next/navigation";

export default async function App(){

    const session = await getSession();
    console.log(session);

    return(
        <>
        </>
    )
}