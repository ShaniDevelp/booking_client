
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

    const { loginUser, error} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        const newUser = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        loginUser(newUser)
          .then(result => {
            if(result){
                navigate('/')
            }
          })
    }

     return (
        <div className="grid lg:grid-cols-5 grid-cols-2">

            <div className=" col-span-2 flex flex-col items-center justify-center">

                <h2 className="text-4xl font-bold">Welcome Back</h2>
                <p className="text-base font-medium mt-12">Please Enter Your Details</p>
                <div className="flex flex-col justify-center items-center">
                    <form onSubmit={handleLogin} className="flex flex-col justify-center items-center" action="">
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Email" type="email" name="email" required />
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Password" type="password" name="password" required />
                        <input className=" cursor-pointer bg-[#017EFF] text-lg rounded-2xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-80" type="submit" value={"Login"} />
                    </form>
                    <Link to={"/signup"} className="text-base font-bold text-black">Do not have an account? Signup</Link>
                </div>
                { error && <p className="text-base font-medium mt-12 text-red-500">{error}</p>} 
            </div>
            <div className="flex justify-center items-center col-span-3">
                <img className="w-3/4" src="https://i.ibb.co/hczH6xT/hotelentry.png" alt="" />
            </div>
        </div>
    );
}

export default Login;