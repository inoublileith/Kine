import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProduitDataService from '../../services/produit.service'
const AddProduit = () => {
  const navigate = useNavigate()
  const [selectedFiles, setSelectedFiles] = useState(undefined)
  const [currentFile, setCurrentFile] = useState(undefined)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState('')
  const [fileInfos, setFileInfos] = useState([])
  const initialProduitState = {
    id: null,
    nom: '',
    description: '',
    image: '',
    prix: '',
    promoted: 0,
    etat: 0,
    iduser: 1,
  }
  const [produit, setProduit] = useState(initialProduitState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setProduit({ ...produit, [name]: value })
  }
  const selectFile = (event) => {
    setSelectedFiles(event.target.files)
  }
  const saveProduit = () => {
    let currentFile = selectedFiles[0]
    setProgress(0)
    setCurrentFile(currentFile)

    var data = {
      nom: produit.nom,
      description: produit.description,
      prix: produit.prix,
      image: currentFile,
      promoted: produit.promoted,
      etat: produit.etat,
      iduser: produit.iduser,
    }
    ProduitDataService.create(data, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total))
    })
      .then((response) => {
        setMessage(response.data.message)
        setProduit({
          id: response.data.id,
          nom: response.data.nom,
          description: response.data.description,
          prix: response.data.prix,
          image: response.data.image,
          promoted: response.data.promoted,
          etat: response.data.etat,
          iduser: response.data.iduser,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
        setProgress(0)
        setMessage('Could not upload the file!')
        setCurrentFile(undefined)
      })
    setSelectedFiles(undefined)
  }

  return (
    <div className='submit-form'>
      {submitted ? (
        navigate('/recommandations')
      ) : (
        <div>
          <form>
            {currentFile && (
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-info progress-bar-striped'
                  role='progressbar'
                  aria-valuenow={progress}
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: progress + '%' }}
                >
                  {progress}%
                </div>
              </div>
            )}
            <input
              type='hidden'
              id='iduser'
              name='iduser'
              value={produit.iduser}
              onChange={handleInputChange}
            />
            <div className='input-group mb-3'>
              <span htmlFor='nom' class='input-group-text' id='nom'>
                nom
              </span>
              <input
                type='text'
                className='form-control'
                id='nom'
                required
                // value={this.state.nom}
                value={produit.nom}
                // onChange={this.onChangenom}
                onChange={handleInputChange}
                name='nom'
                aria-describedby='nom'
              />
            </div>
            <div className='input-group mb-3'>
              <span
                htmlFor='description'
                class='input-group-text'
                id='description'
              >
                Description
              </span>
              <input
                type='text'
                className='form-control'
                id='description'
                required
                onChange={handleInputChange}
                name='description'
                aria-describedby='nom'
                value={produit.description}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='prix'>Prix</label>
              <input
                type='text'
                className='form-control'
                id='prix'
                required
                value={produit.prix}
                onChange={handleInputChange}
                name='prix'
                placeholder='prix'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='promoted'>Promoted</label>
              <input
                type='text'
                className='form-control'
                id='promoted'
                required
                onChange={handleInputChange}
                value={produit.promoted}
                name='promoted'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='etat'>Etat</label>
              <input
                type='text'
                className='form-control'
                id='etat'
                required
                value={produit.etat}
                onChange={handleInputChange}
                name='etat'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='image'>Image</label>
              <input
                type='file'
                className='form-control'
                id='image'
                required
                value={produit.image}
                onChange={selectFile}
                name='image'
              />
            </div>
            <button
              onClick={saveProduit}
              disabled={!selectedFiles}
              className='btn btn-success'
            >
              Submit
            </button>
          </form>
          <div className='alert alert-light' role='alert'>
            {message}
          </div>
        </div>
      )}
    </div>
  )
}
export default AddProduit
