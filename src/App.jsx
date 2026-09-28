import { useState } from 'react'
import './App.css'
import ExpenseInput from './components/expenseInput.jsx';
import ReviewExpenses from './components/reviewExpenses.jsx';
import ClaimSummary from './components/claimSummary.jsx';

function App() {

  const [currentScreen, setCurrentScreen] = useState('add');
  const [expenses, setExpenses] = useState([]);

  function addExpense(newExpense) {
    setExpenses((currentExpenses) => [...currentExpenses, newExpense]);
  };

  function removeExpense(expenseId) {
   setExpenses((currentExpense) => currentExpense.filter((expense) => expense.id !== expenseId))
  }

  return (
    <main className='appContainer'>

      <header className='appHeader'>
        <h1>Expense Claims</h1>
      </header> 

      {
        currentScreen === 'add' ? (
          <ExpenseInput
            expenses={expenses}
            onAddExpense={addExpense}
            onNavigateForwards={() => setCurrentScreen('review')}
          />)
          : null
      }

      {
        currentScreen === 'review' ?  (
          <ReviewExpenses
            expenses = {expenses}
            onRemoveExpense={removeExpense}
            onNavigateForwards={() => setCurrentScreen('summary')}
            onNavigateBackwards={() => setCurrentScreen('add')}
          />)
          : null
      }

      {
        currentScreen === 'summary' ?  (
          <ClaimSummary
            expenses={expenses}
            onNavigateBackwards={() => setCurrentScreen('review')}



          />)
          : null
      }
      
    </main>
  )
}

export default App
