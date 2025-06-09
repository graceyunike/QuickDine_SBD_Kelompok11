import React, { useState } from 'react';
import upload_img from '../assets/upload_img.png';

const AddMenu = ({ token }) => {
    const [image, setImage] = useState(null); 
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("All")


    return (
        <div>
            <form>
                <div className='flex flex-col items-start gap-1'>
                    <div>
                        <p>Upload Image</p>
                    </div>
                    <label htmlFor="image">
                        <img src={!image ? upload_img : URL.createObjectURL(image)} alt="" className='w-32 cursor-pointer'/>
                        <input 
                            type="file" 
                            id="image" 
                            hidden 
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </label>
                </div>

                <div className='w-full'>
                    <p className='mb-2 text-[22px]'>Product Name</p>
                    <input value={name} onChange={(e)=> setName(e.target.value)} className='w-full max-w[500px] p-4 border border-gray-300 rounded' type="text" placeholder='Enter Product Name' required />
                </div>

                <div className='w-full'>
                    <p className='mb-2 text-[22px]'>Product Description</p>
                    <input value={description} onChange={(e)=> setDescription(e.target.value)} className='w-full max-w[500px] p-4 border border-gray-300 rounded' type="text" placeholder='Enter Product Description' required />
                </div>

                <div className='flex flex-wrap gap-4 w-full'> 
                    <div className='min-w-[200px]'>
                        <p className='mb-2 text-[22px]'>Product Category</p>
                        <select value={category} onChange={(e)=> setCategory(e.target.value)} className='w-full max-w-[500px] p-3 border border-gray-300 text-[16px] rounded'>
                            <option value="All">All</option>
                            <option value="Spaghetti">Spaghetti</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Rice">Rice</option>
                            <option value="Noodles">Noodles</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Drinks">Drinks</option>
                        </select>
                    </div>

                    <div>
                        <p className='mb-2 text-[22px]'>Product Price</p>
                        <input value={price} onChange={(e)=> setPrice(e.target.value)} type="number" placeholder='40' className='w-full max-w-[120px] p-4 border border-gray-300 rounded' />
                    </div>
                </div>
                <button type="submit" className='mt-6 px-20 py-3 bg-amber-500 rounded hover:opacity-80'>Add Menu</button>
            </form>
        </div>
    )
}

export default AddMenu;