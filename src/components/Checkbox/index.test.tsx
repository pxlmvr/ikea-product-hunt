import { describe, expect, test, vi } from 'vitest'
import { Checkbox } from '.'
import { fireEvent, render } from '@testing-library/react'

describe('<Checkbox />', () => {
  test('renders correctly', () => {
    const { queryByRole } = render(<Checkbox value="foo" onChange={() => {}} />)

    expect(queryByRole('checkbox')).not.toBeNull()
    expect(queryByRole('checkbox')).toHaveProperty('checked', false)
  })
  test('calls change handler on click', () => {
    const changeHandler = vi.fn()

    const { getByRole, queryByRole } = render(
      <Checkbox value="foo" onChange={changeHandler} />
    )

    expect(changeHandler).toHaveBeenCalledTimes(0)
    expect(queryByRole('checkbox')).toHaveProperty('checked', false)

    fireEvent.click(getByRole('checkbox'))

    expect(changeHandler).toHaveBeenCalledTimes(1)
    expect(queryByRole('checkbox')).toHaveProperty('checked', true)
  })
})
