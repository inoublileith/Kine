import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BordDataService from '../../services/bord.service'
const EditBord = (props) => {
  let { id } = useParams()
  const initialBordState = {
    id: null,
    total: '',
    date: '',
    etat: 0,
  }
 
  const [currentBord, setCurrentBord] = useState(initialBordState)
  const [message, setMessage] = useState('')

  const getBord= (id) => {
    BordDataService.get(id)
      .then((response) => {
        setCurrentBord(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getBord(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentBord({ ...currentBord, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentBord.id,
      total: currentBord.total,
      date: currentBord.date,
      etat: status,
    }
    BordDataService.update(currentBord.id, data)
      .then((response) => {
        setCurrentBord({ ...currentBord, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateBord = () => {
    BordDataService.update(currentBord.id, currentBord)
      .then((response) => {
        console.log(response.data)
        setMessage('The bordoureau was updated successfully!')
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
            {currentBord ? (
              <div className='edit-form'>
                <h4>Bordoureaux</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='date' id='date'>
                      Date
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='date'
                      required
                      value={currentBord.date}
                      onChange={handleInputChange}
                      name='date'
                      aria-describedby='date'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='total' id='total'>
                      Total
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='total'
                      required
                      onChange={handleInputChange}
                      name='total'
                      aria-describedby='total'
                      value={currentBord.total}
                    />
                  </div>
                  
                  <div className='form-group'>
                    <label htmlFor='etat'>Etat</label>
                    <input
                      type='text'
                      className='form-control'
                      id='etat'
                      required
                      value={currentBord.etat}
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
                  onClick={updateBord}
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
export default EditBord
