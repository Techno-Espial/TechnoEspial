import { FaReact } from "react-icons/fa6";
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="relative"> {/* Ensure the container is relative */}
            <div className="container mx-auto flex justify-center">
                <div className="w-full flex items-center justify-center py-16">
                    {/* FaReact Icon as Background */}
                    <FaReact className="text-[500px] text-blue-500 opacity-20 absolute rotate-animation" />

                    {/* Form Div */}
                    <div className="relative z-10 py-8 border text-black">
                        <p className="text-3xl text-white text-center font-bold">Login</p>
                        <form className="w-[550px] text-center flex flex-col justify-between p-8 gap-8">
                            <input className="w-full p-2 border text-xl" type="email" placeholder="Email" />

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

                            <input className="btn bg-[#00A4B0] text-xl font-bold text-white" type="submit" value="Login" />

                            <p className="text-white text-xl">No account? <Link to="/register" className="text-blue-500"><u>Register</u></Link> here</p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
