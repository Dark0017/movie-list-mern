// /* This example requires Tailwind CSS v2.0+ */

// const Pagination = () => {
//   return (
//     <div className="w-full mt-auto mb-4">
//       <div className="flex justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
//         <div className="flex justify-between flex-1 sm:hidden">
//           <a
//             href="#"
//             className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Previous
//           </a>
//           <a
//             href="#"
//             className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Next
//           </a>
//         </div>
//         <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//           <div>
//             <p className="text-sm text-gray-700">
//               Showing <span className="font-medium">1</span> to{" "}
//               <span className="font-medium">10</span> of{" "}
//               <span className="font-medium">97</span> results
//             </p>
//           </div>
//           <div>
//             <select name="nItems">
//               <option value="10">10</option>
//               <option value="25">25</option>
//               <option value="50">50</option>
//               <option value="100">100</option>
//             </select>
//           </div>
//           <div>
//             <nav
//               className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
//               aria-label="Pagination"
//             >
//               <a
//                 href="#"
//                 className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
//               >
//                 <span className="sr-only">Previous</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5"
//                   aria-hidden="true"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//               {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
//               <a
//                 href="#"
//                 aria-current="page"
//                 className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-500 bg-indigo-50"
//               >
//                 1
//               </a>
//               <a
//                 href="#"
//                 className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
//               >
//                 2
//               </a>
//               <a
//                 href="#"
//                 className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 md:inline-flex"
//               >
//                 3
//               </a>
//               <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
//                 ...
//               </span>
//               <a
//                 href="#"
//                 className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 md:inline-flex"
//               >
//                 8
//               </a>
//               <a
//                 href="#"
//                 className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
//               >
//                 9
//               </a>
//               <a
//                 href="#"
//                 className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
//               >
//                 10
//               </a>
//               <a
//                 href="#"
//                 className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
//               >
//                 <span className="sr-only">Next</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
