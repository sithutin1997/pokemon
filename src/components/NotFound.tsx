export function NotFound() {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">There is no pokemon with that name</h5>
      <p className="font-normal text-gray-700">Please find another pokemon to continue your pokemon hunting journey.</p>
    </div>
  )
}