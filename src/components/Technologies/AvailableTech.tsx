import React from 'react';
import TechCard from '../TechCard';
import type { techType } from '../../types/techtype';



const AvailableTechs = ({ technologies }) => {

    return (<div className=" grid grid-cols-3 gap-4 max-w-7xl  mx-auto my-4"> {
        technologies.map((technology: techType, ind : number) => {
            return <TechCard key={ind} technology={technology} />;
        })}
    </div>
    )
};

export default AvailableTechs;