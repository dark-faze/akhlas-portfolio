import { FunctionComponent } from "react";
import { motion } from 'framer-motion'

import { Skill } from "../type";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-3 text-white bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <motion.div
        className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-mauve-a to-mauve-b font-semibold shadow-lg"
        style={{
          width: bar_width,
        }}
        variants={{
          initial: {
             width: 0,
          },
          animate: {
             width: bar_width,
             transition: {
                duration: 0.8,
                type: 'spring',
                damping: 12,
                stiffness: 100,
             },
          },
       }}
       animate='animate'
       initial='initial'
       whileHover={{ scale: 1.02 }}>
        <Icon className="mr-3 w-5 h-5" /> {name}
        </motion.div>
      </div>
  );
};
export default Bar;