import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the hero and the three capability sections', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'I work on the systems behind the software.',
    )
    expect(screen.getByText('SRE & Incident Response')).toBeInTheDocument()
    expect(screen.getByText('Kubernetes & Platform Engineering')).toBeInTheDocument()
    expect(screen.getByText('Networking & API Infrastructure')).toBeInTheDocument()
  })

  it('shows the English identity and the CKAD status badge', () => {
    renderAt('/')

    expect(
      screen.getAllByText('IRZA ZAKARIA / SYSTEMS ENGINEERING').length,
    ).toBeGreaterThan(0)
    expect(screen.getByText('CKAD — In Progress')).toBeInTheDocument()
  })

  it('switches to Indonesian via the language toggle', () => {
    renderAt('/')

    fireEvent.click(screen.getByRole('button', { name: 'Bahasa Indonesia' }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Saya mengerjakan sistem di balik perangkat lunak.',
    )
    expect(screen.getByText('SRE & Respon Insiden')).toBeInTheDocument()
  })

  it('keeps the header identity in English after switching language', () => {
    renderAt('/')

    fireEvent.click(screen.getByRole('button', { name: 'Bahasa Indonesia' }))

    expect(
      screen.getAllByText('IRZA ZAKARIA / SYSTEMS ENGINEERING').length,
    ).toBeGreaterThan(0)
  })

  it('renders a not-found page for unknown routes', () => {
    renderAt('/does-not-exist')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Path not found')
  })
})
