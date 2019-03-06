import React, { useState, useEffect } from 'react';

export default function Recipe() {
  const [newRecipe, setNewRecipe] = useState({
    "name": "",
    "recipe": "",
  })

  useEffect(() => {
    fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setNewRecipe(data.base_layer)
      })
  }, [])


  console.log(newRecipe)
  return (
    <div>
      <h2>{newRecipe.name} Tacos</h2>
      {/* <p>{newRecipe.recipe.split("----------------------------------------------")}</p> */}
      <p>{newRecipe.recipe}</p>
      <p><a href={newRecipe.url} target="_blank">Link To Recipe</a></p>
    </div>
  )


}