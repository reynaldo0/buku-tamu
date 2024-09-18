import CreateForm from '@/components/create-form'

const CreateContactPage = () => {
  return (
    <div className="max-w-md mx-auto mt-5 px-5 md:px-0">
        <h1 className="text-2xl text-center mb-2">Buat Tamu Baru</h1>
        <CreateForm/>
    </div>
  )
}

export default CreateContactPage