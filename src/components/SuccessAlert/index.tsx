import { Check } from '@/components/icons/Check'
import classes from './styles.module.css'
import { mergeClasses } from '@/utils/mergeClasses'

type Props = {
  message: string
  show: boolean
}

export const SuccessAlert: React.FC<Props> = ({ message, show }) => {
  const appliedClass = show
    ? mergeClasses([classes.alert, classes.show])
    : classes.alert

  return (
    <div className={appliedClass}>
      <Check />
      {message}
    </div>
  )
}
