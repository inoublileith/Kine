import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PriseDataService from '../../services/prise.service'
const EditPrise = (props) => {
  let { id } = useParams()
  const initialPriseState = {
    id: null,
    anne: '',
    n_ordre: '',
    nb_seance: '',
    d_debut: '',
    d_fin: '',
    nb_s_s: '',
    etat: 0,
  }
  const [currentPrise, setCurrentPrise] = useState(initialPriseState)
  const [message, setMessage] = useState('')

  const getPrise = (id) => {
    PriseDataService.get(id)
      .then((response) => {
        setCurrentPrise(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getPrise(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentPrise({ ...currentPrise, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentPrise.id,
      anne: currentPrise.anne,
      n_ordre: currentPrise.n_ordre,
      nb_seance: currentPrise.nb_seance,
      d_debut: currentPrise.d_debut,
      d_fin: currentPrise.d_fin,
      nb_s_s: currentPrise.nb_s_s,
      etat: status,
    }
    PriseDataService.update(currentPrise.id, data)
      .then((response) => {
        setCurrentPrise({ ...currentPrise, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updatePrise= () => {
    PriseDataService.update(currentPrise.id, currentPrise)
      .then((response) => {
        console.log(response.data)
        setMessage('The Prise en charge was updated successfully!')
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
            {currentPrise ? (
              <div className='edit-form'>
                <h4>Prise en charge </h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='anne' id='anne'>
                      Anne
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='anne'
                      required
                      value={currentPrise.anne}
                      onChange={handleInputChange}
                      name='anne'
                      aria-describedby='anne'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='n_ordre' id='n_ordre'>
                      Nombre d'ordre
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='n_ordre'
                      required
                      onChange={handleInputChange}
                      name='n_ordre'
                      aria-describedby='n_ordre'
                      value={currentPrise.n_ordre}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='nb_seance'>Nombre de seance </label>
                    <input
                      type='text'
                      className='form-control'
                      id='nb_seance'
                      required
                      value={currentPrise.nb_seance}
                      onChange={handleInputChange}
                      name='nb_seance'
                      placeholder='nb_seance'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='d_debut'>Date début </label>
                    <input
                      type='text'
                      className='form-control'
                      id='d_debut'
                      required
                      value={currentPrise.d_debut}
                      onChange={handleInputChange}
                      name='d_debut'
                      placeholder='d_debut'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='d_fin'>Date fin </label>
                    <input
                      type='text'
                      className='form-control'
                      id='d_fin'
                      required
                      value={currentPrise.d_fin}
                      onChange={handleInputChange}
                      name='d_fin'
                      placeholder='d_fin'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='nb_s_s'>
                      Nombre de seance par semaine{' '}
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='nb_s_s'
                      required
                      value={currentPrise.nb_s_s}
                      onChange={handleInputChange}
                      name='nb_s_s'
                      placeholder='nb_s_s'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='etat'>Etat</label>
                    <input
                      type='text'
                      className='form-control'
                      id='etat'
                      required
                      value={currentPrise.etat}
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
                  onClick={updatePrise}
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
export default EditPrise
