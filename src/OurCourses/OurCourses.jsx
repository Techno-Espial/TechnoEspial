import Card from "../Card/Card";

const OurCourses = () => {
    return (
        <div className="bg-[#1b1b1b]">
            <div className="container mx-auto">
                <h1 className="text-center text-5xl font-bold py-24">Our Courses</h1>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 pb-28 w-fit mx-auto">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>

        </div>
    );
};

export default OurCourses;