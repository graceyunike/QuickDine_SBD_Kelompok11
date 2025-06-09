import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdDelete, MdDeleteForever } from 'react-icons/md';

const ListMenu = ({ token }) => {
    const [list, setlist] = useState([]);

    const fetchMenuList = async () => {
        try {
        const response = await axios.get(`${backendUrl}/api/product/list`, {
            headers: { token },
        });
        if (response.data.success) {
            setlist(response.data.products);
        } else {
            toast.error(response.data.message);
        }
        } catch (error) {
        console.log(error);
        toast.error("Failed to fetch menu list. Please try again later.");
        }
    };

    useEffect(() => {
        fetchMenuList();
    }, []);

    return (
        <div>
        <p className='mb-2 font-bold text-2xl'>Menu List</p>
        <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg font-semibold'> 
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className='text-center'>Action</b>
            </div>

            {list.map((item, index) => (
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg'>
                <img src={item.image} alt="" className='w-[50px] h-auto'/>
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <MdDeleteForever className='ml-10 text-[28px] cursor-pointer text-red-700'></MdDeleteForever>
            </div>
            ))}
        </div>
        </div>
    );
};

export default ListMenu;
