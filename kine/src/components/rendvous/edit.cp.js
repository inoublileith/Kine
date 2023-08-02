import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RendDataService from '../../services/rendv.service'
const EditRend = (props) => {
  let { id } = useParams()
  const initialRendState = {
    id: null,
    heure: '',
    date: '',
    etat: 0,
  }
  const [currentRend, setCurrentRend] = useState(initialRendState)
  const [message, setMessage] = useState('')

  const getRend = (id) => {
    RendDataService.get(id)
      .then((response) => {
        setCurrentRend(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getRend(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentRend({ ...currentRend, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentRend.id,
      heure: currentRend.heure,
      date: currentRend.date,
      etat: status,
    }
    RendDataService.update(currentRend.id, data)
      .then((response) => {
        setCurrentRend({ ...currentRend, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateRend = () => {
    RendDataService.update(currentRend.id, currentRend)
      .then((response) => {
        console.log(response.data)
        setMessage('The Rendez-vous was updated successfully!')
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
            {currentRend ? (
              <div className='edit-form'>
                <h4>Rendez-vous</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='heure' id='heure'>
                      Heure
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='heure'
                      required
                      value={currentRend.heure}
                      onChange={handleInputChange}
                      name='heure'
                      aria-describedby='heure'
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
                      value={currentRend.date}
                    />
                  </div>
               
                  <div className='form-group'>
                    <label htmlFor='etat'>Etat</label>
                    <input
                      type='text'
                      className='form-control'
                      id='etat'
                      required
                      value={currentRend.etat}
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
                  onClick={updateRend}
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
export default EditRend
