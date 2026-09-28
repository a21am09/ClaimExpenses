import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '/src/App.jsx'
import { expect } from 'vitest'

describe('Expense Claims App', () => {
  it('renders the App component', () => {
    render(<App />);
  })

  it('renders input fields for expense type, description, amount, and date', () => {
    render(<App />);
    const expenseTypeInput = screen.getByLabelText(/Expense type/i);
    const descriptionInput = screen.getByLabelText(/Description/i);
    const valueInput = screen.getByLabelText(/Miles/i);
    const dateInput = screen.getByLabelText(/Date/i);
  });

  it('displays the calculated mileage expense when the expense type is set to "mileage" and a value is entered', async () => {
    render(<App />);
    const expenseTypeInput = screen.getByLabelText(/Expense type/i);
    const valueInput = screen.getByLabelText(/Miles/i);

    await userEvent.selectOptions(expenseTypeInput, 'mileage');
    await userEvent.type(valueInput, '100');

    expect(screen.getByText(/Value of mileage expense:/i)).toBeInTheDocument();
  });

  it('does not display the calculated mileage expense when the expense type is not "mileage"', async () => {
    render(<App />);
    const expenseTypeInput = screen.getByLabelText(/Expense type/i);

    await userEvent.selectOptions(expenseTypeInput, 'other');

    // valueInput declared after selecting expense type to ensure correct label is used
    const valueInput = screen.getByLabelText(/Amount/i);
    await userEvent.type(valueInput, '100');

    expect(screen.queryByText(/Value of mileage expense:/i)).not.toBeInTheDocument();
  });

  it('resets the input fields after submitting the form', async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText(/Description/i), 'Test description');
    await userEvent.type(screen.getByLabelText(/Miles/i), '100');
    await userEvent.type(screen.getByLabelText(/Date/i), '01/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    expect(screen.getByLabelText(/Description/i)).toHaveValue('');
    expect(screen.getByLabelText(/Date/i)).toHaveValue('');
    expect(screen.getByLabelText(/Miles/i)).toHaveValue(null);
  });

  it('adds an expense and dispays it on the review screen', async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText(/Description/i), 'Test description');
    await userEvent.type(screen.getByLabelText(/Miles/i), '100');
    await userEvent.type(screen.getByLabelText(/Date/i), '01/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));
    await userEvent.click(screen.getByRole('button', { name: /Review expenses/i }));

    expect(screen.getByText(/Expenses on this claim/i)).toBeInTheDocument();
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  });

  it('adds multiple expenses and dispays each on the review screen', async () => {
    render(<App />);

    // Expense 1
    await userEvent.type(screen.getByLabelText(/Description/i), 'Travel to training');
    await userEvent.type(screen.getByLabelText(/Miles/i), '100');
    await userEvent.type(screen.getByLabelText(/Date/i), '01/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    // Expense 2
    await userEvent.type(screen.getByLabelText(/Description/i), 'Emergency travel');
    await userEvent.type(screen.getByLabelText(/Miles/i), '200');
    await userEvent.type(screen.getByLabelText(/Date/i), '02/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    await userEvent.click(screen.getByRole('button', { name: /Review expenses/i }));

    expect(screen.getByText(/Expenses on this claim/i)).toBeInTheDocument();
    expect(screen.getByText(/Travel to training/i)).toBeInTheDocument();
    expect(screen.getByText(/Emergency travel/i)).toBeInTheDocument();
  });

  it('deletes an expense when the remove button is clicked', async () => {
    render(<App />);

    // Expense 1
    await userEvent.type(screen.getByLabelText(/Description/i), 'Travel to training');
    await userEvent.type(screen.getByLabelText(/Miles/i), '100');
    await userEvent.type(screen.getByLabelText(/Date/i), '01/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    // Expense 2
    await userEvent.type(screen.getByLabelText(/Description/i), 'Emergency travel');
    await userEvent.type(screen.getByLabelText(/Miles/i), '200');
    await userEvent.type(screen.getByLabelText(/Date/i), '02/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    await userEvent.click(screen.getByRole('button', { name: /Review expenses/i }));

    expect(screen.getByText(/Expenses on this claim/i)).toBeInTheDocument();
    expect(screen.getByText(/Travel to training/i)).toBeInTheDocument();
    expect(screen.getByText(/Emergency travel/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Remove Travel to training' }));

    expect(screen.queryByText(/Travel to training/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Emergency travel/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name:'Remove Emergency travel' }));

    expect(screen.queryByText(/Travel to training/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Emergency travel/i)).not.toBeInTheDocument();
  });

  it('displays all expenses on the claim summary screen', async () => {
    render(<App />);

    // Expense 1
    await userEvent.type(screen.getByLabelText(/Description/i), 'Travel to training');
    await userEvent.type(screen.getByLabelText(/Miles/i), '100');
    await userEvent.type(screen.getByLabelText(/Date/i), '01/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    // Expense 2
    await userEvent.type(screen.getByLabelText(/Description/i), 'Emergency travel');
    await userEvent.type(screen.getByLabelText(/Miles/i), '200');
    await userEvent.type(screen.getByLabelText(/Date/i), '02/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    await userEvent.click(screen.getByRole('button', { name: /Review expenses/i }));
    await userEvent.click(screen.getByRole('button', { name: /View claim/i }));

    expect(screen.getByText(/Travel to training/i)).toBeInTheDocument();
    expect(screen.getByText(/Emergency travel/i)).toBeInTheDocument();
  });

  it('displays line manager approver fields when one or more expense is over the approval threshold', async () => {
    render(<App />);

    // Expense 1
    await userEvent.type(screen.getByLabelText(/Description/i), 'Travel to training');
    await userEvent.type(screen.getByLabelText(/Miles/i), '100');
    await userEvent.type(screen.getByLabelText(/Date/i), '01/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    // Expense 2
    await userEvent.type(screen.getByLabelText(/Description/i), 'Emergency travel');
    await userEvent.type(screen.getByLabelText(/Miles/i), '200');
    await userEvent.type(screen.getByLabelText(/Date/i), '02/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    await userEvent.click(screen.getByRole('button', { name: /Review expenses/i }));
    await userEvent.click(screen.getByRole('button', { name: /View claim/i }));

    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Signature/i)).toBeInTheDocument();

  });

  it('does not display line manager approver fields when all expenses are under approval thesholds', async () => {
    render(<App />);

    // Expense 1
    await userEvent.type(screen.getByLabelText(/Description/i), 'Travel to training');
    await userEvent.type(screen.getByLabelText(/Miles/i), '50');
    await userEvent.type(screen.getByLabelText(/Date/i), '01/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    // Expense 2
    await userEvent.type(screen.getByLabelText(/Description/i), 'Emergency travel');
    await userEvent.type(screen.getByLabelText(/Miles/i), '15');
    await userEvent.type(screen.getByLabelText(/Date/i), '02/06/2026');
    await userEvent.click(screen.getByRole('button', { name: /Add expense/i }));

    await userEvent.click(screen.getByRole('button', { name: /Review expenses/i }));
    await userEvent.click(screen.getByRole('button', { name: /View claim/i }));

    expect(screen.queryByText(/Name/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Signature/i)).not.toBeInTheDocument();

  });
})