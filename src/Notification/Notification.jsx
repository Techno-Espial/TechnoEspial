
const Notification = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="my-20">
                    <form className="text-center">
                        <textarea className="w-full text-2xl mb-4 text-black pl-6" placeholder="Notification" rows={5}></textarea>
                        <input className="btn bg-[#00A4B0] text-xl font-bold text-white" type="submit" value="Send Notification" />
                    </form>
                </div>
                <div>
                    <form className="text-center">
                        <textarea className="w-full text-2xl mb-4 text-black pl-6" placeholder="Announcement" rows={5}></textarea>
                        <input className="btn bg-[#00A4B0] text-xl font-bold text-white" type="submit" value="Announcement" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Notification;