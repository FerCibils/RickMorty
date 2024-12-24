import Navegation from '../../components/Navegation/Navegation'
import './Contact.css'

export default function Contact() {
    return(
    <main class='d-flex justify-content-center container-fluid px-0'> 
        <div class='container-fluid px-0 '>
            <Navegation pageName={"Contact"}/>

             <div class='container-contact d-flex flex-column justify-content-center aling-items-center'>
                <div className='d-flex flex-column'>
                    <h1 class='text-1 text-center'>Contact</h1>
                    <p class='text-2 text-center'>Leave us your information so we can contact you</p>
                    <form class="container-form justify-content-md-center p-4">
                        <div class='div-1 d-flex flex-column'>
                        <label class="label-form" htmlFor='name'>Name</label>
                        <input class="input-text rounded-2 p-2 border border-0" type='text' id='name'/>
                        </div>
                        <div class="div-2 d-flex flex-column">
                        <label class="label-form" htmlFor='email'>Email</label>
                        <input class="input-text rounded-2 p-2 border border-0" type="email" id='email'/>
                        </div>
                        <div class="div-3 d-flex flex-column">
                        <label class="label-form" htmlFor='message'>Message</label>
                        <textarea class="textarea rounded-2 border border-0 p-4" id='message'></textarea>
                        </div>
                        <div class="div-4 ">
                        <input class="btn-form rounded-2 border border-0" type='submit' value={"Send"}/>
                        </div>                   
                    </form>        
                </div>
            </div>
         </div>
    </main>        
    )
}
