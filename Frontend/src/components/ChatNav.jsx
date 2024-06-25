import { CiChat1, CiLock, CiLogout, CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaSignalMessenger } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import profile from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useRef } from "react";

function ChatNav() {
  const [loginOutPopUp, setLoginOutPopUp] = useState(false);
  const profilePopUp = useRef(null);
  return (
    <aside className="bg-white flex w-20 justify-center h-screen shadow-md p-4">
      <nav className="flex flex-col justify-between ">
        <div className="flex flex-col gap-10">
          <Link>
            <CiChat1 className="text-3xl text-blue" />
          </Link>
          <Link>
            <CiUser className="text-3xl text-slate-800" />
          </Link>
          <Link to="/dashboard">
            <FaSignalMessenger className="text-3xl text-blue" />
          </Link>
          <Link>
            <IoMdContacts className="text-3xl text-slate-800" />
          </Link>
          <Link>
            <IoIosCall className="text-3xl text-slate-800" />
          </Link>
          <Link>
            <LuSettings className="text-3xl text-slate-800" />
          </Link>
        </div>
        <div className="flex flex-col gap-7">
          <FiSun className="text-3xl text-slate-800" />
          {/* <CgDarkMode className="text-3xl text-blue" /> */}
          <img
            src={profile}
            className="rounded-full w-10 cursor-pointer"
            onClick={() => setLoginOutPopUp(true)}
            alt=""
          />
          {loginOutPopUp && (
            <div
              className="shadow-lg w-[180px] p-5 h-[180px] bg-white absolute bottom-10"
              ref={profilePopUp}
            >
              <Link className="flex justify-between items-center text-slate-600 cursor-pointer text-lg mb-2">
                <span className="text-base">Profile</span>{" "}
                <FaUser className="text-sm" />
              </Link>
              <Link className="flex justify-between items-center text-slate-600 cursor-pointer text-lg mb-2">
                <span className="text-base">Settings</span> <CiSettings />
              </Link>
              <Link className="flex justify-between items-center text-slate-600 cursor-pointer text-lg mb-5">
                <span className="text-[15px]">Change Password</span> <CiLock />
              </Link>
              <Link
                to="/login"
                className="flex justify-between items-center text-slate-600 cursor-pointer text-lg "
              >
                <span className="text-base">Log out</span> <CiLogout />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

export default ChatNav;
