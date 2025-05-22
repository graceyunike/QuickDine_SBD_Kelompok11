import React, { useState } from 'react';
import upload_img from '../assets/upload_img.png';

const AddMenu = ({ token }) => {
    const [image, setImage] = useState(null); 
    const [name, setName] = useState("")
    const [description, setDescrption ]= useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("All")


    return (
        <div>
            <form>
                <div>
                    <div>
                        <p>Upload Image</p>
                    </div>
                    <label htmlFor="image">
                        <img src={!image ? upload_img : URL.createObjectURL(image)} alt="" />
                        <input 
                            type="file" 
                            id="image" 
                            hidden 
                            onChange={(e) => setImage(e.target.files[0])} // Added onChange handler
                        />
                    </label>
                </div>

                <div>
                    <p>Product Name</p>
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter Product Name' required />
                </div>

                <div>
                    <p>ProductDescription</p>
                    <input value={description} onChange={(e)=> setDescription(e.target.value)}type="text" placeholder='Enter Product Description' required />
                </div>

                <div> 
                    <div>
                        <p>Product Category</p>
                        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Spaghetti">Spaghetti</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Rice">Rice</option>
                            <option value="Noodeld">Noodles</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Drinks">Drinks</option>
                        </select>
                    </div>

                    <div>
                        <p>Product Price</p>
                        <input value={Price} onChange={(e)=> setPrice(e.target.value)} type="number" placeholder='40' />
                    </div>
                </div>
                <button type="submit">Add Menu</button>
            </form>
        </div>
    )
}

export default AddMenu;