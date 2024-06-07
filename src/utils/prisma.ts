import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const admin = await prisma.role.create({data:{name: 'admin'}})
    const student = await prisma.role.create({data:{name: 'student'}})
    const teacher = await prisma.role.create({data:{name: 'teacher'}})
    const userAdmin = await prisma.user.create({
        data:{
            name: 'Admin',
            email: 'admin@email.com',
            password: 'admin123',
            role: {connect: {id: admin.id}}
    }})
    const userStudent = await prisma.user.create({
        data:{
            name: 'Student',
            email: 'student@email.com',
            password: 'student123',
            role: {connect: {id: student.id}}
    }})
    const userTeacher = await prisma.user.create({
        data:{
            name: 'Teacher',
            email: 'teacher@email.com',
            password: 'teacher123',
            role: {connect: {id: teacher.id}}
    }})
    for (let i = 0; i < 10; i++) {
        await prisma.subject.create({
            data:{
                name: `Course ${i}`,
                description: `Description ${i}`,
                teacher: {connect: {id: userTeacher.id}}
        }})
    }
    let subjetc = await prisma.subject.findFirst();
    if(!subjetc) return;
    for (let i = 0; i < 10; i++) {
        await prisma.content.create({
            data:{
                name: `Lesson ${i}`,
                description: `Description ${i} of lesson ${i} of course ${subjetc.id} just to show`,
                subject: {connect: {id: subjetc.id}}
        }})
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})