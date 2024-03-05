import { mergeClasses } from '../../utils/mergeClasses'
import classes from './styles.module.css'

import { SyntheticEvent } from 'react'

type Props = {
  children: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
  style?: 'default' | 'danger' | 'naked'
  onClick: (e: SyntheticEvent) => void
}

export const Button: React.FC<Props> = ({
  children,
  disabled = false,
  fullWidth = false,
  style = 'default',
  onClick,
}) => {
  const getStyles = () => {
    if (style === 'danger') {
      return fullWidth
        ? mergeClasses([classes.button, classes.full, classes.danger])
        : mergeClasses([classes.button, classes.danger])
    } else if (style === 'naked') {
      return fullWidth
        ? mergeClasses([classes.button, classes.full, classes.naked])
        : mergeClasses([classes.button, classes.naked])
    } else {
      return fullWidth
        ? mergeClasses([classes.button, classes.full])
        : classes.button
    }
  }

  const appliedClass = getStyles()

  return (
    <button disabled={disabled} className={appliedClass} onClick={onClick}>
      {children}
    </button>
  )
}
