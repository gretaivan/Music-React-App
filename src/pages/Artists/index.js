import React from 'react'
import { Albums } from '../../components'
import { Header} from '../../layout'


const Artists = () => {

 return (
    <>
        <Header />
        <h2>Artists</h2> 
        <p class="musictype">Classical and Hiphop</p>
        <p> Sofiane Pamart is a French pianist, based in Paris and originally from Hellemmes in the suburbs of Lille. He is known to the French public for breaking the elitist codes of classical piano. A gold medallist at the Conservatoire de Lille, he took a different track to the typical classical music path.</p>
        <Albums/>
        
    </>
    )
}

export default Artists