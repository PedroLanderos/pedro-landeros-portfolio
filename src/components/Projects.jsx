import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={300}
                height={300}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-lg font-semibold">{project.title}</h6>
              <p className="mb-4 text-lg text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 text-lg rounded-none bg-slate-950 px-2 py-1 font-medium text-teal-500"
                >
                  {tech}
                </span>
              ))}
              <div className="flex justify-start mt-4">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full shadow-lg focus:ring-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: 'auto' }}
                >
                  <FaExternalLinkAlt className="mr-2" /> View Project
                </motion.a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
