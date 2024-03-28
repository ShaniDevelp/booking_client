import Navbar from "../shared/navbar";
import Footer from "../shared/footer";
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;