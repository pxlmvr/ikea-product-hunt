import classes from './styles.module.css'

type Props = {
  disabled?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<Props> = ({ disabled, value, onChange }) => {
  return (
    <label className={classes.label}>
      <input
        className={classes.input}
        disabled={disabled}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      {value}
    </label>
  )
}
