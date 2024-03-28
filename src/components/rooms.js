import { useState } from "react";
import Booking from "./booking";
import { Link } from "react-router-dom";



const Room = (props) => {

    const Room = props.room;
    let startDate = ''
    let endDate = ''

    if(props.booked === 'booked'){
        const dateString = Room.startDate
        startDate = dateString.substring(0, 10);
        const dateString1 = Room.endDate
        endDate = dateString1.substring(0, 10);
    }

    return (
        <div class="">
            <div className="flex border rounded-lg shadow-md border-gray-400 ">
                <div className=' w-[45%] h-100 '>
                    <img className="h-full rounded-bl-lg " src='https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas-768x512.jpg' alt="Movie" />
                </div>
                <div className="w-[55%] p-2">
                    <h2 className="text-sm font-bold ">{props.booked === 'booked' ? Room.room.number : Room.number}</h2>
                    <p className=' text-sm'><span className='font-semibold'>Type : </span>{props.booked === 'booked' ? Room.room.type : Room.type}</p>
                    <p className=' text-sm'><span className='font-semibold'>PricePerNight : </span>PKR {props.booked === 'booked' ? Room.room.pricePerNight : Room.pricePerNight}</p>
                    {props.booked === 'booked' && <p className=' text-sm'><span className='font-semibold'>StartDate : </span>{startDate}</p>}
                   {props.booked === 'booked' && <p className=' text-sm'><span className='font-semibold'>EndDate : </span>{endDate}</p>}
                    <button onClick={() => props.HandleRoom(Room)} type="button" className='cursor-pointer 
                    float-end bg-[#017EFF] text-xs rounded-2xl mt-2 text-center text-white px-4 py-2 font-semibold'>{props.booked === 'booked' ? "Edit":'Book Now'}</button>
                </div>
            </div>

        </div>
    )
}

export default Room;