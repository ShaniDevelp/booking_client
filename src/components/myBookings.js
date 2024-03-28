import { useContext, useEffect, useState } from "react";
import Booking from "./booking";
import Room from "./rooms";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContext } from "../provider/AuthProvider";

const MyBookings = () => {

    const [selectedRoom, setSelectedRoom] = useState('');
    const [isActive, setisActive] = useState(false);
    const [roomsList, setroomsList] = useState('');
    const [booked, setBooked] = useState('booked')
    const {user} = useContext(AuthContext);

    const HandleRoom = (value) => {
        console.log(value)
        setisActive(true)
        setSelectedRoom(value)
    }

    const showUpdateSuccess = () => {
        toast("Updated successfully");
    }

    useEffect(() => {
        fetchRooms();
    }, [isActive])

    const fetchRooms = async() => {
        try{
            const response = await axios.get(`http://localhost:8000/v1/booking/${user._id}`)
            console.log(response.data)
            setroomsList(response.data)
        } catch(error){
            console.log(error)
        }
    }

    return(
        <div class="  h-full">
        <p class="font-serif text-xl font-bold text-blue-900 my-8">Your Bookings</p>
        <div className="grid sm:grid-cols-3 gap-6" > 
           {roomsList.length !== 0 && roomsList.map((item) => {
            return (
                <div key={item} >
                    <Room  HandleRoom={HandleRoom} room={item} booked={booked}  >  </Room>
                </div>
            )
           }) }
        </div>
        <ToastContainer />

        {isActive && <Booking selectedRoom={selectedRoom} setisActive={setisActive} booked={booked} showUpdateSuccess={showUpdateSuccess}   />}
    </div>
    )
};

export default MyBookings;