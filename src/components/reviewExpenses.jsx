import { approvalRequired, formatExpenseType, sumExpenses } from "../utils/expenseUtils"
export default function ReviewExpenses ({expenses, onRemoveExpense, onNavigateBackwards}) {
    return (
        <section>
            <h2>Expenses on this claim</h2>
            <div className='expensesList'>
                {expenses.map((expense) => {
                    return (
                        <article className='expenseListItem'>
                            <div className='expenseInfoLeft'>
                                <h3>{expense.description}</h3>
                                <p>{formatExpenseType(expense.type)} on {expense.date}</p>
                                {approvalRequired(expense) ? <p className='approvalWarning'><strong>This expense will require line manager approval</strong></p> : null}
                            </div>
                            <div className='expenseInfoRight'>
                                <p><strong>£{expense.monetaryValue}</strong></p>
                                <button className='secondaryButton' aria-label={`Remove ${expense.description}`} onClick={() => onRemoveExpense(expense.id)}>Remove</button>
                            </div>
                        </article>
                    )
                })}
            </div>

            <div className='claimTotal'>
                <span>Total claim</span>
                <strong>£{sumExpenses(expenses)}</strong>
            </div>

            <div className='progressionButtons'>
                <button className='secondaryButton navigation' onClick={onNavigateBackwards}>Add another expense</button>
            </div>
        </section>
    )
}