import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({listAllPlants, setListAllPlants, setSearchInput}) {
  
  return (
    <main>
      <NewPlantForm listAllPlants= {listAllPlants} setListAllPlants={setListAllPlants}/>
      <Search setSearchInput={setSearchInput}/>
      <PlantList listAllPlants= {listAllPlants} />
     
    </main>
  );
}

export default PlantPage;
