import ChatBox from "../ChatBox";
import ChatNav from "../ChatNav";
import ChatPreview from "../ChatPreview";

function Dashboard() {
  return (
    <div className="flex">
      <ChatNav />
      <ChatPreview />
      <ChatBox />
    </div>
  );
}

export default Dashboard;
