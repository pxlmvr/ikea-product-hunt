import { useEffect } from 'react'
import classes from './styles.module.css'

type Props = {
  children: React.ReactNode
}

export const Modal: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll')

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>{children}</div>
    </div>
  )
}
