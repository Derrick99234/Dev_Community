import { Outlet } from 'react-router-dom';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main className='sm:px-10 px-3'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;