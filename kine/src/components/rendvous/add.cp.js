import React, { useState } from 'react'
import RendDataService from '../../services/rendv.service'
import { useNavigate,useParams } from 'react-router-dom'

const AddRend = () => {

  const navigate = useNavigate()
  const initialRendState = {
    id: null,
    heure: '',
    date: '',
    etat: 0,
  }
  const [rend, setRend] = useState(initialRendState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setRend({ ...rend, [name]: value })
  }

  const saveRend = () => {
    var data = {
      heure: rend.heure,
      date: rend.date,
      etat: rend.etat,
    }
    RendDataService.create(data)
      .then((response) => {
        setRend({
          id: response.data.id,
          heure: response.data.heure,
          date: response.data.date,
          etat: response.data.etat,
        })
        setSubmitted(true)
      navigate('/rends')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newRend = () => {
    setRend(initialRendState)
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
                    <button className='btn btn-success' onClick={newRend}>
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
                          <h5 className='element-inner-header'>Rendez-vous </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='form-group'>
                        <label htmlFor='heure' id='heure'>
                          Heure
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='heure'
                          required
                          // value={this.state.titre}
                          value={rend.heure}
                          // onChange={this.onChangeTitre}
                          onChange={handleInputChange}
                          name='heure'
                          aria-describedby='heure'
                          placeholder='Heure de Rendez-vous'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='date' id='date'>
                          Date
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          id='date'
                          required
                          onChange={handleInputChange}
                          name='date'
                          aria-describedby='date'
                          value={rend.date}
                          placeholder='Date de Rendez-vous'
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='etat'>Etat </label>
                        <input
                          type='text'
                          className='form-control'
                          id='etat'
                          required
                          value={rend.etat}
                          onChange={handleInputChange}
                          name='etat'
                          placeholder='Etat de Rendez-vous'
                        />
                      </div>

                      <div className='form-buttons-w'>
                        <button
                          className='btn btn-primary'
                          type='submit'
                          onClick={saveRend}
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
export default AddRend
