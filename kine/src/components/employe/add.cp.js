import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import EmployeDataService from '../../services/employe.service'
const AddEmploye = () => {
   const { user: currentUser } = useSelector((state) => state.auth)
 
  const navigate = useNavigate()
  const initialEmployeState = {
    id: null,
    salaire: '',
    tache: '',
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    idk: currentUser.id,
  }
  const [employe, setEmploye] = useState(initialEmployeState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEmploye({ ...employe, [name]: value })
  }

  const saveEmploye = () => {
    var data = {
      salaire: employe.salaire,
      tache: employe.tache,
      nom: employe.nom,
      prenom: employe.prenom,
      adresse: employe.adresse,
      email: employe.email,
      idk: employe.idk,
    }
    EmployeDataService.create(data)
      .then((response) => {
        setEmploye({
          id: response.data.id,
          salaire: response.data.salaire,
          tache: response.data.tache,
          nom: response.data.nom,
          prenom: response.data.prenom,
          adresse: response.data.adresse,
          email: response.data.email,
          idk: response.data.idk,
        })
        setSubmitted(true)
      navigate('/employes')
      })
      .catch((e) => {
        console.log(e)
      })
  }


  const newEmploye = () => {
    setEmploye(initialEmployeState)
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
                    <button className='btn btn-success' onClick={newEmploye}>
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
                          <h5 className='element-inner-header'>Employes </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='form-group'>
                        <label htmlFor='salaire' id='salaire'>
                          Salaire
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='salaire'
                          required
                          // value={this.state.titre}
                          value={employe.salaire}
                          // onChange={this.onChangeTitre}
                          onChange={handleInputChange}
                          name='salaire'
                          aria-describedby='salaire'
                          placeholder='Salaire'
                    
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tache' id='tache'>
                          Tâche
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='tache'
                          required
                          onChange={handleInputChange}
                          name='tache'
                          aria-describedby='tache'
                          value={employe.tache}
                          placeholder='Tâche'
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='nom'>Nom </label>
                        <input
                          type='text'
                          className='form-control'
                          id='nom'
                          required
                          value={employe.nom}
                          onChange={handleInputChange}
                          name='nom'
                          placeholder='Nom'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='prenom'>Prénom </label>
                        <input
                          type='text'
                          className='form-control'
                          id='prenom'
                          required
                          onChange={handleInputChange}
                          value={employe.prenom}
                          name='prenom'
                          placeholder='Prénom'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='adresse'>Adresse</label>
                        <input
                          type='text'
                          className='form-control'
                          id='adresse'
                          required
                          value={employe.adresse}
                          onChange={handleInputChange}
                          name='adresse'
                          placeholder='Adresse'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email'>email</label>
                        <input
                          type='text'
                          className='form-control'
                          id='email'
                          required
                          value={employe.email}
                          onChange={handleInputChange}
                          name='email'
                          placeholder='Email'
                        />
                      </div>

                      <div className='form-buttons-w'>
                        <button
                          className='btn btn-primary'
                          type='submit'
                          onClick={saveEmploye}
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
export default AddEmploye
