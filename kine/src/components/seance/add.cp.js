import React, { useState } from 'react'
import SeanceDataService from '../../services/seance.service'
const AddSeance = () => {
  const initialSeanceState = {
    id: null,
    date: '',
    debut: '',
    fin: '',
    etat:0,

  }
  const [seance, setSeance] = useState(initialSeanceState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSeance({ ...seance, [name]: value })
  }

  const saveSeance = () => {
    var data = {
      date: seance.date,
      debut: seance.debut,
      fin: seance.fin,
      etat: seance.etat,

    }
    SeanceDataService.create(data)
      .then((response) => {
        setSeance({
          id: response.data.id,
          date: response.data.date,
          debut: response.data.debut,
          fin: response.data.fin,
          etat: response.data.etat,

        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newSeance = () => {
    setSeance(initialSeanceState)
    setSubmitted(false)
  }

  return (
    <>
      <div className='page-content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='submit-form'>
              {submitted ? (
                <div>
                  <h4>You submitted successfully!</h4>
                  <button className='btn btn-success' onClick={newSeance}>
                    New One
                  </button>
                </div>
              ) : (
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
                      value={seance.date}
                      // onChange={this.onChangeTitre}
                      onChange={handleInputChange}
                      name='date'
                      aria-describedby='date'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='debut' id='debut'>
                      Début Seance
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='debut'
                      required
                      onChange={handleInputChange}
                      name='debut'
                      aria-describedby='debut'
                      value={seance.debut}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='nom'>Fin Seance </label>
                    <input
                      type='text'
                      className='form-control'
                      id='fin'
                      required
                      value={seance.fin}
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
                      value={seance.etat}
                      onChange={handleInputChange}
                      name='etat'
                    />
                  </div>

                  <button onClick={saveSeance} className='btn btn-success'>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddSeance
