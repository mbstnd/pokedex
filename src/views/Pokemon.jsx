import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import Card from "../components/Card.jsx"

const Pokemon = ()=> {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res)=> res.json())
        .then ((json)=> {
            setPokemon(json)
            setTimeout(()=>{
            setLoading(false)
            }, 2000)
        })
        .catch((e)=> console.log(e)) 
    }, [])

    return (
        <main>
            { loading ? <p>Cargando ...</p> : <Card pokemon={pokemon}></Card> }
        </main>
    )

}

export default Pokemon