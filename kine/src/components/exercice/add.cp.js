import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ExerciceDataService from '../../services/exercice.service'
const AddExercice = () => {
    const navigate = useNavigate()
  const initialExerciceState = {
    id: null,
    type: '',
    titre: '',
    instructions: '',
    etat: 0,
  }
  const [exercice, setExercice] = useState(initialExerciceState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setExercice({ ...exercice, [name]: value })
  }

  const saveExercice = () => {
    var data = {
      type: exercice.type,
      titre: exercice.titre,
      instructions: exercice.instructions,
      etat: exercice.etat,
    }
    ExerciceDataService.create(data)
      .then((response) => {
        setExercice({
          id: response.data.id,
          type: response.data.type,
          titre: response.data.titre,
          instructions: response.data.instructions,
          etat: response.data.etat,
       
        })
        setSubmitted(true)
       navigate('/exercices')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newExercice = () => {
    setExercice(initialExerciceState)
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
                    <button className='btn btn-success' onClick={newExercice}>
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
                          <h5 className='element-inner-header'>exercices </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='form-group'>
                        <label htmlFor='type' id='type'>
                          Type
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='type'
                          required
                          // value={this.state.titre}
                          value={exercice.type}
                          // onChange={this.onChangeTitre}
                          onChange={handleInputChange}
                          name='type'
                          aria-describedby='type'
                          placeholder='Type Exercice'
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
                          value={exercice.titre}
                          placeholder='Titre Exercice'
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='instructions'>Instructions </label>
                        <input
                          type='text'
                          className='form-control'
                          id='instructions'
                          required
                          value={exercice.instructions}
                          onChange={handleInputChange}
                          name='instructions'
                          placeholder='Instructions Exercice'
                        />
                      </div>
                 
                 

                      <div className='form-buttons-w'>
                        <button
                          className='btn btn-primary'
                          type='submit'
                          onClick={saveExercice}
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
export default AddExercice
