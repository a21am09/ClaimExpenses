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
                                    <h2>{expense.description}</h2>
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
                        <label htmlFor='approverName'>Name</label>
                        <input id='approverName' type='text' className='approverFieldInput' />
                        <label htmlFor='approverSignature'>Signature</label>
                        <input id='approverSignature' type='text' className='approverFieldInput' />
                    </div> : null
                }

                <div className='progressionButtons noPrint'>
                    <button className='secondaryButton navigation' aria-label='Review expenses' onClick={onNavigateBackwards}>Review expenses</button>
            </div>
            </section>
    )
}