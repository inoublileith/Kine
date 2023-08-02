import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BordDataService from '../../services/bord.service'
import { useDispatch, useSelector } from 'react-redux'
const AddBord = () => {
    const { user: currentUser } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const initialBordState = {
    id: null,
    total: '',
    date: '',
    etat: 0,
    idk: currentUser.id,
  }
  const [bord, setBord] = useState(initialBordState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setBord({ ...bord, [name]: value })
  }

  const saveBord = () => {
    var data = {
      total: bord.total,
      date: bord.date,
      etat: bord.etat,
      idk: bord.idk,
    }
    BordDataService.create(data)
      .then((response) => {
        setBord({
          id: response.data.id,
          total: response.data.total,
          date: response.data.date,
          etat: response.data.etat,
          idk: response.data.idk,
        })
        setSubmitted(true)
        navigate('/bords')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newBord = () => {
    setBord(initialBordState)
    setSubmitted(false)
  }

  return (
    <>
      <div className='page-content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-7'>
              <div className='element-wrapper'>
                {submitted ? (
                  <div>
                    <h4>You submitted successfully!</h4>
                    <button className='btn btn-success' onClick={newBord}>
                      New One
                    </button>
                  </div>
                ) : (
                  <div className='element-box'>
                    <div className='element-info'>
                      <div className='element-info-with-icon'>
                        <div className='element-info-icon'>
                          <div className='os-icon os-icon-wallet-loaded'></div>
                        </div>
                        <div className='element-info-text'>
                          <h5 className='element-inner-header'>Bordoureaus </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='form-group'>
                        <label htmlFor='date' id='date'>
                          Date
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          id='date'
                          required
                          // value={this.state.titre}
                          value={bord.date}
                          // onChange={this.onChangeTitre}
                          onChange={handleInputChange}
                          name='date'
                          aria-describedby='date'
                          placeholder='Date de Bordoureaus'
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
                          value={bord.total}
                          placeholder='Total de Bordoureaus'
                        />
                      </div>

                      <div className='form-buttons-w'>
                        <button
                          className='btn btn-primary'
                          type='submit'
                          onClick={saveBord}
                        >
                          {' '}
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddBord
