import { useContext, useState } from 'react'
import { ProductHunt } from './ProductHunt'
import { CreateTeam } from './CreateTeam'
import { TeamContext } from '../context/teamContext'
import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'

export type Tab = 'product-hunt' | 'create-team'

export const MainView: React.FC = () => {
  const { products } = useContext(TeamContext)

  console.log(products)

  const [currentTab, setCurrentTab] = useState<Tab>('product-hunt')

  return (
    <div>
      <Header
        pageTitle={
          currentTab === 'product-hunt'
            ? 'Trova i prodotti'
            : 'Crea la tua squadra'
        }
      />
      {currentTab === 'product-hunt' ? (
        <ProductHunt setCurrentTab={setCurrentTab} />
      ) : (
        <CreateTeam />
      )}
      <Navigation currentTab={currentTab} switchTab={setCurrentTab} />
    </div>
  )
}
