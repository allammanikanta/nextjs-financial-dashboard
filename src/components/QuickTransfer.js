// "use client";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

// const QuickTransfer = () => {
//   const contacts = useSelector((state) => state.dashboard.contacts) ?? [];
//   const [amount, setAmount] = useState("");
//   const [selectedContact, setSelectedContact] = useState(null);

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleContactSelect = (contact) => {
//     setSelectedContact(contact);
//   };

//   const handleSend = () => {
//     if (!selectedContact) {
//       toast.warning("Please select a contact to send money.");
//     } else if (amount <= 0) {
//       toast.warning("Please enter a valid amount.");
//     } else {
//       toast.success(
//         `Transfer of $${amount} to ${selectedContact.name} initiated.`
//       );
//       setAmount("");
//       setSelectedContact(null);
//     }
//   };

//   return (
//     <>
//       <div className="flex items-center space-x-4 mb-6 mt-4">
//         {contacts.map((contact) => (
//           <div
//             key={contact.id}
//             className={`text-center p-2 cursor-pointer ${
//               selectedContact?.id === contact.id ? "font-extrabold" : ""
//             }`}
//             onClick={() => handleContactSelect(contact)}
//           >
//             <img
//               src={contact.image}
//               alt={contact.name}
//               className="w-14 h-14 rounded-full object-cover mb-2 mx-auto"
//             />
//             <div className="text-[16px] text=[#232323] font-400 whitespace-nowrap">
//               {contact.name}
//             </div>
//             <div className="text-xs text-gray-500 mt-1">{contact.role}</div>
//           </div>
//         ))}
//         <div className="relative">
//           <div
//             className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
//             style={{
//               boxShadow: "4px 4px 18px -2px #E7E4E8CC",
//               cursor: "pointer",
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center space-x-4 mb-6 mt-4 flex-grow">
//         <div className="font-normal text-[#718EBF] text-nowrap">
//           Write Amount
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="bg-[#EDF1F7] flex items-center rounded-[25px] h-12 ">
//             <input
//               type="number"
//               value={amount}
//               onChange={handleAmountChange}
//               className="p-2 bg-transparent border-none focus:outline-none focus:ring-0 text-[#718EBF] tranparent-input"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-[#232323] text-white p-3 flex items-center justify-center shadow-[4px_4px_18px_-2px_#E7E4E8CC] rounded-[25px] w-45 h-12 cursor-pointer"
//             >
//               <span>Send</span>
//               <img
//                 src={"/images/SendIcon.svg"}
//                 alt="Send Icon"
//                 className="w-15 h-5"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default QuickTransfer;

"use client";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const QuickTransfer = () => {
  const contacts = useSelector((state) => state.dashboard.contacts) ?? [];
  const [amount, setAmount] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const scrollContainerRef = useRef(null); // Reference to the scroll container

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const handleSend = () => {
    if (!selectedContact) {
      toast.warning("Please select a contact to send money.");
    } else if (amount <= 0) {
      toast.warning("Please enter a valid amount.");
    } else {
      toast.success(
        `Transfer of $${amount} to ${selectedContact.name} initiated.`
      );
      setAmount("");
      setSelectedContact(null);
    }
  };

  // Scroll the container to the right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Scroll by 200px to the right
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  return (
    <>
      <div className="flex items-center mb-6 mt-4">
        {/* Left Arrow (if you want to add a left arrow as well) */}
        <div
          onClick={() =>
            scrollContainerRef.current.scrollBy({
              left: -200,
              behavior: "smooth",
            })
          }
          className="cursor-pointer text-[#232323] w-9 h-9 flex justify-center items-center bg-white rounded-full shadow-md mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        {/* Contact List with Horizontal Scrolling */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar"
        >
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`text-center p-2 cursor-pointer ${
                selectedContact?.id === contact.id ? "font-extrabold" : ""
              }`}
              onClick={() => handleContactSelect(contact)}
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="w-14 h-14 rounded-full object-cover mb-2 mx-auto"
              />
              <div className="text-[16px] text-[#232323] font-400 whitespace-nowrap">
                {contact.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">{contact.role}</div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={handleScrollRight}
          className="cursor-pointer text-[#232323] w-9 h-9 flex justify-center items-center bg-white rounded-full shadow-md ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-4 mb-6 mt-4">
        <div className="font-normal text-[#718EBF] text-nowrap">
          Write Amount
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-[#EDF1F7] flex items-center rounded-[25px] h-12 w-auto">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="p-2 bg-transparent border-none focus:outline-none focus:ring-0 text-[#718EBF] tranparent-input flex-grow w-full  lg:w-full"
            />
            <button
              onClick={handleSend}
              className="bg-[#232323] text-white pl-6 pr-6 flex items-center justify-center shadow-[4px_4px_18px_-2px_#E7E4E8CC] rounded-[25px] w-auto h-12 cursor-pointer gap-2"
            >
              <span>Send</span>
              <img
                src={"/images/SendIcon.svg"}
                alt="Send Icon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickTransfer;
