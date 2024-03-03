import classes from './styles.module.css'

type Props = {
  max: number
  value: number
}

export const Progress: React.FC<Props> = ({ max, value }) => {
  const percentage = Math.floor((value / max) * 100)

  return (
    <div className={classes.wrapper}>
      <p className={classes.counter}>
        Selezionati {value} di {max}
      </p>
      <div className={classes.meter}>
        <div
          className={classes.progress}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
