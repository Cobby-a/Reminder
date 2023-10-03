import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined'

const Persons = ({people}) => {
    const [persons, setPersons] = useState(people)
    const removeMe = (id) =>{
        let remove = persons.filter((person)=> person.id !== id)
        setPersons(remove)
    }
    const clear = () =>{
        setPersons([]);
      }
    
    let w = "birthdays"
    if(persons.length === 1){
        w = "birthday"
    }
    return(
        <section>
        <h3>{persons.length} {w} today</h3>
        {persons.map((person)=>{
            const {id, pic, name, age} = person
            return(
                <article key={id}>
                    <div className="person">
                    <img src={pic} alt="no-pic" />
                    <div className=".pp">
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                    </div>
                    <DeleteForeverIcon style={{fontSize: "1.8rem", color:"red", cursor:"pointer"}} onClick={()=>removeMe(id)}></DeleteForeverIcon>
                </article>
            )
        })}
        <button type="button" className="btn" onClick={clear}>Clear Me</button>
        </section>
    )
}

export default Persons;