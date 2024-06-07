'use server';
import Header from "@/components/home/Header";
import { getSession } from '@/utils/lib';
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getSession();
  if(session) redirect('/app');

  return (
    <>
      <Header/>
    </>
  );
}
