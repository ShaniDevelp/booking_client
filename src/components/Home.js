import { useState } from "react";
import Rooms from "./rooms";
import Booking from "./booking";
import RoomsList from "./roomList";

const Home = () => {
   

  

    return (
        <>
            <div class="">
                <div class="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
                    <h1 class="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">Welcome to Continentals</h1>
                    <p class="mt-6 text-lg text-white">We're the bench mark for hospitality Industry</p>
                    <img class="absolute top-0 left-0 -z-10 h-full w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>

                <div class="mx-auto grid max-w-screen-lg px-6 pb-20">
                   
                   <RoomsList ></RoomsList>

                  

                  {/* <button onClick={() => HandlePopUp()}  >
                    book
                  </button> */}

                    {/* <div class="">
                        <p class="mt-8 font-serif text-xl font-bold text-blue-900">Select a date</p>
                        <div class="relative mt-4 w-56">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg aria-hidden="true" class="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input datepicker="" datepicker-orientation="bottom" autofocus="autofocus" type="date" class="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" placeholder="Select date" />
                        </div>
                    </div> */}

                    {/* <div class="">
                        <p class="mt-8 font-serif text-xl font-bold text-blue-900">Select a time</p>
                        <div class="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
                            <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
                            <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">14:00</button>
                            <button class="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white active:scale-95">09:00</button>
                            <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
                            <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">15:00</button>
                            <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
                            <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">14:00</button>
                            <button class="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
                        </div>
                    </div> */}

                    {/* <button class="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">Book Now</button> */}
                </div>
            </div>
            <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script>
        </>
    )
};

export default Home;