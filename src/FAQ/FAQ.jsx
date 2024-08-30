import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="bg-base-200 p-4 mb-4 border border-gray-300 rounded-lg">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={onClick}
            >
                <span className="text-xl font-medium">{question}</span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </div>
            <div
                className={`mt-2 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <p className="mt-2">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-[#1b1b1b]'>
            <div className="container mx-auto lg:flex gap-8">
                <div className="lg:w-[900px] h-[500px] flex items-center">
                    <div className="font-bold mx-auto text-center">
                        <p className="text-[50px]">Some common</p>
                        <p className="text-[90px] m-[-30px]">Questions</p>
                        <p className="text-[180px] m-[-30px]">?</p>
                    </div>
                </div>
                <div className="lg:w-[800px] md:px-4 max-sm:px-4 my-auto">
                    <FAQItem
                        question="Click to open this one and close others"
                        answer="Hello, this is the answer to the first question."
                        isOpen={openIndex === 0}
                        onClick={() => handleClick(0)}
                    />
                    <FAQItem
                        question="Click to open this one and close others"
                        answer="Hello, this is the answer to the second question."
                        isOpen={openIndex === 1}
                        onClick={() => handleClick(1)}
                    />
                    <FAQItem
                        question="Click to open this one and close others"
                        answer="Hello, this is the answer to the third question."
                        isOpen={openIndex === 2}
                        onClick={() => handleClick(2)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
