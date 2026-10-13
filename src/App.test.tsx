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

describe('App routing', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the home hero and primary navigation', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'I work on the systems behind the software.',
    )
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '/projects',
    )
    expect(screen.getByRole('link', { name: 'Notes' })).toHaveAttribute('href', '/notes')
  })

  it('marks planned projects honestly instead of implying completion', () => {
    renderAt('/projects')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Engineering projects',
    )
    expect(screen.getAllByText('Planned').length).toBeGreaterThan(0)
    expect(screen.queryByText('Completed')).not.toBeInTheDocument()
  })

  it('switches to Indonesian via the language toggle', () => {
    renderAt('/')

    fireEvent.click(screen.getByRole('button', { name: 'Bahasa Indonesia' }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Saya mengerjakan sistem di balik perangkat lunak.',
    )
    expect(screen.getByRole('link', { name: 'Proyek' })).toHaveAttribute(
      'href',
      '/projects',
    )
  })

  it('renders a not-found page for unknown routes', () => {
    renderAt('/does-not-exist')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Path not found')
  })
})
