import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { FaPython } from "react-icons/fa6";

const Slider = () => {
    return (
        <div>
            <div className="container mx-auto">
                <FaReact className="text-[80px] absolute top-[100px] left-[70px] rotate-animation " />
                <DiNodejs className='text-[140px] absolute top-[80px] right-[70px] rotate-reverse ' />
                <FaPython className='text-[100px] absolute top-[420px] right-[170px] shaking' />
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    onSwiper={() => { }}
                    onSlideChange={() => { }}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <div className='h-[500px] slide1 bg_properties flex justify-center items-center'>
                            <div className='text-center w-[1000px]'>
                                <h1 className='text-6xl text-black font-bold pb-6'>Text About Slide</h1>
                                <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Explore the endless possibilities of expression through vibrant strokes and intricate lines. Let your imagination run wild as you bring your ideas to life on canvas.</p>
                                <button className='btn text-xl mt-8'>Explore More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] slide2 bg_properties flex justify-center items-center'>
                            <div className='text-center w-[1000px]'>
                                <h1 className='text-6xl text-black font-bold pb-6'>Text About Slide</h1>
                                <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Experience the magic of turning inspiration into tangible creations. From bold hues to delicate shades, discover the power of color to evoke emotion and captivate the senses.</p>
                                <button className='btn text-xl mt-8'>Explore More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] slide3 bg_properties flex justify-center items-center'>
                            <div className='text-center w-[1000px]'>
                                <h1 className='text-6xl text-black font-bold pb-6'>Text About Slide</h1>
                                <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Embark on a journey of skill and mastery as you refine your techniques in painting and drawing. Learn from the masters and unlock your full artistic potential with every stroke.</p>
                                <button className='btn text-xl mt-8'>Explore More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] slide4 bg_properties flex justify-center items-center'>
                            <div className='text-center w-[1000px]'>
                                <h1 className='text-6xl text-black font-bold pb-6'>Text About Slide</h1>
                                <p className='text-2xl text-black text-white bg-black bg-opacity-30 p-8 rounded-xl'>Witness the evolution of your artistry from humble sketches to breathtaking masterpieces. Each stroke is a step closer to leaving your mark on the canvas of history.</p>
                                <button className='btn text-xl mt-8'>Explore More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;