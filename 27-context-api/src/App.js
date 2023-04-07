import { useState } from "react";
import UserContext from "./components/context/UserContext";
import "./App.css";
import User from "./components/User";
import ChangeUser from "./components/ChangeUser";

function App() {
  const [user, setUser] = useState("Liuba");
  return (
    <UserContext.Provider value={{user: user, setUser: setUser}}>
      <div className="App">
        <User />
        <ChangeUser/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
