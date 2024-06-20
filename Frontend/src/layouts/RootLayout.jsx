import { Outlet } from 'react-router-dom';

import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main className='sm:px-10 px-3'>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;