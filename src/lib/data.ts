import { prisma } from "@/lib/prisma";
import { number } from "zod";

const ITEM_PER_PAGE = 5;

export const getContacts = async (query: string, currentPage: number) => {
    const offset = (currentPage - 1) * ITEM_PER_PAGE

    try {
        const contacts = await prisma.contacts.findMany({
            skip: offset,
            take: ITEM_PER_PAGE,
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        keperluan: {
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        });
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

export const getContactsPages = async (query: string) => {

    try {
        const contacts = await prisma.contacts.count({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        keperluan: {
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        });
        const totalPages = Math.ceil(Number(contacts) / ITEM_PER_PAGE)
        return totalPages;
    } catch (error) {
        throw new Error("Failed to fetch contacts data")
    }
}