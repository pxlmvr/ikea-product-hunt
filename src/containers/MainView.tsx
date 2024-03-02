import { useContext, useState } from 'react'
import { ProductHunt } from './ProductHunt'
import { CreateTeam } from './CreateTeam'
import { TeamContext } from '../context/teamContext'

type Tab = 'product-hunt' | 'create-team'

export const MainView: React.FC = () => {
  const { products } = useContext(TeamContext)

  console.log(products)

  const [currentTab, setCurrentTab] = useState<Tab>('product-hunt')

  return (
    <div>
      <nav>
        <button
          onClick={() => {
            setCurrentTab('product-hunt')
          }}
        >
          Product Hunt
        </button>
        <button
          onClick={() => {
            setCurrentTab('create-team')
          }}
        >
          Create Team
        </button>
      </nav>
      {currentTab === 'product-hunt' ? <ProductHunt /> : <CreateTeam />}
    </div>
  )
}
