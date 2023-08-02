import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ExerciceDataService from '../../services/exercice.service'
const EditExercice = (props) => {
  let { id } = useParams()
  const initialExerciceState = {
    id: null,
    type: '',
    titre: '',
    instructions: '',
    etat: 0,
  }
  const [currentExercice, setCurrentExercice] = useState(initialExerciceState)
  const [message, setMessage] = useState('')

  const getExercice = (id) => {
    ExerciceDataService.get(id)
      .then((response) => {
        setCurrentExercice(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getExercice(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentExercice({ ...currentExercice, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentExercice.id,
      type: currentExercice.type,
      titre: currentExercice.titre,
      instructions: currentExercice.instructions,
      etat: status,
    }
    ExerciceDataService.update(currentExercice.id, data)
      .then((response) => {
        setCurrentExercice({ ...currentExercice, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateExercice = () => {
    ExerciceDataService.update(currentExercice.id, currentExercice)
      .then((response) => {
        console.log(response.data)
        setMessage('The Exercice was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-7'>
            <div className='element-wrapper'>
              <div>
                {currentExercice ? (
                  <div className='element-box'>
                    <div className='edit-form'>
                      <div className='element-info'>
                        <div className='element-info-with-icon'>
                          <div className='element-info-icon'>
                            <div className='os-icon os-icon-wallet-loaded'></div>
                          </div>
                          <div className='element-info-text'>
                            <h4>Exercices</h4>
                          </div>
                        </div>
                      </div>
                      <form>
                        <div className='form-group'>
                          <label htmlFor='type' id='type'>
                            Type
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            id='type'
                            required
                            value={currentExercice.type}
                            onChange={handleInputChange}
                            name='type'
                            aria-describedby='type'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='titre' id='titre'>
                            Titre
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            id='titre'
                            required
                            onChange={handleInputChange}
                            name='titre'
                            aria-describedby='titre'
                            value={currentExercice.titre}
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='instructions'>Instructions </label>
                          <input
                            type='instructions'
                            className='form-control'
                            id='instructions'
                            required
                            value={currentExercice.instructions}
                            onChange={handleInputChange}
                            name='instructions'
                            placeholder='instructions'
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
                        onClick={updateExercice}
                      >
                        Update
                      </button>
                      <p>{message}</p>
                    </div>
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
      </div>
    </div>
  )
}
export default EditExercice
