import React, {useState} from "react";

function NewPlantForm( {listAllPlants, setListAllPlants}) {

  const [formData, setFormData] = useState({
    "name": "",
    "image": "",
    "price": 0,
  })

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
    })
    .then(res=> res.json())
    .then(data => {
      setListAllPlants([...listAllPlants, data])
      //cleans out form
      setFormData( 
        {"name": "",
        "image": "",
        "price": 0,})
    } )

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit= {handleSubmit}>
        <input onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type="text" name="name" placeholder="Plant name" value={formData.name}/>
        <input onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} type="text" name="image" placeholder="Image URL" value = {formData.image} />
        <input onChange={(e) => setFormData ({...formData, [e.target.name]: e.target.value})}  type="number" name="price" step="0.01" placeholder="Price" value={formData.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
