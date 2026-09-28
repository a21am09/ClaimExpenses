import { sumExpenses, formatExpenseType, approvalRequired } from "../utils/expenseUtils"

export default function ClaimSummary({ expenses, onNavigateBackwards }){

    // Check if any expense in the claim requires approval
    const approval = expenses.some((expense) => approvalRequired(expense));
    return (
            <section>
                {approval ? <div className='summarySubTitle'><span><strong>For review and approval</strong></span><span>Please review the following claim and provide your approval by signing at the bottom of this document</span></div> : <div className='summarySubTitle'><span>Please review and process the claims provided bellow</span></div> }

                <div className='expensesList'>
                    {expenses.map((expense) => {
                        return (
                            <article className='expenseListItem'>
                                <div className='expenseInfoLeft'>
                                    <h3>{expense.description}</h3>
                                    <p>{formatExpenseType(expense.type)} on {expense.date}</p>
                                </div>
                                <div className='expenseInfoRight'>
                                    <p><strong>£{expense.monetaryValue}</strong></p>
                                </div>
                            </article>
                        )
                    })}
                </div>
   
                <div className='claimTotal summary'>
                    <div className='claimTotalRow'>
                    <span>Total claim</span>
                    <strong>£{sumExpenses(expenses)}</strong>
                    </div>
                    <div className='claimTotalRow'>
                        <span>Number of expenses</span>
                        <span>{expenses.length}</span>
                    </div>
                </div>
                {approval ?
                    <div className='approverFields'>
                        <label>Name</label>
                        <input type='text' className='approverFieldInput' />
                        <label>Signature</label>
                        <input type='text' className='approverFieldInput' />
                    </div> : null
                }

                <div className='progressionButtons'>
                    <button className='secondaryButton navigation' onClick={onNavigateBackwards}>Review expenses</button>
            </div>
            </section>
    )
}