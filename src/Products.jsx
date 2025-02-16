import React, { useState, useEffect } from 'react'

const Products = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="p-4 space-y-4 flex flex-wrap gap-6 justify-center">
      {loading ? (
        <h1 className='text-xl font-semibold text-gray-700'>Loading...</h1>
      ) : Array.isArray(data) && data.length > 0 ? (
        data.map((element) => (
          <div key={element.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-48 sm:w-64">
            <img className='w-40 h-40 object-cover rounded-lg' src={element.image} alt={element.title} />
            <h1 className='mt-4 text-xl font-semibold text-gray-800'>{element.name}</h1>
          </div>
        ))
      ) : (
        <h1 className='text-xl font-semibold text-gray-700'>No products found</h1>
      )}
    </div>
  )
}

export default Products
