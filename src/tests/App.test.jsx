import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '/src/App.jsx'

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
})

