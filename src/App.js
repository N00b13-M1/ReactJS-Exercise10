import React, {useState} from 'react'
import Personnage from './Components/Personnage'
import Article from './Components/Article'

export default function App() {
  
  const [data,setData] = useState({
    nom: "Foxy",
    prenom: "Jenna",
    age: 21,
    commune: "Henderson"
  })

  let rename = () => {
    setData({
      nom: "Jameson",
      age: 23,
      commune: "Vegas"
    })
  }

  const [state2] = useState([
    {marque:"audi", model: "a6"},
    {marque:"bmw", model: "m3"},
    {marque:"audi", model: "a4"},
    {marque:"bmw", model: "m5"},
    {marque:"audi", model: "a3"},
  ])

  return (
    <div>
      <Personnage info={data} button={rename
      }/>
      {
        state2.map((element,index) => {
          return(
          <Article key={index} name={element.marque}
          model={element.model} />)
        })
      }
    </div>
  )
}

