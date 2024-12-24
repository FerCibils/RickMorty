import './Filter.css';
export default function Filter({title,filtar}){
    
    
    return(
        <div class="filter-2 rounded-3 form-check form-switch">
            <input class="input-form form-check-input" id={title} type='checkbox' onClick={(event)=>filtar(event.target)} value={title}/>
            <label class="form-check-label" htmlFor={title}>{title}</label>
        </div>
    )
}
