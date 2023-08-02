import React, { useState } from 'react'
import FactureDataService from '../../services/facture.service'
const AddFacture = () => {
  const initialFactureState = {
    id: null,
    total: '',
    date: '',
    titre: '',
    etat: 0,
  }
  const [facture, setFacture] = useState(initialFactureState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFacture({ ...facture, [name]: value })
  }

  const saveFacture = () => {
    var data = {
      total: facture.total,
      date: facture.date,
      titre: facture.titre,
      etat: facture.etat,
    }
    FactureDataService.create(data)
      .then((response) => {
        setFacture({
          id: response.data.id,
          total: response.data.total,
          date: response.data.date,
          titre: response.data.titre,
          etat: response.data.etat,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newFacture = () => {
    setFacture(initialFactureState)
    setSubmitted(false)
  }

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='submit-form'>
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className='btn btn-success' onClick={newFacture}>
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='form-group'>
                  <label htmlFor='total' id='total'>
                    Total
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='total'
                    required
                    // value={this.state.titre}
                    value={facture.total}
                    // onChange={this.onChangeTitre}
                    onChange={handleInputChange}
                    name='total'
                    aria-describedby='total'
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
                    value={facture.date}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='titre'>Titre </label>
                  <input
                    type='text'
                    className='form-control'
                    id='titre'
                    required
                    value={facture.titre}
                    onChange={handleInputChange}
                    name='titre'
                    placeholder='titre'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='etat'>Etat</label>
                  <input
                    type='text'
                    className='form-control'
                    id='etat'
                    required
                    value={facture.etat}
                    onChange={handleInputChange}
                    name='etat'
                  />
                </div>

                <button onClick={saveFacture} className='btn btn-success'>
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddFacture
