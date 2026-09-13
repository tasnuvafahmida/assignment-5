import { useState, type Dispatch, type SetStateAction } from 'react';
import type { techType } from '../types/techtype';
import { GoStarFill } from 'react-icons/go';
import { toast } from 'react-toastify';
const TechCard = ({ technology, addedTotal, setAddedTotal, addedTechnologies, setAddedTechnologies }: {
    technology: techType, addedTotal: number, setAddedTotal: Dispatch<SetStateAction<number>>, addedTechnologies: techType[];
    setAddedTechnologies: Dispatch<SetStateAction<techType[]>>
}) => {
    const isAdded = addedTechnologies.some(
        (tech) => tech.name === technology.name
    );

    const handleAddTech = () => {

        if (isAdded) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setAddedTechnologies((prev) => [
            ...prev,
            technology,
        ]);

        toast.success(`${technology.name} added to your stack!`);

    };


    return (
        <div >
            <div className="card bg-base-100  shadow-sm  rounded-2xl  p-5 h-90">
                <figure className="justify-between p-3">
                    <img className="w-7 h-7 mx-3"
                        src={technology.icon} />
                    <div className="badge badge-secondary">{technology.badge}</div>
                </figure>
                <div className="card-body justify-between">
                    <h2 className="card-title">
                        {technology.name}

                    </h2>
                    <p>{technology.description}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline bg-[#F1F5F9]">{technology.category}</div>
                        <div >{technology.difficulty}</div>
                        <div className="flex justify-around items-center"> <GoStarFill color="orange" />
                            {technology.rating}</div>
                    </div>
                    <div className="card-actions justify-centre mt-2">
                        <button
                            onClick={handleAddTech}
                            disabled={isAdded}
                            className="btn btn-wide bg-[#0A0F1D] text-white w-full h-9 rounded-lg"
                        >
                            {isAdded
                                ? "✓ Added to Stack"
                                : "Add to Stack"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TechCard;