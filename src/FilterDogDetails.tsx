import React from 'react';
import { useParams } from 'react-router-dom';
import { DogsProps } from './App';
import DogDetails from './DogDetails';

interface ParamTypes {
  name: string
}

function FilterDogDetails({dogs}: DogsProps) {
  const {name} = useParams<ParamTypes>();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={currentDog} />;
  }
  
  return null;
}

export default FilterDogDetails;