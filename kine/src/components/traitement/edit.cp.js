import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TraitementDataService from '../../services/traitement.service'
const EditTraitement = (props) => {
  let { id } = useParams()
  const initialTraitementState = {
    id: null,
    type: '',
    titre: '',
    etat: 0,
  }
  const [currentTraitement, setCurrentTraitement] = useState(
    initialTraitementState
  )
  const [message, setMessage] = useState('')

  const getTraitement = (id) => {
    TraitementDataService.get(id)
      .then((response) => {
        setCurrentTraitement(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getTraitement(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentTraitement({ ...currentTraitement, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentTraitement.id,
      type: currentTraitement.type,
      titre: currentTraitement.titre,
      etat: status,
    }
    TraitementDataService.update(currentTraitement.id, data)
      .then((response) => {
        setCurrentTraitement({ ...currentTraitement, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateTraitement = () => {
    TraitementDataService.update(currentTraitement.id, currentTraitement)
      .then((response) => {
        console.log(response.data)
        setMessage('The Traitement was updated successfully!')
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
            {currentTraitement ? (
              <div className='edit-form'>
                <h4>Traitement</h4>
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
                      value={currentTraitement.type}
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
                      value={currentTraitement.titre}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='etat'>Etat</label>
                    <input
                      type='text'
                      className='form-control'
                      id='etat'
                      required
                      value={currentTraitement.etat}
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
                  onClick={updateTraitement}
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
export default EditTraitement
