export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Services</h1>
        <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
          Add Service
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Services management content goes here</p>
      </div>
    </div>
  );
}