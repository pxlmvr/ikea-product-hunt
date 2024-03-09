import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { Button } from '.'

describe('<Button />', () => {
  test('renders correctly', () => {
    const { queryByRole } = render(<Button onClick={() => {}}>Click me</Button>)

    expect(queryByRole('button')).not.toBeNull()
  })

  test('can be disabled', () => {
    const { queryByRole } = render(
      <Button onClick={() => {}} disabled>
        Cannot click me
      </Button>
    )

    expect(queryByRole('button')).toHaveProperty('disabled')
  })

  test('calls click handler on click', () => {
    const clickHandlerMock = vi.fn()

    const { getByRole } = render(
      <Button onClick={clickHandlerMock}>Click me</Button>
    )

    expect(clickHandlerMock).toHaveBeenCalledTimes(0)

    fireEvent.click(getByRole('button'))

    expect(clickHandlerMock).toHaveBeenCalledTimes(1)
  })

  test('does not call click handler on click when disabled', () => {
    const clickHandlerMock = vi.fn()

    const { getByRole } = render(
      <Button onClick={clickHandlerMock} disabled>
        Cannot click me
      </Button>
    )

    expect(clickHandlerMock).toHaveBeenCalledTimes(0)

    fireEvent.click(getByRole('button'))

    expect(clickHandlerMock).toHaveBeenCalledTimes(0)
  })
})
