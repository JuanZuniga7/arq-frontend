'use server';
import { redirect } from 'next/navigation';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const handleSubmit = async (formData: FormData) => {
    if(formData.get('terms') !== 'on') return;
    if(formData.get('password') !== formData.get('password_confirmation')) return;
    const userToSend = {
        name: `${formData.get('first_name')} ${formData.get('last_name')}`,
        email: formData.get('email'),
        password: formData.get('password'),
        roleId: parseInt(formData.get('role')?.toString() || '2')
    };
    if(!userToSend.email || !userToSend.password) return;
    let user = await prisma.user.create({
        data:{
            name: userToSend.name,
            email: userToSend.email.toString(),
            password: userToSend.password.toString(),
            role: {connect: {id: userToSend.roleId}}
        }
    });
    if(!user) return;
    redirect('/login');
};