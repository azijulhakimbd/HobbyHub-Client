import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../Components/GroupCard';

const AllGroup = () => {
    const groups=useLoaderData();
    console.log(groups);
    
    return (
        <div className='lg:p-20'>
            <h1 className='text-4xl mt-5 font-bold text-center p-5'>All Groups</h1>
            <div className='lg:ml-50 grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    groups.map(group =><GroupCard key={group._id} group={group}></GroupCard>)
                }
            </div>
        </div>
    );
};

export default AllGroup;