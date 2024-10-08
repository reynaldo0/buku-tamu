"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
    name: z.string().min(6),
    keperluan: z.string().min(5),
})

export const saveContact = async (prevSate: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.contacts.create({
            data: {
                name: validatedFields.data.name,
                keperluan: validatedFields.data.keperluan,
            }
        })
    } catch (error) {
        return { message: "Gagal melakukan pembuatan keperluan" }
    }
    revalidatePath("/tamu");
    redirect("/tamu")
}

export const updateContact = async (id: string, prevSate: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.contacts.update({
            data: {
                name: validatedFields.data.name,
                keperluan: validatedFields.data.keperluan,
            },
            where: { id }
        })
    } catch (error) {
        return { message: "Gagal melakukan pembaruan keperluan" }
    }
    revalidatePath("/tamu");
    redirect("/tamu")
}

export const deleteContact = async (id: string) => {
    try {
        await prisma.contacts.delete({
            where: { id }
        })
    } catch (error) {
        return { message: "Gagal menghapus keperluan" }
    }
    revalidatePath("/tamu");
}