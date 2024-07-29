import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ip2.png";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0, opacity: 1, transition: { duration: 0.5, delay: delay }
  }
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 lg:pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Pedro Landeros
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 
                via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.a 
              href="/assets/Landeros Pedro resume.docx" 
              download="Landeros Pedro resume.docx" 
              className="mt-6 flex items-center text-lg text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full shadow-lg  focus:ring-blue-500"
              variants={container(1)}
              initial="hidden"
              animate="visible"
            >
              <FaDownload className="mr-2" /> Download resume
            </motion.a>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 text-2xl max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
          <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic} 
            alt="Pedro Landeros" 
            className="h-auto lg:h-100"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;
