import { CiChat1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaSignalMessenger } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
import { FiSun } from "react-icons/fi";
// import { CgDarkMode } from "react-icons/cg";
import profile from "../assets/avatar.png";
import { Link } from "react-router-dom";

function ChatNav() {
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
          <img src={profile} className="rounded-full w-10" alt="" />
        </div>
      </nav>
    </aside>
  );
}

export default ChatNav;
