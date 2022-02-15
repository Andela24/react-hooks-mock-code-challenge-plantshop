import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [listAllPlants, setListAllPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(listAllPlants => setListAllPlants(listAllPlants))
  }, [])

  
  const filterPlants = listAllPlants.filter(plant => plant?.name?.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage listAllPlants= {filterPlants} setListAllPlants={setListAllPlants} setSearchInput={setSearchInput}/>
    </div>
  );
}

export default App;
