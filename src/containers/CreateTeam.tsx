import classes from './styles.module.css'

import { useContext, useEffect, useState } from 'react'
import { IkeaProduct, ProductName, series } from '../data/series'
import { TeamContext } from '../context/teamContext'
import { Progress } from '../components/Progress'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { SuccessAlert } from '@/components/SuccessAlert'
import React from 'react'
import { TeamPreview } from '@/components/TeamPreview'

export const CreateTeam: React.FC = () => {
  const { products, setProducts } = useContext(TeamContext)

  const [selectedProducts, setSelectedProducts] = useState<ProductName[]>([])
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false)

  useEffect(() => {
    let timerId: NodeJS.Timeout
    if (showSuccessAlert) {
      timerId = setTimeout(() => {
        setShowSuccessAlert(false)
      }, 5000)
    }
    return () => clearTimeout(timerId)
  }, [showSuccessAlert])

  return (
    <main>
      {products.length ? (
        <TeamPreview />
      ) : (
        <React.Fragment>
          <Progress max={11} value={selectedProducts.length} />
          <Card>
            <p>
              Seleziona i tuoi 11 <s>giocat...</s> ehm, prodotti:
            </p>
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
                setShowSuccessAlert(true)
              }}
              disabled={selectedProducts.length !== 11}
            >
              Salva squadra
            </Button>
          </Card>
        </React.Fragment>
      )}
      <SuccessAlert show={showSuccessAlert} message="Squadra salvata!" />
    </main>
  )
}
