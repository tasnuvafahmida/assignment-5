import React from 'react';
import TechCard from '../TechCard';
import type { techType } from '../../types/techtype';
import Sidebar from '../Sidebar';



const AvailableTechs = ({ technologies }) => {

    return (
        <div className='grid grid-cols-12 container mx-auto'>
            <div className="grid grid-cols-3 col-span-9 gap-4 p-4 ml-16 mt-6"> {
            technologies.map((technology: techType, ind: number) => {
                return <TechCard key={ind} technology={technology} />;
            })} </div>
          <div className='col-span-3 p-4 mt-6' ><Sidebar /></div>
        
        </div>)
};

export default AvailableTechs;