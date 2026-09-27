export default function ReviewExpenses ({expenses, onNavigateBackwards}) {
    return (
        <section>
            <h2>Expenses on this claim</h2>
            <div className='expensesList'>
                {expenses.map((expense) => {
                    return (
                        <article className='expenseListItem'>
                            <div className='expenseInfoLeft'>
                                <h3>{expense.description}</h3>
                                <p>{expense.type} on {expense.date}</p>
                            </div>
                            <div className='expenseInfoRight'>
                                <p><strong>£{expense.monetaryValue}</strong></p>
                            </div>
                        </article>
                    )
                })}
            </div>

            <div className='claimTotal'>
                <span>Total claim</span>
                <strong>£Total</strong>
            </div>

            <div className='progressionButtons'>
                <button className='secondaryButton navigation' onClick={onNavigateBackwards}>Add another expense</button>
            </div>
        </section>
    )
}