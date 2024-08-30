import About from "../About/About";
import FAQ from "../FAQ/FAQ";
import OurCourses from "../OurCourses/OurCourses";
import Slider from "../Slider/Slider";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FaAngleUp } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Home = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) { // Show the button after scrolling down 200px
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            {showScrollToTop && (
                <div
                    className="p-2 rounded-full fixed bottom-10 right-[40px] text-black bg-gray-500 cursor-pointer"
                    onClick={scrollToTop}
                >
                    <FaAngleUp className='text-[30px]' />
                </div>
            )}
            <Slider />
            <OurCourses />
            <About />
            <FAQ />
            <SocialMedia />
        </div>
    );
};

export default Home;
