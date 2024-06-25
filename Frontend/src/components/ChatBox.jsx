import { CiChat1 } from "react-icons/ci";

function ChatBox() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center p-10">
        <CiChat1 className="text-8xl text-blue" />
        <h1 className="font-bold text-2xl">Welcome to Dev Colab</h1>
        <p className="max-w-2xl text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. cum sociis natoque penatibus et
        </p>
        <button className="bg-blue py-2 px-5 rounded-lg text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
