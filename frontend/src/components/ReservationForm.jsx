import React from 'react'

const ReservationForm = () => {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "1",
    })

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    } 

    const generateTimeSlots = () => {
        const slots = []
        for (let hour = 9; hour <= 21; hour++) {
            const startHour = hour % 12 === 0 ? 12 : hour % 12;
            const startPeriod = hour < 12 ? 'AM' : 'PM';

            const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
            const endPeriod = (hour + 1) < 12 ? 'AM' : 'PM';

            slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 - ${endPeriod}`);
        }
        return slots;
    }

    return (
    <div>
        <div>
            <form action="">
                <h2>Reserve a Table</h2>
                <h1>Dine With Us - <span>Reserve Now</span></h1>

                <div>
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChanges} required />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" required />
                </div>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" placeholder="Phone Number" required />
                </div>
                <div>
                    <label htmlFor="">Reservation Date</label>
                    <input type="date" required />  
                </div>
                <div>
                    <label htmlFor="">Reservation Time</label>
                    <select required>
                        {generateTimeSlots().map((slot, index) => (
                            <option value={slot} key={index}>{slot} </option>
                        ))}
                    </select>
                </div> 
                <div>
                    <label htmlFor="">Number of Guests</label>
                    <select>
                        {[...Array(10).keys()].map((num) => (
                            <option value={num + 1} key={num + 1}>{num + 1} Guest(s) </option>
                        ))}
                    </select>
                </div> 
                <button type="submit">Reserve Now</button>
            </form>
            <div>
                <div>
                    <h3>Address</h3>
                    <p>123, Xyz Street, N-axis, Sample City, State, Country</p>
                </div>
                <div>
                    <h3>Open Time</h3>
                    <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                    <p>Sat - Sun: 09:00 AM - 11:00 PM</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>Phone: +(62) 000-0000</p>
                    <p>Email: QuickDine@gmail.com</p>
                </div>
                <div>
                    <h3>Stay Connected</h3>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ReservationForm