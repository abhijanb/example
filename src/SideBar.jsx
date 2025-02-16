import React, { useEffect, useState } from 'react';
import { X, User, Settings, Menu } from "lucide-react";
import { Link } from 'react-router';

const SideBar = ({ data }) => {
    const [state, setState] = useState(true); 
    const IconComponent = state ? X : Menu; 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (data && data.length > 0) {
            setLoading(false); 
        }
    }, [data]);

    return (
        <div className="flex w-[1314px]">
            {/* Sidebar */}
            <div 
                className={`transition-all duration-300 fixed top-0 left-0 z-10 h-screen ${state ? "w-64" : "w-22"}  text-white flex flex-col py-4 px-2`}>
                <IconComponent
                    size={26}
                    onClick={() => setState(!state)}
                    className="text-blue-500 cursor-pointer mb-6"
                />
                <Link to="/signIn" className="text-white mt-4 hover:text-gray-400">
                    <span>Sign In</span>
                </Link>
                <Link to="/signUp" className="text-white mt-2 hover:text-gray-400">
                     <span>Sign Up</span>
                </Link>
                <Link to="/setting" className="flex items-center mt-4 text-white hover:text-gray-400">
                    <Settings size={26} />
                    {state && <span className="ml-2">Settings</span>}
                </Link>
                <Link to="/profile" className="flex items-center mt-4 text-white hover:text-gray-400">
                    <User size={26} />
                    {state && <span className="ml-2">Profile</span>}
                </Link>
            </div>

            {/* Main Content */}
            <div 
                className={`transition-all duration-300 ${state ? "w-[calc(1316px-256px)]" : "w-[calc(1316px-86px)]"} bg-blue-500 px-4 py-4 ml-auto`}>
                    <h1 className='text-white mb-3'>Recipes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {loading ? (
                        <h1 className="text-xl font-semibold text-gray-700 text-center w-full">Loading...</h1>
                    ) : Array.isArray(data) && data.length > 0 ? (
                        data.map((element) => (
                            <div key={element.id} className="bg-white p-4 rounded-lg shadow-lg w-full flex flex-col items-center">
                                <img
                                    className="w-40 h-40 object-cover rounded-lg"
                                    src={element.image}
                                    alt={element.title}
                                />
                                <p className="mt-4 text-base font-semibold text-green-800">{element.name}</p>
                                <p>Preperation time: {element.prepTimeMinutes}</p>
                                <p>rating: {element.rating}</p>
                                <div className="mt-4 w-full text-left">
                                    <p className="text-sm text-gray-700 mb-1 font-bold">Instructions</p>
                                    {element.instructions.map((instruction, index) => (
                                        <p key={index} className="text-sm text-gray-700 mb-1">{index+1 } . {instruction}</p>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-xl font-semibold text-gray-700 text-center w-full">No products found</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
