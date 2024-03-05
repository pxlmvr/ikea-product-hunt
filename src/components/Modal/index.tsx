import classes from './styles.module.css'

type Props = {
  children: React.ReactNode
}

export const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>{children}</div>
    </div>
  )
}
