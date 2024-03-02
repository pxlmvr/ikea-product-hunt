import { useContext, useState } from 'react'
import { IkeaProduct, ProductName, series } from '../data/series'
import { TeamContext } from '../context/teamContext'

export const CreateTeam: React.FC = () => {
  const { setProducts } = useContext(TeamContext)

  const [selectedProducts, setSelectedProducts] = useState<ProductName[]>([])

  return (
    <div>
      Create team
      <div>Selected: {selectedProducts.join(', ')}</div>
      {series.map((item) => {
        return (
          <div key={item}>
            <label>
              <input
                disabled={
                  selectedProducts.length > 10 &&
                  !selectedProducts.includes(item as ProductName)
                }
                onChange={(e) => {
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
                type="checkbox"
                value={item}
              />
              {item}
            </label>
          </div>
        )
      })}
      <button
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
      </button>
    </div>
  )
}
