import react from "react";
import { useState } from "react";
import styles from "./Expense.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function Input(props) {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  const nameInputValue = (e) => {
    setNameInput(e.target.value);
  };

  const ageInputValue = (e) => {
    setAgeInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if(+ageInput < 1){
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }
    props.onAddUser(nameInput, ageInput);
    setNameInput("");
    setAgeInput("");
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={nameInputValue}
          value={nameInput}
        />
        <label htmlFor="username">Age (Years)</label>
        <input
          id="age"
          onChange={ageInputValue}
          value={ageInput}
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
}
export default Input;
