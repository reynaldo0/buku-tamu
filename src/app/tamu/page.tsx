import { CreateButton } from "@/components/buttons"
import ContactsTable from "@/components/contacts-table"
import Search from "@/components/search"
import { getContactsPages } from "@/lib/data"
import Pagination from "@/components/pagination"
import { Suspense } from "react"
import { TableSkeleton } from "@/components/skeleton"

const Contacts = async ({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getContactsPages(query);

  return (
    <div className="max-w-screen-lg mx-auto mt-5 px-5 md:px-0">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <Suspense  key={query + currentPage} fallback={<TableSkeleton/>}>
        <ContactsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}

export default Contacts