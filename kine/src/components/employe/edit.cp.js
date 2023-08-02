import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EmployeDataService from '../../services/employe.service'
const EditEmploye = (props) => {
  let { id } = useParams()
  const initialEmployeState = {
    id: null,
    salaire: '',
    tache: '',
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
  }
  const [currentEmploye, setCurrentEmploye] = useState(initialEmployeState)
  const [message, setMessage] = useState('')

  const getEmploye = (id) => {
    EmployeDataService.get(id)
      .then((response) => {
        setCurrentEmploye(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getEmploye(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentEmploye({ ...currentEmploye, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentEmploye.id,
      salaire: currentEmploye.salaire,
      tache: currentEmploye.tache,
      nom: currentEmploye.nom,
      prenom: currentEmploye.prenom,
      adresse: currentEmploye.adresse,
      email: currentEmploye.email,
    }
    EmployeDataService.update(currentEmploye.id, data)
      .then((response) => {
        setCurrentEmploye({ ...currentEmploye, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateEmploye = () => {
    EmployeDataService.update(currentEmploye.id, currentEmploye)
      .then((response) => {
        console.log(response.data)
        setMessage('The Employe was updated successfully!')
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
                {currentEmploye ? (
                  <div className='element-box'>
                    <div className='edit-form'>
                      <div className='element-info'>
                        <div className='element-info-with-icon'>
                          <div className='element-info-icon'>
                            <div className='os-icon os-icon-wallet-loaded'></div>
                          </div>
                          <div className='element-info-text'>
                            <h4>Employe</h4>
                          </div>
                        </div>
                      </div>
                      <form>
                        <div className='form-group'>
                          <label htmlFor='salaire' id='salaire'>
                            Salaire
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            id='salaire'
                            required
                            value={currentEmploye.salaire}
                            onChange={handleInputChange}
                            name='salaire'
                            aria-describedby='salaire'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='tache' id='tache'>
                            Tâche
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            id='tache'
                            required
                            onChange={handleInputChange}
                            name='tache'
                            aria-describedby='tache'
                            value={currentEmploye.tache}
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='nom'>Nom </label>
                          <input
                            type='text'
                            className='form-control'
                            id='nom'
                            required
                            value={currentEmploye.nom}
                            onChange={handleInputChange}
                            name='nom'
                            placeholder='nom'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='prenom'>Prénom </label>
                          <input
                            type='text'
                            className='form-control'
                            id='prenom'
                            required
                            onChange={handleInputChange}
                            value={currentEmploye.prenom}
                            name='prenom'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='adresse'>Adresse</label>
                          <input
                            type='text'
                            className='form-control'
                            id='adresse'
                            required
                            value={currentEmploye.adresse}
                            onChange={handleInputChange}
                            name='adresse'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='email'>email</label>
                          <input
                            type='text'
                            className='form-control'
                            id='email'
                            required
                            value={currentEmploye.email}
                            onChange={handleInputChange}
                            name='email'
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
                        onClick={updateEmploye}
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
export default EditEmploye
