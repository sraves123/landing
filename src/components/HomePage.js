import React, { useState } from "react";
import { motion } from "framer-motion";
import MultiStepRegistrationForm from "./MultiStepRegistrationForm";
import thanksImg from "../images/thanku.jpg";
// import bgImg from "../images/pic3.jpg";
// import bgImg1 from "../images/pic4.jpg";
// import bgImgpic from "../images/bgImgpic.jpg";
import "./HomePage.css";

const HomePage = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleStartSurvey = () => setShowSurvey(true);
  const handleFormSubmit = () => {
    setShowSurvey(false);
    setShowThankYou(true);
  };

  return (
    <>
      {!showThankYou ? (
        <>
          {!showSurvey ? (
            <div className="bg-black relative h-screen flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <div className="zigzag-background" />
              </div>
              <motion.div
                className="bg-gray-400 bg-opacity-0 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl w-full z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 text-center">
                  Welcome to Our Genetic Testing Lab
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-black mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  onClick={handleStartSurvey}
                  // className="w-full sm:w-auto md:m-4 px-4 py-2 sm:bg-opacity-0 bg-opacity-0 bg-cyan-400 text-white rounded-md hover:bg-cyan-700 transition-colors duration-200"
                  className=" sm:w-auto md:m-4 sm:bg-opacity-0 bg-opacity-0  text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Start Survey
                </button>
              </motion.div>
            </div>


             // <div className="bg-black relative h-screen flex flex-col items-center justify-center overflow-hidden">
            //   <div className="absolute inset-0">
            //     <div
            //       className="zigzag-background"
            //       // style={{
            //       //   backgroundImage: `url(${bgImg})`,
            //       //   backgroundSize: "cover",
            //       //   backgroundRepeat: "no-repeat",
            //       //   backgroundPosition: "center",
            //       //   height: "100vh",
            //       //   width: "100%",
            //       //   position: "relative",
            //       // }}
            //     />
            //   </div>
            //   <motion.div
            //     className="bg-gray-400 bg-opacity-0 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl w-full z-10"
            //     initial={{ opacity: 0, scale: 0.5 }}
            //     animate={{ opacity: 1, scale: 1 }}
            //     transition={{
            //       duration: 0.3,
            //       ease: [0, 0.71, 0.2, 1.01],
            //     }}
            //   >
            //     <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 text-center">
            //       Welcome to Our Genetic Testing Lab
            //     </h1>
            //     <p className="text-base sm:text-lg lg:text-xl text-black mb-4">
            //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            //       do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            //     </p>
            //     <button
            //       onClick={handleStartSurvey}
            //       // className="w-full sm:w-auto md:m-4 px-4 py-2 sm:bg-opacity-0 bg-opacity-0 bg-cyan-400 text-white rounded-md hover:bg-cyan-700 transition-colors duration-200"
            //       className=" sm:w-auto md:m-4 sm:bg-opacity-0 bg-opacity-0  text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            //     >
            //       Start Survey
            //     </button>
            //   </motion.div>
            // </div>



            // <div
            //   style={{
            //     backgroundImage: `url(${bgImgpic})`,
            //     backgroundSize: "cover",
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center",
            //     height: "100vh",
            //     width: "100%",
            //     display: "flex", // Use flexbox
            //     justifyContent: "flex-end", // Align items to the right
            //     alignItems: "center", // Center items vertically
            //     padding: "0 20px", // Optional: add some padding on the sides
            //   }}
            // >
            //   <motion.div
            //     className="bg-gray-400 bg-opacity-0 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl w-full z-10"
            //     initial={{ opacity: 0, scale: 0.5 }}
            //     animate={{ opacity: 1, scale: 1 }}
            //     transition={{
            //       duration: 0.3,
            //       ease: [0, 0.71, 0.2, 1.01],
            //     }}
            //   >
            //     <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 text-center">
            //       Welcome to Our Genetic Testing Lab
            //     </h1>
            //     <p className="text-base sm:text-lg lg:text-xl text-black mb-4">
            //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            //       do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            //     </p>
            //     <button
            //       onClick={handleStartSurvey}
            //       className="sm:w-auto md:m-4 sm:bg-opacity-0 bg-opacity-0 text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            //     >
            //       Start Survey
            //     </button>
            //   </motion.div>
            // </div>
            // <div
            //   className="bg-cover bg-no-repeat bg-center h-screen w-full"
            //   style={{ backgroundImage: `url(${bgImgpic})` }}
            // >
            //   <div className="flex items-center justify-end h-full px-4">
            //     {" "}
            //     {/* Flex container */}
            //     <motion.div
            //       className="bg-gray-400 bg-opacity-0 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl w-full z-10"
            //       initial={{ opacity: 0, scale: 0.5 }}
            //       animate={{ opacity: 1, scale: 1 }}
            //       transition={{
            //         duration: 0.3,
            //         ease: [0, 0.71, 0.2, 1.01],
            //       }}
            //     >
            //       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 text-center">
            //         Welcome to Our Genetic Testing Lab
            //       </h1>
            //       <p className="text-base sm:text-lg lg:text-xl text-black mb-4">
            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            //         do eiusmod tempor incididunt ut labore et dolore magna
            //         aliqua.
            //       </p>
            //       <button
            //         onClick={handleStartSurvey}
            //         className="sm:w-auto md:m-4 sm:bg-opacity-0 bg-opacity-0 text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            //       >
            //         Start Survey
            //       </button>
            //     </motion.div>
            //   </div>
            // </div>
            // <div
            //   className="bg-cover bg-no-repeat bg-center h-screen w-full"
            //   style={{ backgroundImage: `url(${bgImgpic})` }}
            // >
            //   <div className="flex items-center justify-end h-full px-4">
            //     {" "}
            //     {/* Flex container */}
            //     <motion.div
            //       className="bg-white bg-opacity-0 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl w-full z-10"
            //       initial={{ opacity: 0, scale: 0.5 }}
            //       animate={{ opacity: 1, scale: 1 }}
            //       transition={{
            //         duration: 0.3,
            //         ease: [0, 0.71, 0.2, 1.01],
            //       }}
            //     >
            //       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 text-center">
            //         Welcome to Our Genetic Testing Lab
            //       </h1>
            //       <p className="text-base sm:text-lg lg:text-xl text-black mb-4 text-center">
            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            //         do eiusmod tempor incididunt ut labore et dolore magna
            //         aliqua.
            //       </p>
            //       <div className="flex justify-center">
            //         <button
            //           onClick={handleStartSurvey}
            //           className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            //         >
            //           Start Survey
            //         </button>
            //       </div>
            //     </motion.div>
            //   </div>
            // </div>



            // <div
            //   className="bg-cover bg-no-repeat bg-center h-screen w-full"
            //   style={{ backgroundImage: `url(${bgImg1})` }}
            // >
            //   <div className="flex items-center justify-start h-full px-4">
            //     {" "}
            //     {/* Flex container */}
            //     <motion.div
            //       className="bg-white bg-opacity-0 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl w-full z-10"
            //       initial={{ opacity: 0, scale: 0.5 }}
            //       animate={{ opacity: 1, scale: 1 }}
            //       transition={{
            //         duration: 0.3,
            //         ease: [0, 0.71, 0.2, 1.01],
            //       }}
            //     >
            //       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 text-center">
            //         Welcome to Our Genetic Testing Lab
            //       </h1>
            //       <p className="text-base sm:text-lg lg:text-xl text-black mb-4 text-center">
            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            //         do eiusmod tempor incididunt ut labore et dolore magna
            //         aliqua.
            //       </p>
            //       <div className="flex justify-center">
            //         <button
            //           onClick={handleStartSurvey}
            //           className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            //         >
            //           Start Survey
            //         </button>
            //       </div>
            //     </motion.div>
            //   </div>
            // </div>

            
          ) : (
            <MultiStepRegistrationForm onFormSubmit={handleFormSubmit} />
          )}
        </>
      ) : (
        <div className="h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-wave md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 hidden md:block animate-wave" />

          {/* Content Container */}
          <motion.div
            className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg w-[75%] sm:w-[65%] h-[75%] flex flex-col items-center justify-center relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${thanksImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <motion.h2
              className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank You!
            </motion.h2> */}
            {/* <motion.p
              className="text-base sm:text-lg lg:text-xl text-center mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your submission has been received. We will get back to you soon.
            </motion.p> */}
            {/* <motion.button
              onClick={() => setShowThankYou(false)}
              className="relative w-full sm:w-auto px-4 py-2 mt-60 text-white bg-blue-600 rounded-md transition-colors duration-200 focus:outline-none hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
            >
              Close
            </motion.button> */}
            {/* <motion.button
              onClick={() => setShowThankYou(false)}
              className="relative w-full sm:w-auto px-4 py-2 mt-60 text-white bg-blue-600 rounded-md transition-colors duration-200 focus:outline-none hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} // Scale down on tap
              transition={{ type: "spring", stiffness: 300 }} // Smooth transition
            >
              Close
            </motion.button> */}
            <button
              onClick={() => setShowThankYou(false)}
              className="relative w-full sm:w-auto mt-80 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-black dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default HomePage;
