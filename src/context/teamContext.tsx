import { createContext, useState } from 'react'
import { IkeaProduct } from '../data/series'

type TeamContextType = {
  products: IkeaProduct[]
  setProducts: (p: IkeaProduct[]) => void
}

const defaultContextValue: TeamContextType = {
  products: [],
  setProducts: () => {},
}

export const TeamContext = createContext<TeamContextType>(defaultContextValue)

export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<IkeaProduct[]>([])

  return (
    <TeamContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}
