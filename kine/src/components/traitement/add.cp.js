import React, { useState, useEffect, useRef, Component } from 'react'

import TraitementDataService from '../../services/traitement.service'
import ExerciceDataService from '../../services/exercice.service'
import { useParams } from 'react-router-dom'
const AddTraitement = () => {
     let { idsea } = useParams()
  const initialTraitementState = {
    id: null,
    type: '',
    titre: '',
    etat: 0,
    idex1: 1,
    idex2: 1,
    idex3: 1,
    idex4: 1,
    idex5: 1,
    instructions: '',
    idsea:idsea
  }
  const [exercices, setExercices] = useState([])
  const [traitement, setTraitement] = useState(initialTraitementState)
  const [submitted, setSubmitted] = useState(false)
  const exercicesRef = useRef()
  exercicesRef.current = exercices
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setTraitement({ ...traitement, [name]: value })
  }
  useEffect(() => {
    retrieveExercices()
  }, [])
  const saveTraitement = () => {
    var data = {
      type: traitement.type,
      titre: traitement.titre,
      etat: traitement.etat,
      idex1: traitement.idex1,
      idex2: traitement.idex2,
      idex3: traitement.idex3,
      idex4: traitement.idex4,
      idex5: traitement.idex5,
      instructions: traitement.instructions,
      idsea: traitement.idsea,
    }
    TraitementDataService.create(data)
      .then((response) => {
        setTraitement({
          id: response.data.id,
          type: response.data.type,
          titre: response.data.titre,
          etat: response.data.etat,
          idex1: response.data.idex1,
          idex2: response.data.idex2,
          idex3: response.data.idex3,
          idex4: response.data.idex4,
          idex5: response.data.idex5,
          instructions: response.data.instructions,
          idsea: response.data.idsea,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const retrieveExercices = () => {
    ExerciceDataService.getAll()
      .then((response) => {
        setExercices(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const refreshList = () => {
    retrieveExercices()
  }
  const newTraitement = () => {
    setTraitement(initialTraitementState)
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
                    <button className='btn btn-success' onClick={newTraitement}>
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
                          <h5 className='element-inner-header'>Traitement </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='form-group'>
                        <label htmlFor='type' id='type'>
                          {' '}
                          Type
                        </label>
                        <input
                          className='form-control'
                          placeholder='Type Exercice'
                          id='type'
                          required
                          onChange={handleInputChange}
                          name='type'
                          aria-describedby='type'
                          value={traitement.type}
                          type='text'
                        />
                        <div className='help-block form-text with-errors form-control-feedback'></div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='titre' id='titre'>
                          {' '}
                          Titre
                        </label>
                        <input
                          className='form-control'
                          placeholder='Titre Exercice'
                          id='titre'
                          required
                          onChange={handleInputChange}
                          name='titre'
                          aria-describedby='titre'
                          value={traitement.titre}
                          type='text'
                        />
                        <div className='help-block form-text with-errors form-control-feedback'></div>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='idex1'> Exercice 1</label>
                        <select
                          className='form-control'
                          name='idex1'
                          value={traitement.idex1}
                          onChange={handleInputChange}
                        >
                          {exercices.map((row, i) => {
                            return <option value={row.id}>{row.titre}</option>
                          })}
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='idex2'> Exercice 2</label>
                        <select
                          className='form-control'
                          name='idex2'
                          value={traitement.idex2}
                          onChange={handleInputChange}
                        >
                          {exercices.map((row, i) => {
                            return <option value={row.id}>{row.titre}</option>
                          })}
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='idex3'> Exercice 3</label>
                        <select
                          className='form-control'
                          name='idex3'
                          value={traitement.idex3}
                          onChange={handleInputChange}
                        >
                          {exercices.map((row, i) => {
                            return <option value={row.id}>{row.titre}</option>
                          })}
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='idex4'> Exercice 4</label>
                        <select
                          className='form-control'
                          name='idex4'
                          value={traitement.idex4}
                          onChange={handleInputChange}
                        >
                          {exercices.map((row, i) => {
                            return <option value={row.id}>{row.titre}</option>
                          })}
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='idex5'> Exercice 5</label>
                        <select
                          className='form-control'
                          name='idex5'
                          value={traitement.idex5}
                          onChange={handleInputChange}
                        >
                          {exercices.map((row, i) => {
                            return <option value={row.id}>{row.titre}</option>
                          })}
                        </select>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='instructions' id='instructions'>
                          {' '}
                          Instructions
                        </label>
                        <textarea
                          htmlFor='instructions'
                          className='form-control'
                          rows='3'
                          placeholder='Les Instructions Exercice'
                          onChange={handleInputChange}
                          name='instructions'
                          aria-describedby='instructions'
                          value={traitement.instructions}
                        ></textarea>
                      </div>

                      <div className='form-buttons-w'>
                        <button
                          className='btn btn-primary'
                          type='submit'
                          onClick={saveTraitement}
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
export default AddTraitement
