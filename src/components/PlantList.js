import React from "react";
import PlantCard from "./PlantCard";

function PlantList({listAllPlants}) {
  
  const displayPlants= listAllPlants.map(plant => {
  return <PlantCard 
  key={plant.id}
  plant={plant}
  />
})
  
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
