import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const navLinks = [
    { route: '#', linkText: 'Discover' },
    { route: '#', linkText: 'Safety' },
    { route: '#', linkText: 'Support' },
    { route: '#', linkText: 'Blog' },
];

const MobileNav = ({ setShowMobileNav, showMobileNav }) => {
    return (
        <div className={`transition-all duration-250 bg-[rgba(0,0,0,0.65)] w-full h-screen fixed top-0 ${showMobileNav ? 'left-0' : '-left-[100%]'}`}>
            <nav className='bg-white h-screen sm:w-1/2 w-2/3 absolute'>
                <div className="flex items-center justify-between p-3">
                    <p className="font-bold text-lg">Dev<span className="text-blue">Community</span></p>
                    <FaTimes className="text-lg cursor-pointer" onClick={() => setShowMobileNav(false)} />
                </div>

                <ul className="flex items-start justify-center flex-col gap-4 mt-12">
                    {navLinks.map(link => (
                        <li key={link.linkText} className="w-full hover:border-l-4 hover:border-l-blue hover:text-blue cursor-pointer px-3 mb-3 transition-all duration-350">
                            <Link to={link.route} className="">
                                {link.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default MobileNav;