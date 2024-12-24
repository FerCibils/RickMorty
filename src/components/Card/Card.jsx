import { useState } from "react"
import './Card.css';

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)
    return(
         <div className='d-flex gap-2 tarjeta container-card'>
            <div class="w-75 flex-column justify-content-center">
                <img src={personaje.image}/>
                <h2 className="nombrepj t-title card-title text-center">{personaje.name}</h2>
                <button 
                onClick={()=>setOcultar(false)} 
                className={ocultar?"btn d-block b-card btn btn-active btn-x-md d-flex align-self-end":"d-none"}>Know More..</button>            
            </div>
            { ocultar ?'':
                <div className="px-5 py-2" >
                <button class="btn-list border border-0 m-2 rounded-3 d-flex justify-content-center" onClick={()=>setOcultar(true)}>X</button>
                    <ul class="list list-group">
                        <li class="container-info container-item p-3 d-flex flex-column list-group-item">
                        <p class="p-info fw-bold m-0">Character Status: {personaje.status}</p>
                        </li>
                        
                        <li class="container-info container-item p-3 d-flex flex-column list-group-item">
                        <p class="p-info fw-bold m-0">Species: {personaje.species}</p>
                        </li>
                        
                        <li class="container-info container-item p-3 d-flex flex-column list-group-item">
                        <p class="p-info fw-bold m-0">Origin: {personaje.origin.name}</p>
                        </li>
                        
                        <li class="container-info container-item p-3 d-flex flex-column list-group-item">
                        <p class="p-info fw-bold m-0">Gender: {personaje.gender}</p>
                        </li>
                    </ul>
                </div>}
        </div>
    )
}