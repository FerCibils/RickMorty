import ButtonsHome from '../../components/ButtonsHome/ButtonsHome'

import './home.css'


export default function Home() {
    return(
        <header class="welcome w-100 d-grid container-fluid">
        <div class="containerHome align-self-center">
            <div className='container fondo-blanco p-5'>
                <div class="container-text">
                    <h1 class="text t-1 text-center">Proyect Rick & Morty</h1>
                    <h2 class="text t-2 text-center mt-4">Welcome to Rick & Morty Proyect!</h2>  
                    <p class="text t-3 text-center">This proyect was made for practising React and to made a functional website. </p> 

                    <p class="text t-4 text-center mt-4">In this website you can know information of the characters of this animated series. </p> 
                    
                    <p class="text t-6 text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                    </p>     
                    <p class="text t-5 text-center">Lets go!</p> 
                    <div class="containerbutton d-flex justify-content-center">
                    <a alt="Go to Characters" class="button-wel b1 btn btn-secondary" href="/Characters">Characters</a>
                    <a alt="Go to Contact" class="button-wel b2 btn btn-secondary" href="/Contact">Contact</a>        
                    </div>
                    </div>  

                </div>        
        </div>
        </header>

    )
}