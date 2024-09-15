import { useState } from "react";
import { motion } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCaretDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllCourses = () => {

    return (
        <div>
            <div className='container mx-auto'>
                <p className="text-4xl font-bold text-center py-8 text-white">All Courses</p>
                <div>
                    <table className="w-[1000px] text-center previewTable mx-auto border mb-20 text-white">
                        <thead>
                            <tr>
                                <th className="text-2xl py-4">Thumbnail</th>
                                <th className="text-2xl py-4">Title</th>
                                <th className="text-2xl py-4">Language</th>
                                <th className="text-2xl py-4">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="text-xl p-4">Course Thumbnail</td>
                                <td className="text-xl p-4">Course title</td>
                                <td className="text-xl p-4">Course title</td>
                                <td className="text-xl p-4">
                                    <div className="dropdown text-3xl">
                                        <BsThreeDotsVertical tabIndex={0} role="button" className="m-1" />
                                        <ul tabIndex={0} className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg">
                                            <li><a>View Details</a></li>
                                            <li><a>Edit Course</a></li>
                                            <li><a>Delete Course</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-xl p-4">Course Thumbnail</td>
                                <td className="text-xl p-4">Course title</td>
                                <td className="text-xl p-4">Course title</td>
                                <td className="text-xl p-4">
                                    <div className="flex items-center justify-center px-2 text-3xl relative" >
                                        <div className="flex items-center">
                                            <div className="dropdown">
                                                <BsThreeDotsVertical tabIndex={0} role="button" className="m-1" />
                                                <ul tabIndex={0} className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg">
                                                    <li><a>View Details</a></li>
                                                    <li><a>Edit Course</a></li>
                                                    <li><a>Delete Course</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-xl p-4">Course Thumbnail</td>
                                <td className="text-xl p-4">Course title</td>
                                <td className="text-xl p-4">Course title</td>
                                <td className="text-xl p-4">
                                    <div className="flex items-center justify-center px-2 text-3xl relative" >
                                        <div className="flex items-center">
                                            <div className="dropdown">
                                                <BsThreeDotsVertical tabIndex={0} role="button" className="m-1" />
                                                <ul tabIndex={0} className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg">
                                                    <li><a>View Details</a></li>
                                                    <li><a>Edit Course</a></li>
                                                    <li><a>Delete Course</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border">
                                <td className="text-xl p-4">Course Thumbnail</td>
                                <td className="text-xl p-4">Course title</td>
                                <td className="text-xl p-4">Course title</td>
                                <td className="text-xl p-4">
                                    <div className="flex items-center justify-center px-2 text-3xl relative" >
                                        <div className="flex items-center">
                                            <div className="dropdown">
                                                <BsThreeDotsVertical tabIndex={0} role="button" className="m-1" />
                                                <ul tabIndex={0} className="dropdown-content menu bg-[#494949] rounded-box z-[1] w-52 p-2 shadow text-lg">
                                                    <li><a>View Details</a></li>
                                                    <li><a>Edit Course</a></li>
                                                    <li><a>Delete Course</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;