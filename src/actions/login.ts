'use server';
import { login } from '@/utils/lib';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export const handleSubmit = async (formData: FormData):Promise<boolean> => {
    const userToSend = {
        email: formData.get('email'),
        password: formData.get('password')
    };
    if(!userToSend.email || !userToSend.password) return false;
    let user = await prisma.user.findFirstOrThrow({
        where:{
            email: userToSend.email.toString(),
            password: userToSend.password.toString()
        }
    })
    if(!user) return false;
    login({name: user.name, email: user.email, roleId: user.roleId});
    redirect('/app');
};