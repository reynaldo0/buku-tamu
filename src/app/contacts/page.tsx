import ContactsTable from "@/components/contacts-table"
import Search from "@/components/search"

const Contacts = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-5">
        <div className="flex items-center justify-between gap-1 mb-5">
            <Search/>
        </div>
        <ContactsTable/>
    </div>
  )
}

export default Contacts