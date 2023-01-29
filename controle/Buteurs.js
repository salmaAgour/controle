const Buteurs = [
    {
        'id': 1,
        'player': { 'player_id': 19779, 'player_name': 'Karim Benzema' },
        'teams': 'Real Madrid',
        'goals': { 'home': 7, 'away': 7 },
    },
    {
        'id': 2,
        'player': { 'player_id': 4934, 'player_name': 'Hakim Ziyach' },
        'teams': 'Chelsea',
        'goals': { 'home': 9, 'away': 4 },
    },
];

export default function ComposantButeurs() {
    var buteur = Buteurs.find((buteur) => { return buteur.player.player_name === 'Karim Benzema' })

    var buts = buteur.goals.home + buteur.goals.away
    const q1 = buts;

    //-----------------------------------------------------
    var exterieur = (Buteurs.filter((buteur) => {
        return buteur.goals.away > 3
    })).map((buteur) => buteur.player.player_name)

    const q2 = exterieur.length

    //-----------------------------------------------------
    var butsHome = Buteurs.map((buteur) => buteur.goals.home)
    var max = butsHome.reduce((buts) => Math.max(buts))
    const q3 = max;

    //-----------------------------------------------------
    var butsAway = Buteurs.map((buteur) => buteur.goals.away)
    var sum = butsAway.reduce((but, total) => but + total)
    const q4 = sum;

    //-----------------------------------------------------
    const player = {
        'id': 21,
        'player': { 'player_id': 500, 'player_name': 'Halland' },
        'team': 'Manchester City',
        'goals': { 'home': 9, 'away': 9 },
    }
    const Buteurs2 = [...Buteurs, player]

    return <>
        <b>Question 1</b>
        <p> le nombre de buts marqués par le joueur Karim Benzema est : {q1}</p>

        <b>Question 2</b>
        <p>le nombre les noms des joueurs qui ont marqué plus que 3 buts à l'extérieur 'away' est : {q2} </p>

        <b>Question 3</b>
        <p>le plus grand nombre de buts marqués à l'intérieur 'home' est : {q3}</p>

        <b>Question 4</b>
        <p>la somme des buts qui sont marqués à l'extérieur 'away' est : {q4}</p>

        <b>Question 5</b>
        <p>Creation de nouveau tableau Buteurs2 : </p>{Buteurs2.map((buteur, index) => { return <pre key={index}>{JSON.stringify(buteur)}</pre> })}
    </>
}