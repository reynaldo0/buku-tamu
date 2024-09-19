import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { DeleteButton, EditButton } from "./buttons";

const ContactsTable = async ({ query, currentPage }: { query: string; currentPage: number }) => {
    const contacts = await getContacts(query, currentPage);
    return (
        <div>
            <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="py-3 px-4">No</th>
                        <th className="py-3 px-4">Nama</th>
                        <th className="py-3 px-4">Keperluan</th>
                        <th className="py-3 px-4 hidden sm:table-cell">Tanggal</th>
                        <th className="py-3 px-4 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={contact.id} className="bg-white border-b">
                            <td className="py-3 px-4">{index + 1}</td>
                            <td className="py-3 px-4">{contact.name}</td>
                            <td className="py-3 px-4 break-words">{contact.keperluan}</td>
                            <td className="py-3 px-4 hidden sm:table-cell">{formatDate(contact.createdAt.toString())}</td>
                            <td className="flex justify-center gap-1 py-3">
                                <EditButton id={contact.id} />
                                <DeleteButton id={contact.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsTable;
