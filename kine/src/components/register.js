import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import { register } from '../actions/auth'
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        This is not a valid email.
      </div>
    )
  }
}
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='alert alert-danger' role='alert'>
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className='alert alert-danger' role='alert'>
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}
const Register = () => {
  const navigate = useNavigate()
  const form = useRef()
  const checkBtn = useRef()
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [profil, setProfil] = useState(2)
  const [adresse, setAdresse] = useState('')
  const [successful, setSuccessful] = useState(false)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const onChangeLogin = (e) => {
    const login = e.target.value
    setLogin(login)
  }
  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const onChangeTel = (e) => {
    const tel = e.target.value
    setTel(tel)
  }
  const onChangeNom = (e) => {
    const nom = e.target.value
    setNom(nom)
  }
  const onChangePrenom = (e) => {
    const prenom = e.target.value
    setPrenom(prenom)
  }
  const onChangeAdresse = (e) => {
    const adresse = e.target.value
    setAdresse(adresse)
  }
  const handleRegister = (e) => {
    e.preventDefault()
    setSuccessful(false)
    form.current.validateAll()
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(nom, prenom, tel, email,adresse, login, password,profil))
        .then(() => {
          navigate('/')
           window.location.reload()
        })
        .catch(() => {
          setSuccessful(false)
        })
    }
  }
  return (
    <div class='all-wrapper menu-side with-pattern'>
      <div class='auth-box-w wider'>
        <div class='logo-w'>
          <a href='index.html'>
            <img alt='' src='assets/img/logo-big.png' />
          </a>
        </div>
        <h4 class='auth-header'>Create new account</h4>
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <>
              <div className='form-group'>
                <label htmlFor='nom'>Nom</label>
                <Input
                  type='nom'
                  className='form-control'
                  name='nom'
                  value={nom}
                  onChange={onChangeNom}
                  placeholder='Enter votre nom'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='prenom'>prénom</label>
                <Input
                  type='prenom'
                  className='form-control'
                  name='prenom'
                  value={prenom}
                  onChange={onChangePrenom}
                  placeholder='Enter votre prenom'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='tel'>telephone</label>
                <Input
                  type='tel'
                  className='form-control'
                  name='tel'
                  value={tel}
                  onChange={onChangeTel}
                  placeholder='Enter votre telephone'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <Input
                  type='text'
                  className='form-control'
                  name='email'
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                  placeholder='Entrer votre Email'
                />
              </div>{' '}
              <div className='form-group'>
                <label htmlFor='adresse'>Adresse</label>
                <Input
                  type='adresse'
                  className='form-control'
                  name='adresse'
                  value={adresse}
                  onChange={onChangeAdresse}
                  placeholder='Enter votre adresse'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='username'>User Name</label>
                <Input
                  type='text'
                  className='form-control'
                  name='login'
                  value={login}
                  onChange={onChangeLogin}
                  validations={[required, vusername]}
                />
              </div>
              <div class='form-group'>
                <label for=''> Password</label>
                <Input
                  class='form-control'
                  placeholder='Password'
                  type='password'
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
                <div class='pre-icon os-icon os-icon-fingerprint'></div>
              </div>
              <div  class='buttons-w'>
                <button class='btn btn-primary'>Register Now</button>
              </div>
            </>
          )}
          <div class='buttons-w'>
            <a href='/' class='btn btn-primary'>
              Login
            </a>
          </div>
          {message && (
            <div className='form-group'>
              <div
                className={
                  successful ? 'alert alert-success' : 'alert alert-danger'
                }
                role='alert'
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  )
}
export default Register
