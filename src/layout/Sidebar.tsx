import { CiLocationArrow1 } from "react-icons/ci";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelopeOpen } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-full gap-6 md:gap-0 bg-[#2A3132] md:rounded-lg p-4 justify-around">
      <div className="flex md:flex-col md:gap-2 items-center md:justify-center gap-6 text-white">
        <img
          src="img.jpg"
          alt="Personal Image"
          className=" w-24 h-24 rounded-md object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl ">Rahul Mijar</h1>
          <h2 className="text-gray-400">WEB DEVELOPER</h2>
        </div>
      </div>
      <hr className="hidden md:block" />
      <div className="flex flex-col md:gap-6 gap-2 text-white">
        <div className="flex gap-6 items-center">
          <div className="text-xl">
            <HiOutlineEnvelopeOpen />
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400">EMAIL</h1>
            <p className="text-sm text-wrap ">rahulmijar0243@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="text-xl">
            <HiOutlinePhone />
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400">CONTACT</h1>
            <p className="text-sm text-wrap ">+977 9865410868</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="text-xl">
            <CiLocationArrow1 />
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400">ADDRESS</h1>
            <p className="text-wrap text-sm ">Hetauda-10, Bagmati, Nepal</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 text-2xl text-white">
        <NavLink to="#" className="hover:scale-110">
          <FaLinkedin />
        </NavLink>
        <NavLink to="#" className="hover:scale-110">
          <FaFacebookSquare />
        </NavLink>
        <NavLink to="#" className="hover:scale-110">
          <FaTwitterSquare />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
