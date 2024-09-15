import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const AssignmentMarks = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center gap-4 py-10'>
                    <p className='text-5xl font-bold'>You got : </p>
                    <div className='w-[170px] h-[170px] flex justify-center items-center rounded-full bg-[#069648]'>
                        <p className='text-5xl font-bold'>60/60</p>
                    </div>
                </div>
                <div>
                    <table className="w-[800px] previewTable mx-auto border mb-20">
                        <tr>
                            <th className="text-4xl py-4">Assignment Preview</th>
                        </tr>
                        <tr className="border">
                            <td className="p-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xl">Make the design responsive</p>
                                    </div>
                                    <div className="flex items-center px-2 rounded bg-gray-50">
                                        {/* <IoCloseSharp className="text-2xl font-bold text-red-600" /> */}
                                        <FaCheck className="text-lg text-green-500" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border">
                            <td className="p-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xl">Make the design responsive</p>
                                    </div>
                                    <div className="flex items-center px-2 rounded bg-gray-50">
                                        <IoCloseSharp className="text-xl font-bold text-red-600" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border">
                            <td className="p-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xl">Make the design responsive</p>
                                    </div>
                                    <div className="flex items-center px-2 rounded bg-gray-50">
                                        <FaCheck className="text-lg text-green-500" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border">
                            <td className="p-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xl">Make the design responsive</p>
                                    </div>
                                    <div className="flex items-center px-2 rounded bg-gray-50">
                                        <IoCloseSharp className="text-xl font-bold text-red-600" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border">
                            <td className="p-4">
                                <p className="text-xl">Need to do better. Practice more and more. Be regular and concious about class.</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AssignmentMarks;