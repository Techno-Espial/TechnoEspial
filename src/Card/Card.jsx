import { Link } from "react-router-dom";

const Card = ({ data }) => {
    const { id, title, group, details, duration_count, duration_condition, classes, stack, deadline_data, deadline_month, deadline_year, price, discount } = data;
    return (
        <div className="w-[400px] bg-[#333333] p-5 card_shadow">
            <div className="w-full h-[200px] bg-gray-500">
                <div className="h-full flex justify-between items-end p-4">
                    <p>{duration_count} {duration_condition}</p>
                    <p>{classes} classes</p>
                </div>
            </div>
            <div className="p-2">
                <div>
                    <ul className="topicsList py-4">
                        {
                            stack.map(res => <li>{res}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Web Development (G-1)</h1>
                    <p className="text-[15px]">Unlock the world of web development with our course. Learn HTML, CSS, and JavaScript to create stunning websites. Master both front-end and back-end development, and website....</p>
                </div>
                <div className="py-4 flex gap-2">
                    <p className="text-xl font-bold">Deadline : </p>
                    <p className="text-xl">30 May 2024</p>
                </div>
                <div className="flex justify-between h-[70px]">
                    <div className="flex items-center">
                        <Link to={`/courseDetails/${id}`}>
                            <button className="button btn">Details</button>
                        </Link>
                    </div>
                    <div >
                        {/* <div className="flex relative">
                            <p className="absolute old_price font-bold">$200</p>
                            <p className="absolute new_price font-bold">$100</p>
                        </div> */}
                        <div className="flex items-center h-full">
                            <p className="flex text-3xl font-bold">$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;