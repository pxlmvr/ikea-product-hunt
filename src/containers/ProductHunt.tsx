import { useContext } from 'react'
import { TeamContext } from '../context/teamContext'
import { Button } from '../components/Button'

export const ProductHunt: React.FC = () => {
  const { products } = useContext(TeamContext)

  return (
    <main>
      {products.length ? (
        <div>Products</div>
      ) : (
        <div>
          Non hai ancora prodotti, crea la tua lista ora!
          <Button fullWidth onClick={() => {}}>
            Creala ora!
          </Button>
        </div>
      )}
    </main>
  )
}
