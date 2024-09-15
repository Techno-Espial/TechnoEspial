import { FaReact } from "react-icons/fa6";
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Toggle visibility for password
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    // Toggle visibility for confirm password
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevState) => !prevState);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div>
            <div className="container mx-auto flex justify-center">
                <div className="w-full flex items-center justify-center py-14">
                    {/* FaReact Icon as Background */}
                    <FaReact className="text-[500px] text-blue-500 opacity-20 absolute rotate-animation" />

                    {/* Form Div */}
                    <div className="relative z-10 pt-8 text-black border">
                        <p className="text-3xl text-white text-center font-bold">Register</p>
                        <form className="w-[550px] text-center flex flex-col justify-between p-8 gap-8">
                            <input className="bg-white text-xl" type="file" />
                            <div className="flex gap-4">
                                <input className="text-xl w-[50%]" type="text" placeholder="Name" />
                                <input className="w-[50%] p-2 border text-xl" type="email" placeholder="Email" />
                            </div>

                            <div className="flex gap-4">
                                {/* Password Field */}
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

                                {/* Confirm Password Field */}
                                <div className="flex items-center relative">
                                    <input
                                        className="w-full p-2 border text-xl pr-8"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    {confirmPassword && (
                                        showConfirmPassword ? (
                                            <BiHide
                                                className="absolute right-2 text-xl cursor-pointer"
                                                onClick={toggleConfirmPasswordVisibility}
                                            />
                                        ) : (
                                            <BiShowAlt
                                                className="absolute right-2 text-xl cursor-pointer"
                                                onClick={toggleConfirmPasswordVisibility}
                                            />
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <input className="text-xl w-[50%]" type="text" placeholder="Mobile" />
                                <input className="w-[50%] p-2 border text-xl" type="email" placeholder="Payment Method" />
                            </div>

                            <input className="text-xl" type="text" placeholder="TrxID" />

                            <div>
                                <input className="btn bg-[#00A4B0] text-xl font-bold text-white" type="submit" value="Register" />
                            </div>

                            <p className="text-white text-xl">Already have an account? <Link to="/login" className="text-blue-500"><u>Login</u></Link> here</p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;