import React from 'react';
import { Link } from 'react-router-dom';

const MyClass = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex justify-around py-20'>
                    <Link to='/mainClass'>
                        <div className='w-[350px] h-[450px] flex items-end bg-gray-500 card_shadow'>
                            <div className='w-full px-4 bg-[#dddddd70]'>
                                <p className='py-12 text-3xl text-white font-bold'>Main Class</p>
                                {/* <button className="button btn">Continue Class</button> */}
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='w-[350px] h-[450px] flex items-end bg-gray-500 card_shadow'>
                            <div className='w-full px-4 bg-[#dddddd70]'>
                                <p className='py-12 text-3xl text-white font-bold'>Recorded Live class</p>
                                {/* <button className="button btn">Continue Class</button> */}
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default MyClass;