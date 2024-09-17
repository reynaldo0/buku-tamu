import { prisma } from "@/lib/prisma";

export const getContacts = async () => {
    try {
        const contacts = await prisma.contacts.findMany();
        return contacts;
    } catch (error) {
        throw new Error("Failed to fetch contacts data")
    }
}

export const getContactsById = async (id: string) => {
    try {
        const contact = await prisma.contacts.findUnique({
            where: { id }
        });
        return contact;
    } catch (error) {
        throw new Error("Failed to fetch contacts data")
    }
}