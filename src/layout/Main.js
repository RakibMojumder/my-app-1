import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
    return (
        <div className='w-[90%] md:w-[85%] mx-auto'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;