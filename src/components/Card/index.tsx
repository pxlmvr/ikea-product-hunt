import classes from './styles.module.css'
import { mergeClasses } from '../../utils/mergeClasses'

type Props = {
  className?: string
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({ className, children }) => {
  const classList = className
    ? mergeClasses([classes.card, className])
    : classes.card

  return <div className={classList}>{children}</div>
}
