import { getContacts } from "@/lib/data"

const ContactsTable = async() => {
    const contacts = await getContacts();
  return (
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
                <th className="py-3 px-6">No</th>
                <th className="py-3 px-6">Nama</th>
                <th className="py-3 px-6">Keperluan</th>
                <th className="py-3 px-6">Tanggal</th>
                <th className="py-3 px-6 text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contacts,index) =>(
            <tr key={contacts.id} className="bg-white border-b">
                <td className="py-3 px-6">{index +1}</td>
                <td className="py-3 px-6">{contacts.name}</td>
                <td className="py-3 px-6 break-words">{contacts.keperluan}</td>
                <td className="py-3 px-6">{contacts.createdAt.toString()}</td>
                <td></td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ContactsTable