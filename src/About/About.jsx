import VideoPlayer from "../VideoPlayer/VideoPlayer";

const About = () => {
    return (
        <div>
            <div className="container mx-auto lg:flex md:px-4 max-sm:px-4 gap-8 py-20">
                <div className="lg:w-[900px] lg:h-[500px]">
                    <VideoPlayer></VideoPlayer>
                </div>
                <div className="lg:w-[800px] md:px-4 max-sm:px-4 pt-6">
                    <h1 className="text-4xl font-bold text-center py-8">About Us</h1>
                    <p className="text-xl leading-8 text-justify">Welcome to Techno Espial! We’re passionate about revolutionizing education with our innovative Learning Management System. Our platform offers customizable learning paths, interactive content, and real-time analytics to enhance the learning experience for educators, trainers, and learners alike. Committed to continuous improvement, our team blends technology and education to make learning more engaging and effective. Explore how [Your LMS Name] can support your educational goals and join us in making learning accessible and impactful for everyone.</p>
                </div>
            </div>
        </div>
    );
};

export default About;