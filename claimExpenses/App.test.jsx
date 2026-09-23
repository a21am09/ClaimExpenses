import { render, screen } from '@testing-library/react'
import App from './src/App.jsx'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
  })
})