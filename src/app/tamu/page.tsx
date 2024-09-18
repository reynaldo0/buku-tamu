import { CreateButton } from "@/components/buttons"
import ContactsTable from "@/components/contacts-table"
import Search from "@/components/search"

const Contacts = ({
  searchParams
}:{
  searchParams?:{
    query?: string;
    page?: string;
  }
}) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="max-w-screen-lg mx-auto mt-5 px-5 md:px-0">
        <div className="flex items-center justify-between gap-1 mb-5">
            <Search/>
            <CreateButton/>
        </div>
        <ContactsTable query={query} currentPage={currentPage}/>
    </div>
  )
}

export default Contacts