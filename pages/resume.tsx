import Bar from "../components/Bar";
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations'
import { languages, tools } from "../data";

const Resume = () => {

  const variants = {
    hidden: {
       opacity: 0,
    },
    visible: {
       opacity: 1,
       transition: {
          delay: 0.1,
          duration: 0.1,
       },
    },
    exit: {
       opacity: 0,
       transition: {
          delay: 0.1,
          ease: 'easeInOut',
       },
    },
 }

  return (
    <motion.div className="px-6 py-2" 
    variants={variants}
    initial='initial'
    animate='animate'
    exit='exit'>
     
      <motion.div className="grid gap-6 md:grid-cols-2">
      <motion.div variants={fadeInUp} animate='animate' initial='initial'>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Amity University Kolkata (2018-2022)</p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Amity University Kolkata.
            </p>
          </div>
          </motion.div>
          <motion.div variants={fadeInUp} animate='animate' initial='initial'>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Intern Software Developer @</h5>
            <p className="font-semibold">Agitechavids</p>
            <p className="my-3">I am learning new things.</p>
          </div>
          </motion.div>
         </motion.div>

      
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl pb-3 font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl pb-3 font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
      </motion.div>
  );
};

export default Resume;