
const Schedule = () => {
    return (
        <div>
            <div className="container mx-auto py-[80px]">
                <div className="flex justify-center gap-14 pb-8">
                    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center text-3xl font-bold bg-[#069648] text-white rounded-full">
                        <p>22 July</p>
                        <p>Live Class</p>
                    </div>
                    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center text-3xl font-bold bg-[#0556A0] text-white rounded-full">
                        <p>22 July</p>
                        <p>Assignment</p>
                    </div>
                    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center text-3xl font-bold bg-[#A03305] text-white rounded-full">
                        <p>22 July</p>
                        <p>Deadline</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <table className="w-[1000px] border text-xl text-white">
                        <tr className="text-4xl">
                            <th className="border py-4 px-6">Date</th>
                            <th className="border py-4 px-6">Schedule</th>
                        </tr>
                        <tr>
                            <td className="border py-4 px-6">20 July 2024 (Sat)</td>
                            <td className="border py-4 px-6">Basic HTML, Explore HTML and startup</td>
                        </tr>
                        <tr>
                            <td className="border py-4 px-6">21 July 2024 (Sun)</td>
                            <td className="border py-4 px-6">Basic HTML, Explore HTML and startup</td>
                        </tr>
                        <tr>
                            <td className="border py-4 px-6">22 July 2024 (Sat)</td>
                            <td className="bg-[#069648] border py-4 px-6">Live Class</td>
                        </tr>
                        <tr>
                            <td className="border py-4 px-6">23 July 2024 (Sat)</td>
                            <td className="border py-4 px-6">No Class</td>
                        </tr>
                        <tr>
                            <td className="border py-4 px-6">24 July 2024 (Sat)</td>
                            <td className="bg-[#0556A0] border py-4 px-6">Assignment</td>
                        </tr>
                        <tr>
                            <td className="border py-4 px-6">26 July 2024 (Sat)</td>
                            <td className="bg-[#A03305] border py-4 px-6">Deadline</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Schedule;