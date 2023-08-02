import React, { useState } from 'react'
import PriseDataService from '../../services/prise.service'
import FactureDataService from '../../services/facture.service'
import { useDispatch, useSelector } from 'react-redux'
import {useParams } from 'react-router-dom'
const AddPrise = () => {
    const { user: currentUser } = useSelector((state) => state.auth)
      let { id } = useParams()
      let { idp } = useParams()
  const initialPriseState = {
    id: null,
    anne: '',
    n_ordre: '',
    nb_seance: '',
    d_debut: '',
    d_fin: '',
    nb_s_s: '',
    etat: 0,
    idfac: '',
    idpat: idp,
    idrend:id,
    idk:currentUser.id
  }
  const initialFactureState = {
    id: null,
    prix_unitaire: 11.5,
    prix_ht: '',
    TVA: 7,
    m_tva: 11.258,
    prix_TTC: '',
    etat: 0,
    idk: currentUser.id,
  }


  const [facture, setFacture] = useState(initialFactureState)
  const [prise, setPrise] = useState(initialPriseState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setPrise({ ...prise, [name]: value })
    setFacture({ ...facture, [name]: value })

  }

  const savePrise = async () => {
    var data = {
      prix_unitaire: facture.prix_unitaire,
      prix_ht: facture.prix_ht,
      TVA: facture.TVA,
      m_tva: facture.m_tva,
      prix_TTC: facture.prix_TTC,
      etat: facture.etat,
      idk: facture.idk,
    }
    await FactureDataService.create(data)
      .then((response) => {
        var datax = {
          anne: prise.anne,
          n_ordre: prise.n_ordre,
          nb_seance: prise.nb_seance,
          d_debut: prise.d_debut,
          d_fin: prise.d_fin,
          nb_s_s: prise.nb_s_s,
          etat: prise.etat,
          idfac: response.data.id,
          idpat: prise.idpat,
          idrend: prise.idrend,
          idk: prise.idk,
        }

        PriseDataService.create(datax)
          .then((res) => {
            setPrise({
              id: res.data.id,
              anne: res.data.anne,
              n_ordre: res.data.n_ordre,
              nb_seance: res.data.nb_seance,
              d_debut: res.data.d_debut,
              d_fin: res.data.d_fin,
              nb_s_s: res.data.nb_s_s,
              etat: res.data.etat,
              idfac: res.data.id,
              idpat: res.data.idpat,
              idrend: res.data.idrend,
              idk: res.data.idk,
            })
             const data = {
               id: res.data.id,
               nb_seance: res.data.nb_seance,
               idpat: res.data.idpat,
               idk: res.data.idk,
             }

             PriseDataService.createseance(data).then(() => {
               console.log('success')
             })
            setFacture({
              id: response.data.id,
              prix_unitaire: response.data.prix_unitaire,
              prix_ht: response.data.prix_ht,
              TVA: response.data.TVA,
              m_tva: response.data.m_tva,
              prix_TTC: response.data.prix_TTC,
              etat: response.data.etat,
            })
            setSubmitted(true)
            console.log(response.data)
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newPrise = () => {
    setPrise(initialPriseState)
    setSubmitted(false)
  }
  {
    /*const newFacture = () => {
   setFacture(initialFactureState)
   setSubmitted(false)
 }*/
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
                    <button className='btn btn-success' onClick={newPrise}>
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
                          <h5 className='element-inner-header'>
                            Prise En Charge{' '}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='form-group'>
                        <label htmlFor='anne' id='anne'>
                          Anné
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='anne'
                          required
                          value={prise.anne}
                          onChange={handleInputChange}
                          name='anne'
                          aria-describedby='heure'
                          placeholder='Anné de Prises en charge'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='n_ordre' id='n_ordre'>
                          Numéro d'ordre
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='n_ordre'
                          required
                          onChange={handleInputChange}
                          name='n_ordre'
                          aria-describedby='date'
                          value={prise.n_ordre}
                          placeholder='Numéro d ordre de Prises en charge'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='nb_seance' id='nb_seance'>
                          Nombre de seances
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='nb_seance'
                          required
                          onChange={handleInputChange}
                          name='nb_seance'
                          aria-describedby='date'
                          value={prise.nb_seance}
                          placeholder='Nombre des seances'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='d_debut' id='d_debut'>
                          Date début
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          id='d_debut'
                          required
                          onChange={handleInputChange}
                          name='d_debut'
                          aria-describedby='date'
                          value={prise.d_debut}
                          placeholder='Date début '
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='d_fin' id='d_fin'>
                          Date fin
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          id='d_fin'
                          required
                          onChange={handleInputChange}
                          name='d_fin'
                          aria-describedby='date'
                          value={prise.d_fin}
                          placeholder='Date fin '
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='nb_s_s' id='nb_s_s'>
                          Nombre de seances par semaines
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='nb_s_s'
                          required
                          onChange={handleInputChange}
                          name='nb_s_s'
                          aria-describedby='date'
                          value={prise.nb_s_s}
                          placeholder='  Nombre de seances par semaines '
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='etat'>Etat </label>
                        <input
                          type='text'
                          className='form-control'
                          id='etat'
                          required
                          value={prise.etat}
                          onChange={handleInputChange}
                          name='etat'
                          placeholder='Etat de Prises en charge'
                        />
                      </div>
                      <div className='element-info'>
                        <div className='element-info-with-icon'>
                          <div className='element-info-icon'>
                            <div className='os-icon os-icon-wallet-loaded'></div>
                          </div>
                          <div className='element-info-text'>
                            <h5 className='element-inner-header'>
                              Factures Générer{' '}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='prix_unitaire' id='prix_unitaire'>
                          Prix unitaire
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='prix_unitaire'
                          required
                          onChange={handleInputChange}
                          name='prix_unitaire'
                          aria-describedby='date'
                          value={facture.prix_unitaire}
                          placeholder={facture.prix_unitaire}
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='TVA' id='TVA'>
                          TVA
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='TVA'
                          required
                          onChange={handleInputChange}
                          name='TVA'
                          aria-describedby='TVA'
                          value={facture.TVA}
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='m_tva' id='m_tva'>
                          Montant tva
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='m_tva'
                          required
                          onChange={handleInputChange}
                          name='m_tva'
                          aria-describedby='m_tva'
                          value={facture.m_tva}
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='prix_TTC' id='prix_TTC'>
                          Prix_TTC
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='prix_TTC'
                          required
                          onChange={handleInputChange}
                          name='prix_TTC'
                          aria-describedby='prix_TTC'
                          value={(facture.prix_TTC = prise.nb_seance * 11.5)}
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='prix_ht' id='prix_ht'>
                          Prix HT
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='prix_ht'
                          required
                          onChange={handleInputChange}
                          name='prix_ht'
                          aria-describedby='prix_ht'
                          value={(facture.prix_ht = facture.prix_TTC - 11.258)}
                          placeholder=''
                        />
                      </div>
                      <div className='form-buttons-w'>
                        <button
                          className='btn btn-primary'
                          type='submit'
                          onClick={savePrise}
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
export default AddPrise
