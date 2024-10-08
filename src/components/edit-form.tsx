"use client"

import { updateContact } from "@/lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "./buttons";
import type { Contacts } from "@prisma/client";

const UpdateForm = ({ contact }: { contact: Contacts }) => {
    const UpdateContactWithId = updateContact.bind(null, contact.id);
    const [state, formAction] = useFormState(UpdateContactWithId, null);
    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nama Lengkap</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nama Lengkap"
                        defaultValue={contact.name} />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="keperluan" className="block text-sm font-medium text-gray-900">Keperluan</label>
                    <input type="text" name="keperluan" id="keperluan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Keperluan Anda" defaultValue={contact.keperluan} />
                    <div id="keperluan-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.keperluan}</p>
                    </div>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                </div>
                <SubmitButton label="perbaharui" />
            </form>
        </div>
    )
}

export default UpdateForm