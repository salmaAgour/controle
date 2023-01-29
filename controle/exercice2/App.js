import { useState } from "react"
import Show from "./Show"
import './App.css'

export default function App(){

    const [filiere,setFiliere]=useState('')
    const [results,setResults]=useState([])
    const [hide,setHide]=useState(true)

    const JsonArray=[{
    nom:'ALAMI',
    prenom:'Rami',
    age:'19',
    filiere:'Dev',
},
{
    nom:'KAMALI',
    prenom:'Ali',
    age:'20',
    filiere:'Dev',
},
{
    nom:'BENNANI',
    prenom:'Karima',
    age:'21',
    filiere:'Gestion',
},
{
    nom:'ALAMI',
    prenom:'Sanae',
    age:'22',
    filiere:'Infra',
},] 

function myFilter(filiere){
    setResults(JsonArray.filter((stagiaire)=>stagiaire.filiere.toUpperCase() === filiere))
    setHide(false)
}

return <div className="container">
    <h2>Chercher une filiere</h2>
    <label>Entrez une filiere :
    <input value={filiere} onChange={(e)=>setFiliere(e.target.value.toUpperCase())}/>
    </label>
    <button onClick={()=>{filiere.length>0 && myFilter(filiere)}}>Chercher</button>
    {!hide ?<Show results={results}/>:null}
</div >
}