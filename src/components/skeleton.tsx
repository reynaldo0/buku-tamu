export const TableSkeleton = () => {
    return (
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
            <tbody className="animate-pulse">
                <tr className="bg-white border-b border-gray-50">
                    <td className="py-3 px-4">
                        <div className="h-4 w-4 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 break-words">
                        <div className="h-4 w-20 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="flex justify-center gap-1 py-3">
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                    </td>
                </tr>
                <tr className="bg-white border-b border-gray-50">
                    <td className="py-3 px-4">
                        <div className="h-4 w-4 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 break-words">
                        <div className="h-4 w-20 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="flex justify-center gap-1 py-3">
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                    </td>
                </tr>
                <tr className="bg-white border-b border-gray-50">
                    <td className="py-3 px-4">
                        <div className="h-4 w-4 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 break-words">
                        <div className="h-4 w-20 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="flex justify-center gap-1 py-3">
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                    </td>
                </tr>
                <tr className="bg-white border-b border-gray-50">
                    <td className="py-3 px-4">
                        <div className="h-4 w-4 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 break-words">
                        <div className="h-4 w-20 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="flex justify-center gap-1 py-3">
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                    </td>
                </tr>
                <tr className="bg-white border-b border-gray-50">
                    <td className="py-3 px-4">
                        <div className="h-4 w-4 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 break-words">
                        <div className="h-4 w-20 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="flex justify-center gap-1 py-3">
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                        <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}