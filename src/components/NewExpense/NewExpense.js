import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editingForm, setEditingForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditingForm(false);
  };

  const editFormHandler = () => {
    setEditingForm(true);
  };

  const stopEditingHandler = () => {
    setEditingForm(false);
  };
  return (
    <div className="new-expense">
      {!editingForm && (
        <button onClick={editFormHandler}>Add New Expense</button>
      )}
      {editingForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
