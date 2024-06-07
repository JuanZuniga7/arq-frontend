'use server';
import ISubject from "@/utils/types/Subjects.type";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSubject = async (id: number) => {
    let subject = await prisma.subject.findFirstOrThrow({where:{id}});
    let teacher = await prisma.user.findFirstOrThrow({where:{id: subject!.teacherId}});
    const contents = await prisma.content.findMany({where:{subjectId: id}});
    const response:ISubject = {
        id: subject.id,
        name: subject.name,
        description: subject.description,
        teacherId: subject.teacherId,
        teacherName: teacher.name,
        contents
    } as ISubject;
    return response;
};