import {use, type Dispatch, type SetStateAction,useState} from 'react';
import type { techType } from '../../types/techtype';
import AvailableTech from './AvailableTech';


interface TechProps{
    techPromise: Promise<techType[]>; addedTotal:number; setAddedTotal : Dispatch<SetStateAction<number>>
}
const Technologies = ({techPromise, addedTotal, setAddedTotal}:TechProps) => {
    const technologies = use(techPromise);
    const [addedTechnologies, setAddedTechnologies] = useState<techType[]>([])


    return  ( <div>
            <div className="mt-28 container mx-auto pl-28">
            <p className="text-[36px] font-bold"> Explore the <span className="text-[36px] text-transparent bg-clip-text font-extrabold " style={{backgroundImage: "var(--gradient)" }}> Technologies</span> </p>
            <p className="text-[18px] text-[#475569]">Pick one technology per category to build your ideal stack.</p> </div>
            <AvailableTech technologies ={technologies} addedTotal= {addedTotal} setAddedTotal ={setAddedTotal} addedTechnologies={addedTechnologies} setAddedTechnologies= {setAddedTechnologies} />
        </div>
       );
};

export default Technologies;