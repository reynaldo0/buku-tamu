const CreateForm = () => {
  return (
    <div>
        <form action="">
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nama Lengkap</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nama Lengkap" />
            </div>
            <div className="mb-5">
                <label htmlFor="keperluan" className="block text-sm font-medium text-gray-900">Keperluan</label>
                <input type="text" name="keperluan" id="keperluan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Keperluan Anda" />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:to-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Simpan</button>
        </form>
    </div>
  )
}

export default CreateForm