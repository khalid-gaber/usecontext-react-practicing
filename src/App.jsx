import './App.css';
import Info from './context/info-1';
import {useState} from "react"
import UserContext from './context/usercontext';


function App() {
 
  const [user, onClick] = useState("hello")

  return (
    <div className="App">
      <UserContext.Provider  value={{user, onClick}}>
        <Info />
      </UserContext.Provider>
    </div>
  );
}

export default App;
