import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FactureDataService from '../../services/facture.service'
const EditFacture = (props) => {
  let { id } = useParams()
  const initialFactureState = {
    id: null,
    total: '',
    date: '',
    titre: '',
    etat: 0,
  }
  const [currentFacture, setCurrentFacture] = useState(initialFactureState)
  const [message, setMessage] = useState('')

  const getFacture = (id) => {
    FactureDataService.get(id)
      .then((response) => {
        setCurrentFacture(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getFacture(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentFacture({ ...currentFacture, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentFacture.id,
      total: currentFacture.total,
      date: currentFacture.date,
      titre: currentFacture.titre,
      etat: status,
    }
    FactureDataService.update(currentFacture.id, data)
      .then((response) => {
        setCurrentFacture({ ...currentFacture, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateFacture = () => {
    FactureDataService.update(currentFacture.id, currentFacture)
      .then((response) => {
        console.log(response.data)
        setMessage('The Facture was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div>
            {currentFacture ? (
              <div className='edit-form'>
                <h4>Seances</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='total' id='total'>
                      Total
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='total'
                      required
                      value={currentFacture.total}
                      onChange={handleInputChange}
                      name='total'
                      aria-describedby='total'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date' id='date'>
                      Date
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='date'
                      required
                      onChange={handleInputChange}
                      name='date'
                      aria-describedby='date'
                      value={currentFacture.date}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='titre'>Titre</label>
                    <input
                      type='text'
                      className='form-control'
                      id='titre'
                      required
                      value={currentFacture.titre}
                      onChange={handleInputChange}
                      name='titre'
                      placeholder='titre'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='etat'>Etat</label>
                    <input
                      type='text'
                      className='form-control'
                      id='etat'
                      required
                      value={currentFacture.etat}
                      onChange={handleInputChange}
                      name='etat'
                    />
                  </div>

                  {/*<div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentEmploye.etat === 1 ? 'Published' : 'Pending'}
            </div>*/}
                </form>
                {/* {currentEmploye.etat === 1 ? (
                  <button
                    className='m-3 btn btn-sm btn-danger'
                    onClick={() => updatePublished(0)}
                  >
                    UnPublish
                  </button>
                ) : (
                  <button
                    className='m-3 btn btn-sm btn-warning'
                    onClick={() => updatePublished(1)}
                  >
                    Publish
                  </button>
                )}*/}

                <button
                  type='submit'
                  className='m-3 btn btn-sm btn-success'
                  onClick={updateFacture}
                >
                  Update
                </button>
                <p>{message}</p>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Tutorial...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditFacture
