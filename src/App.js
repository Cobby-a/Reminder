import Persons from "./Persons";
import { data } from "./data";


function App() {
  return (
    <main>
        <Persons people={data}/>
    </main>
  );
}

export default App;
