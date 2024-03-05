import classes from './styles.module.css'

import { IkeaProduct } from '../../data/series'
import { Card } from '../Card'
import { useContext } from 'react'
import { TeamContext } from '../../context/teamContext'

type Props = {
  product: IkeaProduct
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { products, setProducts } = useContext(TeamContext)

  return (
    <div
      role="button"
      onClick={() => {
        const newProducts: IkeaProduct[] = products.map((p: IkeaProduct) => {
          if (p.name === product.name) {
            p.found = !p.found
          }
          return p
        })

        setProducts(newProducts)
      }}
      className={classes.productCard}
      style={{ textDecoration: product.found ? 'underline' : 'none' }}
    >
      <Card>{product.name as string}</Card>
    </div>
  )
}
