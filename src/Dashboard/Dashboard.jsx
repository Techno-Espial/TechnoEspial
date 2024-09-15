import React, { useState } from 'react';
import AddCourse from '../AddCourse/AddCourse';
import AllCourses from '../AllCourses/AllCourses';
import AllStudents from '../AllStudents/AllStudents';
import Notification from '../Notification/Notification';
import Moderators from '../Moderators/Moderators';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="container mx-auto">
                <div className="mx-auto p-4">
                    {/* Tab buttons */}
                    <div className="flex justify-center">
                        <button
                            className={`py-2 px-6 text-xl font-medium border-l-2 border-t-2 border-r-2 border-b-2 transition-all duration-[0.4s]
                                ${activeTab === 0 
                                    ? 'border-b-transparent text-white' 
                                    : 'border-l-transparent border-t-transparent border-r-transparent text-gray-500 hover:text-white'}`}
                            onClick={() => setActiveTab(0)}
                        >
                            Add Course
                        </button>
                        <button
                            className={`py-2 px-6 text-xl font-medium border-l-2 border-t-2 border-r-2 border-b-2 transition-all duration-[0.4s]
                                ${activeTab === 1 
                                    ? 'border-b-transparent text-white' 
                                    : 'border-l-transparent border-t-transparent border-r-transparent text-gray-500 hover:text-white'}`}
                            onClick={() => setActiveTab(1)}
                        >
                            All Courses
                        </button>
                        <button
                            className={`py-2 px-6 text-xl font-medium border-l-2 border-t-2 border-r-2 border-b-2 transition-all duration-[0.4s]
                                ${activeTab === 2 
                                    ? 'border-b-transparent text-white' 
                                    : 'border-l-transparent border-t-transparent border-r-transparent text-gray-500 hover:text-white'}`}
                            onClick={() => setActiveTab(2)}
                        >
                            All Students
                        </button>
                        <button
                            className={`py-2 px-6 text-xl font-medium border-l-2 border-t-2 border-r-2 border-b-2 transition-all duration-[0.4s]
                                ${activeTab === 3 
                                    ? 'border-b-transparent text-white' 
                                    : 'border-l-transparent border-t-transparent border-r-transparent text-gray-500 hover:text-white'}`}
                            onClick={() => setActiveTab(3)}
                        >
                            Assignment
                        </button>
                        <button
                            className={`py-2 px-6 text-xl font-medium border-l-2 border-t-2 border-r-2 border-b-2 transition-all duration-[0.4s]
                                ${activeTab === 4 
                                    ? 'border-b-transparent text-white' 
                                    : 'border-l-transparent border-t-transparent border-r-transparent text-gray-500 hover:text-white'}`}
                            onClick={() => setActiveTab(4)}
                        >
                            Notification
                        </button>
                        <button
                            className={`py-2 px-6 text-xl font-medium border-l-2 border-t-2 border-r-2 border-b-2 transition-all duration-[0.4s]
                                ${activeTab === 5 
                                    ? 'border-b-transparent text-white' 
                                    : 'border-l-transparent border-t-transparent border-r-transparent text-gray-500 hover:text-white'}`}
                            onClick={() => setActiveTab(5)}
                        >
                            Moderators
                        </button>
                    </div>

                    {/* Tab content */}
                    <div className="mt-4">
                        {activeTab === 0 && <AddCourse></AddCourse>}
                        {activeTab === 1 && <AllCourses></AllCourses>}
                        {activeTab === 2 && <AllStudents></AllStudents>}
                        {activeTab === 3 && <p className="text-gray-700">This is the content for Assignment.</p>}
                        {activeTab === 4 && <Notification></Notification>}
                        {activeTab === 5 && <Moderators></Moderators>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
