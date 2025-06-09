import React from 'react'
import { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminTable = ({}) => {
    const [reservations, setReservations] = useState([])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/api/reservations/delete/${id}`)
            toast.success("Reservation deleted successfully")
        } catch (error) {
            console.log("Error fetching reservations")
        }
    }

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/reservations/get`)
                setReservations(response.data)
                console.log(response.data)

            } catch (error) {
                console.log("Error deleting reservations")
            }
        }

        fetchReservations()
    }, [])

    return (
        <div className='min-h-screen'>
            <h2 className='text-3xl font-bold text-gray-700 text-center mb-6'>Restaurants Reservations</h2>

            <div className='overflow-x-auto'>
                <table className='w-full shadow-lg rounded-xl'>
                    <thead>
                        <tr className='bg-amber-500 text-left'>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Email</th>
                            <th className='p-3'>Phone</th>
                            <th className='p-3'>Date</th>
                            <th className='p-3'>Time</th>
                            <th className='p-3'>Guests</th>
                            <th className='p-3'>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            reservations.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className='p-4 text-center'>No reservations found</td>
                                </tr>
                            ) : (
                                reservations.map((reservation, index) => (
                                    <tr key={index} className='border-b hover:bg-gray-50'>
                                        <td className='p-3'>{reservation.name}</td>
                                        <td className='p-3'>{reservation.email}</td>
                                        <td className='p-3'>{reservation.phone}</td>
                                        <td className='p-3'>{reservation.date}</td>
                                        <td className='p-3'>{reservation.time}</td>
                                        <td className='p-3'>{reservation.guests}</td>
                                        <td className='p-3'>
                                            <button onClick={(handleDelete(reservation._id))} className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminTable
