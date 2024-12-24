import './nav.css';
import {Link} from 'react-router'


export default function Navegation({pageName}) {
    return(
        <nav class='container-nav navbar navbar-expand-lg w-100'>
           <div class="container-fluid justify-content-between aling-items-center">
           <a alt="Go to Home" class=" text-decoration-none" href="/"><h1 class="t-rm navbar-brand cursor-p">Rick &amp; Morty</h1></a>
           <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="container-items nav nav-pills">
            <li class="nav-item">
                <a class="colores bc-1 nav-link text-decoration-none bc-hover" href="/Characters">Characters</a>
            </li>
            <li class="nav-item">
                <a class="colores bc-2  bc-hover nav-link text-decoration-none" href="/Contact">Contact</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
    )
}