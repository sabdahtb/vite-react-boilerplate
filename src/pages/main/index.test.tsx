import { describe, it, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Main from '.'

test('demo', () => {
  expect(true).toBe(true)
})

describe('render', () => {
  it('renders the main page', () => {
    render(<Main />)
    expect(true).toBeTruthy()
  })
})
