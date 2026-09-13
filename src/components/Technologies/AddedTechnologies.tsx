import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type{ techType } from '../../types/techtype';

interface AddedTechnologiesProps{
    addedTechnologies : techType[];
      setAddedTechnologies: Dispatch<SetStateAction<techType[]>>
}

const AddedTechnologies = ({addedTechnologies, setAddedTechnologies}: AddedTechnologiesProps) => {
    return (
        <div>
            
        </div>
    );
};

export default AddedTechnologies;