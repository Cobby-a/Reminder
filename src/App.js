import { useState } from "react";
import Persons from "./Persons";
import { data } from "./data";


function App() {
  const [persons, setPersons] = useState(data)
  const clear = () =>{
    setPersons([]);
  }
  return (
    <main>
      <section>
        <h3>{persons.length} birthdays today</h3>
        <Persons people={persons}/>
        <button type="button" className="btn" onClick={clear}>Clear Me</button>
      </section>
    </main>
  );
}

export default App;
