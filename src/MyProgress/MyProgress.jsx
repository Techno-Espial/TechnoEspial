import { FaHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaSmile } from "react-icons/fa";
import { ImSad2 } from "react-icons/im";
import RadialProgress from "../RadialProgress/RadialProgress";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';
import Chart from "../Chart/Chart";

const MyProgress = () => {
    const quizProgress = 90;
    const assignmentProgress = 95;
    const overallProgress = (quizProgress + assignmentProgress) / 2;

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0, title: 'Tab 1', content:
                <Chart />
        },
        { id: 1, title: 'Tab 2', content: 'This is the content for Tab 2.' },
        { id: 2, title: 'Tab 3', content: 'This is the content for Tab 3.' },
    ];

    return (
        <div>
            <div className='container mx-auto py-16'>
                <div className="flex justify-around pb-16">
                    <div className='flex flex-col items-center'>
                        <div className="w-[150px] h-[150px] text-xl">
                            <RadialProgress percentage={quizProgress} />
                        </div>
                        <p className='text-5xl font-bold'>Quiz</p>
                    </div>
                    <div className='text-9xl font-bold'>+</div>
                    <div className='flex flex-col items-center'>
                        <div className="w-[150px] h-[150px] text-xl">
                            <RadialProgress percentage={assignmentProgress} />
                        </div>
                        <p className='text-5xl font-bold'>Quiz</p>
                    </div>
                    <div className='text-9xl font-bold'>=</div>
                    <div className='flex flex-col items-center'>
                        <div className="w-[150px] h-[150px] text-xl relative">
                            <RadialProgress percentage={overallProgress} />

                            <div className={`absolute top-0 left-[75%] text-lg text-white bg-[#00A4B0] border-2 py-1 px-2 rounded-[5px] border-[#00C8D7] flex items-center gap-2 excellent ${overallProgress > 90 ? '' : 'hidden'}`}>
                                <p>Excellent</p>
                                <FaHeart className="text-[#E20000] text-2xl" />
                            </div>

                            <div className={`absolute top-0 left-[75%] text-lg text-white bg-[#00B071] border-2 py-1 px-2 rounded-[5px] border-[#00D7A3] flex items-center gap-2 excellent ${overallProgress > 70 && overallProgress <= 90 ? '' : 'hidden'}`}>
                                <p>Good</p>
                                <BiSolidLike className="text-[#00ff00] text-2xl" />
                            </div>

                            <div className={`absolute top-0 left-[75%] text-lg text-white bg-[#82B000] border-2 py-1 px-2 rounded-[5px] border-[#92D700] flex items-center gap-2 excellent ${overallProgress >= 50 && overallProgress <= 70 ? '' : 'hidden'}`}>
                                <p>Average</p>
                                <FaSmile className="text-[#ffff00] text-2xl" />
                            </div>

                            <div className={`absolute top-0 left-[75%] text-lg text-white bg-[#B00000] border-2 py-1 px-2 rounded-[5px] border-[#D70000] flex items-center gap-2 excellent ${overallProgress < 50 ? '' : 'hidden'}`}>
                                <p>Falling</p>
                                <ImSad2 className="text-[#FFF000] text-2xl" />
                            </div>
                        </div>
                        <p className='text-5xl font-bold'>Quiz</p>
                    </div>
                </div>
                <div>
                    <div className="w-[1000px] mx-auto p-4 ">
                        {/* Tab buttons */}
                        <div className="flex justify-center">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`py-2 px-6 text-xl font-medium border-l-2 border-t-2 border-r-2 border-b-2 transition-all duration-[0.4s]
                                    ${activeTab === tab.id
                                            ? 'border-b-transparent text-white'
                                            : 'border-l-transparent border-t-transparent border-r-transparent text-gray-500 hover:text-white'}`
                                    }
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <div className="mt-4">
                            <p className="text-gray-700">{tabs[activeTab].content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProgress;