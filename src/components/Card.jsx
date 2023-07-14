import React from 'react';
import { motion } from 'framer-motion';
const Card = ({ work }) => {
  const { name, description, image, live, github } = work;
  return (
    <motion.div
      initial={'hidden'}
      whileInView={'visible'}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <div className="bg-[#5b75c2] max-w-2xl ">
        {/* img */}
        <img
          className="object-cover w-full max-h-[300px]"
          alt={name}
          src={image}
        ></img>

        {/* title, desc & action */}
        <div className="flex flex-col gap-4 p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p className="font-semibold">{name}</p>

          <div className="flex sm:items-start flex-col gap-3.5">
            <p className="text-sm  font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div className="flex flex-row gap-4">
              <a href={live}>
                <button className=" rounded-md px-3 py-1.5 text-sm border">
                  Demo
                </button>
              </a>
              <a href={github}>
                <button className=" rounded-md px-3 py-1.5 text-sm border">
                  Git Repo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
