import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../Components/GroupCard';
import { Typewriter } from 'react-simple-typewriter';

const AllGroup = () => {
    const groups=useLoaderData();
   
    
    return (
        <div className='lg:p-20'>
            <h1 className='text-4xl mt-5 text-indigo-600  font-bold text-center pb-5'> <Typewriter
    cursor
    cursorBlinking
    delaySpeed={1000}
    deleteSpeed={25}
    loop={0}
    typeSpeed={75}
    words={[
      'All Group'
    ]}
  /></h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    groups.map(group => <GroupCard key={group._id} group={group}></GroupCard>)
                }
            </div>
        </div>
    );
};

export default AllGroup;