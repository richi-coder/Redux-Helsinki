import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import { createNote, toggleImportanceOf } from "./reducers/noteReducer";

function App() {
  return (
    <div className="App">
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
