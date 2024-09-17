import { prisma } from "@/lib/prisma";

export const getContacts = async () =>{
    try {
        const contacts = await prisma.contacts.findMany();
        return contacts;
    } catch (error) {
        throw new Error("Failed to fetch contacts data")
    }
}