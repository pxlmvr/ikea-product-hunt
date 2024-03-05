import classes from './styles.module.css'

import { useContext, useEffect, useState } from 'react'
import { ProductHunt } from './ProductHunt'
import { CreateTeam } from './CreateTeam'
import { TeamContext } from '../context/teamContext'
import { Header } from '../components/Header'
import { Navigation } from '../components/Navigation'
import React from 'react'
import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'

export type Tab = 'product-hunt' | 'create-team'

export const MainView: React.FC = () => {
  const { products } = useContext(TeamContext)

  const [currentTab, setCurrentTab] = useState<Tab>('product-hunt')
  const [showWinnerModal, setShowWinnerModal] = useState<boolean>(false)

  useEffect(() => {
    if (products.length > 0 && products.every((product) => product.found)) {
      setShowWinnerModal(true)
    }
  }, [products])

  return (
    <React.Fragment>
      {showWinnerModal && (
        <Modal>
          <div className={classes.victoryModalContent}>
            <h2>Hai vinto! 🎉🎉🎉</h2>
            <p>
              Complimenti complimenti, grazie per aver giocato e tutte quelle
              cose lì. Adesso vedi di non sentirtela troppo però. 🤨
            </p>
            <Button
              onClick={() => {
                setShowWinnerModal(false)
              }}
              fullWidth
            >
              Ho capito!
            </Button>
          </div>
        </Modal>
      )}
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
    </React.Fragment>
  )
}
