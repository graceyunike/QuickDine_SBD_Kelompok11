import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { categoryItem } from '../assets/assets'

const MenuDisplay = () => {
    const { products } = useContext(ShopContext)
    const [category, setCategory] = useState("All")

    return (
        <div className='px-4 py-12 max-w-6xl mx-auto'>
            {/* Section header */}
            <div className='text-center mb-6'>
                <h1 className='text-4xl font-bold text-gray-800'>Discover Our Menu</h1>
            </div>

            {/* Category buttons */}
            <div className='text-center mb-8'>
                <h2 className='text-2xl font-medium text-gray-700'>Explore Our Categories</h2>
                <ul className='flex flex-wrap justify-center gap-4 mt-4'>
                    {categoryItem.map((item, index) => (
                        <li 
                            key={index} 
                            onClick={() => setCategory(prev => prev === item.category_title ? "All" : item.category_title)}
                            className={`cursor-pointer px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${category === item.category_title ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white'}`}
                        >
                            {item.category_title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product /menu display */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {products.length > 0 ? (
                    products
                        .filter(product => category === "All" || product.category === category)
                        .map(product => (
                            <div key={product._id} className='flex items-center gap-6 p-4 border-gray-100 rounded-xl shadow-sm'>
                                <img src={product.image} alt={product.name} className='w-30 h-30 object-cover rounded-full' />
                                <div className='flex-1'>
                                <div className='flex justify-between items-center'>
                                    <h3 className='text-lg font-semibold text-gray-800'>{product.name}</h3>
                                    <span className='text-lg font-semibold text-orange-600 relative ml-4'>
                                    <span className="before:content-[''] before:absolute before:w-10 before:border-b before:border-dotted before:border-gray-400 before:-left-12 before:top-1/2 before:transform before:-translate-y-1/2"></span>
                                    ${product.price}
                                    </span>
                                </div>
                                <p className='text-sm text-gray-500 mt-1'>Lorem Ipsum dolor sit amet</p>
                                </div>
                            </div>
                        ))
                ) : (
                    <p className='text-center col-span-2 text-gray-500'>No menu available</p>
                )}
            </div>
        </div>
    )
}

export default MenuDisplay
