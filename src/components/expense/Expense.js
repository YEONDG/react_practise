import react from "react";
import { useState } from "react";
import styles from "./Expense.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function Input() {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const nameInputValue = (e) => {
    setNameInput(e.target.value);
  };

  const ageInputValue = (e) => {
    setAgeInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      name: nameInput,
      age: ageInput,
    };
    console.log(expenseData);
    setNameInput("");
    setAgeInput("");
  };

  return (
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
  );
}
export default Input;
