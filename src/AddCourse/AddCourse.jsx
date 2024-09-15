
const AddCourse = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="w-full flex items-center justify-center py-14">
                    {/* Form Div */}
                    <div className="w-[1000px] relative z-10 pt-8 text-black border">
                        <p className="text-3xl text-white text-center font-bold">Add Course</p>
                        <form className="w-full text-center flex flex-col justify-between p-8 gap-8">
                            <input className="bg-white text-xl" type="file" />
                            <div className="flex gap-4">
                                <input className="text-xl w-[50%]" type="text" placeholder="Course title" />
                                <input className="w-[50%] p-2 border text-xl" type="email" placeholder="Course duration" />
                            </div>

                            <div className="flex gap-4">
                                <input className="text-xl w-[50%]" type="text" placeholder="Language" />
                                <input className="text-xl w-[50%]" type="text" placeholder="Framework" />
                            </div>

                            <input className="text-xl" type="text" placeholder="Downloadable documents" />

                            <div className="flex gap-4">
                                <input className="text-xl w-[50%]" type="text" placeholder="Total class" />
                                <input className="w-[50%] p-2 border text-xl" type="email" placeholder="Live class" />
                            </div>

                            <div className="flex gap-4">
                                <input className="text-xl w-[50%]" type="text" placeholder="Access" />
                                <input className="w-[50%] p-2 border text-xl" type="email" placeholder="Certificate" />
                            </div>

                            <input className="text-xl" type="text" placeholder="Coupon" />

                            <div className="flex gap-4">
                                <input className="text-xl w-[50%]" type="text" placeholder="Price" />
                                <input className="w-[50%] p-2 border text-xl" type="email" placeholder="Week" />
                            </div>

                            <div className="flex gap-4">
                                <input className="text-xl w-[50%]" type="text" placeholder="Day" />
                                <input className="w-[50%] p-2 border text-xl" type="email" placeholder="Video link" />
                            </div>

                            <textarea className="text-xl" rows="5" placeholder="Course details"></textarea>

                            <div>
                                <input className="btn bg-[#00A4B0] text-xl font-bold text-white" type="submit" value="Register" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;