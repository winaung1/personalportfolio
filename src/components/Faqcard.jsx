import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faqcard = ({ data: { question, answer } }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <div
      onClick={() => setShowAccordion(!showAccordion)}
      className=" p-4  rounded-xl w-full  my-3 cursor-pointer text-left "
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg w-80 lg:w-full font-[500] lg:text-[20px]">{question}</h1>
        {showAccordion ? <FiMinus className="text-orange-400 transition-all duration-300 ease-in-out font-bold text-xl"/> : <FiPlus className="text-orange-400 font-bold text-xl transition-all duration-300 ease-in-out" />}
      </div>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${showAccordion ? "grid-row-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <p className=" text-lg font-[400] text-gray-500 overflow-hidden ">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faqcard