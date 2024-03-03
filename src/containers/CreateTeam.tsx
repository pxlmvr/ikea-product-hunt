import classes from './styles.module.css'

import { useContext, useState } from 'react'
import { IkeaProduct, ProductName, series } from '../data/series'
import { TeamContext } from '../context/teamContext'
import { Progress } from '../components/Progress'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'

export const CreateTeam: React.FC = () => {
  const { setProducts } = useContext(TeamContext)

  const [selectedProducts, setSelectedProducts] = useState<ProductName[]>([])

  return (
    <main>
      <Progress max={11} value={selectedProducts.length} />
      <Card>
        <div className={classes.productContainer}>
          {series.map((item) => {
            return (
              <Checkbox
                key={item}
                disabled={
                  selectedProducts.length > 10 &&
                  !selectedProducts.includes(item as ProductName)
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.checked) {
                    setSelectedProducts((prev) => [
                      ...prev,
                      item as ProductName,
                    ])
                  } else {
                    setSelectedProducts((prev) =>
                      prev.filter(
                        (product) => product !== (item as ProductName)
                      )
                    )
                  }
                }}
                value={item}
              />
            )
          })}
        </div>
        <Button
          fullWidth
          onClick={() => {
            const pobj: IkeaProduct[] = selectedProducts.map((product) => ({
              name: product,
              found: false,
            }))
            setProducts(pobj)
          }}
          disabled={selectedProducts.length !== 11}
        >
          Save team
        </Button>
      </Card>
    </main>
  )
}
