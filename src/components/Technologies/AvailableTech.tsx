import { type Dispatch, type SetStateAction } from 'react';
import TechCard from '../TechCard';
import type { techType } from '../../types/techtype';
import Sidebar from '../Sidebar';

interface AvailableTechProps {
    technologies: techType[];
    addedTechnologies: techType[];
    setAddedTechnologies: Dispatch<SetStateAction<techType[]>>
}


const AvailableTechs = ({ technologies, addedTechnologies, setAddedTechnologies }: AvailableTechProps) => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 container mx-auto px-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-9 gap-4 p-4"> {
                technologies.map((technology: techType) => {
                    return <TechCard key={technology.name}
                        technology={technology} 
                        addedTechnologies={addedTechnologies}
                        setAddedTechnologies={setAddedTechnologies} />;
                })} </div>
            <div className='lg:col-span-3 p-4 mt-6' ><Sidebar addedTechnologies={addedTechnologies} setAddedTechnologies={setAddedTechnologies} /></div>

        </div>)
};

export default AvailableTechs;
