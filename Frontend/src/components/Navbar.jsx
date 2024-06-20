import Button from "./Button";
import herobg from "../assets/herobg.jpg";

const Navbar = () => {
  return (
    <>
      <div
        className="w-screen h-screen flex justify-between py-5 px-8 capitalize "
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <h1 className="logo">dev community</h1>
        <nav className="w-1/2">
          <ul className="flex justify-between ">
            <li>download</li>
            <li>discover</li>
            <li>safety</li>
            <li>support</li>
            <li>blog</li>
            <li>careers</li>
          </ul>
        </nav>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
