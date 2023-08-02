import React, { useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { processLogin } from '../actions/auth'

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const Login = (props) => {
  const navigate = useNavigate()
  const form = useRef()
  const checkBtn = useRef()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const onChangeLogin = (e) => {
    const login = e.target.value
    setLogin(login)
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }


  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    form.current.validateAll()
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(processLogin(login, password))
        .then(() => {
          navigate('/')
            window.location.reload()
           
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }
  if (isLoggedIn) {
    return navigate('/')
  }
  return (
    <div className='all-wrapper menu-side with-pattern'>
      <div className='auth-box-w'>
        <div className='logo-w'>
          <a href=''>
            
            <img alt='' src='assets/img/logo-big.png' />
          </a>
        </div>
        <h4 className='auth-header'>Login Form</h4>
        <Form onSubmit={handleLogin} ref={form}>
          <div className='form-group'>
            <label for=''>Username</label>
            <Input
              className='form-control'
              placeholder='Enter your username'
              type='text'
              name='login'
              value={login}
              onChange={onChangeLogin}
              validations={[required]}
            />
            <div className='pre-icon os-icon os-icon-user-male-circle'></div>
          </div>
          <div className='form-group'>
            <label for=''>Password</label>
            <Input
              className='form-control'
              placeholder='Enter your password'
              type='password'
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
            <div className='pre-icon os-icon os-icon-fingerprint'></div>
          </div>
          <div className='buttons-w'>
            <button className='btn btn-primary' disabled={loading}>
              {loading && (
                <span className='spinner-border spinner-border-sm'></span>
              )}
              Log me in
            </button>
            <div className='form-check-inline'>
              <a href='/register' className='btn btn-primary'>
                Register
              </a>
            </div>
          </div>
          {message && (
            <div className='form-group'>
              <div className='alert alert-danger' role='alert'>
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
export default Login
