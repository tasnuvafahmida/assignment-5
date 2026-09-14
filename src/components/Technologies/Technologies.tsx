import {use,useState} from 'react';
import type { techType } from '../../types/techtype';
import AvailableTech from './AvailableTech';


interface TechProps{
    techPromise: Promise<techType[]>;
}
const Technologies = ({techPromise}:TechProps) => {
    const technologies = use(techPromise);
    const [addedTechnologies, setAddedTechnologies] = useState<techType[]>([])


    return  ( <div>
            <div className="mt-20 lg:mt-28 container mx-auto px-4 lg:pl-28">
            <p className="text-3xl md:text-[36px] font-bold"> Explore the <span className="text-[36px] text-transparent bg-clip-text font-extrabold " style={{backgroundImage: "var(--gradient)" }}> Technologies</span> </p>
            <p className="text-[18px] text-[#475569]">Pick one technology per category to build your ideal stack.</p> </div>
            <AvailableTech technologies ={technologies} addedTechnologies={addedTechnologies} setAddedTechnologies= {setAddedTechnologies} />
        </div>
       );
};

export default Technologies;