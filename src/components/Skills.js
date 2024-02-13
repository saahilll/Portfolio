import React from "react";

const Skills = () => {
  return (
    <div className="mt-44 mb-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl mb:mb-16">
        Skills
      </h2>
      <div className="grid grid-cols-4 gap-x-2 gap-y-8 w-full text-primary dark:text-primaryDark capitalize font-bold text-2xl sm:text-xl xs:text-lg sm:grid-cols-1 md:grid-cols-3">
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          Python
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          SQL
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          Tableau
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark relative">
          AWS
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          HTML
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          CSS
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-lg py-8 border-2 border-primary dark:border-primaryDark">
          JavaScript
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          Next.js
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          Tailwind CSS
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          GIT
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          Numpy
        </div>
        <div className="text-center z-30 rounded-lg backdrop-blur-md py-8 border-2 border-primary dark:border-primaryDark">
          Pandas
        </div>
      </div>
    </div>
  );
};

export default Skills;
