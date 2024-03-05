import classes from './styles.module.css'

import { Card } from '@/components/Card'
import emptyImage from '@/assets/images/empty.jpg'
import { Button } from '../Button'
import { Tab } from '@/containers/MainView'

type Props = {
  setCurrentTab: (t: Tab) => void
}

export const NoProducts: React.FC<Props> = ({ setCurrentTab }) => {
  return (
    <Card>
      <div className={classes.noProducts}>
        <p>Non hai ancora creato il tuo team!</p>
        <div>
          <img width="100px" alt="" src={emptyImage} />
        </div>
        <Button onClick={() => setCurrentTab('create-team')}>
          Scegli i prodotti
        </Button>
      </div>
    </Card>
  )
}
