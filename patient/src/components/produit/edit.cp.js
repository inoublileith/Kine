import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProduitDataService from '../../services/produit.service'
const EditProduit = (props) => {
  let { id } = useParams()
  const initialProduitState = {
    id: null,
    nom: '',
    description: '',
    image: '',
    prix: '',
    promoted: 0,
    etat: 0,
    iduser: 1,
  }
  const [currentProduit, setCurrentProduit] = useState(initialProduitState)
  const [message, setMessage] = useState('')
  const getProduit = (id) => {
    ProduitDataService.get(id)
      .then((response) => {
        setCurrentProduit(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getProduit(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentProduit({ ...currentProduit, [name]: value })
  }

  
  const updateProduit = () => {
    ProduitDataService.update(currentProduit.id, currentProduit)
      .then((response) => {
        console.log(response.data)
        setMessage('The Produit was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentProduit ? (
        <div className='edit-form'>
          <h4>Produit</h4>
          <form>
            <input
              type='hidden'
              id='iduser'
              name='iduser'
              value={currentProduit.iduser}
              onChange={handleInputChange}
            />
            <div className='form-group'>
              <label htmlFor='nom'>Nom</label>
              <input
                type='text'
                className='form-control'
                id='nom'
                value={currentProduit.nom}
                onChange={handleInputChange}
                name='nom'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                className='form-control'
                id='description'
                value={currentProduit.description}
                onChange={handleInputChange}
                name='description'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='prix'>Prix</label>
              <input
                type='text'
                className='form-control'
                id='prix'
                required
                value={currentProduit.prix}
                onChange={handleInputChange}
                name='prix'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='promoted'>Promoted</label>
              <input
                type='text'
                className='form-control'
                id='promoted'
                required
                value={currentProduit.promoted}
                onChange={handleInputChange}
                name='promoted'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='etat'>Etat</label>
              <input
                type='text'
                className='form-control'
                id='etat'
                required
                value={currentProduit.etat}
                onChange={handleInputChange}
                name='etat'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateProduit}
          >
            Update
          </button>
          <div className='alert alert-light' role='alert'>
            {message}
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Produit...</p>
        </div>
      )}
    </div>
  )
}
export default EditProduit
