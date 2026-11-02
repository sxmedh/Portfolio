import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the name and the one-line facts', () => {
  render(<App />)

  /* the S of "Sumedh" is the logo image, so the text node reads "umedh Gole" */
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/umedh Gole/)
  expect(screen.getByAltText('S')).toBeInTheDocument()
  expect(screen.getByText(/Software Developer at/)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
})

test('every contact row links out', () => {
  render(<App />)

  expect(screen.getByRole('link', { name: 'sxmedh' })).toHaveAttribute(
    'href',
    'https://github.com/sxmedh'
  )
  expect(screen.getByRole('link', { name: 'sumedh11.sg@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:sumedh11.sg@gmail.com'
  )
  expect(screen.getByRole('link', { name: '+91 98907 98370' })).toHaveAttribute(
    'href',
    'tel:+919890798370'
  )
})

test('"Java" quietly links to the interview site', () => {
  render(<App />)

  expect(screen.getByRole('link', { name: 'Java' })).toHaveAttribute('href', '/interview/')
})

test('offers the resume as a download', () => {
  render(<App />)

  const link = screen.getByRole('link', { name: /download resume/i })
  expect(link).toHaveAttribute('href', expect.stringContaining('/resume.pdf'))
  expect(link).toHaveAttribute('download', 'Sumedh-Gole-Resume.pdf')
})
