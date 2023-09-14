import React from "react";
const Persons = ({people}) => {
    return(
        <>
        {people.map((persons)=>{
            const {id, pic, name, age} = persons
            return(
                <article key={id}>
                    <img src={pic} alt="no-pic" />
                    <div>
                        <h4>{name}</h4>
                        <p>{age}</p>
                    </div>
                </article>
            )
        })}
        </>
    )
}

export default Persons;