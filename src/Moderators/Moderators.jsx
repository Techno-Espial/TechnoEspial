import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from "react-icons/im";

const Moderators = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [moderators, setModerators] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', isChecked: true },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', isChecked: true },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', isChecked: true },
    ]);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleCheck = (id) => {
        setModerators(moderators.map(moderator => 
            moderator.id === id ? { ...moderator, isChecked: !moderator.isChecked } : moderator
        ));
    };

    return (
        <div>
            <div className='container mx-auto'>
                <div>
                    <p className='text-3xl font-bold text-center py-8'>Add Moderator</p>
                    <form className='w-[1000px] mx-auto text-center text-black'>
                        <div className='flex gap-4 mb-4'>
                            <input className='w-[50%] text-xl' type="text" placeholder='Name' />
                            <input className='w-[50%] text-xl' type="email" placeholder='Email' />
                        </div>
                        <div className="flex items-center relative">
                            <input
                                className="w-full p-2 border text-xl pr-8"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {password && (
                                showPassword ? (
                                    <BiHide
                                        className="absolute right-2 text-xl cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <BiShowAlt
                                        className="absolute right-2 text-xl cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )
                            )}
                        </div>
                        <input className="btn bg-[#00A4B0] text-xl font-bold text-white my-4" type="submit" value="Add Moderator" />
                    </form>
                </div>

                <p className='text-3xl font-bold text-center py-8'>Moderators list</p>
                <table className="w-[1000px] text-center previewTable mx-auto border mb-20 text-white">
                    <thead>
                        <tr>
                            <th className="text-2xl py-4">Name</th>
                            <th className="text-2xl py-4">Email</th>
                            <th className="text-2xl py-4">Password</th>
                            <th className="text-2xl py-4">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moderators.map((moderator) => (
                            <tr className="border" key={moderator.id}>
                                <td className="text-xl p-4">{moderator.name}</td>
                                <td className="text-xl p-4">{moderator.email}</td>
                                <td className="text-xl p-4">********</td>
                                <td className="text-xl p-4">
                                    <div className="text-3xl cursor-pointer flex justify-center items-center">
                                        {moderator.isChecked ? (
                                            <FaCheck
                                                className="text-green-500"
                                                onClick={() => toggleCheck(moderator.id)}
                                            />
                                        ) : (
                                            <ImCross
                                                className="text-red-500"
                                                onClick={() => toggleCheck(moderator.id)}
                                            />
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Moderators;
