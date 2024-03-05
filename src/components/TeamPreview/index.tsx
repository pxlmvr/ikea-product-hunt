import classes from './styles.module.css'

import { TeamContext } from '@/context/teamContext'
import { useContext, useState } from 'react'
import { Card } from '@/components/Card'
import { Button } from '../Button'
import React from 'react'
import { Modal } from '../Modal'

export const TeamPreview: React.FC = () => {
  const { products, setProducts } = useContext(TeamContext)

  const [showDeletionModal, setShowDeletionModal] = useState<boolean>(false)

  return (
    <React.Fragment>
      {showDeletionModal && (
        <Modal>
          <h2>Vuoi veramente cancellare la tua squadra?</h2>
          <div className={classes.modalActions}>
            <Button
              style="danger"
              onClick={() => {
                setProducts([])
                setShowDeletionModal(false)
              }}
            >
              Sì, cancella
            </Button>
            <Button
              style="naked"
              onClick={() => {
                setShowDeletionModal(false)
              }}
            >
              Annulla
            </Button>
          </div>
        </Modal>
      )}
      <Card>
        <h2>La tua squadra:</h2>
        <div className={classes.grid}>
          {products.map((p) => (
            <div className={classes.productName} key={p.name as string}>
              📦 {p.name as string}
            </div>
          ))}
        </div>
        <div className={classes.actions}>
          <Button
            style="danger"
            onClick={() => {
              setShowDeletionModal(true)
            }}
          >
            Elimina squadra
          </Button>
        </div>
      </Card>
    </React.Fragment>
  )
}
