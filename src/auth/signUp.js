
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContext, UseContextdata } from "../provider/AuthProvider";
import axios from "axios";
import { useContext, useState } from "react";
const Signup = () => {

    const { createUser, error} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = async(e) => {
        e.preventDefault()
        const newUser = {
            userName: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        if (newUser.password.length < 6) {
            toast("Password is less than 6 characters.");
            return;
        }
        else if (!/[A-Z]/.test(newUser.password)) {
            toast("Password don't have a capital letter");
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newUser.password)) {
            toast("Password don't have a special character");
            return;
        }

        createUser(newUser)
         .then(result => {
            console.log(result)
            if(result){
                navigate('/')
            }
         })
    }

     return (
        <div className="grid lg:grid-cols-5 grid-cols-2">

            <div className=" col-span-2 flex flex-col items-center justify-center">

                <h2 className="text-4xl font-bold">Create Your Account here</h2>
                <p className="text-base font-medium mt-12">Please Enter Your Details</p>
                <div className="flex flex-col justify-center items-center">
                    <form onSubmit={handleSignup} className="flex flex-col justify-center items-center" action="">
                    <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter User Name" type="text" name="name" required />
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Email" type="email" name="email" required />
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Password" type="password" name="password" required />
                        <input className=" cursor-pointer bg-[#017EFF] text-lg rounded-2xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-80" type="submit" value={"Signup"} />
                    </form>
                    <Link to={"/login"} className="text-base font-bold text-black">Allready Have An Account? Login Now</Link>
                </div>
               { error && <p className="text-base font-medium mt-12 text-red-500">{error}</p>} 
                <ToastContainer />
            </div>
            <div className="flex justify-center items-center col-span-3">
                <img className="w-3/4" src="https://i.ibb.co/hczH6xT/hotelentry.png" alt="" />
            </div>
        </div>
    );
}

export default Signup;