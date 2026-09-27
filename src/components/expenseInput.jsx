import { useState } from 'react'
import { expenseValue } from '../utils/expenseUtils.js'

export default function ExpenseInput({ expenses, onAddExpense, onNavigateForwards }) {

    //State for expense data inputted
    const [expenseData, setExpenseData] = useState({
        expenseType: 'mileage',
        description: '',
        date: '',
        inputValue: '',
    });

    //Update data when input fields are changed
    function handleInputChange(e) {
        const { name, value } = e.target;
        setExpenseData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        const newExpense = {
            type: expenseData.expenseType,
            description: expenseData.description,
            date: expenseData.date,
            inputValue: expenseData.inputValue,
            monetaryValue: expenseValue(expenseData.expenseType, expenseData.inputValue),
        };
        onAddExpense(newExpense);
        setExpenseData({
            expenseType: expenseData.expenseType,
            description: '',
            date: '',
            inputValue: '',
        })
    };

    const expenseMonetaryValue = expenseValue(expenseData.expenseType, expenseData.inputValue);

    return (
        <section>
        <p>Enter details of your expense into the form to begin your claim.</p>

      <form onSubmit={handleSubmit} noValidate>

        <div className='formGroup'>
          <label htmlFor='expenseType'>Expense type</label>
          <select
            id='expenseType'
            name='expenseType'
            value={expenseData.expenseType}
            onChange={handleInputChange}
            >
              <option value='mileage'>Mileage</option>
              <option value='accommodation'>Accommodation</option>
              <option value='sustenance'>Sustenance</option>
              <option value='public transport'>Public transport</option>
              <option value='other'>Other</option>
          </select>
        </div>

        <div className='formGroup'>
          <label htmlFor='expenseDescription'>Description</label>
          <textarea
            id='expenseDescription'
            name='description'
            value={expenseData.description}
            rows='2'
            columns='50'
            onChange={handleInputChange}
            placeholder='Enter a description of your expense'
          />
        </div>

        <div className='formGroup'>
          <label htmlFor='expenseDate'>Date</label>
          <input id='expenseDate' name='date' type='date' value={expenseData.date} onChange={handleInputChange} />
        </div>

        <div className='formGroup'>
          <label htmlFor='expenseInputValue'>
            {expenseData.expenseType === 'mileage' ? 'Miles' : 'Amount'}
          </label>
          <input
            id='expenseInputValue'
            name='inputValue'
            type='number'
            placeholder={expenseData.expenseType === 'mileage' ? 'Enter the number of miles traveled' : 'Enter the amount of your expense'}
            onChange={handleInputChange}
            value={expenseData.inputValue}
          />
        </div>

        {expenseData.expenseType === 'mileage' && expenseMonetaryValue > 0 ?
          <p className='mileageMonetaryValue'>Value of mileage expense: <strong>£{expenseMonetaryValue}</strong></p> : null
        }

        <button className='primaryButton add' type='submit'>Add expense</button>
      </form>
      <div className='progressionButtons'>
        <button className='primaryButton navigation' onClick={onNavigateForwards}>Review expenses</button>
      </div>
      </section>
    )
}