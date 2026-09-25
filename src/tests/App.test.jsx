import { render, screen } from '@testing-library/react'
import App from '/src/App.jsx'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
  })

  it('renders input fields for expense type, description, amount, and date', () => {
    render(<App />);
    const expenseTypeInput = screen.getByLabelText(/Expense type/i);
    const descriptionInput = screen.getByLabelText(/Description/i);
    const amountInput = screen.getByLabelText(/Amount/i);
    const dateInput = screen.getByLabelText(/Date/i);
  });
});
