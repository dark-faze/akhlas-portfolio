import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import { AnimatePresence, motion } from 'framer-motion'
import { stagger, fadeInUp } from '../animations'
import Image from "next/image";

const animation = {
  hidden: {
     opacity: 0,
  },
  visible: {
     opacity: 1,
     transition: {
        duration: 0.3,
     },
  },
}

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-xl cursor-pointer" onClick={() => setShowDetail(true)}>
        <Image
          src={image_path}
          alt={name}
          className="transition-transform duration-500 group-hover:scale-110"
          layout="responsive"
          height="150"
          width="300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <p className="font-bold text-sm">Click to view details</p>
          </div>
        </div>
      </div>

      <p className="my-2 text-center font-medium">{name}</p>
      <AnimatePresence>
      {showDetail && (
        <motion.div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
        variants={animation}
        animate='visible'
        initial='hidden'
        exit={{
           opacity: 0,
           transition: {
              duration: 0.3,
           },
        }}>
          <motion.div
             variants={stagger}
             initial='initial'
             animate='animate'>
             <motion.div
                className='border-4 border-gray-100 '
                variants={fadeInUp}>
            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            </motion.div>
            <motion.div className="flex justify-center my-4 space-x-3"  variants={fadeInUp}>
              <a
                href={github_url}
                className="flex items-center px-6 py-3 space-x-2 text-lg bg-gradient-to-r from-mauve-a to-mauve-b text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-6 py-3 space-x-2 text-lg bg-gradient-to-r from-mauve-b to-mauve-a text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <AiFillProject /> <span>Project</span>
              </a>
              </motion.div>
                  </motion.div>
                  <motion.div variants={stagger}
                     initial='initial'
                     animate='animate'>
            <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
            <motion.h3 className="mb-3 font-medium"  variants={fadeInUp}>{description}</motion.h3>

            <motion.div className="flex flex-wrap mt-5 gap-2 text-sm tracking-wider" variants={fadeInUp}>
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gradient-to-r from-mauve-a/10 to-mauve-b/10 border border-mauve-b/30 rounded-full text-mauve-b font-medium"
                >
                  {tech}
                </span>
              ))}
             </motion.div>
             </motion.div>
          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-2 bg-gradient-to-r from-mauve-a to-mauve-b text-white rounded-full top-3 right-3 focus:outline-none hover:scale-110 transition-transform duration-200 shadow-lg"
          >
            <MdClose size={24} />
          </button>
          </motion.div>
      )}
      </AnimatePresence>
     </motion.div> 
  );
};

export default ProjectCard;