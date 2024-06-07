'use server';
import ISubject from "@/utils/types/Subjects.type";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSubjects = async () => {
    const subjects = await prisma.subject.findMany();
    const teachers = await prisma.user.findMany({where:{roleId: 3}});
    const contents = await prisma.content.findMany();
    const response: ISubject[] = [] as ISubject[];
    subjects.forEach(async (subject) => {
        response.push({
            id: subject.id,
            name: subject.name,
            description: subject.description,
            teacherId: subject.teacherId,
            contents: contents.filter((content) => content.subjectId === subject.id),
            teacherName: teachers.find((teacher) => teacher.id === subject.teacherId)?.name || 'Sin profesor'
        });
    });
    return response;
};