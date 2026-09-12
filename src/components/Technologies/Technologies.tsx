import React, {use} from 'react';
import type { techType } from '../../types/techtype';

interface TechProps{
    techPromise: Promise<techType[]>
}
const Technologies = ({techPromise}:TechProps) => {
    const technologies = use(techPromise);
    console.log(technologies, 'technologies')
    return (
        <div>
            
        </div>
    );
};

export default Technologies;