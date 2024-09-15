import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Week from '../Week/Week';
import { useLoaderData, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const courseData = useLoaderData();
    const {id} = useParams();
    const { title, group, details, duration_count, duration_condition, classes, stack, deadline_data, deadline_month, deadline_year, price, discount } = courseData;
    console.log(courseData)
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex gap-8 py-16">
                    <div className="w-[1300px]">
                        <p className="text-3xl font-bold py-8">{title}</p>
                        <div className="w-full h-[400px]">
                            <VideoPlayer></VideoPlayer>
                        </div>
                    </div>
                    <div className="w-[600px] bg-[#414141]">
                        <div className="px-4 py-8">
                            <form className="flex w-full">
                                <input className="w-full" type="text" placeholder="Email" />
                                <input className="px-4 bg-[#00A4B0] text-white" type="submit" value="Search" />
                            </form>
                            <Week></Week>
                            <Week></Week>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;