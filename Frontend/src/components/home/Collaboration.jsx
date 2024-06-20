import { FaCloud, FaFile, FaSearch, FaVideo } from "react-icons/fa";

const collabFeatures = [
  { title: "Organise", subTitle: "Conversation", icon: <FaCloud /> },
  { title: "Shared", subTitle: "Files, etc", icon: <FaFile /> },
  { title: "Search", subTitle: "Everything", icon: <FaSearch /> },
  { title: "Talk In", subTitle: "Video call", icon: <FaVideo /> },
];

const Collaboration = () => {
  return (
    <div className="mb-6">
      <h2 className="text-center font-bold text-[30px] max-w-md mx-auto mb-2">
        Put collaboration at your fingertips
      </h2>

      <div className="flex items-center justify-center gap-[80px] md:flex-row flex-col my-20">
        {collabFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-row gap-[20px] px-4 py-2 rounded-2xl bg-white hover:bg-blue hover:text-white shadow-lg"
          >
            <div className="text-[30px]">{feature.icon}</div>

            <div className="text-[20px]">
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaboration;
