import { Eye } from '@/components/icons/Eye'
import { mergeClasses } from '@/utils/mergeClasses'
import { Tab } from '@/containers/MainView'
import { Trophy } from '@/components/icons/Trophy'
import classes from './styles.module.css'

type Props = {
  currentTab: Tab
  switchTab: (t: Tab) => void
}

export const Navigation: React.FC<Props> = ({ currentTab, switchTab }) => {
  return (
    <footer className={classes.footer}>
      <nav className={classes.navigation}>
        <button
          onClick={() => {
            switchTab('product-hunt')
          }}
          className={
            currentTab === 'product-hunt'
              ? mergeClasses([classes.tabSelector, classes.current])
              : classes.tabSelector
          }
        >
          <Eye />
          Ricerca
        </button>
        <button
          onClick={() => {
            switchTab('create-team')
          }}
          className={
            currentTab === 'create-team'
              ? mergeClasses([classes.tabSelector, classes.current])
              : classes.tabSelector
          }
        >
          <Trophy />
          La tua squadra
        </button>
      </nav>
    </footer>
  )
}
