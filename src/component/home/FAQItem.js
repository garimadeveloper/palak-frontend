import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4 shadow-sm">
      <button
        className="w-full text-left p-4 font-semibold text-gray-800 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '▾' : '▸'}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600">
          <p><span className="font-bold">Ans:</span> {answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'Is 40 a good readability score?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content...',
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text...',
    },
  ];

  return (
    <div className="flex flex-col items-center w-[70%] mx-auto py-10 px-4">
        <div className='w-full text-center'>

      <h2 className="text-lg text-blue-500 mb-2">FAQ</h2>
      <h1 className="text-2xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="w-full">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      </div>

    </div>
  );
};

export default FAQ;
