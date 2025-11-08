import { useState } from "react";
function Student(props)
function App(){
  const [marks, setMarks]=useState(85);
  return(
    <div>
      <Student name="Hemasri" score={marks} />
      <button onClick={() => setMarks(marks + 5)}
      >Increase Marks</button>
    </div>

  );
}
export default App;
