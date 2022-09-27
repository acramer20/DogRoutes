import React from 'react';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
import {useParams} from 'react-router-dom';
import DogDetails from "./DogDetails";

function FilterDogDetails({doggos}) {
    const {name} = useParams();

    if (name) {
        const currentDog = doggos.find(
            doggo => doggo.name.toLowerCase() === name.toLowerCase()
        );
        return <DogDetails doggo={currentDog} />;
    }

    return null;
}

export default FilterDogDetails;