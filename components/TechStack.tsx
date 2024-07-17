import React from 'react';
import { companies, technologies } from '@/data';


const TechStack: React.FC = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading md:mb-14">
        My{' '} 
        <span className="text-purple">Tech Stack</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
        {technologies.map(({id, img, name}) => (
            <div key={id} className='relative border border-white/[.2] rounded-full bg-white'>
                <img
                  src={img}
                  alt={name}
                  className="md:w-24 w-20"
                />
            </div>
      /* <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
        {companies.map(({id, img, name, nameImg}) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                <img
                  src={img}
                  alt={name}
                  className="md:w-10 w-5"
                />
                <img
                  src={nameImg}
                  alt={name}
                  className="md:w-24 w-20"
                />
            </div> */
        ))}

      </div>
    </div>
  );
};

export default TechStack;
