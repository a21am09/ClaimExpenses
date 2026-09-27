import { useState } from 'react'
import './App.css'
import ExpenseInput from './components/expenseInput.jsx';
import ReviewExpenses from './components/reviewExpenses.jsx';

function App() {

  const [currentScreen, setCurrentScreen] = useState('add');
  const [expenses, setExpenses] = useState([]);

  function addExpense(newExpense) {
    setExpenses((currentExpenses) => [...currentExpenses, newExpense]);
  };

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
            onNavigateBackwards={() => setCurrentScreen('add')}
          />)
          : null
      }
      
    </main>
  )
}

export default App
