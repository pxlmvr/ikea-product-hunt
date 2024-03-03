import { mergeClasses } from '../../utils/mergeClasses'
import classes from './styles.module.css'

import { SyntheticEvent } from 'react'

type Props = {
  children: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
  onClick: (e: SyntheticEvent) => void
}

export const Button: React.FC<Props> = ({
  children,
  disabled = false,
  fullWidth = false,
  onClick,
}) => {
  const style = fullWidth
    ? mergeClasses([classes.button, classes.full])
    : classes.button

  return (
    <button disabled={disabled} className={style} onClick={onClick}>
      {children}
    </button>
  )
}
