import { Link } from "react-router-dom";
import {BsFillHouseDoorFill, BsFillHddStackFill, BsRadioactive, BsPeopleFill, BsTrophyFill, BsFillPersonFill, BsChevronBarDown, BsChevronCompactDown, BsChevronDown} from "react-icons/bs";
import {SiDiscord, SiTwitch, SiTwitter} from "react-icons/si"
import {IoNotifications} from "react-icons/io5"
import Picture from "../../Assets/pp.jpg"

import '../../styles/tailwind.css'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-3 gap-10 font-nunito border-b-2 border-b-gray-700">
      <div className="flex items-center text-white mr-6">
        <span className="font-semibold text-2xl tracking-tight px-5">Rift.IO</span>
      </div>
      <div className="flex items-center">
        <div className="text-sm gap-10 flex items-center">
          <div className="flex gap-3 items-center">
            <BsFillHouseDoorFill color="#fff" size={15}/>
            <Link to="/" className="text-blue-200 hover:text-white">Home</Link>
          </div>
          <div className="flex gap-3 items-center">
            <BsRadioactive color="#fff" size={15}/>
            <Link to="/Build" className="text-blue-200 hover:text-white">PCW</Link>
          </div>
          <div className="flex gap-3 items-center">
            <BsFillHddStackFill color="#fff" size={15}/>
            <Link to="/Rift" className="text-blue-200 hover:text-white">Tournaments</Link>
          </div>
          <div className="flex gap-3 items-center">
            <BsPeopleFill color="#fff" size={15}/>
            <Link to="/Rift" className="text-blue-200 hover:text-white">Teammates</Link>
          </div>
          <div className="flex gap-3 items-center">
            <BsTrophyFill color="#fff" size={15}/>
            <Link to="/Rift" className="text-blue-200 hover:text-white">Rating</Link>
          </div>
        </div>
      </div>
      <div className="flex">
          <div className="flex gap-3 items-center text-sm bg-orange-500 bg-opacity-5 p-3 rounded">
            <BsFillPersonFill color="orange" size={18}/>
            <Link to="/Rift" className="text-blue-200 hover:text-white">37,820</Link>
            <span className="text-orange-500">Online</span>
          </div>
      </div>
      <div className="flex">
          <div className="flex gap-3 items-center text-sm bg-orange-500 bg-opacity-5 p-3 rounded">
            <BsFillPersonFill color="orange" size={18}/>
          </div>
      </div>
      <div className="flex gap-5">
          <div className="flex gap-3 items-center text-sm bg-gray-500 bg-opacity-5 p-3 rounded hover:bg-opacity-40 hover:cursor-pointer transition-all change-color">
            <SiTwitch size={18}/>
          </div>
          <div className="flex gap-3 items-center text-sm bg-gray-500 bg-opacity-5 p-3 rounded hover:bg-opacity-40 hover:cursor-pointer transition-all change-color">
            <SiDiscord size={18}/>
          </div>
          <div className="flex gap-3 items-center text-sm bg-gray-500 bg-opacity-5 p-3 rounded hover:bg-opacity-40 hover:cursor-pointer transition-all change-color">
            <SiTwitter size={18}/>
          </div>
          <div className="flex gap-3 items-center text-sm bg-gray-500 bg-opacity-5 p-3 rounded hover:bg-opacity-40 hover:cursor-pointer transition-all change-color">
            <IoNotifications size={18}/>
          </div>
      </div>
      <div className="flex gap-5 self-end">
          <div className="flex gap-5 p-2 items-center text-sm bg-gray-500 bg-opacity-5 rounded hover:bg-opacity-40 hover:cursor-pointer transition-all change-color">
            <div className="sm:w-12 md:w-12 lg:w-12">
              <img src={Picture} className="shadow-lg rounded-md w-full"/>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <div className="text-md text-white">
                  thiago_arr
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>4,500 • 6,500</span>
                </div>
              </div>
              <BsChevronDown color="white" />
            </div>
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
