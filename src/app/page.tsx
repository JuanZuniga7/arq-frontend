'use server';
import Header from "@/components/home/Header";
import Footer from '@/components/home/footer';
import Inicio from '@/components/home/Inicio';
import { getSession } from '@/utils/lib';
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getSession();
  if(session) redirect('/app');

  return (
    <>
      <Header/>
      <Inicio/>
      <Footer/>
    </>
  );
}
