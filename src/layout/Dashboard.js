import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../contexts/AuthProvider';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiListSettingsLine } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import { toast } from 'react-hot-toast';

const Dashboard = () => {
    const { logOut } = useContext(AUTH_CONTEXT);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut().then(() => {
            navigate('/login')
            toast.success('You have logged out');
        }).catch(e => console.log(e));
    }

    return (
        <div className="grid grid-cols-12 md:gap-8">
            <div className="col-span-12 lg:col-span-3">
                <ul className='mt-16 space-y-4 bg-red-100 md:bg-white p-4 md:p-0'>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? "bg-red-500 flex items-center text-white py-1 px-4 text-lg font-semibold rounded-md" : "flex items-center text-slate-800 py-1 px-4 text-lg font-semibold"}><BsFillPeopleFill className='mr-4' /> <span>Add Student</span></NavLink></li>
                    <li><NavLink to='/manageStudent' className={({ isActive }) => isActive ? "bg-red-500 flex items-center text-white py-1 px-4 text-lg font-semibold rounded-md" : "flex items-center text-slate-800 py-1 px-4 text-lg font-semibold"}><RiListSettingsLine className='mr-4' /> <span>Manage Student</span></NavLink></li>
                    <li className='flex items-center font-semibold px-4 text-slate-800 text-lg'><BiLogOut className='mr-4' /><button onClick={handleLogOut}>log out</button></li>
                </ul>
            </div>
            <div className="col-span-12 lg:col-span-9"><Outlet /></div>
        </div>
    );
};

export default Dashboard;