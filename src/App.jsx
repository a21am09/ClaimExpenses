import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="appContainer">
      <header className="appHeader">
        <h1>Expense Claims</h1>
      </header> 
      <p>Enter details of your expense into the form to begin your claim.</p>
      <form onSubmit={(e) => {e.preventDefault()}} noValidate>
        <div className="formGroup">
          <label htmlFor="expenseType">Expense type</label>
          <select
            id="expenseType"
            name="type"
            >
              <option value="mileage">Mileage</option>
              <option value="accommodation">Accommodation</option>
              <option value="Sustenance">Sustenance</option>
              <option value="Public transport">Public transport</option>
              <option value="Other">Other</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="expenseDescription">Description</label>
          <textarea id="expenseDescription" name="description"rows="2" columns="50" placeholder="Enter a description of your expense" />
        </div>
        <div className="formGroup">
          <label htmlFor="expenseAmount">Amount</label>
          <input id="expenseAmount" name="amount" type="number" placeholder="Enter the amount of your expense" />
        </div>
        <div className="formGroup">
          <label htmlFor="expenseDate">Date</label>
          <input id="expenseDate" name="date" type="date" />
        </div>
      </form>

    </main>
  )
}

export default App
