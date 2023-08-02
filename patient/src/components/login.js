import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
  const onChangeUsername = (e) => {
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
    return( navigate('/') 
    
     )
     
  }
  return (
    <>
      <div class='dc-innerbanner-holder dc-haslayout'>
        <div class='container'>
          <div class='row'>
            <div class='col-12 col-sm-12 col-md-12 col-lg-12'>
              <div class='dc-innerbanner'>
                <form class='dc-formtheme dc-form-advancedsearch dc-innerbannerform'>
                  <fieldset>
                    <div class='form-group'>
                      <input
                        type='text'
                        name='search'
                        class='form-control'
                        placeholder='Search doctors, clinics, hospitals, etc.'
                      />
                    </div>
                    <div class='form-group'>
                      <div class='dc-select'>
                        <select
                          class='chosen-select locations'
                          data-placeholder='Country'
                          name='locations'
                        >
                          <option value='Location'>Location*</option>
                          <option value='United State'>United State</option>
                          <option value='Canada'>Canada</option>
                          <option value='England'>England</option>
                          <option value='Switzerland'>Switzerland</option>
                          <option value='New Zealand'>New Zealand</option>
                        </select>
                      </div>
                    </div>
                    <div class='dc-btnarea'>
                      <a href='javascript:void(0);' class='dc-btn'>
                        Search
                      </a>
                    </div>
                  </fieldset>
                </form>
                <a href='javascript:void(0);' class='dc-docsearch'>
                  <span class='dc-advanceicon'>
                    <i></i> <i></i> <i></i>
                  </span>
                  <span>
                    Advanced <br />
                    Search
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class='dc-advancedsearch-holder'>
          <div class='container'>
            <div class='row'>
              <div class='col-12 col-sm-12 col-md-12 col-lg-12'>
                <div class='dc-advancedsearchs'>
                  <form class='dc-formtheme dc-form-advancedsearchs'>
                    <fieldset>
                      <div class='form-group'>
                        <div class='dc-select'>
                          <select>
                            <option value='Availability'>Availability</option>
                            <option value='Availability'>morning</option>
                            <option value='Availability'>evening</option>
                            <option value='Availability'>night</option>
                          </select>
                        </div>
                      </div>
                      <div class='form-group'>
                        <div class='dc-select'>
                          <select>
                            <option value='Fee'>Consultation Fee</option>
                            <option value='Fee'>20 $</option>
                            <option value='Fee'>22 $</option>
                            <option value='Fee'>18 $</option>
                          </select>
                        </div>
                      </div>
                      <div class='form-group'>
                        <div class='dc-typeoptions'>
                          <span>Type:</span>
                          <div class='dc-select'>
                            <select>
                              <option value='Show'>Show All</option>
                              <option value='Show'>Neurosurgeon</option>
                              <option>Dermatologists</option>
                              <option>Gastroenterologists</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class='form-group'>
                        <span class='dc-checkbox'>
                          <input id='dc-show' type='checkbox' name='show' />
                          <label for='dc-show'>Show Nearest Only</label>
                        </span>
                      </div>
                      <div class='dc-btnarea'>
                        <a
                          href='javascript:void(0);'
                          class='dc-btn dc-resetbtn'
                        >
                          Reset Filters
                        </a>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='dc-breadcrumbarea'>
        <div class='container'>
          <div class='row'>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <ol class='dc-breadcrumb'>
                <li>
                  <a href='index.html'>Home</a>
                </li>
                <li>Login</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <main id='dc-main' class='dc-main dc-haslayout dc-innerbgcolor'>
        <div class='dc-haslayout dc-main-section'>
          <div class='container'>
            <div class='row justify-content-md-center'>
              <div class='col-xs-12 col-sm-12 col-md-12 col-lg-8 push-lg-2'>
                <div class='dc-registerformhold'>
                  <div class='dc-registerformmain'>
                    <div class='dc-registerhead'>
                      <div class='dc-title'>
                        <h3>Join For a Good Start</h3>
                      </div>
                      <div class='dc-description'>
                        <p>
                       
                        </p>
                      </div>
                    </div>
                    <div class='dc-joinforms'>
                      <ul class='dc-joinsteps'></ul>
                      <Form
                        class='dc-formtheme dc-formregister'
                        onSubmit={handleLogin}
                        ref={form}
                      >
                        <div class='form-group dc-form-group-dropdown form-group-half'>
                          <div className='form-group'>
                            <label htmlFor='login'>Login</label>
                            <Input
                              type='text'
                              className='form-control'
                              name='login'
                              value={login}
                              onChange={onChangeUsername}
                              validations={[required]}
                            />
                          </div>
                          <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <Input
                              type='password'
                              className='form-control'
                              name='password'
                              value={password}
                              onChange={onChangePassword}
                              validations={[required]}
                            />
                          </div>
                          <div className='form-group mb-3'>
                            <button
                              className='btn btn-primary btn-block'
                              disabled={loading}
                            >
                              {loading && (
                                <span className='spinner-border spinner-border-sm'></span>
                              )}
                              <span>Login</span>
                            </button>
                          </div>
                          {message && (
                            <div className='form-group mb-3'>
                              <div className='alert alert-danger' role='alert'>
                                {message}
                              </div>
                            </div>
                          )}
                          <CheckButton
                            style={{ display: 'none' }}
                            ref={checkBtn}
                          />
                        </div>
                      </Form>
                      <div class='dc-joinnowholder'></div>
                    </div>
                  </div>
                  <div class='dc-registerformfooter'>
                    <span>
                      Already Have an Account?{' '}
                      <a href='javascript:void(0);'>Login Now</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='container'>
          <div class='row'>
            <div class='col-12 col-sm-6 col-md-3 col-lg-3'>
              <div class='dc-widgetskills'>
                <div class='dc-fwidgettitle'>
                  <h3>By Speciality</h3>
                </div>
                <ul class='dc-fwidgetcontent'>
                  <li>
                    <a href='javascript:void(0);'>Allergy Specialist</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Andrologist</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Anesthetist</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Audiologist</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Dietitian/Nutritionist</a>
                  </li>
                  <li class='dc-viewmore'>
                    <a href='javascript:void(0);'>View All</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-12 col-sm-6 col-md-3 col-lg-3'>
              <div class='dc-widgetskill'>
                <div class='dc-fwidgettitle'>
                  <h3>Doctors In US</h3>
                </div>
                <ul class='dc-fwidgetcontent'>
                  <li>
                    <a href='javascript:void(0);'>Laproscopic Surgeon</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>
                      Oral And Maxillofacial Surgeon
                    </a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Orthopedic Surgeon</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Pediatric Cardiac Surgeon</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>
                      Pediatric Orthopedic Surgeon
                    </a>
                  </li>
                  <li class='dc-viewmore'>
                    <a href='javascript:void(0);'>View All</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-12 col-sm-6 col-md-3 col-lg-3'>
              <div class='dc-footercol dc-widgetcategories'>
                <div class='dc-fwidgettitle'>
                  <h3>By Categories</h3>
                </div>
                <ul class='dc-fwidgetcontent'>
                  <li>
                    <a href='javascript:void(0);'>Cosmetic Surgeon</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Eye Specialist</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Gastroenterologist</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>General Physician</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>General Practitioner</a>
                  </li>
                  <li class='dc-viewmore'>
                    <a href='javascript:void(0);'>View All</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-12 col-sm-6 col-md-3 col-lg-3'>
              <div class='dc-widgetbylocation'>
                <div class='dc-fwidgettitle'>
                  <h3>By Location</h3>
                </div>
                <ul class='dc-fwidgetcontent'>
                  <li>
                    <a href='javascript:void(0);'>Switzerland</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Canada</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Germany</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>United Kingdom</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>Japan</a>
                  </li>
                  <li class='dc-viewmore'>
                    <a href='javascript:void(0);'>View All</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Login
