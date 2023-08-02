import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
  const [profil, setProfil] = useState(4)
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
      dispatch(
        register(nom, prenom, tel, email, adresse, login, password, profil)
      )
        .then(() => {
          navigate('/')
        })
        .catch(() => {
          setSuccessful(false)
        })
    }
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
                <li>Registration</li>
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
                        <p></p>
                      </div>
                    </div>
                    <div class='dc-joinforms'>
                      <ul class='dc-joinsteps'></ul>
                      <Form
                        class='dc-formtheme dc-formregister'
                        onSubmit={handleRegister}
                        ref={form}
                      >
                        {!successful && (
                          <>
                            <fieldset class='dc-registerformgroup'>
                              <div class='form-group dc-form-group-dropdown form-group-half'>
                                <span class='dc-select'>
                                  <select>
                                    <option>mr.</option>
                                    <option>mrs</option>
                                  </select>
                                </span>
                                <Input
                                  value={nom}
                                  onChange={onChangeNom}
                                  type='text'
                                  name='nom'
                                  class='form-control'
                                  placeholder='First Name'
                                />
                              </div>
                              <div class='form-group form-group-half'>
                                <input
                                  value={prenom}
                                  onChange={onChangePrenom}
                                  type='text'
                                  name='prenom'
                                  class='form-control'
                                  placeholder='Last Name'
                                />
                              </div>

                              <div class='form-group'>
                                <Input
                                  value={tel}
                                  onChange={onChangeTel}
                                  type='text'
                                  name='tel'
                                  class='form-control'
                                  placeholder='téléphone'
                                />

                                <div class='form-group'>
                                  <Input
                                    type='text'
                                    name='Email'
                                    class='form-control'
                                    placeholder='Email'
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validEmail]}
                                  />
                                </div>
                              </div>
                              <div class='form-group'>
                                <Input
                                  onChange={onChangeAdresse}
                                  value={adresse}
                                  type='text'
                                  name='adresse'
                                  class='form-control'
                                  placeholder='adresse'
                                />
                              </div>
                              <div class='form-group'>
                                <Input
                                  value={login}
                                  onChange={onChangeLogin}
                                  validations={[required, vusername]}
                                  type='text'
                                  name='login'
                                  class='form-control'
                                  placeholder='User Name'
                                />
                              </div>
                              <div class='form-group'>
                                <input
                                  onChange={onChangePassword}
                                  validations={[required, vpassword]}
                                  type='password'
                                  name='password'
                                  class='form-control'
                                  placeholder='Password'
                                />
                              </div>
                              <div class='form-group'>
                                <button class='btn btn-primary'>
                                  Create Count
                                </button>
                              </div>
                            </fieldset>
                          </>
                        )}
                        {message && (
                          <div className='form-group'>
                            <div
                              className={
                                successful
                                  ? 'alert alert-success'
                                  : 'alert alert-danger'
                              }
                              role='alert'
                            >
                              {message}
                            </div>
                          </div>
                        )}
                        <CheckButton
                          style={{ display: 'none' }}
                          ref={checkBtn}
                        />
                      </Form>
                      <div class='dc-joinnowholder'>
                        {/* <div class='dc-title'>
                          <h4>Join Now With</h4>
                        </div>
                        <div class='dc-description'>
                          <p>
                            Use a social account for faster login or easy
                            registration to directly get in to your account and
                            start a good business
                          </p>
                        </div> */}
                        {/* <ul class='dc-socialicons dc-iconwithtext'>
                          <li class='dc-facebook'>
                            <a href='javascript:void(0);'>
                              <i class='fab fa-facebook-f'></i>
                              <em>Facebook</em>
                            </a>
                          </li>
                          <li class='dc-twitter'>
                            <a href='javascript:void(0);'>
                              <i class='fab fa-twitter'></i>
                              <em>Twitter</em>
                            </a>
                          </li>
                          <li class='dc-googleplus'>
                            <a href='javascript:void(0);'>
                              <i class='fab fa-google-plus-g'></i>
                              <em>Google</em>
                            </a>
                          </li>
                          <li class='dc-instagram'>
                            <a href='javascript:void(0);'>
                              <i class='fab fa-instagram'></i>
                              <em>Instagram</em>
                            </a>
                          </li>
                        </ul> */}
                      </div>
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
export default Register
