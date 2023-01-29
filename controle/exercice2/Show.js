export default function Show({results}){
    return <>
    {results.length === 0 ? 'Aucun resultat trouvé' : 
    <table>
        <thead><tr>
        <th>Nom</th>
        <th>Preom</th>
        <th>Age</th>
        <th>Filiere</th>
        </tr></thead>
        {results.map((stagiaire,index)=>{
            return <tbody key={index}><tr >
                <td>{stagiaire.nom}</td>
                <td>{stagiaire.prenom}</td>
                <td>{stagiaire.age}</td>
                <td>{stagiaire.filiere}</td>
            </tr></tbody>
        })}
    </table>
    }
    </>
}