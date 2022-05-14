import react,{ useState } from "react";
import Expense from "./components/expense/Expense";
import UserList from "./components/expense/UserList";


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    });
  }
  return (
    <div>
      <Expense onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
