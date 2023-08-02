import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SeanceDataService from '../../services/seance.service'
const EditSeance = (props) => {
  let { id } = useParams()
  const initialSeanceState = {
    id: null,
    date: '',
    debut: '',
    fin: '',
    etat: 0,
  }
  const [currentSeance, setCurrentSeance] = useState(initialSeanceState)
  const [message, setMessage] = useState('')

  const getSeance = (id) => {
    SeanceDataService.get(id)
      .then((response) => {
        setCurrentSeance(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getSeance(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentSeance({ ...currentSeance, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentSeance.id,
      date: currentSeance.date,
      debut: currentSeance.debut,
      fin: currentSeance.fin,
      etat: status,
    }
    SeanceDataService.update(currentSeance.id, data)
      .then((response) => {
        setCurrentSeance({ ...currentSeance, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateSeance = () => {
    SeanceDataService.update(currentSeance.id, currentSeance)
      .then((response) => {
        console.log(response.data)
        setMessage('The Seance was updated successfully!')
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
            {currentSeance ? (
              <div className='edit-form'>
                <h4>Seances</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='date' id='date'>
                      Date
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='date'
                      required
                      value={currentSeance.date}
                      onChange={handleInputChange}
                      name='date'
                      aria-describedby='date'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='debut' id='debut'>
                      Début de seance
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='debut'
                      required
                      onChange={handleInputChange}
                      name='debut'
                      aria-describedby='debut'
                      value={currentSeance.debut}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='fin'>Fin de seance </label>
                    <input
                      type='text'
                      className='form-control'
                      id='fin'
                      required
                      value={currentSeance.fin}
                      onChange={handleInputChange}
                      name='fin'
                      placeholder='fin'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='etat'>Etat</label>
                    <input
                      type='text'
                      className='form-control'
                      id='etat'
                      required
                      value={currentSeance.etat}
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
                  onClick={updateSeance}
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
export default EditSeance
