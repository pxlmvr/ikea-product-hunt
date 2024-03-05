import { useContext } from 'react'
import { TeamContext } from '../context/teamContext'

import { IkeaProduct } from '../data/series'
import { ProductCard } from '../components/ProductCard'
import { NoProducts } from '../components/NoProducts'
import { Tab } from './MainView'

type Props = {
  setCurrentTab: (t: Tab) => void
}

export const ProductHunt: React.FC<Props> = ({ setCurrentTab }) => {
  const { products } = useContext(TeamContext)

  return (
    <main>
      {products.length ? (
        <div>
          {products.map((product: IkeaProduct) => {
            return (
              <ProductCard key={product.name as string} product={product} />
            )
          })}
        </div>
      ) : (
        <NoProducts setCurrentTab={setCurrentTab} />
      )}
    </main>
  )
}
