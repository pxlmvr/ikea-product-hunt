import classes from './styles.module.css'

type Props = {
  pageTitle: string
}

export const Header: React.FC<Props> = ({ pageTitle }) => {
  return (
    <header className={classes.header}>
      <p>{pageTitle}</p>
    </header>
  )
}
