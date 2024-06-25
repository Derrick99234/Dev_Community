import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import profile from "../assets/profile.jpg";
function ChatPreview() {
  return (
    <div className="w-[300px] p-5 shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Chat</h2>
        <span className="font-bold bg-blue text-white text-sm w-[30px] rounded-md h-[30px] flex justify-center items-center">
          <FaPlus />
        </span>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="mt-5 w-full bg-slate-100 px-4 rounded-md py-2 outline-none "
        />
        <CiSearch className="absolute top-7 cursor-pointer text-xl font-extrabold right-5" />
      </div>

      <div className="flex mt-5 items-center gap-3">
        <div className="relative">
          <img
            src={profile}
            alt=""
            width={50}
            className="rounded-full w-10 h-10"
          />
          <div className="w-[10px] h-[10px] border-2 border-white bg-blue rounded-full absolute bottom-[2px] right-[-1px]"></div>
        </div>
        <p>Derrick Dev</p>
      </div>
      <div className="flex mt-5 items-center gap-3">
        <div className="relative">
          <img
            src={profile}
            alt=""
            width={50}
            className="rounded-full w-10 h-10"
          />
          <div className="w-[10px] h-[10px] border-2 border-white bg-blue rounded-full absolute bottom-[2px] right-[-1px]"></div>
        </div>
        <p>Olatunbosun Olashubomi</p>
      </div>
      <div className="flex mt-5 items-center gap-3">
        <div className="relative">
          <img
            src={profile}
            alt=""
            width={50}
            className="rounded-full w-10 h-10"
          />
          <div className="w-[10px] h-[10px] border-2 border-white bg-blue rounded-full absolute bottom-[2px] right-[-1px]"></div>
        </div>
        <p>Jessica Whith</p>
      </div>
      <div className="flex mt-5 items-center gap-3">
        <div className="relative">
          <img
            src={profile}
            alt=""
            width={50}
            className="rounded-full w-10 h-10"
          />
          <div className="w-[10px] h-[10px] border-2 border-white bg-blue rounded-full absolute bottom-[2px] right-[-1px]"></div>
        </div>
        <p>Mike Big Head</p>
      </div>
    </div>
  );
}

export default ChatPreview;
