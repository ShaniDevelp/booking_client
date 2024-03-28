import { useState, useEffect, useContext } from "react";
import Booking from "./booking";
import Room from "./rooms";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const RoomsList = (props) => {

    const { user } = useContext(AuthContext);
    console.log(user)
    const [selectedRoom, setSelectedRoom] = useState('');
    const [roomsList, setroomsList] = useState('');
    const [isActive, setisActive] = useState(false);

    const HandleRoom = (value) => {
        if(!user){
            toast("Please login to continue");
        } else {
            setisActive(true)
            setSelectedRoom(value)
        }
       
    }
    const showAddSuccess = () => {
        toast("Booked Room successfully");
    }

    useEffect(() => {
        fetchRooms();
        
    }, [])

    const fetchRooms = async() => {
        try{
            const response = await axios.get('http://localhost:8000/v1/room')
            console.log(response.data)
            setroomsList(response.data)
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div class="">
            <p class="font-serif text-xl font-bold text-blue-900 mb-8">Book your Room</p>
            <div className="grid sm:grid-cols-3 gap-6" > 
               {roomsList.length !== 0 && roomsList.map((item) => {
                return (
                    <div key={item} >
                        <Room HandleRoom={HandleRoom} room={item}>  </Room>
                    </div>
                )
               }) }
            </div>
            <ToastContainer />

            {isActive && <Booking selectedRoom={selectedRoom} setisActive={setisActive} showAddSuccess={showAddSuccess} />}
        </div>
    )
}

export default RoomsList;