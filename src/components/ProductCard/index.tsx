import classes from './styles.module.css'

import { IkeaProduct } from '@/data/series'
import { useContext } from 'react'
import { TeamContext } from '@/context/teamContext'
import { Search } from '@/components/icons/Search'
import { Check } from '@/components/icons/Check'
import { mergeClasses } from '@/utils/mergeClasses'

type Props = {
  product: IkeaProduct
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { products, setProducts } = useContext(TeamContext)

  const appliedClass = product.found
    ? mergeClasses([classes.productCard, classes.found])
    : classes.productCard

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
      className={appliedClass}
    >
      <div className={classes.content}>
        {product.name as string}
        {product.found ? <Check /> : <Search />}
      </div>
    </div>
  )
}
