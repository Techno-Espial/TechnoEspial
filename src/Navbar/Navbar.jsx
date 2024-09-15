import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoCaretDownSharp } from "react-icons/io5";

const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-500 py-2 px-3 mx-1"
                        : "hover:border-b-2 hover:border-blue-500 py-2 px-3"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/schedule"
                className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-500 py-2 px-3 mx-1"
                        : "hover:border-b-2 hover:border-blue-500 py-2 px-3"
                }
            >
                Schedule
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/blog"
                className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-500 py-2 px-3 mx-1"
                        : "hover:border-b-2 hover:border-blue-500 py-2 px-3"
                }
            >
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/#webFooter"
                className="hover:border-b-2 hover:border-blue-500 py-2 px-3"
                onClick={() => {
                    // Scroll to the footer manually
                    const footer = document.getElementById("webFooter");
                    if (footer) {
                        footer.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                Contact Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myClass"
                className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-500 py-2 px-3 mx-1"
                        : "hover:border-b-2 hover:border-blue-500 py-2 px-3"
                }
            >
                My Class
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-500 py-2 px-3 mx-1"
                        : "hover:border-b-2 hover:border-blue-500 py-2 px-3"
                }
            >
                Dashboard
            </NavLink>
        </li>
    </>

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 },
        },
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b text-white">
            <div className="container mx-auto flex">
                <div className="navbar">
                    <div className="navbar-start">
                        <a className="text-2xl font-bold">Techno<span className="text-3xl text-black">Espial</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal text-lg">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="navbar-end flex gap-4">

                        {
                            // user && <div className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom z-[999]" data-tip={user.displayName}>
                            <div className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom z-[999]" onClick={() => setIsOpen(!isOpen)}>
                                <div className="rounded-full">
                                    <img alt="Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6pnzUtMPU8pxC8sZAHObuuxf6Rqu-LnMKg&s" />
                                </div>
                                {isOpen && <IoCaretDownSharp className="w-full text-2xl mx-auto mb-[-10px] mt-[-6px]" />}
                                {
                                    // user && <div className="w-full rounded-full">
                                    //     <img alt="Profile" src={user?.photoURL} />
                                    // </div>
                                }
                                <motion.nav
                                    initial={false}
                                    animate={isOpen ? "open" : "closed"}
                                    className={`menu w-[270px] ml-[-115px] pt-0 ${isOpen ? 'block' : 'hidden'}`}
                                >
                                    <motion.button
                                        whileTap={{ scale: 0.97 }}

                                    >
                                        <motion.div
                                            variants={{
                                                open: { display: "block" },
                                                closed: { display: "none" }
                                            }}
                                            transition={{ duration: 0.2 }}
                                            style={{ originY: 0.55 }}
                                            className="mt-[-11px]"
                                        >
                                        </motion.div>
                                    </motion.button>
                                    <motion.ul
                                        className="text-lg w-fit mx-auto py-4 px-5 rounded-xl bg-[#494949] mt-[-16px] border-2"
                                        variants={{
                                            open: {
                                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0,
                                                    duration: 0.7,
                                                    delayChildren: 0.3,
                                                    staggerChildren: 0.05
                                                }
                                            },
                                            closed: {
                                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0,
                                                    duration: 0.3
                                                }
                                            }
                                        }}
                                        style={{ pointerEvents: isOpen ? "auto" : "none" }}
                                    >
                                        <div className="w-[70px] h-[70px] btn btn-ghost btn-circle avatar z-[999] mx-auto">
                                            <div className="rounded-full w-full h-full">
                                                <img className="" alt="Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6pnzUtMPU8pxC8sZAHObuuxf6Rqu-LnMKg&s" />
                                            </div>
                                        </div>
                                        <div className="pb-[20px]">
                                            <p className="text-2xl font-bold">Md Jhon Tison</p>
                                            <p>Student ID : A1G1WDES</p>
                                        </div>
                                        <motion.li className="border-t-[1px] py-2 hover:bg-[#333333]" variants={itemVariants}><Link to="/notifications">Notifications</Link></motion.li>
                                        <motion.li className="border-t-[1px] py-2 hover:bg-[#333333]" variants={itemVariants}><Link to="/announcement">Announcement</Link></motion.li>
                                        <motion.li className="border-t-[1px] py-2 hover:bg-[#333333]" variants={itemVariants}><Link to="/myProgress">My Progress</Link></motion.li>
                                        <motion.li className="border-t-[1px] py-2 hover:bg-[#333333]" variants={itemVariants}><Link to="/assignmentMarks">Assignment Marks</Link></motion.li>
                                    </motion.ul>
                                </motion.nav>
                            </div>
                        }

                        {
                            // user ? <button onClick={handleSignOut} className="btn lg:block hidden">Log Out</button>
                            //     :
                            //     <Link to="/login">
                            //         <button className="btn btn-outline">Login</button>
                            //     </Link>
                            <Link to="/login">
                                <button className="btn btn-outline">Login</button>
                            </Link>
                        }
                    </div>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-[120px]">
                        {navLinks}

                        <Link to="/login">
                            <button className="btn btn-outline">Login</button>
                        </Link>
                        {
                            // user ? <button onClick={handleSignOut} className="btn">Log Out</button> : <Link to="/login">
                            //     <button className="btn">Login</button>
                            // </Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;