import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";


const Booking = (props) => {

    const [startDate, setstartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const {user} = useContext(AuthContext);
    console.log(props.selectedRoom)
    const room = props.selectedRoom

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(startDate, endDate)
        if(props.booked === 'booked'){
            const updateBooking = {
                room: room.room._id,
                startDate: startDate,
                endDate: endDate
            }

            console.log(updateBooking, room._id )
            try {
                const response = await axios.patch(`http://localhost:8000/v1/booking/update/${room._id}`,updateBooking)
                if(response){
                    console.log('update Successful =>', response)
                    props.setisActive(false)
                    props.showUpdateSuccess()
                    
                }
            } catch (error) {
                console.error('Error submitting form data:', error);
            }


            console.log('update')
        } else {
            const newBooking = {
                user: user._id,
                room: room._id,
                startDate: startDate,
                endDate: endDate
            }
            try {
                const response = await axios.post('http://localhost:8000/v1/booking/add',newBooking)
                if(response){
                    console.log('booking successful =>', response)
                    props.setisActive(false)
                    props.showAddSuccess()
                }
            } catch (error) {
                console.error('Error submitting form data:', error);
            }

        };
        
    }

    return (
        <div>
            <div className="fixed inset-0 bg-opacity-50 bg-gray-950 p-2 flex justify-center items-center " >
                <div className=" bg-white border-2 w-[80%] ml-14 md:ml-0 md:w-[60%] lg:w-[40%] shadow-2xl rounded-lg p-2" >
                    <div className="flex justify-between" >
                        <h1 className="text-xl font-semibold">Room No {props.booked === 'booked' ? room.room.number: room.number}</h1>
                        <button onClick={() => (props.setisActive(false))} className="  " >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                    </div>



                    <form onSubmit={handleSubmit} >
                        <div className="flex justify-around mb-4 p-4">
                            <div className="mr-2">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="startDate"
                                >
                                    Start Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="startDate"
                                    type="date"
                                    onChange={(e) => setstartDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="endDate"
                                >
                                    End Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="endDate"
                                    type="date"
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-end" >
                            <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                        focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center me-2 mb-2  ">{props.booked === 'booked' ? 'update': 'Book now'}</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

};


export default Booking;